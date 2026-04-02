import { useEffect, useState } from 'react';
import { getPgFornecedores, getPgDepartamentos, getPgCategorias, getPgMarcas, importFromPg } from '../api';
import MultiSelectDropdown from './MultiSelectDropdown';

export default function UploadScreen({ onPgImport }) {
  // Dados
  const [fornecedores, setFornecedores] = useState([]);
  const [departamentos, setDepartamentos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [marcas, setMarcas] = useState([]);
  const [loadingFiltros, setLoadingFiltros] = useState(true);
  const [loadingCats, setLoadingCats] = useState(false);
  const [errFiltros, setErrFiltros] = useState(null);

  // Seleções
  const [forCodigos, setForCodigos] = useState([]);    // multi
  const [gruCodigo, setGruCodigo] = useState('');      // single (departamento)
  const [subCodigos, setSubCodigos] = useState([]);    // multi (categoria)
  const [marCodigos, setMarCodigos] = useState([]);    // multi (marca)
  const [dias, setDias] = useState(30);

  const [importing, setImporting] = useState(false);
  const [importError, setImportError] = useState(null);

  // Carrega fornecedores, departamentos e marcas
  useEffect(() => {
    Promise.all([getPgFornecedores(), getPgDepartamentos(), getPgMarcas()])
      .then(([forn, deps, marc]) => {
        setFornecedores(forn);
        setDepartamentos(deps);
        setMarcas(marc);
      })
      .catch((e) => setErrFiltros(e.message))
      .finally(() => setLoadingFiltros(false));
  }, []);

  // Carrega categorias quando departamento muda
  useEffect(() => {
    setSubCodigos([]);
    setCategorias([]);
    if (!gruCodigo) return;
    setLoadingCats(true);
    getPgCategorias(gruCodigo)
      .then(setCategorias)
      .catch(() => setCategorias([]))
      .finally(() => setLoadingCats(false));
  }, [gruCodigo]);

  const handleImportPg = async () => {
    setImportError(null);
    setImporting(true);
    try {
      const result = await importFromPg({
        for_codigos:  forCodigos.length > 0 ? forCodigos : null,
        gru_codigo:   gruCodigo || null,
        sub_codigos:  subCodigos.length > 0 ? subCodigos : null,
        mar_codigos:  marCodigos.length > 0 ? marCodigos : null,
        dias:         Number(dias),
      });
      onPgImport(result);
    } catch (e) {
      setImportError(e.message);
    } finally {
      setImporting(false);
    }
  };

  const algumFiltro = forCodigos.length > 0 || gruCodigo || subCodigos.length > 0 || marCodigos.length > 0;

  const fornOpts  = fornecedores.map(f => ({ value: String(f.codigo), label: f.nome }));
  const deptOpts  = departamentos.map(d => ({ value: String(d.codigo), label: d.descricao }));
  const catOpts   = categorias.map(c => ({ value: String(c.codigo), label: c.descricao }));
  const marcaOpts = marcas.map(m => ({ value: String(m.codigo), label: m.descricao }));

  return (
    <div className="upload-screen">
      <h1 className="upload-title">
        Sistema de<br /><em>Pedido de Compra</em>
      </h1>

      {/* ── Importar do Banco ──────────────────────────── */}
      <div className="pg-import-box">
        <h2 className="pg-import-title">Importar do Banco de Dados</h2>

        {loadingFiltros ? (
          <p className="pg-import-loading">Conectando ao banco…</p>
        ) : errFiltros ? (
          <p className="pg-import-error">Erro ao conectar: {errFiltros}</p>
        ) : (
          <>
            <div className="pg-filters">

              {/* Fornecedor — multi */}
              <div className="pg-filter-group">
                <label className="pg-filter-label">Fornecedor</label>
                <MultiSelectDropdown
                  options={fornOpts}
                  selected={forCodigos}
                  onChange={setForCodigos}
                  placeholder="Todos os fornecedores"
                />
              </div>

              {/* Departamento — single select nativo */}
              <div className="pg-filter-group">
                <label className="pg-filter-label">Departamento</label>
                <select
                  className="pg-select"
                  value={gruCodigo}
                  onChange={(e) => setGruCodigo(e.target.value)}
                >
                  <option value="">Todos</option>
                  {deptOpts.map(d => (
                    <option key={d.value} value={d.value}>{d.label}</option>
                  ))}
                </select>
              </div>

              {/* Categoria (sub_grupo) — multi, depende do departamento */}
              <div className="pg-filter-group">
                <label className="pg-filter-label">
                  Categoria
                  {loadingCats && <span className="pg-filter-loading"> …</span>}
                </label>
                <MultiSelectDropdown
                  options={catOpts}
                  selected={subCodigos}
                  onChange={setSubCodigos}
                  placeholder={gruCodigo ? 'Todas as categorias' : 'Selecione um departamento'}
                  disabled={!gruCodigo || loadingCats}
                />
              </div>

              {/* Marca — multi */}
              <div className="pg-filter-group">
                <label className="pg-filter-label">Marca</label>
                <MultiSelectDropdown
                  options={marcaOpts}
                  selected={marCodigos}
                  onChange={setMarCodigos}
                  placeholder="Todas as marcas"
                />
              </div>

              {/* Dias de vendas */}
              <div className="pg-filter-group">
                <label className="pg-filter-label">Dias de vendas</label>
                <input
                  className="pg-input-number"
                  type="number"
                  min={1}
                  max={365}
                  value={dias}
                  onChange={(e) => setDias(e.target.value)}
                />
              </div>

            </div>

            {importError && <p className="pg-import-error">{importError}</p>}

            <button
              className="pg-import-btn"
              onClick={handleImportPg}
              disabled={importing}
            >
              {importing
                ? 'Importando…'
                : algumFiltro
                  ? 'Importar com Filtros'
                  : 'Importar Todos os Produtos'}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
