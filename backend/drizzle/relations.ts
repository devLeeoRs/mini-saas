import { relations } from "drizzle-orm/relations";
import { selectsReplicas, ultimaSincronizacaoBases, conhecimentoFrete, conhecimentoFatura, prospeccaoEtapas, metaProspeccao, funil, planoContas, engEstimativaCustos, engContrato, menus, menusFavoritos, usuario, prospeccaoItens, motivoPerdaProspeccao, prospeccao, tipoApontamentoProspeccao, vendas, devolucaoCliente, produto, variedadeProduto, entregaLote, dadosPagamentosExternos, retornoPagamentosExternos, servicosFrete, tabelaPrecoItens, tabelaPreco, contas, parametroBoleto, carteiraBanco, empresa, tipoPagamento, integracoesYzidro, componenteCte, itensCompCte, cte, clientes, precoDiferenciado, campanha, campanhaMensagem, lote, loteReserva, regrasFedIntelFiscal, centrocusto, balanca, fornecedor, nfs, cfe, cfeVenda, manutencao, itensManutencao, metasItens, metasGrupos, representantes, unidadesAlternativas, vendedor, estado, tipoFiscalRegra, tipoFiscal, extratoBancario, caixa, regrasConciliacaoAutomatica, representado, eventoFolha, eventoHolerite, folhaPgto, holerite, contasPagar, carregamento, cargaEstoqueOutroLocal, estoqueLocais, manutencaoEstoque, disparosProgramados, disparosProgramadosAgenda, agenda, funcionario, log, inventarioEstoqueContagem, assinaturas, contatoAssinaturas, contatos, requisicaoAtualizaEstoque, engAndamento, engItensFaturar, cidade, comissionamento, grupoCliente, grupos, marca, condicaoPagto, regiao, cores, itensMaqVeicAndamento, maqVeic, producao, debAutRetornoCabecalho, debAutRetornoRegB, tempAndamentoEstoque, itensPedidoVendas, pedidoVendas, nota, processosAtoConcessorios, entradaMercadoria, entradaMercadoriaItens, padraoEtiquetaPeso, engArquivos, atualizaBd, atualizaBdReplicas, basesReplicadas, estoqueLocaisRepresentante, itensPagamentosExternos, boletoJanelaUso, honorarios, honorariosHistoricoValor, armazenagem, itensNfs, itensServico, logAuxiliarCarregamento, regraApuracaoCredito, vendasCreditosApurados, ecf, serie, tipoOperacao, notaProdutorRef, desmembramento, desmembramentoConsumos, comandas, configGrupoComplementoIfood, spedf0000, spedf0300, boleto, modelosWhatsapp, cteObsContribuinte, menusVisoesCampos, menusVisoesCamposValoresFormatacoes, menusVisoesOperacoes, menusVisoes, excecaoTabelaPreco, menusVisoesCamposValoresItens, recursosCarga, recursos, cliMarcaGrupoSub, manutencaoGerador, itensManutencaoGer, itensEcf, precoVendaXPdvOffline, terminalCaixa, compra, fciDec, justificativaValorSistema, tabPrecoItensXPdvOffline, retTributacaoFiscal, classificacaoFiscal, abatimento, grupo, camposCaracteristicaLote, veiculosCte, estadoProducao, andamentoProcucao, emprestimo, itensEmprestimoRet, spedf0220, bairroCliente, marketplace, transportadora, historicoAlteracoes, alteracoesTerminal, saldoBanco, historicoAcessoTribFiscal, factoring, contasReceber, pagamentoCfe, sat, engEtapas, cstCte, classificacaoFiscalCte, nfMensagem, natOperacao, inventariosEstoque, inventariosEstoqueContadores, produtoProcessoFabricacao, permissoesConcedidasLogsAcesso, menuPermissao, precoDiferenciadoRep, departamento, inventariosEstoqueStatus, inventariosEstoqueTipos, setor, subGrupo, credenciadoraMeiosPgto, padraoArqRectoCred, estadoPedido, vendasHistoricoStatus, spedf0015, loteCompraAuxiliar, motivoBloqueio, aditamentoGerador, itensOperadorGer, locacaoGerador, etiqueta, pabxRamais, embalagem, notaEnt, itensNotaEnt, legenda, andProducao, embalagensInventario, embalagens, notaVenda, bancoLogin, parametrosSincronizacaoOld, contaCorrente, cargo, deficiencia, estadoCivil, sindicato, promocoesGrupo, promocoes, solicitacaoCompra, layoutVariaveis, layoutVariaveisFields, layoutVariaveisTabela, codigoRelacionado, parametroCfe, spedf0460, envioWhatsapp, romaneioOp, extratoOfxFechado, itensComposicaoProducao, representacao, spedf0500, agrupamentoBancario, tipoServicos, despesasManutencaoGer, projetoEtapaModelo, projetoModeloEtapas, projetoModelo, itensProducao, cadastroCarteirinha, orcamento, itensServicoOrc, itensExpedidosVsDevolvidos, vendasAjustes, drawback, engServicosFaturar, menusVisoesCamposLinhasItens, pabxCdr, historicoOcorrenciaCrm, projetoApontamentos, adicionais, itensCarretoCte, funcao, itensCarretoMdfe, mdfe, unidade, fciCop, itensVendaCreditosApurados, itensVenda, imagens, engAditivo, logos, whatsappProtocolos, projetoStatus, projetoTipo, categoriasComplementosIfood, tabelaPrecoXPdvOffline, pesagemCarregamento, veiculos, clientesAlteracoes, produtosIfood, mdfUfPercurso, spedfK200, itensNota, entregaItens, funcionarioOperadorWhats, permissao, ocorrenciasCrm, statusOcorrenciaCrm, tipoApontamentoOcorrencia, projetoEtapa, projetos, vendaEcf, mdfValePedagio, produtoXCliente, hisProduto, itensCarregamento, parametroBoletoCelulares, desmembramentoItens, estoqueEmpresaSaldoLote, itensImportacao, regrasValidacaoPedido, spedf0200, pedidosReembarcados, despMarkup, markUpConteudo, markUp, rtcResumoClassificacaoFiscal, itensVendaLimitePromocao, itensLacPagar, pedido, contrato, cotacaoCompra, motivoDivergencia, historicoRaioX, movimentoCheque, chequePre, baixaLote, mudancasProgramadas, numClassificacao, eventoCte, generoMateriaPrima, composicaoGenero, armzFatExp, aluguel, carteiraCobranca, contratoEncerramento, baixaCreceber, imobilizado, moeda, notaDebito, retornoAluguel, recalculoParcelas, creditoCreceber, relatorioDinamico, relatorioDinamicoExibicao, espacoAgendamento, espacoReserva, catalogoReferencia, impressoraNaoFiscal, bairro, etiquetaProduto, etiquetaModelo, padraoRetornoBoletoPlanilha, cteDocAnteriores, layouts, layoutsLayoutSqls, bancos, agencia, promocoesProdutos, dependente, dtSelectReplicaCliente, dtSelectsReplicas, ultimaSincronizacaoTrackcash, operacaoEstoque, opItensConsumidos, opItensProduzidos, perguntas, perguntasUsuarios, interacoesAtendimentos, fciNotas, causaCrm, motivoCrm, solucaoCrm, cteObsFisco, balancaFatura, spedf0450, itensRetornoAluguel, itensAluguel, itensRegraApuracaoCredito, itensTransMercadoria, transMercadoria, curso, itensCurso, integracaoSelloutDistribuicao, marcasSelloutDistribuicao, regrasEstIntelFiscal, terminaisSmartPos, cartao, fciMpc, notaContato, compraFrigorifico, itensCompraFrigorifico, catalogosIfood, catalogosProdutosIfood, medico, examemedico, cargaHoraria, turno, fciUmc, spedf0005, estoqueEmpresaFechamento, eventoMdfe, etiquetasCustomizadas, produtoControleQualidade, maquina1, creditoGeradoRegraApuracao, conferenciaFinanceiraCargas, itensRepresentacao, replicarAlteracoesTerminal, openFinanceRegras, cobCfProceda, rtcCabecalho, rtcItens, itensCompra, faturaNotaDebito, veiculosMdfe, cteDestinado, custodiaCheque, motivosEstornoCheque, despesas, vendasExcluidasScanntech, motoristaCte, motorista, duplicatas, bloqueioTelas, laudoArmazenagem, solicitaPermissaoEspecial, solicitadosPermissaoEspecial, tokenIntegracoes, projetoEtapaEspecificacoes, itensGrupoExportacao, itensEmprestimo, estoqueLocaisSaldoLote, liberacaoSaldo, versaoProjetos, versao, usuariosEmpresa, layoutSqls, naturezaReceita, produtoCstNaturezaReceita, documentosMdfe, municipioMdfe, cartaoEmpresa, yzidroClassificacaoIntegracoes, yzidroTipoIntegracoes, cnae, layoutVariaveisDesign, aniversariante, arquivosProspeccaoItens, boletoRetorno, boletoRetornoArq, etiquetaGondola, fornecedorXmlConversao, fciOps, baixaCpagar, enderecos, gradeTamanho, sabor, talhao, cteNotasFiscais, extratoOfxAberto, parcelasPagamentosMdfe, yzidroWebStorage, aplicativos, contatosAplicativos, alerta, feriasNotificacoes, ferias, viagem, transfereciaContas, controleNumeracaoProducao, compraMadeira, itensCompraMadeira, controladoria, dreVisaoPlanos, dreVisao, menusVisoesCamposValoresEstilos, metodologia, projetosMacro, historicoLog, mesas, representantesPreposto, retiradoPor, tipoPagamentoWeb, motivoRecusaOrcamento, parametro, rtcCodigosCclasstrib, rtcClassificacaoFiscal, folhaLancamento, antecipacaoRecebiveis, engItensAndamento, nfsFatura, balancas, spedfK100, ordemServico, produtosSimilares, registrosAnalisadosRaioX, rtcAgrupadorFiscal, itensOrdemServico, alteracoesDfeSincOff, permissaoLembrete, inventariosEstoqueResumoLotes, spedf0206, yzidroWebMetasVendas, lancamentoVeiculo, spedf0150, tipoPagamentoXTabelaPreco, fciCic, examemedicocliente, autXmlDfe, funcOrdemServico, itensBoleto, terminalComputador, parametroNfs, clienteXEmpresa, notaManutencao, veiculoReboque, grupoVeiculo, itensFreteGer, servicosSelecionadosPagamentosExternos, itensEmbalagens, engAditivoCustos, requisicaoConsumoOp, itensCfe, talhaoAno, historicoAcessoDetalhesTribFiscal, variacoesProduto, correcaoEstoque, motivoMudancaPrevisaoProjeto, historicoPrevisaoProjeto, logAuxiliarVenda, padraoArqRectoEmbalagens, embalagemLote, composicaoProduto, vendaMarketplace, marketplaceTrackcash, pagamentosMdfe, inventariosEstoqueResumoProdutos, honorarioLancados, numeracaoDfe, itensManutencaoEstoque, almoxarifado, itensAlmoxarifado, catracaLog, catraca, agrupamentoBaixas, arqRectoCredItens, arqRectoCred, spedf0100, produtosSelloutDistribuicao, itensViagem, entradaMercadoriaCaixas, importOpVenda, checkList, itensChecklistGer, etiqEmbalagemLote, tipoEmpresarial, movimentacaoVolumes, andamentoEstoque, acomEstoqueOld, servicosDescontinuada, histAndProduto, pagamentoNfe, remessaBoleto, movimentoCaixa, correcaoMovimentoCaixa, receitaOptica, gerador, itensChecklistMan, motoristaMdfe, antecipacaoRecebiveisParcelas, andamentoProcucaoConfeccao, pedidoConfeccao, categoriasIfood, vendaMarketplaceDespesas, configuracaoVendaMarketplace, itensMaqVeic, parametroUsuarioBackup, movimentoFinanceiro, transferenciaArmazenagem, itensRomaneioOpCor, itensRomaneioOp, spedfK280, conferenciaRetorno, regraBloqueioClientePorRep, crRecalculo, tiposRomaneio, cuponsIfood, itensGerador, regimeTrabalho, autorizaXml, serieXTetoFaturamentoMobile, promocao, bandeiras, cartaoTaxa, certificado, debAutRetornoRegF, debAutTitulos, cargaCte, engFaturaEtapas, cfop, cst, tipoProduto, agrupadorFiscal, grupoCarregamento, gruposCaracteristicaLote, eventoFuncionario, engFaturaAndamento, spedf0175, spedf0305, itensMateriaisGer, notaFatura, recalculoCmItens, recalculoCm, spedf0600, rtcAliqCbsIbs, estoqueLocaisSaldo, estoqueEmpresaSaldo, componentesPagamentosMdfe, rtcCte, pagamentosVenda, webserviceNfs, permissoesUsuario, parametroUsuarioOrc, projetoPrincipal, produtoXEmpresa, remessaBoletoItens, nfeDestinada, emailOld, fechaCaixa, tipoDocumento, engItensMateriais, baixaCredito, itensOrc, nivel, entradaMercadoriaReativadas, itensSubProducao, exameMedico, tipoExameMedico, residuo, etiquetaObjetos, itensPedidoCotacao, itensCotacaoCompra, pedidoCotacao, itensSolicitacaoCompra, ultimaConsultaFrancesinha, disparosProgramadosWhatsapp, rtcCstIbsCbs, rtcCreditosPresumidos, itensPedidoConfeccao, codPais, grupoEconomico, primeiroContato, situacaoCliente, segmentoCliente, motivoAjustePedido, notaEcfRef, seguroMdfe, excecaoNcm, icms, motivoIcms, rastro, yzidroServicos, yzidroServicosThreads, engServicosAndamento, itensPedido, visaoRelatorio, planoContasRfb, statusEntregaMl, substatusEntregaMl, compraDupXml, anpCombustiveis, vendasKitEcommerce, npsHistorico, motivoNps, faturaLocGer, dependentesClientes, cce, inventariosEstoqueLeituras, fornecedorPagamento, promocoesGrupoXEmpresa, notaFiscalRef, credenciadoraCartao, modeloImpNaoFiscal, parametroMdfe, pollingIfood, disparosProgramadosCampos, itensAdicionais, programacaoResgate, menuBi, visaoBi, permissaoEspecialEscala, itensVendaCorte, planoFaturamento, spedf0400, interesse, prospeccaoHistorico, prospeccaoMotivo, estoqueLocalFechamento, rotinasWhatsapp, tipoPedidoDemander, filiacao, parametroCte, historicoInteligenciaFiscal, devolucoesVenda, representanteBloqueioProduto, spedf0210, produtosDevolvidosTribFiscal, consolidacaoEmissaoPix, campanhaDisparo, itensCorProducao, verbasFornecedores, retRegrasTributacaoFiscal, fci, parametroUsuario, contratoItens, relatorioDinamicoUsuarios, honorariosArquivos, whatsappProtocolosFuncionario, statusPedidoWeb, atualizaPedidoWeb, dtSelectReplicaIndices, retornosNfe, ocorrenciasMenus, itensPedidoConfeccaoMat, tipoContrato, logsat, tabelaGerador, contratoOutrasDespesas, registrosExcluidos, cotacoes, itensLoteMedicamento, etiquetaRolo, projetosDisponibilidadeCliente, whatsappProtocolosArquivos, remessaRetornoNfe, projetoTipoUsuario, dadosIndivPagamentosExternos, pedidosGeradosAutomaticamento, configuracaoAuxiliar, fornecedorXml, colunasVisaoRelatorio, modulo, spedf0205, fornecedorCotacaoCompra, ytbEmpresa, ytb, carregamentoProntaEntrega, spedf0190, mdfCiot, retornoClassificacoesIntFiscal, seguroCte, permissaoBi } from "./schema";

export const ultimaSincronizacaoBasesRelations = relations(ultimaSincronizacaoBases, ({one}) => ({
	selectsReplica: one(selectsReplicas, {
		fields: [ultimaSincronizacaoBases.srCodigo],
		references: [selectsReplicas.srCodigo]
	}),
}));

export const selectsReplicasRelations = relations(selectsReplicas, ({many}) => ({
	ultimaSincronizacaoBases: many(ultimaSincronizacaoBases),
}));

export const conhecimentoFaturaRelations = relations(conhecimentoFatura, ({one}) => ({
	conhecimentoFrete: one(conhecimentoFrete, {
		fields: [conhecimentoFatura.cfCodigo],
		references: [conhecimentoFrete.cfCodigo]
	}),
}));

export const conhecimentoFreteRelations = relations(conhecimentoFrete, ({one, many}) => ({
	conhecimentoFaturas: many(conhecimentoFatura),
	cliente_cfConsignatario: one(clientes, {
		fields: [conhecimentoFrete.cfConsignatario],
		references: [clientes.cliCodigo],
		relationName: "conhecimentoFrete_cfConsignatario_clientes_cliCodigo"
	}),
	cliente_cfDestinatario: one(clientes, {
		fields: [conhecimentoFrete.cfDestinatario],
		references: [clientes.cliCodigo],
		relationName: "conhecimentoFrete_cfDestinatario_clientes_cliCodigo"
	}),
	cliente_cfRedespacho: one(clientes, {
		fields: [conhecimentoFrete.cfRedespacho],
		references: [clientes.cliCodigo],
		relationName: "conhecimentoFrete_cfRedespacho_clientes_cliCodigo"
	}),
	cliente_cfRemetente: one(clientes, {
		fields: [conhecimentoFrete.cfRemetente],
		references: [clientes.cliCodigo],
		relationName: "conhecimentoFrete_cfRemetente_clientes_cliCodigo"
	}),
	cobCfProceda: one(cobCfProceda, {
		fields: [conhecimentoFrete.cobCodigo],
		references: [cobCfProceda.cobCodigo]
	}),
	empresa: one(empresa, {
		fields: [conhecimentoFrete.empCodigo],
		references: [empresa.empCodigo]
	}),
	motorista: one(motorista, {
		fields: [conhecimentoFrete.motCodigo],
		references: [motorista.motCodigo]
	}),
	maqVeic: one(maqVeic, {
		fields: [conhecimentoFrete.mvCodigo],
		references: [maqVeic.mvCodigo]
	}),
	natOperacao: one(natOperacao, {
		fields: [conhecimentoFrete.noCodigo],
		references: [natOperacao.noCodigo]
	}),
	tipoOperacao: one(tipoOperacao, {
		fields: [conhecimentoFrete.toCodigo],
		references: [tipoOperacao.toCodigo]
	}),
	transportadora: one(transportadora, {
		fields: [conhecimentoFrete.trCodigo],
		references: [transportadora.trCodigo]
	}),
	venda: one(vendas, {
		fields: [conhecimentoFrete.venCodPedido],
		references: [vendas.venCodPedido]
	}),
}));

export const metaProspeccaoRelations = relations(metaProspeccao, ({one}) => ({
	prospeccaoEtapa: one(prospeccaoEtapas, {
		fields: [metaProspeccao.eppCodigo],
		references: [prospeccaoEtapas.eppCodigo]
	}),
	funil: one(funil, {
		fields: [metaProspeccao.funCodigo],
		references: [funil.funCodigo]
	}),
}));

export const prospeccaoEtapasRelations = relations(prospeccaoEtapas, ({one, many}) => ({
	metaProspeccaos: many(metaProspeccao),
	prospeccaoItens: many(prospeccaoItens),
	funil: one(funil, {
		fields: [prospeccaoEtapas.funCodigo],
		references: [funil.funCodigo]
	}),
	prospeccaos: many(prospeccao),
}));

export const funilRelations = relations(funil, ({many}) => ({
	metaProspeccaos: many(metaProspeccao),
	prospeccaoItens: many(prospeccaoItens),
	prospeccaoEtapas: many(prospeccaoEtapas),
	prospeccaos: many(prospeccao),
}));

export const engEstimativaCustosRelations = relations(engEstimativaCustos, ({one}) => ({
	planoConta: one(planoContas, {
		fields: [engEstimativaCustos.coCodigo],
		references: [planoContas.coCodigo]
	}),
	engContrato: one(engContrato, {
		fields: [engEstimativaCustos.engCodigo],
		references: [engContrato.engCodigo]
	}),
}));

export const planoContasRelations = relations(planoContas, ({one, many}) => ({
	engEstimativaCustos: many(engEstimativaCustos),
	balancas: many(balanca),
	engContratoes: many(engContrato),
	honorarios: many(honorarios),
	representacaos: many(representacao),
	regraApuracaoCreditos: many(regraApuracaoCredito),
	pedidos: many(pedido),
	contasRecebers: many(contasReceber),
	operacaoEstoques: many(operacaoEstoque),
	ocorrenciasCrms: many(ocorrenciasCrm),
	ctes: many(cte),
	despesas: many(despesas),
	produtoCstNaturezaReceitas: many(produtoCstNaturezaReceita),
	caixas: many(caixa),
	producaos_coComissaoCompra: many(producao, {
		relationName: "producao_coComissaoCompra_planoContas_coCodigo"
	}),
	producaos_coComissaoCompra: many(producao, {
		relationName: "producao_coComissaoCompra_planoContas_coCodigo"
	}),
	producaos_coComissaoVenda: many(producao, {
		relationName: "producao_coComissaoVenda_planoContas_coCodigo"
	}),
	producaos_coComissaoVenda: many(producao, {
		relationName: "producao_coComissaoVenda_planoContas_coCodigo"
	}),
	producaos_coDespesa: many(producao, {
		relationName: "producao_coDespesa_planoContas_coCodigo"
	}),
	producaos_coDespesa: many(producao, {
		relationName: "producao_coDespesa_planoContas_coCodigo"
	}),
	producaos_coFrete: many(producao, {
		relationName: "producao_coFrete_planoContas_coCodigo"
	}),
	producaos_coFrete: many(producao, {
		relationName: "producao_coFrete_planoContas_coCodigo"
	}),
	controladorias: many(controladoria),
	dreVisaoPlanos: many(dreVisaoPlanos),
	vendas_coCodigo: many(vendas, {
		relationName: "vendas_coCodigo_planoContas_coCodigo"
	}),
	vendas_coFrete: many(vendas, {
		relationName: "vendas_coFrete_planoContas_coCodigo"
	}),
	parametros_ativo: many(parametro, {
		relationName: "parametro_ativo_planoContas_coCodigo"
	}),
	parametros_passivo: many(parametro, {
		relationName: "parametro_passivo_planoContas_coCodigo"
	}),
	parametros_planoContasAluguel: many(parametro, {
		relationName: "parametro_planoContasAluguel_planoContas_coCodigo"
	}),
	parametros_planoContasFgts: many(parametro, {
		relationName: "parametro_planoContasFgts_planoContas_coCodigo"
	}),
	aluguels: many(aluguel),
	lancamentoVeiculos: many(lancamentoVeiculo),
	baixaCrecebers: many(baixaCreceber),
	engAditivoCustos: many(engAditivoCustos),
	notaDebitos: many(notaDebito),
	itensViagems: many(itensViagem),
	manutencaos: many(manutencao),
	manutencaoGeradors: many(manutencaoGerador),
	regrasConciliacaoAutomaticas: many(regrasConciliacaoAutomatica),
	movimentoFinanceiros: many(movimentoFinanceiro),
	cartaos: many(cartao),
	imobilizados_coCodigoA: many(imobilizado, {
		relationName: "imobilizado_coCodigoA_planoContas_coCodigo"
	}),
	imobilizados_coCodigoP: many(imobilizado, {
		relationName: "imobilizado_coCodigoP_planoContas_coCodigo"
	}),
	contas_coCodigo: many(contas, {
		relationName: "contas_coCodigo_planoContas_coCodigo"
	}),
	contas_coCodigoTarifaPixBalcao: many(contas, {
		relationName: "contas_coCodigoTarifaPixBalcao_planoContas_coCodigo"
	}),
	contas_coCodigoTarifaPixCobranca: many(contas, {
		relationName: "contas_coCodigoTarifaPixCobranca_planoContas_coCodigo"
	}),
	produtos_coCodigoFatArmazenagemOld: many(produto, {
		relationName: "produto_coCodigoFatArmazenagemOld_planoContas_coCodigo"
	}),
	produtos_coCodigoOld: many(produto, {
		relationName: "produto_coCodigoOld_planoContas_coCodigo"
	}),
	contratoEncerramentos: many(contratoEncerramento),
	estoqueEmpresaSaldos_coCodigoFatArmazenagem: many(estoqueEmpresaSaldo, {
		relationName: "estoqueEmpresaSaldo_coCodigoFatArmazenagem_planoContas_coCodigo"
	}),
	estoqueEmpresaSaldos_coCodigo: many(estoqueEmpresaSaldo, {
		relationName: "estoqueEmpresaSaldo_coCodigo_planoContas_coCodigo"
	}),
	naturezaReceitas_coCodigoCofins: many(naturezaReceita, {
		relationName: "naturezaReceita_coCodigoCofins_planoContas_coCodigo"
	}),
	naturezaReceitas_coCodigoPis: many(naturezaReceita, {
		relationName: "naturezaReceita_coCodigoPis_planoContas_coCodigo"
	}),
	compras: many(compra),
	creditoCrecebers: many(creditoCreceber),
	baixaCpagars: many(baixaCpagar),
	retornoAluguels: many(retornoAluguel),
	empresa: one(empresa, {
		fields: [planoContas.empCodigo],
		references: [empresa.empCodigo]
	}),
	planoContasRfb: one(planoContasRfb, {
		fields: [planoContas.rfbCodigo],
		references: [planoContasRfb.rfbCodigo]
	}),
	credenciadoraMeiosPgtos: many(credenciadoraMeiosPgto),
	planoFaturamentos_coCodigo: many(planoFaturamento, {
		relationName: "planoFaturamento_coCodigo_planoContas_coCodigo"
	}),
	planoFaturamentos_coCodigo: many(planoFaturamento, {
		relationName: "planoFaturamento_coCodigo_planoContas_coCodigo"
	}),
	armazenagems: many(armazenagem),
	configuracaoVendaMarketplaces: many(configuracaoVendaMarketplace),
	solucaoCrms: many(solucaoCrm),
	contratoes: many(contrato),
	contratoOutrasDespesas: many(contratoOutrasDespesas),
	contasPagars: many(contasPagar),
	recalculoParcelas: many(recalculoParcelas),
}));

export const engContratoRelations = relations(engContrato, ({one, many}) => ({
	engEstimativaCustos: many(engEstimativaCustos),
	engArquivos: many(engArquivos),
	centrocusto: one(centrocusto, {
		fields: [engContrato.ccCodigo],
		references: [centrocusto.ccCodigo]
	}),
	cliente: one(clientes, {
		fields: [engContrato.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	planoConta: one(planoContas, {
		fields: [engContrato.codCusto],
		references: [planoContas.coCodigo]
	}),
	funcionario: one(funcionario, {
		fields: [engContrato.fuCodigo],
		references: [funcionario.fuCodigo]
	}),
	condicaoPagto: one(condicaoPagto, {
		fields: [engContrato.parCpCodigo],
		references: [condicaoPagto.parCpCodigo]
	}),
	engEtapas: many(engEtapas),
	engAditivos: many(engAditivo),
	contasRecebers: many(contasReceber),
	engAditivoCustos: many(engAditivoCustos),
	engItensMateriais: many(engItensMateriais),
}));

export const menusFavoritosRelations = relations(menusFavoritos, ({one}) => ({
	menu: one(menus, {
		fields: [menusFavoritos.menCodigo],
		references: [menus.menCodigo]
	}),
	usuario: one(usuario, {
		fields: [menusFavoritos.usuCodigo],
		references: [usuario.usuCodigo]
	}),
}));

export const menusRelations = relations(menus, ({one, many}) => ({
	menusFavoritos: many(menusFavoritos),
	permissaos: many(permissao),
	nivels: many(nivel),
	modulo_moCodigo: one(modulo, {
		fields: [menus.moCodigo],
		references: [modulo.moCodigo],
		relationName: "menus_moCodigo_modulo_moCodigo"
	}),
	modulo_moCodigo: one(modulo, {
		fields: [menus.moCodigo],
		references: [modulo.moCodigo],
		relationName: "menus_moCodigo_modulo_moCodigo"
	}),
	menusVisoes: many(menusVisoes),
}));

export const usuarioRelations = relations(usuario, ({one, many}) => ({
	menusFavoritos: many(menusFavoritos),
	prospeccaoItens: many(prospeccaoItens),
	balancas_usuCodigoPrim: many(balanca, {
		relationName: "balanca_usuCodigoPrim_usuario_usuCodigo"
	}),
	balancas_usuCodigoSeg: many(balanca, {
		relationName: "balanca_usuCodigoSeg_usuario_usuCodigo"
	}),
	inventarioEstoqueContagems: many(inventarioEstoqueContagem),
	honorariosHistoricoValors: many(honorariosHistoricoValor),
	inventariosEstoqueContadores: many(inventariosEstoqueContadores),
	permissoesConcedidasLogsAcessos: many(permissoesConcedidasLogsAcesso),
	vendasHistoricoStatuses: many(vendasHistoricoStatus),
	itensExpedidosVsDevolvidos: many(itensExpedidosVsDevolvidos),
	contatos: many(contatos),
	pesagemCarregamentos_usuCodigoPrim: many(pesagemCarregamento, {
		relationName: "pesagemCarregamento_usuCodigoPrim_usuario_usuCodigo"
	}),
	pesagemCarregamentos_usuCodigoSeg: many(pesagemCarregamento, {
		relationName: "pesagemCarregamento_usuCodigoSeg_usuario_usuCodigo"
	}),
	permissaos: many(permissao),
	pedidosReembarcados: many(pedidosReembarcados),
	rtcResumoClassificacaoFiscals: many(rtcResumoClassificacaoFiscal),
	representantes: many(representantes),
	perguntasUsuarios: many(perguntasUsuarios),
	ocorrenciasCrms: many(ocorrenciasCrm),
	armzFatExps: many(armzFatExp),
	creditoGeradoRegraApuracaos: many(creditoGeradoRegraApuracao),
	logs: many(log),
	itensEmprestimos: many(itensEmprestimo),
	usuariosEmpresas: many(usuariosEmpresa),
	viagems: many(viagem),
	projetos_usuCodigoComissaoPreVend: many(projetos, {
		relationName: "projetos_usuCodigoComissaoPreVend_usuario_usuCodigo"
	}),
	projetos_usuCodigoComissaoResp: many(projetos, {
		relationName: "projetos_usuCodigoComissaoResp_usuario_usuCodigo"
	}),
	projetos_usuCodigoComissaoVendedor: many(projetos, {
		relationName: "projetos_usuCodigoComissaoVendedor_usuario_usuCodigo"
	}),
	vendas_usuCodigo: many(vendas, {
		relationName: "vendas_usuCodigo_usuario_usuCodigo"
	}),
	vendas_venUsuAprovouOrc: many(vendas, {
		relationName: "vendas_venUsuAprovouOrc_usuario_usuCodigo"
	}),
	vendas_venUsuRecusouOrc: many(vendas, {
		relationName: "vendas_venUsuRecusouOrc_usuario_usuCodigo"
	}),
	parametros: many(parametro),
	permissaoLembretes_usuCodigo: many(permissaoLembrete, {
		relationName: "permissaoLembrete_usuCodigo_usuario_usuCodigo"
	}),
	permissaoLembretes_usuCodigo: many(permissaoLembrete, {
		relationName: "permissaoLembrete_usuCodigo_usuario_usuCodigo"
	}),
	correcaoEstoques: many(correcaoEstoque),
	historicoPrevisaoProjetos: many(historicoPrevisaoProjeto),
	entradaMercadorias: many(entradaMercadoria),
	debAutRetornoCabecalhos: many(debAutRetornoCabecalho),
	catracaLogs: many(catracaLog),
	entradaMercadoriaCaixas: many(entradaMercadoriaCaixas),
	movimentacaoVolumes: many(movimentacaoVolumes),
	correcaoMovimentoCaixas: many(correcaoMovimentoCaixa),
	almoxarifados: many(almoxarifado),
	parametroUsuarioBackups: many(parametroUsuarioBackup),
	projetoEtapaEspecificacoes: many(projetoEtapaEspecificacoes),
	permissoesUsuarios_usuCodigo: many(permissoesUsuario, {
		relationName: "permissoesUsuario_usuCodigo_usuario_usuCodigo"
	}),
	permissoesUsuarios_usuCodigo: many(permissoesUsuario, {
		relationName: "permissoesUsuario_usuCodigo_usuario_usuCodigo"
	}),
	parametroUsuarioOrcs: many(parametroUsuarioOrc),
	manutencaoEstoques: many(manutencaoEstoque),
	fechaCaixas_fxRespAbertura: many(fechaCaixa, {
		relationName: "fechaCaixa_fxRespAbertura_usuario_usuCodigo"
	}),
	fechaCaixas_fxRespFechamento: many(fechaCaixa, {
		relationName: "fechaCaixa_fxRespFechamento_usuario_usuCodigo"
	}),
	fechaCaixas_usuCodigoConferencia: many(fechaCaixa, {
		relationName: "fechaCaixa_usuCodigoConferencia_usuario_usuCodigo"
	}),
	creditoCrecebers: many(creditoCreceber),
	transferenciaArmazenagems: many(transferenciaArmazenagem),
	entradaMercadoriaReativadas: many(entradaMercadoriaReativadas),
	itensCotacaoCompras: many(itensCotacaoCompra),
	itensSolicitacaoCompras_iscUsuarioAutorizacao: many(itensSolicitacaoCompra, {
		relationName: "itensSolicitacaoCompra_iscUsuarioAutorizacao_usuario_usuCodigo"
	}),
	itensSolicitacaoCompras_iscUsuarioInsercao: many(itensSolicitacaoCompra, {
		relationName: "itensSolicitacaoCompra_iscUsuarioInsercao_usuario_usuCodigo"
	}),
	orcamentos: many(orcamento),
	vendasAjustes_usuCodigo: many(vendasAjustes, {
		relationName: "vendasAjustes_usuCodigo_usuario_usuCodigo"
	}),
	vendasAjustes_usuCodigoAprovacao: many(vendasAjustes, {
		relationName: "vendasAjustes_usuCodigoAprovacao_usuario_usuCodigo"
	}),
	arqRectoCreds: many(arqRectoCred),
	npsHistoricos: many(npsHistorico),
	inventariosEstoqueLeituras: many(inventariosEstoqueLeituras),
	terminalCaixas: many(terminalCaixa),
	menuBis: many(menuBi),
	permissaoEspecialEscalas: many(permissaoEspecialEscala),
	armazenagems_usuCodigoPrim: many(armazenagem, {
		relationName: "armazenagem_usuCodigoPrim_usuario_usuCodigo"
	}),
	armazenagems_usuCodigoSeg: many(armazenagem, {
		relationName: "armazenagem_usuCodigoSeg_usuario_usuCodigo"
	}),
	prospeccaos_usuCodigo: many(prospeccao, {
		relationName: "prospeccao_usuCodigo_usuario_usuCodigo"
	}),
	prospeccaos_usuCodigoGrupoCliente: many(prospeccao, {
		relationName: "prospeccao_usuCodigoGrupoCliente_usuario_usuCodigo"
	}),
	parametroUsuarios: many(parametroUsuario),
	relatorioDinamicoUsuarios: many(relatorioDinamicoUsuarios),
	recalculoCms_recUsuario: many(recalculoCm, {
		relationName: "recalculoCm_recUsuario_usuario_usuCodigo"
	}),
	recalculoCms_usuCodigo: many(recalculoCm, {
		relationName: "recalculoCm_usuCodigo_usuario_usuCodigo"
	}),
	projetoTipoUsuarios: many(projetoTipoUsuario),
	configuracaoAuxiliars_usuCodigo: many(configuracaoAuxiliar, {
		relationName: "configuracaoAuxiliar_usuCodigo_usuario_usuCodigo"
	}),
	configuracaoAuxiliars_usuCodigo: many(configuracaoAuxiliar, {
		relationName: "configuracaoAuxiliar_usuCodigo_usuario_usuCodigo"
	}),
	funcionario: one(funcionario, {
		fields: [usuario.fuCodigo],
		references: [funcionario.fuCodigo]
	}),
	grupo: one(grupo, {
		fields: [usuario.gruCodigo],
		references: [grupo.gruCodigo]
	}),
	menusVisoes: many(menusVisoes),
	permissaoBis: many(permissaoBi),
}));

export const prospeccaoItensRelations = relations(prospeccaoItens, ({one, many}) => ({
	prospeccaoEtapa: one(prospeccaoEtapas, {
		fields: [prospeccaoItens.eppCodigo],
		references: [prospeccaoEtapas.eppCodigo]
	}),
	funil: one(funil, {
		fields: [prospeccaoItens.funCodigo],
		references: [funil.funCodigo]
	}),
	motivoPerdaProspeccao: one(motivoPerdaProspeccao, {
		fields: [prospeccaoItens.mppCodigo],
		references: [motivoPerdaProspeccao.mppCodigo]
	}),
	prospeccao: one(prospeccao, {
		fields: [prospeccaoItens.ppcCodigo],
		references: [prospeccao.ppcCodigo]
	}),
	tipoApontamentoProspeccao: one(tipoApontamentoProspeccao, {
		fields: [prospeccaoItens.tapCodigo],
		references: [tipoApontamentoProspeccao.tapCodigo]
	}),
	usuario: one(usuario, {
		fields: [prospeccaoItens.usuCodigo],
		references: [usuario.usuCodigo]
	}),
	venda: one(vendas, {
		fields: [prospeccaoItens.venCodPedido],
		references: [vendas.venCodPedido]
	}),
	pabxCdrs: many(pabxCdr),
	whatsappProtocolos: many(whatsappProtocolos),
	arquivosProspeccaoItens: many(arquivosProspeccaoItens),
}));

export const motivoPerdaProspeccaoRelations = relations(motivoPerdaProspeccao, ({one, many}) => ({
	prospeccaoItens: many(prospeccaoItens),
	prospeccaos: many(prospeccao),
	motivoRecusaOrcamento: one(motivoRecusaOrcamento, {
		fields: [motivoPerdaProspeccao.mroCodigo],
		references: [motivoRecusaOrcamento.mroCodigo]
	}),
}));

export const prospeccaoRelations = relations(prospeccao, ({one, many}) => ({
	prospeccaoItens: many(prospeccaoItens),
	interacoesAtendimentos: many(interacoesAtendimentos),
	cliente: one(clientes, {
		fields: [prospeccao.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	contato: one(contatos, {
		fields: [prospeccao.conCodigo],
		references: [contatos.conCodigo]
	}),
	prospeccaoEtapa: one(prospeccaoEtapas, {
		fields: [prospeccao.eppCodigo],
		references: [prospeccaoEtapas.eppCodigo]
	}),
	funil: one(funil, {
		fields: [prospeccao.funCodigo],
		references: [funil.funCodigo]
	}),
	grupoCliente: one(grupoCliente, {
		fields: [prospeccao.grcCodigo],
		references: [grupoCliente.grcCodigo]
	}),
	interesse: one(interesse, {
		fields: [prospeccao.intCodigo],
		references: [interesse.intCodigo]
	}),
	motivoPerdaProspeccao: one(motivoPerdaProspeccao, {
		fields: [prospeccao.mppCodigo],
		references: [motivoPerdaProspeccao.mppCodigo]
	}),
	prospeccaoHistorico: one(prospeccaoHistorico, {
		fields: [prospeccao.phiCodigo],
		references: [prospeccaoHistorico.phiCodigo]
	}),
	primeiroContato: one(primeiroContato, {
		fields: [prospeccao.pmcCodigo],
		references: [primeiroContato.pmcCodigo]
	}),
	prospeccaoMotivo: one(prospeccaoMotivo, {
		fields: [prospeccao.pmoCodigo],
		references: [prospeccaoMotivo.pmoCodigo]
	}),
	segmentoCliente: one(segmentoCliente, {
		fields: [prospeccao.sgcCodigo],
		references: [segmentoCliente.sgcCodigo]
	}),
	usuario_usuCodigo: one(usuario, {
		fields: [prospeccao.usuCodigo],
		references: [usuario.usuCodigo],
		relationName: "prospeccao_usuCodigo_usuario_usuCodigo"
	}),
	usuario_usuCodigoGrupoCliente: one(usuario, {
		fields: [prospeccao.usuCodigoGrupoCliente],
		references: [usuario.usuCodigo],
		relationName: "prospeccao_usuCodigoGrupoCliente_usuario_usuCodigo"
	}),
	venda: one(vendas, {
		fields: [prospeccao.venCodPedido],
		references: [vendas.venCodPedido]
	}),
}));

export const tipoApontamentoProspeccaoRelations = relations(tipoApontamentoProspeccao, ({one, many}) => ({
	prospeccaoItens: many(prospeccaoItens),
	legenda: one(legenda, {
		fields: [tipoApontamentoProspeccao.legCodigo],
		references: [legenda.legCodigo]
	}),
}));

export const vendasRelations = relations(vendas, ({one, many}) => ({
	prospeccaoItens: many(prospeccaoItens),
	devolucaoClientes: many(devolucaoCliente),
	entregaLotes: many(entregaLote),
	loteReservas: many(loteReserva),
	cfeVendas: many(cfeVenda),
	processosAtoConcessorios: many(processosAtoConcessorios),
	vendasCreditosApurados: many(vendasCreditosApurados),
	ecfs: many(ecf),
	abatimentos: many(abatimento),
	notas: many(nota, {
		relationName: "nota_venCodPedido_vendas_venCodPedido"
	}),
	vendasHistoricoStatuses: many(vendasHistoricoStatus),
	notaVendas_venCodPedido: many(notaVenda, {
		relationName: "notaVenda_venCodPedido_vendas_venCodPedido"
	}),
	notaVendas_venCodPedido: many(notaVenda, {
		relationName: "notaVenda_venCodPedido_vendas_venCodPedido"
	}),
	envioWhatsapps: many(envioWhatsapp),
	itensServicos: many(itensServico),
	itensExpedidosVsDevolvidos: many(itensExpedidosVsDevolvidos),
	entregaItens: many(entregaItens),
	vendaEcfs: many(vendaEcf),
	itensCarregamentos: many(itensCarregamento),
	pedidosReembarcados: many(pedidosReembarcados),
	itensVendaLimitePromocaos: many(itensVendaLimitePromocao),
	contasRecebers: many(contasReceber),
	etiquetaProdutos: many(etiquetaProduto),
	ocorrenciasCrms: many(ocorrenciasCrm),
	itensEmprestimos: many(itensEmprestimo),
	itensVendas_venCodPedido: many(itensVenda, {
		relationName: "itensVenda_venCodPedido_vendas_venCodPedido"
	}),
	itensVendas_venCodPedidoPai: many(itensVenda, {
		relationName: "itensVenda_venCodPedidoPai_vendas_venCodPedido"
	}),
	itensVendas_venCodPedidoPaiInicial: many(itensVenda, {
		relationName: "itensVenda_venCodPedidoPaiInicial_vendas_venCodPedido"
	}),
	projetos: many(projetos, {
		relationName: "projetos_venCodPedido_vendas_venCodPedido"
	}),
	bairro: one(bairro, {
		fields: [vendas.baiCodigo],
		references: [bairro.baiCodigo]
	}),
	bairroCliente: one(bairroCliente, {
		fields: [vendas.bcCodigo],
		references: [bairroCliente.bcCodigo]
	}),
	conta: one(contas, {
		fields: [vendas.cbCodigo],
		references: [contas.cbCodigo]
	}),
	centrocusto_ccCodigo: one(centrocusto, {
		fields: [vendas.ccCodigo],
		references: [centrocusto.ccCodigo],
		relationName: "vendas_ccCodigo_centrocusto_ccCodigo"
	}),
	centrocusto_ccFrete: one(centrocusto, {
		fields: [vendas.ccFrete],
		references: [centrocusto.ccCodigo],
		relationName: "vendas_ccFrete_centrocusto_ccCodigo"
	}),
	contrato: one(contrato, {
		fields: [vendas.ccvCodigo],
		references: [contrato.ccvCodigo]
	}),
	cliente: one(clientes, {
		fields: [vendas.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	planoConta_coCodigo: one(planoContas, {
		fields: [vendas.coCodigo],
		references: [planoContas.coCodigo],
		relationName: "vendas_coCodigo_planoContas_coCodigo"
	}),
	planoConta_coFrete: one(planoContas, {
		fields: [vendas.coFrete],
		references: [planoContas.coCodigo],
		relationName: "vendas_coFrete_planoContas_coCodigo"
	}),
	comanda: one(comandas, {
		fields: [vendas.comCodigo],
		references: [comandas.comCodigo]
	}),
	contato: one(contatos, {
		fields: [vendas.conCodigo],
		references: [contatos.conCodigo]
	}),
	estoqueLocai_elcCodigo: one(estoqueLocais, {
		fields: [vendas.elcCodigo],
		references: [estoqueLocais.elcCodigo],
		relationName: "vendas_elcCodigo_estoqueLocais_elcCodigo"
	}),
	estoqueLocai_elcCodigoPicking: one(estoqueLocais, {
		fields: [vendas.elcCodigoPicking],
		references: [estoqueLocais.elcCodigo],
		relationName: "vendas_elcCodigoPicking_estoqueLocais_elcCodigo"
	}),
	empresa: one(empresa, {
		fields: [vendas.empCodigo],
		references: [empresa.empCodigo]
	}),
	estadoPedido_estCodigo: one(estadoPedido, {
		fields: [vendas.estCodigo],
		references: [estadoPedido.estCodigo],
		relationName: "vendas_estCodigo_estadoPedido_estCodigo"
	}),
	fornecedor_forCodigo: one(fornecedor, {
		fields: [vendas.forCodigo],
		references: [fornecedor.forCodigo],
		relationName: "vendas_forCodigo_fornecedor_forCodigo"
	}),
	fornecedor_forFrete: one(fornecedor, {
		fields: [vendas.forFrete],
		references: [fornecedor.forCodigo],
		relationName: "vendas_forFrete_fornecedor_forCodigo"
	}),
	funcionario: one(funcionario, {
		fields: [vendas.fuCodigo],
		references: [funcionario.fuCodigo]
	}),
	log_logCodigoFaturamento: one(log, {
		fields: [vendas.logCodigoFaturamento],
		references: [log.logCodigo],
		relationName: "vendas_logCodigoFaturamento_log_logCodigo"
	}),
	log_logCodigo: one(log, {
		fields: [vendas.logCodigo],
		references: [log.logCodigo],
		relationName: "vendas_logCodigo_log_logCodigo"
	}),
	manutencaoEstoque: one(manutencaoEstoque, {
		fields: [vendas.manCodigo],
		references: [manutencaoEstoque.manCodigo]
	}),
	mesa: one(mesas, {
		fields: [vendas.meCodigo],
		references: [mesas.meCodigo]
	}),
	marketplace: one(marketplace, {
		fields: [vendas.mkpCodigo],
		references: [marketplace.mkpCodigo]
	}),
	moeda: one(moeda, {
		fields: [vendas.moeCodigo],
		references: [moeda.moeCodigo]
	}),
	motorista: one(motorista, {
		fields: [vendas.motCodigo],
		references: [motorista.motCodigo]
	}),
	maqVeic: one(maqVeic, {
		fields: [vendas.mvCodigo],
		references: [maqVeic.mvCodigo]
	}),
	nota_nfCodigoCancelado: one(nota, {
		fields: [vendas.nfCodigoCancelado],
		references: [nota.nfCodigo],
		relationName: "vendas_nfCodigoCancelado_nota_nfCodigo"
	}),
	nota_nfCodigoFatAntecipado: one(nota, {
		fields: [vendas.nfCodigoFatAntecipado],
		references: [nota.nfCodigo],
		relationName: "vendas_nfCodigoFatAntecipado_nota_nfCodigo"
	}),
	condicaoPagto_parCpCodigo: one(condicaoPagto, {
		fields: [vendas.parCpCodigo],
		references: [condicaoPagto.parCpCodigo],
		relationName: "vendas_parCpCodigo_condicaoPagto_parCpCodigo"
	}),
	condicaoPagto_parFrete: one(condicaoPagto, {
		fields: [vendas.parFrete],
		references: [condicaoPagto.parCpCodigo],
		relationName: "vendas_parFrete_condicaoPagto_parCpCodigo"
	}),
	projeto: one(projetos, {
		fields: [vendas.prjCodigo],
		references: [projetos.prjCodigo],
		relationName: "vendas_prjCodigo_projetos_prjCodigo"
	}),
	representante_reCodigo: one(representantes, {
		fields: [vendas.reCodigo],
		references: [representantes.reCodigo],
		relationName: "vendas_reCodigo_representantes_reCodigo"
	}),
	representante_reCodigo: one(representantes, {
		fields: [vendas.reCodigo],
		references: [representantes.reCodigo],
		relationName: "vendas_reCodigo_representantes_reCodigo"
	}),
	representantesPreposto: one(representantesPreposto, {
		fields: [vendas.repCodigo],
		references: [representantesPreposto.rpCodigo]
	}),
	retiradoPor: one(retiradoPor, {
		fields: [vendas.rpCodigo],
		references: [retiradoPor.rpCodigo]
	}),
	serie: one(serie, {
		fields: [vendas.sreCodigo],
		references: [serie.sreCodigo]
	}),
	tabelaPreco: one(tabelaPreco, {
		fields: [vendas.taCodigo],
		references: [tabelaPreco.taCodigo]
	}),
	talhao: one(talhao, {
		fields: [vendas.talCodigo],
		references: [talhao.tlhCodigo]
	}),
	tipoOperacao: one(tipoOperacao, {
		fields: [vendas.toCodigo],
		references: [tipoOperacao.toCodigo]
	}),
	tipoPagamento: one(tipoPagamento, {
		fields: [vendas.tpCodigo],
		references: [tipoPagamento.tpCodigo]
	}),
	tipoPagamentoWeb: one(tipoPagamentoWeb, {
		fields: [vendas.tpwCodigo],
		references: [tipoPagamentoWeb.tpwCodigo]
	}),
	transportadora_trCodigo: one(transportadora, {
		fields: [vendas.trCodigo],
		references: [transportadora.trCodigo],
		relationName: "vendas_trCodigo_transportadora_trCodigo"
	}),
	transportadora_trCodigoRedespacho: one(transportadora, {
		fields: [vendas.trCodigoRedespacho],
		references: [transportadora.trCodigo],
		relationName: "vendas_trCodigoRedespacho_transportadora_trCodigo"
	}),
	terminalCaixa_txCodigo: one(terminalCaixa, {
		fields: [vendas.txCodigo],
		references: [terminalCaixa.txCodigo],
		relationName: "vendas_txCodigo_terminalCaixa_txCodigo"
	}),
	terminalCaixa_txCodigo: one(terminalCaixa, {
		fields: [vendas.txCodigo],
		references: [terminalCaixa.txCodigo],
		relationName: "vendas_txCodigo_terminalCaixa_txCodigo"
	}),
	usuario_usuCodigo: one(usuario, {
		fields: [vendas.usuCodigo],
		references: [usuario.usuCodigo],
		relationName: "vendas_usuCodigo_usuario_usuCodigo"
	}),
	vendedor: one(vendedor, {
		fields: [vendas.veCodigo],
		references: [vendedor.veCodigo]
	}),
	venda_venCodPedidoOrigem: one(vendas, {
		fields: [vendas.venCodPedidoOrigem],
		references: [vendas.venCodPedido],
		relationName: "vendas_venCodPedidoOrigem_vendas_venCodPedido"
	}),
	vendas_venCodPedidoOrigem: many(vendas, {
		relationName: "vendas_venCodPedidoOrigem_vendas_venCodPedido"
	}),
	venda_venCodPedidoPai: one(vendas, {
		fields: [vendas.venCodPedidoPai],
		references: [vendas.venCodPedido],
		relationName: "vendas_venCodPedidoPai_vendas_venCodPedido"
	}),
	vendas_venCodPedidoPai: many(vendas, {
		relationName: "vendas_venCodPedidoPai_vendas_venCodPedido"
	}),
	venda_venCodPedidoPaiInicial: one(vendas, {
		fields: [vendas.venCodPedidoPaiInicial],
		references: [vendas.venCodPedido],
		relationName: "vendas_venCodPedidoPaiInicial_vendas_venCodPedido"
	}),
	vendas_venCodPedidoPaiInicial: many(vendas, {
		relationName: "vendas_venCodPedidoPaiInicial_vendas_venCodPedido"
	}),
	venda_venCodSincOrigem: one(vendas, {
		fields: [vendas.venCodSincOrigem],
		references: [vendas.venCodPedido],
		relationName: "vendas_venCodSincOrigem_vendas_venCodPedido"
	}),
	vendas_venCodSincOrigem: many(vendas, {
		relationName: "vendas_venCodSincOrigem_vendas_venCodPedido"
	}),
	motivoRecusaOrcamento: one(motivoRecusaOrcamento, {
		fields: [vendas.venMotivoRecusaOrcamento],
		references: [motivoRecusaOrcamento.mroCodigo]
	}),
	usuario_venUsuAprovouOrc: one(usuario, {
		fields: [vendas.venUsuAprovouOrc],
		references: [usuario.usuCodigo],
		relationName: "vendas_venUsuAprovouOrc_usuario_usuCodigo"
	}),
	usuario_venUsuRecusouOrc: one(usuario, {
		fields: [vendas.venUsuRecusouOrc],
		references: [usuario.usuCodigo],
		relationName: "vendas_venUsuRecusouOrc_usuario_usuCodigo"
	}),
	integracoesYzidro: one(integracoesYzidro, {
		fields: [vendas.iyzCodigo],
		references: [integracoesYzidro.iyzCodigo]
	}),
	estadoPedido_estCodigoEntrega: one(estadoPedido, {
		fields: [vendas.estCodigoEntrega],
		references: [estadoPedido.estCodigo],
		relationName: "vendas_estCodigoEntrega_estadoPedido_estCodigo"
	}),
	embalagens: many(embalagens),
	ordemServicos: many(ordemServico),
	baixaCrecebers: many(baixaCreceber),
	itensCfes: many(itensCfe),
	honorarioLancados: many(honorarioLancados),
	conhecimentoFretes: many(conhecimentoFrete),
	movimentacaoVolumes: many(movimentacaoVolumes),
	cuponsIfoods: many(cuponsIfood),
	cfes: many(cfe),
	pagamentosVendas: many(pagamentosVenda),
	creditoCrecebers_venCodPedido: many(creditoCreceber, {
		relationName: "creditoCreceber_venCodPedido_vendas_venCodPedido"
	}),
	creditoCrecebers_venCodPedidoPrioridade: many(creditoCreceber, {
		relationName: "creditoCreceber_venCodPedidoPrioridade_vendas_venCodPedido"
	}),
	baixaCreditos: many(baixaCredito),
	vendasAjustes: many(vendasAjustes),
	vendasKitEcommerces: many(vendasKitEcommerce),
	itensAdicionais: many(itensAdicionais),
	prospeccaos: many(prospeccao),
	devolucoesVendas_venCodPedidoDev: many(devolucoesVenda, {
		relationName: "devolucoesVenda_venCodPedidoDev_vendas_venCodPedido"
	}),
	devolucoesVendas_venCodPedido: many(devolucoesVenda, {
		relationName: "devolucoesVenda_venCodPedido_vendas_venCodPedido"
	}),
	atualizaPedidoWebs: many(atualizaPedidoWeb),
	pedidosGeradosAutomaticamentos_venCodPedidoAjuste: many(pedidosGeradosAutomaticamento, {
		relationName: "pedidosGeradosAutomaticamento_venCodPedidoAjuste_vendas_venCodPedido"
	}),
	pedidosGeradosAutomaticamentos_venCodPedidoDev: many(pedidosGeradosAutomaticamento, {
		relationName: "pedidosGeradosAutomaticamento_venCodPedidoDev_vendas_venCodPedido"
	}),
	pedidosGeradosAutomaticamentos_venCodPedidoOrigem: many(pedidosGeradosAutomaticamento, {
		relationName: "pedidosGeradosAutomaticamento_venCodPedidoOrigem_vendas_venCodPedido"
	}),
}));

export const devolucaoClienteRelations = relations(devolucaoCliente, ({one}) => ({
	venda: one(vendas, {
		fields: [devolucaoCliente.venCodPedido],
		references: [vendas.venCodPedido]
	}),
}));

export const variedadeProdutoRelations = relations(variedadeProduto, ({one, many}) => ({
	produto: one(produto, {
		fields: [variedadeProduto.proCodigo],
		references: [produto.proCodigo]
	}),
	armazenagems: many(armazenagem),
}));

export const produtoRelations = relations(produto, ({one, many}) => ({
	variedadeProdutos: many(variedadeProduto),
	tabelaPrecoItens: many(tabelaPrecoItens),
	precoDiferenciados: many(precoDiferenciado),
	balancas: many(balanca),
	metasItens: many(metasItens),
	cargaEstoqueOutroLocals: many(cargaEstoqueOutroLocal),
	inventarioEstoqueContagems: many(inventarioEstoqueContagem),
	requisicaoAtualizaEstoques: many(requisicaoAtualizaEstoque),
	engItensFaturars: many(engItensFaturar),
	comissionamentos: many(comissionamento),
	itensMaqVeicAndamentos: many(itensMaqVeicAndamento),
	itensPedidoVendas: many(itensPedidoVendas),
	entradaMercadoriaItens: many(entradaMercadoriaItens),
	itensPagamentosExternos: many(itensPagamentosExternos),
	desmembramentoConsumos: many(desmembramentoConsumos),
	configGrupoComplementoIfoods: many(configGrupoComplementoIfood),
	excecaoTabelaPrecos: many(excecaoTabelaPreco),
	itensManutencaoGers: many(itensManutencaoGer),
	itensEcfs: many(itensEcf),
	precoVendaXPdvOfflines: many(precoVendaXPdvOffline),
	fciDecs: many(fciDec),
	tabPrecoItensXPdvOfflines: many(tabPrecoItensXPdvOffline),
	itensEmprestimoRets: many(itensEmprestimoRet),
	produtoProcessoFabricacaos: many(produtoProcessoFabricacao),
	precoDiferenciadoReps: many(precoDiferenciadoRep),
	loteCompraAuxiliars: many(loteCompraAuxiliar),
	honorarios: many(honorarios),
	etiquetas: many(etiqueta),
	embalagems: many(embalagem),
	itensNotaEnts: many(itensNotaEnt),
	embalagensInventarios: many(embalagensInventario),
	codigoRelacionados: many(codigoRelacionado),
	itensComposicaoProducaos: many(itensComposicaoProducao),
	itensProducaos: many(itensProducao),
	itensExpedidosVsDevolvidos: many(itensExpedidosVsDevolvidos),
	drawbacks: many(drawback),
	adicionais_proCodigoAdd: many(adicionais, {
		relationName: "adicionais_proCodigoAdd_produto_proCodigo"
	}),
	adicionais_proCodigo: many(adicionais, {
		relationName: "adicionais_proCodigo_produto_proCodigo"
	}),
	unidadesAlternativas: many(unidadesAlternativas),
	fciCops_matCodigo: many(fciCop, {
		relationName: "fciCop_matCodigo_produto_proCodigo"
	}),
	fciCops_proCodigo: many(fciCop, {
		relationName: "fciCop_proCodigo_produto_proCodigo"
	}),
	produtosIfoods: many(produtosIfood),
	itensNotas: many(itensNota),
	entregaItens: many(entregaItens),
	produtoXClientes: many(produtoXCliente),
	hisProdutos: many(hisProduto),
	itensCarregamentos: many(itensCarregamento),
	desmembramentoItens: many(desmembramentoItens),
	itensImportacaos: many(itensImportacao),
	itensVendaLimitePromocaos: many(itensVendaLimitePromocao),
	mudancasProgramadas: many(mudancasProgramadas),
	composicaoGeneros: many(composicaoGenero),
	catalogoReferencias: many(catalogoReferencia),
	etiquetaProdutos: many(etiquetaProduto),
	opItensConsumidos_proCodigoAcabado: many(opItensConsumidos, {
		relationName: "opItensConsumidos_proCodigoAcabado_produto_proCodigo"
	}),
	opItensConsumidos_proCodigo: many(opItensConsumidos, {
		relationName: "opItensConsumidos_proCodigo_produto_proCodigo"
	}),
	fciNotas: many(fciNotas),
	itensRegraApuracaoCreditos: many(itensRegraApuracaoCredito),
	itensTransMercadorias: many(itensTransMercadoria),
	fciMpcs: many(fciMpc),
	itensCompraFrigorificos: many(itensCompraFrigorifico),
	catalogosProdutosIfoods: many(catalogosProdutosIfood),
	fciUmcs: many(fciUmc),
	estoqueEmpresaFechamentos: many(estoqueEmpresaFechamento),
	etiquetasCustomizadas: many(etiquetasCustomizadas),
	produtoControleQualidades: many(produtoControleQualidade),
	armzFatExps: many(armzFatExp),
	itensRepresentacaos: many(itensRepresentacao),
	despesas: many(despesas),
	itensAluguels: many(itensAluguel),
	laudoArmazenagems: many(laudoArmazenagem, {
		relationName: "laudoArmazenagem_proCodigo_produto_proCodigo"
	}),
	desmembramentos: many(desmembramento),
	itensGrupoExportacaos: many(itensGrupoExportacao),
	itensEmprestimos: many(itensEmprestimo),
	liberacaoSaldos: many(liberacaoSaldo),
	produtoCstNaturezaReceitas: many(produtoCstNaturezaReceita),
	itensVendas_proCodigo: many(itensVenda, {
		relationName: "itensVenda_proCodigo_produto_proCodigo"
	}),
	itensVendas_proCodigoInicial: many(itensVenda, {
		relationName: "itensVenda_proCodigoInicial_produto_proCodigo"
	}),
	itensVendas_iteProdutoOriginal: many(itensVenda, {
		relationName: "itensVenda_iteProdutoOriginal_produto_proCodigo"
	}),
	etiquetaGondolas: many(etiquetaGondola),
	fornecedorXmlConversaos: many(fornecedorXmlConversao),
	fciOps: many(fciOps),
	lotes: many(lote),
	viagems: many(viagem),
	controleNumeracaoProducaos_proCodigoAcabado: many(controleNumeracaoProducao, {
		relationName: "controleNumeracaoProducao_proCodigoAcabado_produto_proCodigo"
	}),
	controleNumeracaoProducaos_proCodigo: many(controleNumeracaoProducao, {
		relationName: "controleNumeracaoProducao_proCodigo_produto_proCodigo"
	}),
	itensCompraMadeiras: many(itensCompraMadeira),
	engItensAndamentos: many(engItensAndamento),
	embalagens: many(embalagens),
	produtosSimilares_psCodigoPrincipal: many(produtosSimilares, {
		relationName: "produtosSimilares_psCodigoPrincipal_produto_proCodigo"
	}),
	produtosSimilares_psCodigoSimilar: many(produtosSimilares, {
		relationName: "produtosSimilares_psCodigoSimilar_produto_proCodigo"
	}),
	registrosAnalisadosRaioXES: many(registrosAnalisadosRaioX),
	itensOrdemServicos: many(itensOrdemServico),
	lancamentoVeiculos: many(lancamentoVeiculo),
	fciCics: many(fciCic),
	itensEmbalagens: many(itensEmbalagens),
	requisicaoConsumoOps: many(requisicaoConsumoOp),
	itensCfes: many(itensCfe),
	talhaoAnos: many(talhaoAno),
	variacoesProdutos: many(variacoesProduto),
	correcaoEstoques: many(correcaoEstoque),
	composicaoProdutos_matCodigo: many(composicaoProduto, {
		relationName: "composicaoProduto_matCodigo_produto_proCodigo"
	}),
	composicaoProdutos_proCodigo: many(composicaoProduto, {
		relationName: "composicaoProduto_proCodigo_produto_proCodigo"
	}),
	inventariosEstoqueResumoProdutos: many(inventariosEstoqueResumoProdutos),
	itensManutencaoEstoques_proCodigo: many(itensManutencaoEstoque, {
		relationName: "itensManutencaoEstoque_proCodigo_produto_proCodigo"
	}),
	itensManutencaoEstoques_proCodigo: many(itensManutencaoEstoque, {
		relationName: "itensManutencaoEstoque_proCodigo_produto_proCodigo"
	}),
	itensAlmoxarifados_proCodigo: many(itensAlmoxarifado, {
		relationName: "itensAlmoxarifado_proCodigo_produto_proCodigo"
	}),
	itensAlmoxarifados_proCodigo: many(itensAlmoxarifado, {
		relationName: "itensAlmoxarifado_proCodigo_produto_proCodigo"
	}),
	produtosSelloutDistribuicaos: many(produtosSelloutDistribuicao),
	entradaMercadoriaCaixas: many(entradaMercadoriaCaixas),
	movimentacaoVolumes: many(movimentacaoVolumes),
	andamentoEstoques: many(andamentoEstoque),
	conferenciaRetornos: many(conferenciaRetorno),
	tiposRomaneios: many(tiposRomaneio),
	cuponsIfoods: many(cuponsIfood),
	promocaos: many(promocao),
	itensCompras_proCodigo: many(itensCompra, {
		relationName: "itensCompra_proCodigo_produto_proCodigo"
	}),
	itensCompras_proCodigo: many(itensCompra, {
		relationName: "itensCompra_proCodigo_produto_proCodigo"
	}),
	agrupadorFiscal: one(agrupadorFiscal, {
		fields: [produto.agfCodigo],
		references: [agrupadorFiscal.agfCodigo]
	}),
	planoConta_coCodigoFatArmazenagemOld: one(planoContas, {
		fields: [produto.coCodigoFatArmazenagemOld],
		references: [planoContas.coCodigo],
		relationName: "produto_coCodigoFatArmazenagemOld_planoContas_coCodigo"
	}),
	planoConta_coCodigoOld: one(planoContas, {
		fields: [produto.coCodigoOld],
		references: [planoContas.coCodigo],
		relationName: "produto_coCodigoOld_planoContas_coCodigo"
	}),
	grupoCarregamento: one(grupoCarregamento, {
		fields: [produto.gcCodigo],
		references: [grupoCarregamento.gcCodigo]
	}),
	gruposCaracteristicaLote: one(gruposCaracteristicaLote, {
		fields: [produto.gclCodigo],
		references: [gruposCaracteristicaLote.gclCodigo]
	}),
	grupo: one(grupos, {
		fields: [produto.grpCodigo],
		references: [grupos.grpCodigo]
	}),
	laudoArmazenagem: one(laudoArmazenagem, {
		fields: [produto.laCodigo],
		references: [laudoArmazenagem.laCodigo],
		relationName: "produto_laCodigo_laudoArmazenagem_laCodigo"
	}),
	log: one(log, {
		fields: [produto.logCodigo],
		references: [log.logCodigo]
	}),
	marca: one(marca, {
		fields: [produto.maCodigo],
		references: [marca.maCodigo]
	}),
	markUp: one(markUp, {
		fields: [produto.marCodigo],
		references: [markUp.marCodigo]
	}),
	numClassificacao: one(numClassificacao, {
		fields: [produto.ncCodigo],
		references: [numClassificacao.ncCodigo]
	}),
	padraoEtiquetaPeso: one(padraoEtiquetaPeso, {
		fields: [produto.pepCodigo],
		references: [padraoEtiquetaPeso.pepCodigo]
	}),
	setor: one(setor, {
		fields: [produto.setCodigo],
		references: [setor.setCodigo]
	}),
	subGrupo: one(subGrupo, {
		fields: [produto.subCodigo],
		references: [subGrupo.subCodigo]
	}),
	rtcAgrupadorFiscal: one(rtcAgrupadorFiscal, {
		fields: [produto.rafCodigo],
		references: [rtcAgrupadorFiscal.rafCodigo]
	}),
	geradors: many(gerador),
	itensMateriaisGers: many(itensMateriaisGer),
	recalculoCmItens: many(recalculoCmItens),
	estoqueLocaisSaldos: many(estoqueLocaisSaldo),
	estoqueEmpresaSaldos: many(estoqueEmpresaSaldo),
	produtoXEmpresas: many(produtoXEmpresa),
	engItensMateriais: many(engItensMateriais),
	itensOrcs: many(itensOrc),
	transferenciaArmazenagems: many(transferenciaArmazenagem),
	entradaMercadoriaReativadas: many(entradaMercadoriaReativadas),
	itensSubProducaos: many(itensSubProducao),
	residuos_proCodigo: many(residuo, {
		relationName: "residuo_proCodigo_produto_proCodigo"
	}),
	residuos_resCodigo: many(residuo, {
		relationName: "residuo_resCodigo_produto_proCodigo"
	}),
	itensCotacaoCompras_iccProdutoPedido: many(itensCotacaoCompra, {
		relationName: "itensCotacaoCompra_iccProdutoPedido_produto_proCodigo"
	}),
	itensCotacaoCompras_proCodigo: many(itensCotacaoCompra, {
		relationName: "itensCotacaoCompra_proCodigo_produto_proCodigo"
	}),
	itensSolicitacaoCompras: many(itensSolicitacaoCompra),
	itensPedidoConfeccaos: many(itensPedidoConfeccao),
	itensRomaneioOps: many(itensRomaneioOp),
	vendasAjustes: many(vendasAjustes),
	itensPedidos_proCodigo: many(itensPedido, {
		relationName: "itensPedido_proCodigo_produto_proCodigo"
	}),
	itensPedidos_proCodigo: many(itensPedido, {
		relationName: "itensPedido_proCodigo_produto_proCodigo"
	}),
	inventariosEstoqueLeituras: many(inventariosEstoqueLeituras),
	itensAdicionais: many(itensAdicionais),
	itensVendaCortes: many(itensVendaCorte),
	armazenagems: many(armazenagem),
	estoqueLocalFechamentos: many(estoqueLocalFechamento),
	opItensProduzidos: many(opItensProduzidos),
	rtcClassificacaoFiscals: many(rtcClassificacaoFiscal),
	filiacaos_proCodigo: many(filiacao, {
		relationName: "filiacao_proCodigo_produto_proCodigo"
	}),
	filiacaos_proCodigo: many(filiacao, {
		relationName: "filiacao_proCodigo_produto_proCodigo"
	}),
	devolucoesVendas: many(devolucoesVenda),
	representanteBloqueioProdutos: many(representanteBloqueioProduto),
	verbasFornecedores: many(verbasFornecedores),
	fcis: many(fci),
	contratoItens: many(contratoItens),
	retornosNfes: many(retornosNfe),
	itensPedidoConfeccaoMats: many(itensPedidoConfeccaoMat),
	itensLoteMedicamentos_proCodigo: many(itensLoteMedicamento, {
		relationName: "itensLoteMedicamento_proCodigo_produto_proCodigo"
	}),
	itensLoteMedicamentos_proCodigo: many(itensLoteMedicamento, {
		relationName: "itensLoteMedicamento_proCodigo_produto_proCodigo"
	}),
	remessaRetornoNfes: many(remessaRetornoNfe),
	fornecedorXmls: many(fornecedorXml),
	carregamentoProntaEntregas: many(carregamentoProntaEntrega),
}));

export const entregaLoteRelations = relations(entregaLote, ({one, many}) => ({
	venda: one(vendas, {
		fields: [entregaLote.venCodPedido],
		references: [vendas.venCodPedido]
	}),
	entregaItens: many(entregaItens),
}));

export const retornoPagamentosExternosRelations = relations(retornoPagamentosExternos, ({one}) => ({
	dadosPagamentosExterno: one(dadosPagamentosExternos, {
		fields: [retornoPagamentosExternos.dpeCodigo],
		references: [dadosPagamentosExternos.dpeCodigo]
	}),
	servicosFrete: one(servicosFrete, {
		fields: [retornoPagamentosExternos.sfCodigo],
		references: [servicosFrete.sfCodigo]
	}),
}));

export const dadosPagamentosExternosRelations = relations(dadosPagamentosExternos, ({one, many}) => ({
	retornoPagamentosExternos: many(retornoPagamentosExternos),
	extratoBancarios: many(extratoBancario),
	itensPagamentosExternos: many(itensPagamentosExternos),
	servicosSelecionadosPagamentosExternos: many(servicosSelecionadosPagamentosExternos),
	conta: one(contas, {
		fields: [dadosPagamentosExternos.cbCodigo],
		references: [contas.cbCodigo]
	}),
	cidade: one(cidade, {
		fields: [dadosPagamentosExternos.ciCodigo],
		references: [cidade.ciCodigo]
	}),
	cliente: one(clientes, {
		fields: [dadosPagamentosExternos.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	estado: one(estado, {
		fields: [dadosPagamentosExternos.esCodigo],
		references: [estado.esCodigo]
	}),
	log_logCodigoCriacao: one(log, {
		fields: [dadosPagamentosExternos.logCodigoCriacao],
		references: [log.logCodigo],
		relationName: "dadosPagamentosExternos_logCodigoCriacao_log_logCodigo"
	}),
	log_logCodigoExclusao: one(log, {
		fields: [dadosPagamentosExternos.logCodigoExclusao],
		references: [log.logCodigo],
		relationName: "dadosPagamentosExternos_logCodigoExclusao_log_logCodigo"
	}),
	log_logCodigo: one(log, {
		fields: [dadosPagamentosExternos.logCodigo],
		references: [log.logCodigo],
		relationName: "dadosPagamentosExternos_logCodigo_log_logCodigo"
	}),
	dadosIndivPagamentosExternos: many(dadosIndivPagamentosExternos),
}));

export const servicosFreteRelations = relations(servicosFrete, ({many}) => ({
	retornoPagamentosExternos: many(retornoPagamentosExternos),
	servicosSelecionadosPagamentosExternos: many(servicosSelecionadosPagamentosExternos),
}));

export const tabelaPrecoItensRelations = relations(tabelaPrecoItens, ({one, many}) => ({
	produto: one(produto, {
		fields: [tabelaPrecoItens.proCodigo],
		references: [produto.proCodigo]
	}),
	tabelaPreco: one(tabelaPreco, {
		fields: [tabelaPrecoItens.taCodigo],
		references: [tabelaPreco.taCodigo]
	}),
	tabPrecoItensXPdvOfflines: many(tabPrecoItensXPdvOffline),
}));

export const tabelaPrecoRelations = relations(tabelaPreco, ({many}) => ({
	tabelaPrecoItens: many(tabelaPrecoItens),
	tipoFiscalRegras: many(tipoFiscalRegra),
	comissionamentos: many(comissionamento),
	excecaoTabelaPrecos: many(excecaoTabelaPreco),
	tabPrecoItensXPdvOfflines: many(tabPrecoItensXPdvOffline),
	representacaos: many(representacao),
	tabelaPrecoXPdvOfflines: many(tabelaPrecoXPdvOffline),
	regrasValidacaoPedidos: many(regrasValidacaoPedido),
	itensVendas: many(itensVenda),
	vendas: many(vendas),
	parametros_taCodigoReajuste: many(parametro, {
		relationName: "parametro_taCodigoReajuste_tabelaPreco_taCodigo"
	}),
	parametros_taCodigoRefAnalisePedido: many(parametro, {
		relationName: "parametro_taCodigoRefAnalisePedido_tabelaPreco_taCodigo"
	}),
	tipoPagamentoXTabelaPrecos: many(tipoPagamentoXTabelaPreco),
	itensOrcs: many(itensOrc),
	clientes: many(clientes),
	orcamentos_taCodigo: many(orcamento, {
		relationName: "orcamento_taCodigo_tabelaPreco_taCodigo"
	}),
	orcamentos_taCodigo: many(orcamento, {
		relationName: "orcamento_taCodigo_tabelaPreco_taCodigo"
	}),
	catalogosIfoods: many(catalogosIfood),
	estoqueLocais: many(estoqueLocais),
	pedidoConfeccaos: many(pedidoConfeccao),
}));

export const parametroBoletoRelations = relations(parametroBoleto, ({one, many}) => ({
	conta: one(contas, {
		fields: [parametroBoleto.cbCodigo],
		references: [contas.cbCodigo]
	}),
	carteiraBanco: one(carteiraBanco, {
		fields: [parametroBoleto.ctbCodigo],
		references: [carteiraBanco.ctbCodigo]
	}),
	empresa: one(empresa, {
		fields: [parametroBoleto.empCodigo],
		references: [empresa.empCodigo]
	}),
	tipoPagamento_tpCodigo: one(tipoPagamento, {
		fields: [parametroBoleto.tpCodigo],
		references: [tipoPagamento.tpCodigo],
		relationName: "parametroBoleto_tpCodigo_tipoPagamento_tpCodigo"
	}),
	tipoPagamento_tpCodigoPix: one(tipoPagamento, {
		fields: [parametroBoleto.tpCodigoPix],
		references: [tipoPagamento.tpCodigo],
		relationName: "parametroBoleto_tpCodigoPix_tipoPagamento_tpCodigo"
	}),
	integracoesYzidro: one(integracoesYzidro, {
		fields: [parametroBoleto.iyzCodigo],
		references: [integracoesYzidro.iyzCodigo]
	}),
	boletoJanelaUsos: many(boletoJanelaUso),
	parametroBoletoCelulares: many(parametroBoletoCelulares),
	tokenIntegracoes: many(tokenIntegracoes),
	boletoRetornos: many(boletoRetorno),
	boletos: many(boleto),
	remessaBoletos: many(remessaBoleto),
	ultimaConsultaFrancesinhas: many(ultimaConsultaFrancesinha),
	boletoRetornoArqs: many(boletoRetornoArq),
}));

export const contasRelations = relations(contas, ({one, many}) => ({
	parametroBoletos: many(parametroBoleto),
	extratoBancarios_cbCodigo: many(extratoBancario, {
		relationName: "extratoBancario_cbCodigo_contas_cbCodigo"
	}),
	extratoBancarios_cbCodigoTransferencia: many(extratoBancario, {
		relationName: "extratoBancario_cbCodigoTransferencia_contas_cbCodigo"
	}),
	saldoBancos: many(saldoBanco),
	factorings: many(factoring),
	honorarios: many(honorarios),
	funcionarios: many(funcionario),
	extratoOfxFechados: many(extratoOfxFechado),
	movimentoCheques: many(movimentoCheque),
	contasRecebers: many(contasReceber),
	padraoRetornoBoletoPlanilhas: many(padraoRetornoBoletoPlanilha),
	ocorrenciasCrms: many(ocorrenciasCrm),
	openFinanceRegras: many(openFinanceRegras),
	chequePres: many(chequePre),
	tokenIntegracoes: many(tokenIntegracoes),
	marketplaces: many(marketplace),
	boletoRetornos: many(boletoRetorno),
	caixas: many(caixa),
	extratoOfxAbertos: many(extratoOfxAberto),
	custodiaCheques: many(custodiaCheque),
	vendas: many(vendas),
	parametros_cbCodigoContaPixAutomatico: many(parametro, {
		relationName: "parametro_cbCodigoContaPixAutomatico_contas_cbCodigo"
	}),
	parametros_cbContaViagem: many(parametro, {
		relationName: "parametro_cbContaViagem_contas_cbCodigo"
	}),
	parametros_contaCartao: many(parametro, {
		relationName: "parametro_contaCartao_contas_cbCodigo"
	}),
	parametros_contaChDevolvido: many(parametro, {
		relationName: "parametro_contaChDevolvido_contas_cbCodigo"
	}),
	parametros_contaCredito: many(parametro, {
		relationName: "parametro_contaCredito_contas_cbCodigo"
	}),
	parametros_contaTerceiro: many(parametro, {
		relationName: "parametro_contaTerceiro_contas_cbCodigo"
	}),
	parametros_txContaDestinoDoc: many(parametro, {
		relationName: "parametro_txContaDestinoDoc_contas_cbCodigo"
	}),
	parametros_txContaDestino: many(parametro, {
		relationName: "parametro_txContaDestino_contas_cbCodigo"
	}),
	parametros_txContaOrigemDoc: many(parametro, {
		relationName: "parametro_txContaOrigemDoc_contas_cbCodigo"
	}),
	parametros_txContaOrigem: many(parametro, {
		relationName: "parametro_txContaOrigem_contas_cbCodigo"
	}),
	antecipacaoRecebiveis_cbCodigoCredito: many(antecipacaoRecebiveis, {
		relationName: "antecipacaoRecebiveis_cbCodigoCredito_contas_cbCodigo"
	}),
	antecipacaoRecebiveis_cbCodigoRetorno: many(antecipacaoRecebiveis, {
		relationName: "antecipacaoRecebiveis_cbCodigoRetorno_contas_cbCodigo"
	}),
	antecipacaoRecebiveis_cbCodigoVirtual: many(antecipacaoRecebiveis, {
		relationName: "antecipacaoRecebiveis_cbCodigoVirtual_contas_cbCodigo"
	}),
	aluguels: many(aluguel),
	baixaCrecebers: many(baixaCreceber),
	boletos: many(boleto),
	itensViagems_cbCodigoDest: many(itensViagem, {
		relationName: "itensViagem_cbCodigoDest_contas_cbCodigo"
	}),
	itensViagems_cbCodigo: many(itensViagem, {
		relationName: "itensViagem_cbCodigo_contas_cbCodigo"
	}),
	manutencaos: many(manutencao),
	regrasConciliacaoAutomaticas: many(regrasConciliacaoAutomatica),
	cartaos: many(cartao),
	agencia: one(agencia, {
		fields: [contas.agCodigo],
		references: [agencia.agCodigo]
	}),
	cidade_cbCidadeAvalista: one(cidade, {
		fields: [contas.cbCidadeAvalista],
		references: [cidade.ciCodigo],
		relationName: "contas_cbCidadeAvalista_cidade_ciCodigo"
	}),
	cidade_cbCidadeFavorecido: one(cidade, {
		fields: [contas.cbCidadeFavorecido],
		references: [cidade.ciCodigo],
		relationName: "contas_cbCidadeFavorecido_cidade_ciCodigo"
	}),
	conta_cbCodigoContaCustodia: one(contas, {
		fields: [contas.cbCodigoContaCustodia],
		references: [contas.cbCodigo],
		relationName: "contas_cbCodigoContaCustodia_contas_cbCodigo"
	}),
	contas_cbCodigoContaCustodia: many(contas, {
		relationName: "contas_cbCodigoContaCustodia_contas_cbCodigo"
	}),
	conta_cbCodigoResgate: one(contas, {
		fields: [contas.cbCodigoResgate],
		references: [contas.cbCodigo],
		relationName: "contas_cbCodigoResgate_contas_cbCodigo"
	}),
	contas_cbCodigoResgate: many(contas, {
		relationName: "contas_cbCodigoResgate_contas_cbCodigo"
	}),
	estado_cbEstadoAvalista: one(estado, {
		fields: [contas.cbEstadoAvalista],
		references: [estado.esCodigo],
		relationName: "contas_cbEstadoAvalista_estado_esCodigo"
	}),
	estado_cbEstadoFavorecido: one(estado, {
		fields: [contas.cbEstadoFavorecido],
		references: [estado.esCodigo],
		relationName: "contas_cbEstadoFavorecido_estado_esCodigo"
	}),
	planoConta_coCodigo: one(planoContas, {
		fields: [contas.coCodigo],
		references: [planoContas.coCodigo],
		relationName: "contas_coCodigo_planoContas_coCodigo"
	}),
	planoConta_coCodigoTarifaPixBalcao: one(planoContas, {
		fields: [contas.coCodigoTarifaPixBalcao],
		references: [planoContas.coCodigo],
		relationName: "contas_coCodigoTarifaPixBalcao_planoContas_coCodigo"
	}),
	planoConta_coCodigoTarifaPixCobranca: one(planoContas, {
		fields: [contas.coCodigoTarifaPixCobranca],
		references: [planoContas.coCodigo],
		relationName: "contas_coCodigoTarifaPixCobranca_planoContas_coCodigo"
	}),
	empresa: one(empresa, {
		fields: [contas.empCodigo],
		references: [empresa.empCodigo]
	}),
	fornecedor_forCodigoPagamento: one(fornecedor, {
		fields: [contas.forCodigoPagamento],
		references: [fornecedor.forCodigo],
		relationName: "contas_forCodigoPagamento_fornecedor_forCodigo"
	}),
	fornecedor_forCodigoTarifaPix: one(fornecedor, {
		fields: [contas.forCodigoTarifaPix],
		references: [fornecedor.forCodigo],
		relationName: "contas_forCodigoTarifaPix_fornecedor_forCodigo"
	}),
	moeda: one(moeda, {
		fields: [contas.moeCodigo],
		references: [moeda.moeCodigo]
	}),
	integracoesYzidro: one(integracoesYzidro, {
		fields: [contas.iyzCodigoOpenFinance],
		references: [integracoesYzidro.iyzCodigo]
	}),
	baixaCreditos: many(baixaCredito),
	baixaCpagars: many(baixaCpagar),
	transfereciaContas_cbCodigoDest: many(transfereciaContas, {
		relationName: "transfereciaContas_cbCodigoDest_contas_cbCodigo"
	}),
	transfereciaContas_cbCodigoOrig: many(transfereciaContas, {
		relationName: "transfereciaContas_cbCodigoOrig_contas_cbCodigo"
	}),
	retornoAluguels: many(retornoAluguel),
	credenciadoraMeiosPgtos: many(credenciadoraMeiosPgto),
	programacaoResgates: many(programacaoResgate),
	boletoRetornoArqs: many(boletoRetornoArq),
	consolidacaoEmissaoPixes: many(consolidacaoEmissaoPix),
	dadosPagamentosExternos: many(dadosPagamentosExternos),
	contasPagars: many(contasPagar),
}));

export const carteiraBancoRelations = relations(carteiraBanco, ({many}) => ({
	parametroBoletos: many(parametroBoleto),
}));

export const empresaRelations = relations(empresa, ({one, many}) => ({
	parametroBoletos: many(parametroBoleto),
	regrasFedIntelFiscals: many(regrasFedIntelFiscal),
	balancas: many(balanca),
	folhaPgtos: many(folhaPgto),
	comandas: many(comandas),
	campanhas: many(campanha),
	justificativaValorSistemas: many(justificativaValorSistema),
	retTributacaoFiscals: many(retTributacaoFiscal),
	notas: many(nota),
	historicoAcessoTribFiscals: many(historicoAcessoTribFiscal),
	sats: many(sat),
	classificacaoFiscalCtes: many(classificacaoFiscalCte),
	inventariosEstoques: many(inventariosEstoque),
	honorarios: many(honorarios),
	funcionarios: many(funcionario),
	solicitacaoCompras: many(solicitacaoCompra),
	series: many(serie),
	parametroCfes: many(parametroCfe),
	envioWhatsapps: many(envioWhatsapp),
	representacaos: many(representacao),
	emprestimos: many(emprestimo),
	logos: many(logos),
	pesagemCarregamentos: many(pesagemCarregamento),
	estoqueEmpresaSaldoLotes: many(estoqueEmpresaSaldoLote),
	regraApuracaoCreditos: many(regraApuracaoCredito),
	nfs: many(nfs),
	pedidos: many(pedido),
	mudancasProgramadas: many(mudancasProgramadas),
	contasRecebers: many(contasReceber),
	ultimaSincronizacaoTrackcashes: many(ultimaSincronizacaoTrackcash),
	ocorrenciasCrms: many(ocorrenciasCrm),
	regrasEstIntelFiscals: many(regrasEstIntelFiscal),
	terminaisSmartPos: many(terminaisSmartPos),
	estoqueEmpresaFechamentos: many(estoqueEmpresaFechamento),
	armzFatExps: many(armzFatExp),
	ctes: many(cte),
	logs: many(log),
	cteDestinados: many(cteDestinado),
	chequePres: many(chequePre),
	vendasExcluidasScannteches: many(vendasExcluidasScanntech),
	duplicatas: many(duplicatas),
	laudoArmazenagems: many(laudoArmazenagem),
	usuariosEmpresas: many(usuariosEmpresa),
	cartaoEmpresas: many(cartaoEmpresa),
	mdfes: many(mdfe),
	caixas: many(caixa),
	yzidroWebStorages: many(yzidroWebStorage),
	viagems: many(viagem),
	producaos: many(producao),
	controladorias: many(controladoria),
	dreVisaoPlanos: many(dreVisaoPlanos),
	historicoLogs: many(historicoLog),
	vendas: many(vendas),
	parametros_empCodigo: many(parametro, {
		relationName: "parametro_empCodigo_empresa_empCodigo"
	}),
	parametros_empresaLimiteCreditoDemander: many(parametro, {
		relationName: "parametro_empresaLimiteCreditoDemander_empresa_empCodigo"
	}),
	folhaLancamentos: many(folhaLancamento),
	embalagens: many(embalagens),
	ordemServicos: many(ordemServico),
	aluguels: many(aluguel),
	yzidroWebMetasVendas: many(yzidroWebMetasVendas),
	lancamentoVeiculos: many(lancamentoVeiculo),
	baixaCrecebers: many(baixaCreceber),
	terminalComputadors: many(terminalComputador),
	parametroNfs: many(parametroNfs),
	clienteXEmpresas: many(clienteXEmpresa),
	integracaoSelloutDistribuicaos: many(integracaoSelloutDistribuicao),
	integracoesYzidros: many(integracoesYzidro),
	entradaMercadorias: many(entradaMercadoria),
	vendaMarketplaces: many(vendaMarketplace),
	boletos: many(boleto),
	numeracaoDfes: many(numeracaoDfe),
	importOpVendas: many(importOpVenda),
	conhecimentoFretes: many(conhecimentoFrete),
	empresa_empCodigoBaseClassificacao: one(empresa, {
		fields: [empresa.empCodigoBaseClassificacao],
		references: [empresa.empCodigo],
		relationName: "empresa_empCodigoBaseClassificacao_empresa_empCodigo"
	}),
	empresas_empCodigoBaseClassificacao: many(empresa, {
		relationName: "empresa_empCodigoBaseClassificacao_empresa_empCodigo"
	}),
	empresa_empCodigoClassificacaoCte: one(empresa, {
		fields: [empresa.empCodigoClassificacaoCte],
		references: [empresa.empCodigo],
		relationName: "empresa_empCodigoClassificacaoCte_empresa_empCodigo"
	}),
	empresas_empCodigoClassificacaoCte: many(empresa, {
		relationName: "empresa_empCodigoClassificacaoCte_empresa_empCodigo"
	}),
	fornecedor: one(fornecedor, {
		fields: [empresa.forCodigo],
		references: [fornecedor.forCodigo]
	}),
	tipoEmpresarial: one(tipoEmpresarial, {
		fields: [empresa.tpeCodigo],
		references: [tipoEmpresarial.tpeCodigo]
	}),
	manutencaos: many(manutencao),
	andamentoEstoques: many(andamentoEstoque),
	vendaMarketplaceDespesas: many(vendaMarketplaceDespesas),
	certificados: many(certificado),
	contas: many(contas),
	cfes: many(cfe),
	mesas: many(mesas),
	estoqueEmpresaSaldos: many(estoqueEmpresaSaldo),
	produtoXEmpresas: many(produtoXEmpresa),
	manutencaoEstoques: many(manutencaoEstoque),
	nfeDestinadas: many(nfeDestinada),
	disparosProgramados: many(disparosProgramados),
	compras: many(compra),
	creditoCrecebers: many(creditoCreceber),
	baixaCreditos: many(baixaCredito),
	baixaCpagars: many(baixaCpagar),
	carregamentos: many(carregamento),
	orcamentos: many(orcamento),
	classificacaoFiscals: many(classificacaoFiscal),
	planoContas: many(planoContas),
	tipoDocumentos: many(tipoDocumento),
	promocoesGrupoXEmpresas: many(promocoesGrupoXEmpresa),
	terminalCaixas: many(terminalCaixa),
	credenciadoraMeiosPgtos: many(credenciadoraMeiosPgto),
	estoqueLocais: many(estoqueLocais),
	parametroMdfes: many(parametroMdfe),
	pollingIfoods: many(pollingIfood),
	armazenagems: many(armazenagem),
	rotinasWhatsapps: many(rotinasWhatsapp),
	tipoPedidoDemanders: many(tipoPedidoDemander),
	rtcClassificacaoFiscals: many(rtcClassificacaoFiscal),
	parametroCtes: many(parametroCte),
	historicoInteligenciaFiscals: many(historicoInteligenciaFiscal),
	produtosDevolvidosTribFiscals: many(produtosDevolvidosTribFiscal),
	retRegrasTributacaoFiscals: many(retRegrasTributacaoFiscal),
	contratoes: many(contrato),
	registrosExcluidos_empCodigo: many(registrosExcluidos, {
		relationName: "registrosExcluidos_empCodigo_empresa_empCodigo"
	}),
	registrosExcluidos_empCodigo: many(registrosExcluidos, {
		relationName: "registrosExcluidos_empCodigo_empresa_empCodigo"
	}),
	contasPagars: many(contasPagar),
	cotacaoCompras: many(cotacaoCompra),
	ytbEmpresas: many(ytbEmpresa),
	recalculoParcelas: many(recalculoParcelas),
}));

export const tipoPagamentoRelations = relations(tipoPagamento, ({many}) => ({
	parametroBoletos_tpCodigo: many(parametroBoleto, {
		relationName: "parametroBoleto_tpCodigo_tipoPagamento_tpCodigo"
	}),
	parametroBoletos_tpCodigoPix: many(parametroBoleto, {
		relationName: "parametroBoleto_tpCodigoPix_tipoPagamento_tpCodigo"
	}),
	comissionamentos: many(comissionamento),
	eventoFolhas: many(eventoFolha),
	honorarios: many(honorarios),
	funcionarios: many(funcionario),
	regrasValidacaoPedidos: many(regrasValidacaoPedido),
	pedidos: many(pedido),
	contasRecebers: many(contasReceber),
	ocorrenciasCrms: many(ocorrenciasCrm),
	vendas: many(vendas),
	parametros_tpCodigoCheque: many(parametro, {
		relationName: "parametro_tpCodigoCheque_tipoPagamento_tpCodigo"
	}),
	parametros_tpCodigoCreditos: many(parametro, {
		relationName: "parametro_tpCodigoCreditos_tipoPagamento_tpCodigo"
	}),
	parametros_tpCodigoDinheiro: many(parametro, {
		relationName: "parametro_tpCodigoDinheiro_tipoPagamento_tpCodigo"
	}),
	aluguels: many(aluguel),
	tipoPagamentoXTabelaPrecos: many(tipoPagamentoXTabelaPreco),
	baixaCrecebers: many(baixaCreceber),
	notaDebitos: many(notaDebito),
	manutencaos: many(manutencao),
	regrasConciliacaoAutomaticas: many(regrasConciliacaoAutomatica),
	cartaos: many(cartao),
	contratoEncerramentos: many(contratoEncerramento),
	compras: many(compra),
	clientes: many(clientes),
	retornoAluguels: many(retornoAluguel),
	tipoPagamentoWebs: many(tipoPagamentoWeb),
	configuracaoVendaMarketplaces: many(configuracaoVendaMarketplace),
	contratoes: many(contrato),
	contasPagars: many(contasPagar),
}));

export const integracoesYzidroRelations = relations(integracoesYzidro, ({one, many}) => ({
	parametroBoletos: many(parametroBoleto),
	pabxRamais: many(pabxRamais),
	envioWhatsapps: many(envioWhatsapp),
	pabxCdrs: many(pabxCdr),
	whatsappProtocolos: many(whatsappProtocolos),
	funcionarioOperadorWhats: many(funcionarioOperadorWhats),
	ultimaSincronizacaoTrackcashes: many(ultimaSincronizacaoTrackcash),
	tokenIntegracoes_iyzCodigo: many(tokenIntegracoes, {
		relationName: "tokenIntegracoes_iyzCodigo_integracoesYzidro_iyzCodigo"
	}),
	tokenIntegracoes_iyzCodigo: many(tokenIntegracoes, {
		relationName: "tokenIntegracoes_iyzCodigo_integracoesYzidro_iyzCodigo"
	}),
	vendas: many(vendas),
	empresa: one(empresa, {
		fields: [integracoesYzidro.empCodigo],
		references: [empresa.empCodigo]
	}),
	marketplace: one(marketplace, {
		fields: [integracoesYzidro.mkpCodigo],
		references: [marketplace.mkpCodigo]
	}),
	yzidroTipoIntegracoe: one(yzidroTipoIntegracoes, {
		fields: [integracoesYzidro.iyzTipo],
		references: [yzidroTipoIntegracoes.ytiTipo]
	}),
	vendaMarketplaces: many(vendaMarketplace),
	contas: many(contas),
	disparosProgramados: many(disparosProgramados),
	marketplaceTrackcashes: many(marketplaceTrackcash),
	tipoPagamentoWebs: many(tipoPagamentoWeb),
	rotinasWhatsapps: many(rotinasWhatsapp),
	campanhaDisparos: many(campanhaDisparo),
	configuracaoVendaMarketplaces: many(configuracaoVendaMarketplace),
}));

export const itensCompCteRelations = relations(itensCompCte, ({one}) => ({
	componenteCte: one(componenteCte, {
		fields: [itensCompCte.comCodigo],
		references: [componenteCte.comCodigo]
	}),
	cte: one(cte, {
		fields: [itensCompCte.cteCodigo],
		references: [cte.cteCodigo]
	}),
}));

export const componenteCteRelations = relations(componenteCte, ({many}) => ({
	itensCompCtes: many(itensCompCte),
	itensCarretoCtes: many(itensCarretoCte),
	itensCarretoMdfes: many(itensCarretoMdfe),
}));

export const cteRelations = relations(cte, ({one, many}) => ({
	itensCompCtes: many(itensCompCte),
	cteObsContribuintes: many(cteObsContribuinte),
	veiculosCtes: many(veiculosCte),
	itensCarretoCtes: many(itensCarretoCte),
	eventoCtes: many(eventoCte),
	contasRecebers: many(contasReceber),
	cteDocAnteriores: many(cteDocAnteriores),
	cteObsFiscos: many(cteObsFisco),
	centrocusto: one(centrocusto, {
		fields: [cte.ccCodigo],
		references: [centrocusto.ccCodigo]
	}),
	planoConta: one(planoContas, {
		fields: [cte.coCodigo],
		references: [planoContas.coCodigo]
	}),
	cobCfProceda: one(cobCfProceda, {
		fields: [cte.cobCodigo],
		references: [cobCfProceda.cobCodigo]
	}),
	cliente_cteDestinatEntrega: one(clientes, {
		fields: [cte.cteDestinatEntrega],
		references: [clientes.cliCodigo],
		relationName: "cte_cteDestinatEntrega_clientes_cliCodigo"
	}),
	cliente_cteDestinatario: one(clientes, {
		fields: [cte.cteDestinatario],
		references: [clientes.cliCodigo],
		relationName: "cte_cteDestinatario_clientes_cliCodigo"
	}),
	cliente_cteExpedidor: one(clientes, {
		fields: [cte.cteExpedidor],
		references: [clientes.cliCodigo],
		relationName: "cte_cteExpedidor_clientes_cliCodigo"
	}),
	cliente_cteOutros: one(clientes, {
		fields: [cte.cteOutros],
		references: [clientes.cliCodigo],
		relationName: "cte_cteOutros_clientes_cliCodigo"
	}),
	cliente_cteRecebedor: one(clientes, {
		fields: [cte.cteRecebedor],
		references: [clientes.cliCodigo],
		relationName: "cte_cteRecebedor_clientes_cliCodigo"
	}),
	cliente_cteRemetenteColeta: one(clientes, {
		fields: [cte.cteRemetenteColeta],
		references: [clientes.cliCodigo],
		relationName: "cte_cteRemetenteColeta_clientes_cliCodigo"
	}),
	cliente_cteRemetente: one(clientes, {
		fields: [cte.cteRemetente],
		references: [clientes.cliCodigo],
		relationName: "cte_cteRemetente_clientes_cliCodigo"
	}),
	empresa: one(empresa, {
		fields: [cte.empCodigo],
		references: [empresa.empCodigo]
	}),
	funcionario: one(funcionario, {
		fields: [cte.fuCodigo],
		references: [funcionario.fuCodigo]
	}),
	maqVeic: one(maqVeic, {
		fields: [cte.mvCodigo],
		references: [maqVeic.mvCodigo]
	}),
	natOperacao: one(natOperacao, {
		fields: [cte.noCodigo],
		references: [natOperacao.noCodigo]
	}),
	condicaoPagto: one(condicaoPagto, {
		fields: [cte.parCpCodigo],
		references: [condicaoPagto.parCpCodigo]
	}),
	serie: one(serie, {
		fields: [cte.sreCodigo],
		references: [serie.sreCodigo]
	}),
	tipoOperacao: one(tipoOperacao, {
		fields: [cte.toCodigo],
		references: [tipoOperacao.toCodigo]
	}),
	motoristaCtes: many(motoristaCte),
	documentosMdfes: many(documentosMdfe),
	cteNotasFiscais: many(cteNotasFiscais),
	movimentoFinanceiros: many(movimentoFinanceiro),
	autorizaXmls: many(autorizaXml),
	cargaCtes: many(cargaCte),
	rtcCtes: many(rtcCte),
	seguroCtes: many(seguroCte),
}));

export const precoDiferenciadoRelations = relations(precoDiferenciado, ({one}) => ({
	cliente: one(clientes, {
		fields: [precoDiferenciado.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	produto: one(produto, {
		fields: [precoDiferenciado.proCodigo],
		references: [produto.proCodigo]
	}),
}));

export const clientesRelations = relations(clientes, ({one, many}) => ({
	precoDiferenciados: many(precoDiferenciado),
	balancas: many(balanca),
	metasItens: many(metasItens),
	representados: many(representado),
	agenda: many(agenda),
	comissionamentos: many(comissionamento),
	eventoFolhas: many(eventoFolha),
	ecfs: many(ecf),
	cliMarcaGrupoSubs: many(cliMarcaGrupoSub),
	abatimentos: many(abatimento),
	notas: many(nota),
	engContratoes: many(engContrato),
	honorarios: many(honorarios),
	funcionarios: many(funcionario),
	representacaos: many(representacao),
	emprestimos_cliCodigo: many(emprestimo, {
		relationName: "emprestimo_cliCodigo_clientes_cliCodigo"
	}),
	emprestimos_cliCodigo: many(emprestimo, {
		relationName: "emprestimo_cliCodigo_clientes_cliCodigo"
	}),
	cadastroCarteirinhas_cliCodigo: many(cadastroCarteirinha, {
		relationName: "cadastroCarteirinha_cliCodigo_clientes_cliCodigo"
	}),
	cadastroCarteirinhas_cliCodigo: many(cadastroCarteirinha, {
		relationName: "cadastroCarteirinha_cliCodigo_clientes_cliCodigo"
	}),
	pabxCdrs: many(pabxCdr),
	contatos: many(contatos),
	imagens: many(imagens),
	whatsappProtocolos: many(whatsappProtocolos),
	veiculos: many(veiculos),
	clientesAlteracoes: many(clientesAlteracoes),
	locacaoGeradors: many(locacaoGerador),
	historicoOcorrenciaCrms: many(historicoOcorrenciaCrm),
	produtoXClientes: many(produtoXCliente),
	regraApuracaoCreditos: many(regraApuracaoCredito),
	regrasValidacaoPedidos: many(regrasValidacaoPedido),
	vendedors: many(vendedor, {
		relationName: "vendedor_cliCodigo_clientes_cliCodigo"
	}),
	nfs: many(nfs),
	contasRecebers: many(contasReceber),
	espacoAgendamentos: many(espacoAgendamento),
	etiquetaProdutos: many(etiquetaProduto),
	cteDocAnteriores: many(cteDocAnteriores),
	dtSelectReplicaClientes: many(dtSelectReplicaCliente),
	ocorrenciasCrms: many(ocorrenciasCrm),
	maquina1s: many(maquina1),
	ctes_cteDestinatEntrega: many(cte, {
		relationName: "cte_cteDestinatEntrega_clientes_cliCodigo"
	}),
	ctes_cteDestinatario: many(cte, {
		relationName: "cte_cteDestinatario_clientes_cliCodigo"
	}),
	ctes_cteExpedidor: many(cte, {
		relationName: "cte_cteExpedidor_clientes_cliCodigo"
	}),
	ctes_cteOutros: many(cte, {
		relationName: "cte_cteOutros_clientes_cliCodigo"
	}),
	ctes_cteRecebedor: many(cte, {
		relationName: "cte_cteRecebedor_clientes_cliCodigo"
	}),
	ctes_cteRemetenteColeta: many(cte, {
		relationName: "cte_cteRemetenteColeta_clientes_cliCodigo"
	}),
	ctes_cteRemetente: many(cte, {
		relationName: "cte_cteRemetente_clientes_cliCodigo"
	}),
	chequePres: many(chequePre),
	duplicatas: many(duplicatas),
	laudoArmazenagems: many(laudoArmazenagem),
	liberacaoSaldos: many(liberacaoSaldo),
	documentosMdfes: many(documentosMdfe),
	itensVendas: many(itensVenda),
	lotes: many(lote),
	producaos: many(producao),
	projetos: many(projetos),
	vendas: many(vendas),
	parametros_cliCodigoTransAutomatica: many(parametro, {
		relationName: "parametro_cliCodigoTransAutomatica_clientes_cliCodigo"
	}),
	parametros_cliInutilizacao: many(parametro, {
		relationName: "parametro_cliInutilizacao_clientes_cliCodigo"
	}),
	ordemServicos: many(ordemServico),
	aluguels: many(aluguel),
	autXmlDfes: many(autXmlDfe),
	clienteXEmpresas: many(clienteXEmpresa),
	boletos: many(boleto),
	notaDebitos: many(notaDebito),
	catracaLogs: many(catracaLog),
	conhecimentoFretes_cfConsignatario: many(conhecimentoFrete, {
		relationName: "conhecimentoFrete_cfConsignatario_clientes_cliCodigo"
	}),
	conhecimentoFretes_cfDestinatario: many(conhecimentoFrete, {
		relationName: "conhecimentoFrete_cfDestinatario_clientes_cliCodigo"
	}),
	conhecimentoFretes_cfRedespacho: many(conhecimentoFrete, {
		relationName: "conhecimentoFrete_cfRedespacho_clientes_cliCodigo"
	}),
	conhecimentoFretes_cfRemetente: many(conhecimentoFrete, {
		relationName: "conhecimentoFrete_cfRemetente_clientes_cliCodigo"
	}),
	receitaOpticas: many(receitaOptica),
	manutencaoGeradors: many(manutencaoGerador),
	regrasConciliacaoAutomaticas: many(regrasConciliacaoAutomatica),
	regraBloqueioClientePorReps: many(regraBloqueioClientePorRep),
	autorizaXmls: many(autorizaXml),
	baixaLotes: many(baixaLote),
	cfes: many(cfe),
	emailOlds_cliCodigo: many(emailOld, {
		relationName: "emailOld_cliCodigo_clientes_cliCodigo"
	}),
	emailOlds_cliCodigo: many(emailOld, {
		relationName: "emailOld_cliCodigo_clientes_cliCodigo"
	}),
	contaCorrentes: many(contaCorrente),
	creditoCrecebers: many(creditoCreceber),
	transferenciaArmazenagems: many(transferenciaArmazenagem),
	exameMedicos: many(exameMedico),
	cidade: one(cidade, {
		fields: [clientes.ciCodigoPk],
		references: [cidade.ciCodigo]
	}),
	cliente: one(clientes, {
		fields: [clientes.cliCodPatrimonial],
		references: [clientes.cliCodigo],
		relationName: "clientes_cliCodPatrimonial_clientes_cliCodigo"
	}),
	clientes: many(clientes, {
		relationName: "clientes_cliCodPatrimonial_clientes_cliCodigo"
	}),
	cnae: one(cnae, {
		fields: [clientes.cnaeCodigo],
		references: [cnae.cnaeCodigo]
	}),
	codPai: one(codPais, {
		fields: [clientes.codPais],
		references: [codPais.codPais]
	}),
	estado: one(estado, {
		fields: [clientes.esCodigo],
		references: [estado.esCodigo]
	}),
	grupoCliente: one(grupoCliente, {
		fields: [clientes.grcCodigo],
		references: [grupoCliente.grcCodigo]
	}),
	grupoEconomico: one(grupoEconomico, {
		fields: [clientes.greCodigo],
		references: [grupoEconomico.greCodigo]
	}),
	log: one(log, {
		fields: [clientes.logCodigo],
		references: [log.logCodigo]
	}),
	condicaoPagto: one(condicaoPagto, {
		fields: [clientes.parCpCodigo],
		references: [condicaoPagto.parCpCodigo]
	}),
	primeiroContato: one(primeiroContato, {
		fields: [clientes.pmcCodigo],
		references: [primeiroContato.pmcCodigo]
	}),
	representante: one(representantes, {
		fields: [clientes.reCodigo],
		references: [representantes.reCodigo]
	}),
	regiao: one(regiao, {
		fields: [clientes.regCodigo],
		references: [regiao.reCodigo]
	}),
	representantesPreposto: one(representantesPreposto, {
		fields: [clientes.rpCodigo],
		references: [representantesPreposto.rpCodigo]
	}),
	situacaoCliente: one(situacaoCliente, {
		fields: [clientes.sclCodigo],
		references: [situacaoCliente.sclCodigo]
	}),
	segmentoCliente: one(segmentoCliente, {
		fields: [clientes.sgcCodigo],
		references: [segmentoCliente.sgcCodigo]
	}),
	serie: one(serie, {
		fields: [clientes.sreCodigo],
		references: [serie.sreCodigo]
	}),
	tabelaPreco: one(tabelaPreco, {
		fields: [clientes.taCodigo],
		references: [tabelaPreco.taCodigo]
	}),
	tipoFiscal: one(tipoFiscal, {
		fields: [clientes.tfCodigo],
		references: [tipoFiscal.tfCodigo]
	}),
	tipoPagamento: one(tipoPagamento, {
		fields: [clientes.tpCodigo],
		references: [tipoPagamento.tpCodigo]
	}),
	transportadora: one(transportadora, {
		fields: [clientes.transportadoraPadrao],
		references: [transportadora.trCodigo]
	}),
	vendedor: one(vendedor, {
		fields: [clientes.veCodigo],
		references: [vendedor.veCodigo],
		relationName: "clientes_veCodigo_vendedor_veCodigo"
	}),
	orcamentos: many(orcamento),
	retornoAluguels: many(retornoAluguel),
	seguroMdfes: many(seguroMdfe),
	bairroClientes: many(bairroCliente),
	npsHistoricos: many(npsHistorico),
	dependentesClientes: many(dependentesClientes),
	estoqueLocais: many(estoqueLocais),
	parametroMdfes: many(parametroMdfe),
	armazenagems: many(armazenagem),
	prospeccaos: many(prospeccao),
	representanteBloqueioProdutos: many(representanteBloqueioProduto),
	pedidoVendas_cliCodigo: many(pedidoVendas, {
		relationName: "pedidoVendas_cliCodigo_clientes_cliCodigo"
	}),
	pedidoVendas_cliCodigo: many(pedidoVendas, {
		relationName: "pedidoVendas_cliCodigo_clientes_cliCodigo"
	}),
	pedidoConfeccaos: many(pedidoConfeccao),
	contratoes: many(contrato),
	dadosPagamentosExternos: many(dadosPagamentosExternos),
	projetosDisponibilidadeClientes: many(projetosDisponibilidadeCliente),
}));

export const campanhaMensagemRelations = relations(campanhaMensagem, ({one}) => ({
	campanha: one(campanha, {
		fields: [campanhaMensagem.camCodigo],
		references: [campanha.camCodigo]
	}),
}));

export const campanhaRelations = relations(campanha, ({one, many}) => ({
	campanhaMensagems: many(campanhaMensagem),
	boleto_boCodigo: one(boleto, {
		fields: [campanha.boCodigo],
		references: [boleto.boCodigo],
		relationName: "campanha_boCodigo_boleto_boCodigo"
	}),
	boleto_boCodigoNotificacao: one(boleto, {
		fields: [campanha.boCodigoNotificacao],
		references: [boleto.boCodigo],
		relationName: "campanha_boCodigoNotificacao_boleto_boCodigo"
	}),
	empresa: one(empresa, {
		fields: [campanha.empCodigo],
		references: [empresa.empCodigo]
	}),
	modelosWhatsapp: one(modelosWhatsapp, {
		fields: [campanha.mowCodigo],
		references: [modelosWhatsapp.mowCodigo]
	}),
	campanhaDisparos: many(campanhaDisparo),
}));

export const loteReservaRelations = relations(loteReserva, ({one}) => ({
	lote: one(lote, {
		fields: [loteReserva.ltCodigo],
		references: [lote.ltCodigo]
	}),
	venda: one(vendas, {
		fields: [loteReserva.venCodPedido],
		references: [vendas.venCodPedido]
	}),
}));

export const loteRelations = relations(lote, ({one, many}) => ({
	loteReservas: many(loteReserva),
	requisicaoAtualizaEstoques: many(requisicaoAtualizaEstoque),
	loteCompraAuxiliars: many(loteCompraAuxiliar),
	itensComposicaoProducaos: many(itensComposicaoProducao),
	itensProducaos: many(itensProducao),
	estoqueEmpresaSaldoLotes: many(estoqueEmpresaSaldoLote),
	etiquetaProdutos: many(etiquetaProduto),
	opItensConsumidos: many(opItensConsumidos),
	itensEmprestimos: many(itensEmprestimo),
	estoqueLocaisSaldoLotes: many(estoqueLocaisSaldoLote),
	itensVendas: many(itensVenda),
	core: one(cores, {
		fields: [lote.coCodigo],
		references: [cores.coCodigo]
	}),
	endereco: one(enderecos, {
		fields: [lote.endCodigo],
		references: [enderecos.endCodigo]
	}),
	fornecedor: one(fornecedor, {
		fields: [lote.forCodigo],
		references: [fornecedor.forCodigo]
	}),
	gradeTamanho: one(gradeTamanho, {
		fields: [lote.gtCodigo],
		references: [gradeTamanho.gtCodigo]
	}),
	produto: one(produto, {
		fields: [lote.proCodigo],
		references: [produto.proCodigo]
	}),
	sabor: one(sabor, {
		fields: [lote.sabCodigo],
		references: [sabor.sabCodigo]
	}),
	talhao: one(talhao, {
		fields: [lote.tlhCodigo],
		references: [talhao.tlhCodigo]
	}),
	cliente: one(clientes, {
		fields: [lote.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	embalagens: many(embalagens),
	inventariosEstoqueResumoLotes: many(inventariosEstoqueResumoLotes),
	itensEmbalagens: many(itensEmbalagens),
	requisicaoConsumoOps: many(requisicaoConsumoOp),
	embalagemLotes: many(embalagemLote),
	andamentoEstoques: many(andamentoEstoque),
	conferenciaRetornos: many(conferenciaRetorno),
	armazenagems: many(armazenagem),
	opItensProduzidos: many(opItensProduzidos),
}));

export const regrasFedIntelFiscalRelations = relations(regrasFedIntelFiscal, ({one}) => ({
	empresa: one(empresa, {
		fields: [regrasFedIntelFiscal.empCodigo],
		references: [empresa.empCodigo]
	}),
}));

export const balancaRelations = relations(balanca, ({one, many}) => ({
	centrocusto: one(centrocusto, {
		fields: [balanca.ccCodigo],
		references: [centrocusto.ccCodigo]
	}),
	cliente: one(clientes, {
		fields: [balanca.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	planoConta: one(planoContas, {
		fields: [balanca.coCodigo],
		references: [planoContas.coCodigo]
	}),
	empresa: one(empresa, {
		fields: [balanca.empCodigo],
		references: [empresa.empCodigo]
	}),
	fornecedor: one(fornecedor, {
		fields: [balanca.forCodigo],
		references: [fornecedor.forCodigo]
	}),
	nf: one(nfs, {
		fields: [balanca.nfsCodigo],
		references: [nfs.nfsCodigo]
	}),
	produto: one(produto, {
		fields: [balanca.proCodigo],
		references: [produto.proCodigo]
	}),
	usuario_usuCodigoPrim: one(usuario, {
		fields: [balanca.usuCodigoPrim],
		references: [usuario.usuCodigo],
		relationName: "balanca_usuCodigoPrim_usuario_usuCodigo"
	}),
	usuario_usuCodigoSeg: one(usuario, {
		fields: [balanca.usuCodigoSeg],
		references: [usuario.usuCodigo],
		relationName: "balanca_usuCodigoSeg_usuario_usuCodigo"
	}),
	itensNfs: many(itensNfs),
	balancaFaturas: many(balancaFatura),
}));

export const centrocustoRelations = relations(centrocusto, ({many}) => ({
	balancas: many(balanca),
	engContratoes: many(engContrato),
	honorarios: many(honorarios),
	funcionarios: many(funcionario),
	solicitacaoCompras: many(solicitacaoCompra),
	representacaos: many(representacao),
	emprestimos: many(emprestimo),
	regraApuracaoCreditos: many(regraApuracaoCredito),
	pedidos: many(pedido),
	contasRecebers: many(contasReceber),
	ocorrenciasCrms: many(ocorrenciasCrm),
	ctes: many(cte),
	viagems: many(viagem),
	controladorias: many(controladoria),
	vendas_ccCodigo: many(vendas, {
		relationName: "vendas_ccCodigo_centrocusto_ccCodigo"
	}),
	vendas_ccFrete: many(vendas, {
		relationName: "vendas_ccFrete_centrocusto_ccCodigo"
	}),
	parametros_ccCodigoArmzAluguel: many(parametro, {
		relationName: "parametro_ccCodigoArmzAluguel_centrocusto_ccCodigo"
	}),
	parametros_ccCodigoSolicitacao: many(parametro, {
		relationName: "parametro_ccCodigoSolicitacao_centrocusto_ccCodigo"
	}),
	parametros_centroCustoAluguel: many(parametro, {
		relationName: "parametro_centroCustoAluguel_centrocusto_ccCodigo"
	}),
	parametros_centroCustoDefaultVenda: many(parametro, {
		relationName: "parametro_centroCustoDefaultVenda_centrocusto_ccCodigo"
	}),
	parametros_centroCustoVendaAt: many(parametro, {
		relationName: "parametro_centroCustoVendaAt_centrocusto_ccCodigo"
	}),
	aluguels: many(aluguel),
	lancamentoVeiculos: many(lancamentoVeiculo),
	itensViagems: many(itensViagem),
	manutencaos: many(manutencao),
	manutencaoGeradors: many(manutencaoGerador),
	regrasConciliacaoAutomaticas: many(regrasConciliacaoAutomatica),
	movimentoFinanceiros: many(movimentoFinanceiro),
	contratoEncerramentos: many(contratoEncerramento),
	manutencaoEstoques: many(manutencaoEstoque),
	compras: many(compra),
	creditoCrecebers: many(creditoCreceber),
	retornoAluguels: many(retornoAluguel),
	armazenagems: many(armazenagem),
	configuracaoVendaMarketplaces: many(configuracaoVendaMarketplace),
	solucaoCrms: many(solucaoCrm),
	contratoes: many(contrato),
	contratoOutrasDespesas: many(contratoOutrasDespesas),
	contasPagars: many(contasPagar),
	cotacaoCompras: many(cotacaoCompra),
	recalculoParcelas: many(recalculoParcelas),
}));

export const fornecedorRelations = relations(fornecedor, ({one, many}) => ({
	balancas: many(balanca),
	eventoFolhas: many(eventoFolha),
	notas: many(nota),
	funcionarios: many(funcionario),
	pabxCdrs: many(pabxCdr),
	contatos: many(contatos),
	pedidos: many(pedido),
	etiquetaProdutos: many(etiquetaProduto),
	notaEnts: many(notaEnt),
	operacaoEstoques: many(operacaoEstoque),
	compraFrigorificos: many(compraFrigorifico),
	fornecedorXmlConversaos: many(fornecedorXmlConversao),
	lotes: many(lote),
	producaos_forComissaoCompra: many(producao, {
		relationName: "producao_forComissaoCompra_fornecedor_forCodigo"
	}),
	producaos_forComissaoCompra: many(producao, {
		relationName: "producao_forComissaoCompra_fornecedor_forCodigo"
	}),
	producaos_forComissaoVenda: many(producao, {
		relationName: "producao_forComissaoVenda_fornecedor_forCodigo"
	}),
	producaos_forComissaoVenda: many(producao, {
		relationName: "producao_forComissaoVenda_fornecedor_forCodigo"
	}),
	producaos_forDespesa: many(producao, {
		relationName: "producao_forDespesa_fornecedor_forCodigo"
	}),
	producaos_forDespesa: many(producao, {
		relationName: "producao_forDespesa_fornecedor_forCodigo"
	}),
	producaos_forFrete: many(producao, {
		relationName: "producao_forFrete_fornecedor_forCodigo"
	}),
	producaos_forFrete: many(producao, {
		relationName: "producao_forFrete_fornecedor_forCodigo"
	}),
	vendas_forCodigo: many(vendas, {
		relationName: "vendas_forCodigo_fornecedor_forCodigo"
	}),
	vendas_forFrete: many(vendas, {
		relationName: "vendas_forFrete_fornecedor_forCodigo"
	}),
	parametros_forCodigoIntegracaoMtrix: many(parametro, {
		relationName: "parametro_forCodigoIntegracaoMtrix_fornecedor_forCodigo"
	}),
	parametros_fornecedorGenericoRh: many(parametro, {
		relationName: "parametro_fornecedorGenericoRh_fornecedor_forCodigo"
	}),
	antecipacaoRecebiveis: many(antecipacaoRecebiveis),
	lancamentoVeiculos: many(lancamentoVeiculo),
	integracaoSelloutDistribuicaos: many(integracaoSelloutDistribuicao),
	entradaMercadorias: many(entradaMercadoria),
	itensViagems: many(itensViagem),
	talhaos: many(talhao),
	empresas: many(empresa),
	manutencaos: many(manutencao),
	regrasConciliacaoAutomaticas: many(regrasConciliacaoAutomatica),
	contas_forCodigoPagamento: many(contas, {
		relationName: "contas_forCodigoPagamento_fornecedor_forCodigo"
	}),
	contas_forCodigoTarifaPix: many(contas, {
		relationName: "contas_forCodigoTarifaPix_fornecedor_forCodigo"
	}),
	compraMadeiras_forCodigo: many(compraMadeira, {
		relationName: "compraMadeira_forCodigo_fornecedor_forCodigo"
	}),
	compraMadeiras_forCodigo: many(compraMadeira, {
		relationName: "compraMadeira_forCodigo_fornecedor_forCodigo"
	}),
	emailOlds_forCodigo: many(emailOld, {
		relationName: "emailOld_forCodigo_fornecedor_forCodigo"
	}),
	emailOlds_forCodigo: many(emailOld, {
		relationName: "emailOld_forCodigo_fornecedor_forCodigo"
	}),
	compras_forCodigo: many(compra, {
		relationName: "compra_forCodigo_fornecedor_forCodigo"
	}),
	compras_forTransportadora: many(compra, {
		relationName: "compra_forTransportadora_fornecedor_forCodigo"
	}),
	transferenciaArmazenagems: many(transferenciaArmazenagem),
	seguroMdfes: many(seguroMdfe),
	codPai: one(codPais, {
		fields: [fornecedor.codPais],
		references: [codPais.codPais]
	}),
	estado: one(estado, {
		fields: [fornecedor.esCodigo],
		references: [estado.esCodigo]
	}),
	grupoEconomico: one(grupoEconomico, {
		fields: [fornecedor.greCodigo],
		references: [grupoEconomico.greCodigo]
	}),
	condicaoPagto: one(condicaoPagto, {
		fields: [fornecedor.parCpCodigo],
		references: [condicaoPagto.parCpCodigo]
	}),
	tipoFiscal: one(tipoFiscal, {
		fields: [fornecedor.tfCodigo],
		references: [tipoFiscal.tfCodigo]
	}),
	fornecedorPagamentos: many(fornecedorPagamento),
	parametroMdfes: many(parametroMdfe),
	armazenagems_forCodigo: many(armazenagem, {
		relationName: "armazenagem_forCodigo_fornecedor_forCodigo"
	}),
	armazenagems_forCodigoSilo: many(armazenagem, {
		relationName: "armazenagem_forCodigoSilo_fornecedor_forCodigo"
	}),
	verbasFornecedores: many(verbasFornecedores),
	configuracaoVendaMarketplaces: many(configuracaoVendaMarketplace),
	contratoes: many(contrato),
	contratoOutrasDespesas: many(contratoOutrasDespesas),
	etiquetaRolos: many(etiquetaRolo),
	fornecedorXmls: many(fornecedorXml),
	contasPagars: many(contasPagar),
	fornecedorCotacaoCompras: many(fornecedorCotacaoCompra),
	seguroCtes: many(seguroCte),
}));

export const nfsRelations = relations(nfs, ({one, many}) => ({
	balancas: many(balanca),
	itensNfs: many(itensNfs),
	itensServicos: many(itensServico),
	cidade: one(cidade, {
		fields: [nfs.ciCodigo],
		references: [cidade.ciCodigo]
	}),
	cliente: one(clientes, {
		fields: [nfs.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	empresa: one(empresa, {
		fields: [nfs.empCodigo],
		references: [empresa.empCodigo]
	}),
	estado: one(estado, {
		fields: [nfs.esCodigo],
		references: [estado.esCodigo]
	}),
	condicaoPagto: one(condicaoPagto, {
		fields: [nfs.parCpCodigo],
		references: [condicaoPagto.parCpCodigo]
	}),
	tipoServico: one(tipoServicos, {
		fields: [nfs.tsCodigo],
		references: [tipoServicos.tsCodigo]
	}),
	contasRecebers: many(contasReceber),
	itensVendas: many(itensVenda),
	nfsFaturas: many(nfsFatura),
	armazenagems: many(armazenagem),
}));

export const cfeVendaRelations = relations(cfeVenda, ({one}) => ({
	cfe: one(cfe, {
		fields: [cfeVenda.cfeCodigo],
		references: [cfe.cfeCodigo]
	}),
	venda: one(vendas, {
		fields: [cfeVenda.venCodPedido],
		references: [vendas.venCodPedido]
	}),
}));

export const cfeRelations = relations(cfe, ({one, many}) => ({
	cfeVendas: many(cfeVenda),
	pagamentoCfes: many(pagamentoCfe),
	itensCfes: many(itensCfe),
	andamentoEstoques: many(andamentoEstoque),
	bairroCliente: one(bairroCliente, {
		fields: [cfe.bcCodigo],
		references: [bairroCliente.bcCodigo]
	}),
	cliente: one(clientes, {
		fields: [cfe.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	empresa: one(empresa, {
		fields: [cfe.empCodigo],
		references: [empresa.empCodigo]
	}),
	nota: one(nota, {
		fields: [cfe.nfCodigo],
		references: [nota.nfCodigo]
	}),
	sat: one(sat, {
		fields: [cfe.satCodigo],
		references: [sat.satCodigo]
	}),
	serie: one(serie, {
		fields: [cfe.sreCodigo],
		references: [serie.sreCodigo]
	}),
	terminalCaixa: one(terminalCaixa, {
		fields: [cfe.txCodigo],
		references: [terminalCaixa.txCodigo]
	}),
	venda: one(vendas, {
		fields: [cfe.venCodPedido],
		references: [vendas.venCodPedido]
	}),
}));

export const itensManutencaoRelations = relations(itensManutencao, ({one}) => ({
	manutencao: one(manutencao, {
		fields: [itensManutencao.maCodigo],
		references: [manutencao.maCodigo]
	}),
}));

export const manutencaoRelations = relations(manutencao, ({one, many}) => ({
	itensManutencaos: many(itensManutencao),
	conta: one(contas, {
		fields: [manutencao.cbCodigo],
		references: [contas.cbCodigo]
	}),
	centrocusto: one(centrocusto, {
		fields: [manutencao.ccCodigo],
		references: [centrocusto.ccCodigo]
	}),
	planoConta: one(planoContas, {
		fields: [manutencao.coCodigo],
		references: [planoContas.coCodigo]
	}),
	empresa: one(empresa, {
		fields: [manutencao.empCodigo],
		references: [empresa.empCodigo]
	}),
	fornecedor: one(fornecedor, {
		fields: [manutencao.forCodigo],
		references: [fornecedor.forCodigo]
	}),
	maqVeic: one(maqVeic, {
		fields: [manutencao.mvCodigo],
		references: [maqVeic.mvCodigo]
	}),
	condicaoPagto: one(condicaoPagto, {
		fields: [manutencao.parCpCodigo],
		references: [condicaoPagto.parCpCodigo]
	}),
	tipoPagamento: one(tipoPagamento, {
		fields: [manutencao.tpCodigo],
		references: [tipoPagamento.tpCodigo]
	}),
	movimentoFinanceiros: many(movimentoFinanceiro),
	contasPagars: many(contasPagar),
}));

export const metasItensRelations = relations(metasItens, ({one}) => ({
	cliente: one(clientes, {
		fields: [metasItens.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	metasGrupo: one(metasGrupos, {
		fields: [metasItens.mtgCodigo],
		references: [metasGrupos.mtgCodigo]
	}),
	produto: one(produto, {
		fields: [metasItens.proCodigo],
		references: [produto.proCodigo]
	}),
	representante: one(representantes, {
		fields: [metasItens.reCodigo],
		references: [representantes.reCodigo]
	}),
	unidadesAlternativa: one(unidadesAlternativas, {
		fields: [metasItens.unaCodigo],
		references: [unidadesAlternativas.unaCodigo]
	}),
	vendedor: one(vendedor, {
		fields: [metasItens.veCodigo],
		references: [vendedor.veCodigo]
	}),
}));

export const metasGruposRelations = relations(metasGrupos, ({many}) => ({
	metasItens: many(metasItens),
}));

export const representantesRelations = relations(representantes, ({one, many}) => ({
	metasItens: many(metasItens),
	comissionamentos: many(comissionamento),
	estoqueLocaisRepresentantes: many(estoqueLocaisRepresentante),
	precoDiferenciadoReps: many(precoDiferenciadoRep),
	representacaos: many(representacao),
	cidade: one(cidade, {
		fields: [representantes.ciCodigo],
		references: [cidade.ciCodigo]
	}),
	estoqueLocai: one(estoqueLocais, {
		fields: [representantes.elcCodigo],
		references: [estoqueLocais.elcCodigo]
	}),
	estado: one(estado, {
		fields: [representantes.esCodigo],
		references: [estado.esCodigo]
	}),
	funcionario: one(funcionario, {
		fields: [representantes.fuCodigo],
		references: [funcionario.fuCodigo]
	}),
	representante: one(representantes, {
		fields: [representantes.reCodigoGerente],
		references: [representantes.reCodigo],
		relationName: "representantes_reCodigoGerente_representantes_reCodigo"
	}),
	representantes: many(representantes, {
		relationName: "representantes_reCodigoGerente_representantes_reCodigo"
	}),
	regiao: one(regiao, {
		fields: [representantes.regCodigo],
		references: [regiao.reCodigo]
	}),
	usuario: one(usuario, {
		fields: [representantes.usuCodigo],
		references: [usuario.usuCodigo]
	}),
	vendedor: one(vendedor, {
		fields: [representantes.veCodigo],
		references: [vendedor.veCodigo]
	}),
	vendas_reCodigo: many(vendas, {
		relationName: "vendas_reCodigo_representantes_reCodigo"
	}),
	vendas_reCodigo: many(vendas, {
		relationName: "vendas_reCodigo_representantes_reCodigo"
	}),
	parametros: many(parametro),
	representantesPrepostos: many(representantesPreposto),
	regraBloqueioClientePorReps: many(regraBloqueioClientePorRep),
	serieXTetoFaturamentoMobiles: many(serieXTetoFaturamentoMobile),
	clientes: many(clientes),
	orcamentos: many(orcamento),
	itensVendaCortes: many(itensVendaCorte),
	representanteBloqueioProdutos: many(representanteBloqueioProduto),
}));

export const unidadesAlternativasRelations = relations(unidadesAlternativas, ({one, many}) => ({
	metasItens: many(metasItens),
	entradaMercadoriaItens: many(entradaMercadoriaItens),
	embalagems: many(embalagem),
	produto: one(produto, {
		fields: [unidadesAlternativas.proCodigo],
		references: [produto.proCodigo]
	}),
	unidade: one(unidade, {
		fields: [unidadesAlternativas.unCodigo],
		references: [unidade.unCodigo]
	}),
	itensNotas: many(itensNota),
	itensRetornoAluguels: many(itensRetornoAluguel),
	itensRepresentacaos: many(itensRepresentacao),
	itensAluguels: many(itensAluguel),
	itensEmprestimos: many(itensEmprestimo),
	itensVendas_unaCodigo: many(itensVenda, {
		relationName: "itensVenda_unaCodigo_unidadesAlternativas_unaCodigo"
	}),
	itensVendas_unaCodigoInicial: many(itensVenda, {
		relationName: "itensVenda_unaCodigoInicial_unidadesAlternativas_unaCodigo"
	}),
	embalagens: many(embalagens),
	itensOrdemServicos: many(itensOrdemServico),
	itensManutencaoEstoques: many(itensManutencaoEstoque),
	itensCompras: many(itensCompra),
	itensOrcs: many(itensOrc),
	itensPedidos: many(itensPedido),
	contratoItens: many(contratoItens),
}));

export const vendedorRelations = relations(vendedor, ({one, many}) => ({
	metasItens: many(metasItens),
	emprestimos: many(emprestimo),
	cliente: one(clientes, {
		fields: [vendedor.cliCodigo],
		references: [clientes.cliCodigo],
		relationName: "vendedor_cliCodigo_clientes_cliCodigo"
	}),
	funcionario: one(funcionario, {
		fields: [vendedor.fuCodigo],
		references: [funcionario.fuCodigo]
	}),
	grupo: one(grupos, {
		fields: [vendedor.grpCodigo],
		references: [grupos.grpCodigo]
	}),
	representantes: many(representantes),
	producaos: many(producao),
	vendas: many(vendas),
	parametros: many(parametro),
	clientes: many(clientes, {
		relationName: "clientes_veCodigo_vendedor_veCodigo"
	}),
	orcamentos: many(orcamento),
	pedidoConfeccaos: many(pedidoConfeccao),
}));

export const tipoFiscalRegraRelations = relations(tipoFiscalRegra, ({one}) => ({
	estado: one(estado, {
		fields: [tipoFiscalRegra.esCodigo],
		references: [estado.esCodigo]
	}),
	tabelaPreco: one(tabelaPreco, {
		fields: [tipoFiscalRegra.taCodigoNew],
		references: [tabelaPreco.taCodigo]
	}),
	tipoFiscal_tfCodigoNew: one(tipoFiscal, {
		fields: [tipoFiscalRegra.tfCodigoNew],
		references: [tipoFiscal.tfCodigo],
		relationName: "tipoFiscalRegra_tfCodigoNew_tipoFiscal_tfCodigo"
	}),
	tipoFiscal_tfCodigoOld: one(tipoFiscal, {
		fields: [tipoFiscalRegra.tfCodigoOld],
		references: [tipoFiscal.tfCodigo],
		relationName: "tipoFiscalRegra_tfCodigoOld_tipoFiscal_tfCodigo"
	}),
}));

export const estadoRelations = relations(estado, ({many}) => ({
	tipoFiscalRegras: many(tipoFiscalRegra),
	comissionamentos: many(comissionamento),
	notaProdutorRefs: many(notaProdutorRef),
	classificacaoFiscalCtes_esCodigoIni: many(classificacaoFiscalCte, {
		relationName: "classificacaoFiscalCte_esCodigoIni_estado_esCodigo"
	}),
	classificacaoFiscalCtes_esCodigoTer: many(classificacaoFiscalCte, {
		relationName: "classificacaoFiscalCte_esCodigoTer_estado_esCodigo"
	}),
	funcionarios: many(funcionario),
	mdfUfPercursos: many(mdfUfPercurso),
	nfs: many(nfs),
	representantes: many(representantes),
	bairros: many(bairro),
	mdfes_esCodigoCarreg: many(mdfe, {
		relationName: "mdfe_esCodigoCarreg_estado_esCodigo"
	}),
	mdfes_esCodigoDescarreg: many(mdfe, {
		relationName: "mdfe_esCodigoDescarreg_estado_esCodigo"
	}),
	representantesPrepostos: many(representantesPreposto),
	regraBloqueioClientePorReps: many(regraBloqueioClientePorRep),
	maqVeics: many(maqVeic),
	contas_cbEstadoAvalista: many(contas, {
		relationName: "contas_cbEstadoAvalista_estado_esCodigo"
	}),
	contas_cbEstadoFavorecido: many(contas, {
		relationName: "contas_cbEstadoFavorecido_estado_esCodigo"
	}),
	rtcAliqCbsIbs: many(rtcAliqCbsIbs),
	sindicatoes: many(sindicato),
	clientes: many(clientes),
	classificacaoFiscals: many(classificacaoFiscal),
	fornecedors: many(fornecedor),
	bairroClientes: many(bairroCliente),
	notaFiscalRefs: many(notaFiscalRef),
	motoristas: many(motorista),
	dadosPagamentosExternos: many(dadosPagamentosExternos),
	medicos: many(medico),
}));

export const tipoFiscalRelations = relations(tipoFiscal, ({many}) => ({
	tipoFiscalRegras_tfCodigoNew: many(tipoFiscalRegra, {
		relationName: "tipoFiscalRegra_tfCodigoNew_tipoFiscal_tfCodigo"
	}),
	tipoFiscalRegras_tfCodigoOld: many(tipoFiscalRegra, {
		relationName: "tipoFiscalRegra_tfCodigoOld_tipoFiscal_tfCodigo"
	}),
	classificacaoFiscalCtes: many(classificacaoFiscalCte),
	registrosAnalisadosRaioXES: many(registrosAnalisadosRaioX),
	clientes: many(clientes),
	classificacaoFiscals: many(classificacaoFiscal),
	fornecedors: many(fornecedor),
	rtcClassificacaoFiscals: many(rtcClassificacaoFiscal),
}));

export const extratoBancarioRelations = relations(extratoBancario, ({one, many}) => ({
	conta_cbCodigo: one(contas, {
		fields: [extratoBancario.cbCodigo],
		references: [contas.cbCodigo],
		relationName: "extratoBancario_cbCodigo_contas_cbCodigo"
	}),
	conta_cbCodigoTransferencia: one(contas, {
		fields: [extratoBancario.cbCodigoTransferencia],
		references: [contas.cbCodigo],
		relationName: "extratoBancario_cbCodigoTransferencia_contas_cbCodigo"
	}),
	caixa: one(caixa, {
		fields: [extratoBancario.cxCodigo],
		references: [caixa.cxCodigo]
	}),
	dadosPagamentosExterno: one(dadosPagamentosExternos, {
		fields: [extratoBancario.dpeCodigoCancelado],
		references: [dadosPagamentosExternos.dpeCodigo]
	}),
	extratoBancario_extAnulado: one(extratoBancario, {
		fields: [extratoBancario.extAnulado],
		references: [extratoBancario.extCodigo],
		relationName: "extratoBancario_extAnulado_extratoBancario_extCodigo"
	}),
	extratoBancarios_extAnulado: many(extratoBancario, {
		relationName: "extratoBancario_extAnulado_extratoBancario_extCodigo"
	}),
	extratoBancario_extCodigoAgrupador: one(extratoBancario, {
		fields: [extratoBancario.extCodigoAgrupador],
		references: [extratoBancario.extCodigo],
		relationName: "extratoBancario_extCodigoAgrupador_extratoBancario_extCodigo"
	}),
	extratoBancarios_extCodigoAgrupador: many(extratoBancario, {
		relationName: "extratoBancario_extCodigoAgrupador_extratoBancario_extCodigo"
	}),
	regrasConciliacaoAutomatica: one(regrasConciliacaoAutomatica, {
		fields: [extratoBancario.rcaCodigo],
		references: [regrasConciliacaoAutomatica.rcaCodigo]
	}),
}));

export const caixaRelations = relations(caixa, ({one, many}) => ({
	extratoBancarios: many(extratoBancario),
	agrupamentoBancarios_cxCodigo: many(agrupamentoBancario, {
		relationName: "agrupamentoBancario_cxCodigo_caixa_cxCodigo"
	}),
	agrupamentoBancarios_cxCodigo: many(agrupamentoBancario, {
		relationName: "agrupamentoBancario_cxCodigo_caixa_cxCodigo"
	}),
	boleto: one(boleto, {
		fields: [caixa.boCodigo],
		references: [boleto.boCodigo]
	}),
	conta: one(contas, {
		fields: [caixa.cbCodigo],
		references: [contas.cbCodigo]
	}),
	chequePre: one(chequePre, {
		fields: [caixa.chCodigo],
		references: [chequePre.chCodigo]
	}),
	planoConta: one(planoContas, {
		fields: [caixa.coCodigo],
		references: [planoContas.coCodigo]
	}),
	baixaCreceber: one(baixaCreceber, {
		fields: [caixa.crCodigo],
		references: [baixaCreceber.crCodigo]
	}),
	empresa: one(empresa, {
		fields: [caixa.empCodigo],
		references: [empresa.empCodigo]
	}),
	baixaCpagar: one(baixaCpagar, {
		fields: [caixa.cpCodigo],
		references: [baixaCpagar.cpCodigo]
	}),
}));

export const regrasConciliacaoAutomaticaRelations = relations(regrasConciliacaoAutomatica, ({one, many}) => ({
	extratoBancarios: many(extratoBancario),
	banco: one(bancos, {
		fields: [regrasConciliacaoAutomatica.banCodigo],
		references: [bancos.banCodigo]
	}),
	conta: one(contas, {
		fields: [regrasConciliacaoAutomatica.cbCodigo],
		references: [contas.cbCodigo]
	}),
	centrocusto: one(centrocusto, {
		fields: [regrasConciliacaoAutomatica.ccCodigo],
		references: [centrocusto.ccCodigo]
	}),
	cliente: one(clientes, {
		fields: [regrasConciliacaoAutomatica.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	planoConta: one(planoContas, {
		fields: [regrasConciliacaoAutomatica.coCodigo],
		references: [planoContas.coCodigo]
	}),
	fornecedor: one(fornecedor, {
		fields: [regrasConciliacaoAutomatica.forCodigo],
		references: [fornecedor.forCodigo]
	}),
	tipoPagamento: one(tipoPagamento, {
		fields: [regrasConciliacaoAutomatica.tpCodigo],
		references: [tipoPagamento.tpCodigo]
	}),
}));

export const representadoRelations = relations(representado, ({one, many}) => ({
	cliente: one(clientes, {
		fields: [representado.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	representacaos: many(representacao),
}));

export const eventoHoleriteRelations = relations(eventoHolerite, ({one, many}) => ({
	eventoFolha: one(eventoFolha, {
		fields: [eventoHolerite.efCodigo],
		references: [eventoFolha.efCodigo]
	}),
	folhaPgto: one(folhaPgto, {
		fields: [eventoHolerite.foCodigo],
		references: [folhaPgto.foCodigo]
	}),
	holerite: one(holerite, {
		fields: [eventoHolerite.hoCodigo],
		references: [holerite.hoCodigo]
	}),
	contasPagar: one(contasPagar, {
		fields: [eventoHolerite.cpCodigo],
		references: [contasPagar.cpCodigo]
	}),
	contasRecebers: many(contasReceber),
	movimentoFinanceiros: many(movimentoFinanceiro),
}));

export const eventoFolhaRelations = relations(eventoFolha, ({one, many}) => ({
	eventoHolerites: many(eventoHolerite),
	cliente: one(clientes, {
		fields: [eventoFolha.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	fornecedor: one(fornecedor, {
		fields: [eventoFolha.forCodigo],
		references: [fornecedor.forCodigo]
	}),
	tipoPagamento: one(tipoPagamento, {
		fields: [eventoFolha.tpCodigo],
		references: [tipoPagamento.tpCodigo]
	}),
	folhaLancamentos: many(folhaLancamento),
	eventoFuncionarios: many(eventoFuncionario),
}));

export const folhaPgtoRelations = relations(folhaPgto, ({one, many}) => ({
	eventoHolerites: many(eventoHolerite),
	empresa: one(empresa, {
		fields: [folhaPgto.empCodigo],
		references: [empresa.empCodigo]
	}),
	holerites: many(holerite),
	movimentoFinanceiros: many(movimentoFinanceiro),
	contasPagars: many(contasPagar),
}));

export const holeriteRelations = relations(holerite, ({one, many}) => ({
	eventoHolerites: many(eventoHolerite),
	folhaPgto: one(folhaPgto, {
		fields: [holerite.foCodigo],
		references: [folhaPgto.foCodigo]
	}),
	funcionario: one(funcionario, {
		fields: [holerite.fuCodigo],
		references: [funcionario.fuCodigo]
	}),
	contasPagar: one(contasPagar, {
		fields: [holerite.cpCodigoFgts],
		references: [contasPagar.cpCodigo]
	}),
}));

export const contasPagarRelations = relations(contasPagar, ({one, many}) => ({
	eventoHolerites: many(eventoHolerite),
	itensLacPagars_cpCodigo: many(itensLacPagar, {
		relationName: "itensLacPagar_cpCodigo_contasPagar_cpCodigo"
	}),
	itensLacPagars_cpCodigo: many(itensLacPagar, {
		relationName: "itensLacPagar_cpCodigo_contasPagar_cpCodigo"
	}),
	projetos_cpCodigoComissaoPrevenda: many(projetos, {
		relationName: "projetos_cpCodigoComissaoPrevenda_contasPagar_cpCodigo"
	}),
	projetos_cpCodigoComissaoServico: many(projetos, {
		relationName: "projetos_cpCodigoComissaoServico_contasPagar_cpCodigo"
	}),
	projetos_cpCodigoComissaoVenda: many(projetos, {
		relationName: "projetos_cpCodigoComissaoVenda_contasPagar_cpCodigo"
	}),
	baixaCrecebers: many(baixaCreceber),
	holerites: many(holerite),
	antecipacaoRecebiveisParcelas: many(antecipacaoRecebiveisParcelas),
	vendaMarketplaceDespesas: many(vendaMarketplaceDespesas),
	baixaCpagars: many(baixaCpagar, {
		relationName: "baixaCpagar_cpCodigoCp_contasPagar_cpCodigo"
	}),
	carteiraCobranca: one(carteiraCobranca, {
		fields: [contasPagar.cacCodigo],
		references: [carteiraCobranca.cacCodigo]
	}),
	carregamento: one(carregamento, {
		fields: [contasPagar.carCodigo],
		references: [carregamento.carCodigo]
	}),
	conta: one(contas, {
		fields: [contasPagar.cbCodigo],
		references: [contas.cbCodigo]
	}),
	centrocusto: one(centrocusto, {
		fields: [contasPagar.ccCodigo],
		references: [centrocusto.ccCodigo]
	}),
	contrato: one(contrato, {
		fields: [contasPagar.ccvCodigo],
		references: [contrato.ccvCodigo]
	}),
	contratoEncerramento: one(contratoEncerramento, {
		fields: [contasPagar.cenCodigo],
		references: [contratoEncerramento.cenCodigo]
	}),
	compra: one(compra, {
		fields: [contasPagar.cmpCodigo],
		references: [compra.cmpCodigo]
	}),
	planoConta: one(planoContas, {
		fields: [contasPagar.coCodigo],
		references: [planoContas.coCodigo]
	}),
	empresa: one(empresa, {
		fields: [contasPagar.empCodigo],
		references: [empresa.empCodigo]
	}),
	folhaLancamento: one(folhaLancamento, {
		fields: [contasPagar.flCodigo],
		references: [folhaLancamento.flCodigo]
	}),
	folhaPgto: one(folhaPgto, {
		fields: [contasPagar.foCodigo],
		references: [folhaPgto.foCodigo]
	}),
	fornecedor: one(fornecedor, {
		fields: [contasPagar.forCodigo],
		references: [fornecedor.forCodigo]
	}),
	imobilizado: one(imobilizado, {
		fields: [contasPagar.imCodigo],
		references: [imobilizado.imCodigo]
	}),
	lancamentoVeiculo: one(lancamentoVeiculo, {
		fields: [contasPagar.lvCodigo],
		references: [lancamentoVeiculo.lvCodigo]
	}),
	manutencao: one(manutencao, {
		fields: [contasPagar.maCodigo],
		references: [manutencao.maCodigo]
	}),
	moeda: one(moeda, {
		fields: [contasPagar.moeCodigo],
		references: [moeda.moeCodigo]
	}),
	maqVeic: one(maqVeic, {
		fields: [contasPagar.mvCodigo],
		references: [maqVeic.mvCodigo]
	}),
	tipoPagamento: one(tipoPagamento, {
		fields: [contasPagar.tpCodigo],
		references: [tipoPagamento.tpCodigo]
	}),
	transportadora: one(transportadora, {
		fields: [contasPagar.trCodigo],
		references: [transportadora.trCodigo]
	}),
	contasPagar: one(contasPagar, {
		fields: [contasPagar.cpVinculo],
		references: [contasPagar.cpCodigo],
		relationName: "contasPagar_cpVinculo_contasPagar_cpCodigo"
	}),
	contasPagars: many(contasPagar, {
		relationName: "contasPagar_cpVinculo_contasPagar_cpCodigo"
	}),
	baixaCpagar: one(baixaCpagar, {
		fields: [contasPagar.cpVinculoVariacao],
		references: [baixaCpagar.cpCodigo],
		relationName: "contasPagar_cpVinculoVariacao_baixaCpagar_cpCodigo"
	}),
	pedido: one(pedido, {
		fields: [contasPagar.peCodigo],
		references: [pedido.peCodigo]
	}),
}));

export const cargaEstoqueOutroLocalRelations = relations(cargaEstoqueOutroLocal, ({one}) => ({
	carregamento: one(carregamento, {
		fields: [cargaEstoqueOutroLocal.carCodigo],
		references: [carregamento.carCodigo]
	}),
	estoqueLocai: one(estoqueLocais, {
		fields: [cargaEstoqueOutroLocal.elcCodigo],
		references: [estoqueLocais.elcCodigo]
	}),
	manutencaoEstoque: one(manutencaoEstoque, {
		fields: [cargaEstoqueOutroLocal.manCodigo],
		references: [manutencaoEstoque.manCodigo]
	}),
	produto: one(produto, {
		fields: [cargaEstoqueOutroLocal.proCodigo],
		references: [produto.proCodigo]
	}),
}));

export const carregamentoRelations = relations(carregamento, ({one, many}) => ({
	cargaEstoqueOutroLocals: many(cargaEstoqueOutroLocal),
	recursosCargas: many(recursosCarga),
	pesagemCarregamentos: many(pesagemCarregamento, {
		relationName: "pesagemCarregamento_carCodigo_carregamento_carCodigo"
	}),
	entregaItens: many(entregaItens),
	itensCarregamentos: many(itensCarregamento),
	pedidosReembarcados_carCodigo: many(pedidosReembarcados, {
		relationName: "pedidosReembarcados_carCodigo_carregamento_carCodigo"
	}),
	pedidosReembarcados_carCodigoOrigemPedido: many(pedidosReembarcados, {
		relationName: "pedidosReembarcados_carCodigoOrigemPedido_carregamento_carCodigo"
	}),
	contasRecebers: many(contasReceber),
	conferenciaFinanceiraCargases: many(conferenciaFinanceiraCargas),
	embalagens: many(embalagens),
	conferenciaRetornos: many(conferenciaRetorno),
	carregamento: one(carregamento, {
		fields: [carregamento.carCodigo],
		references: [carregamento.carCodigo],
		relationName: "carregamento_carCodigo_carregamento_carCodigo"
	}),
	carregamentos: many(carregamento, {
		relationName: "carregamento_carCodigo_carregamento_carCodigo"
	}),
	estoqueLocai_elcCodigo: one(estoqueLocais, {
		fields: [carregamento.elcCodigo],
		references: [estoqueLocais.elcCodigo],
		relationName: "carregamento_elcCodigo_estoqueLocais_elcCodigo"
	}),
	estoqueLocai_elcCodigoProntaEntrega: one(estoqueLocais, {
		fields: [carregamento.elcCodigoProntaEntrega],
		references: [estoqueLocais.elcCodigo],
		relationName: "carregamento_elcCodigoProntaEntrega_estoqueLocais_elcCodigo"
	}),
	empresa: one(empresa, {
		fields: [carregamento.empCodigo],
		references: [empresa.empCodigo]
	}),
	log: one(log, {
		fields: [carregamento.logCodigoBloqueio],
		references: [log.logCodigo]
	}),
	motorista: one(motorista, {
		fields: [carregamento.motCodigo],
		references: [motorista.motCodigo]
	}),
	maqVeic: one(maqVeic, {
		fields: [carregamento.mvCodigo],
		references: [maqVeic.mvCodigo]
	}),
	pesagemCarregamento: one(pesagemCarregamento, {
		fields: [carregamento.pcCodigo],
		references: [pesagemCarregamento.pcCodigo],
		relationName: "carregamento_pcCodigo_pesagemCarregamento_pcCodigo"
	}),
	vendasAjustes: many(vendasAjustes),
	contasPagars: many(contasPagar),
	carregamentoProntaEntregas: many(carregamentoProntaEntrega),
}));

export const estoqueLocaisRelations = relations(estoqueLocais, ({one, many}) => ({
	cargaEstoqueOutroLocals: many(cargaEstoqueOutroLocal),
	requisicaoAtualizaEstoques: many(requisicaoAtualizaEstoque),
	tempAndamentoEstoques: many(tempAndamentoEstoque),
	estoqueLocaisRepresentantes: many(estoqueLocaisRepresentante),
	inventariosEstoques: many(inventariosEstoque),
	embalagensInventarios: many(embalagensInventario),
	itensComposicaoProducaos: many(itensComposicaoProducao),
	itensProducaos: many(itensProducao),
	entregaItens: many(entregaItens),
	representantes: many(representantes),
	opItensConsumidos: many(opItensConsumidos),
	estoqueLocaisSaldoLotes: many(estoqueLocaisSaldoLote),
	producaos: many(producao),
	vendas_elcCodigo: many(vendas, {
		relationName: "vendas_elcCodigo_estoqueLocais_elcCodigo"
	}),
	vendas_elcCodigoPicking: many(vendas, {
		relationName: "vendas_elcCodigoPicking_estoqueLocais_elcCodigo"
	}),
	parametros_elcCodigoAuxiliar: many(parametro, {
		relationName: "parametro_elcCodigoAuxiliar_estoqueLocais_elcCodigo"
	}),
	parametros_elcCodigoPesqProduto1: many(parametro, {
		relationName: "parametro_elcCodigoPesqProduto1_estoqueLocais_elcCodigo"
	}),
	parametros_elcCodigoPesqProduto2: many(parametro, {
		relationName: "parametro_elcCodigoPesqProduto2_estoqueLocais_elcCodigo"
	}),
	parametros_elcCodigoTransAutomatica: many(parametro, {
		relationName: "parametro_elcCodigoTransAutomatica_estoqueLocais_elcCodigo"
	}),
	parametros_localEstoqueEcommerce: many(parametro, {
		relationName: "parametro_localEstoqueEcommerce_estoqueLocais_elcCodigo"
	}),
	parametros_localEstoqueProducaoConsumo: many(parametro, {
		relationName: "parametro_localEstoqueProducaoConsumo_estoqueLocais_elcCodigo"
	}),
	parametros_localEstoqueProducao: many(parametro, {
		relationName: "parametro_localEstoqueProducao_estoqueLocais_elcCodigo"
	}),
	parametros_elcCodigoCheckout: many(parametro, {
		relationName: "parametro_elcCodigoCheckout_estoqueLocais_elcCodigo"
	}),
	embalagens: many(embalagens),
	aluguels: many(aluguel),
	correcaoEstoques: many(correcaoEstoque),
	entradaMercadorias: many(entradaMercadoria),
	movimentacaoVolumes_elcCodigoDestino: many(movimentacaoVolumes, {
		relationName: "movimentacaoVolumes_elcCodigoDestino_estoqueLocais_elcCodigo"
	}),
	movimentacaoVolumes_elcCodigo: many(movimentacaoVolumes, {
		relationName: "movimentacaoVolumes_elcCodigo_estoqueLocais_elcCodigo"
	}),
	andamentoEstoques: many(andamentoEstoque),
	histAndProdutos: many(histAndProduto),
	conferenciaRetornos: many(conferenciaRetorno),
	estoqueLocaisSaldos: many(estoqueLocaisSaldo),
	manutencaoEstoques: many(manutencaoEstoque),
	compras: many(compra),
	carregamentos_elcCodigo: many(carregamento, {
		relationName: "carregamento_elcCodigo_estoqueLocais_elcCodigo"
	}),
	carregamentos_elcCodigoProntaEntrega: many(carregamento, {
		relationName: "carregamento_elcCodigoProntaEntrega_estoqueLocais_elcCodigo"
	}),
	orcamentos: many(orcamento),
	tipoOperacaos: many(tipoOperacao),
	cliente: one(clientes, {
		fields: [estoqueLocais.cliCodigoTransferencia],
		references: [clientes.cliCodigo]
	}),
	empresa: one(empresa, {
		fields: [estoqueLocais.empCodigo],
		references: [empresa.empCodigo]
	}),
	serie: one(serie, {
		fields: [estoqueLocais.sreCodigoTransferencia],
		references: [serie.sreCodigo]
	}),
	tabelaPreco: one(tabelaPreco, {
		fields: [estoqueLocais.taCodigoTransferencia],
		references: [tabelaPreco.taCodigo]
	}),
	armazenagems: many(armazenagem),
	estoqueLocalFechamentos: many(estoqueLocalFechamento),
	opItensProduzidos: many(opItensProduzidos),
	tipoPedidoDemanders: many(tipoPedidoDemander),
	motoristas: many(motorista),
	carregamentoProntaEntregas: many(carregamentoProntaEntrega),
}));

export const manutencaoEstoqueRelations = relations(manutencaoEstoque, ({one, many}) => ({
	cargaEstoqueOutroLocals: many(cargaEstoqueOutroLocal),
	vendas: many(vendas),
	notaManutencaos: many(notaManutencao),
	itensManutencaoEstoques: many(itensManutencaoEstoque),
	movimentacaoVolumes: many(movimentacaoVolumes),
	centrocusto: one(centrocusto, {
		fields: [manutencaoEstoque.ccCodigo],
		references: [centrocusto.ccCodigo]
	}),
	estoqueLocai: one(estoqueLocais, {
		fields: [manutencaoEstoque.elcCodigoDestino],
		references: [estoqueLocais.elcCodigo]
	}),
	empresa: one(empresa, {
		fields: [manutencaoEstoque.empCodigo],
		references: [empresa.empCodigo]
	}),
	operacaoEstoque: one(operacaoEstoque, {
		fields: [manutencaoEstoque.opCodigo],
		references: [operacaoEstoque.opCodigo]
	}),
	usuario: one(usuario, {
		fields: [manutencaoEstoque.usuCodigo],
		references: [usuario.usuCodigo]
	}),
}));

export const disparosProgramadosAgendaRelations = relations(disparosProgramadosAgenda, ({one}) => ({
	disparosProgramado: one(disparosProgramados, {
		fields: [disparosProgramadosAgenda.dipCodigo],
		references: [disparosProgramados.dipCodigo]
	}),
}));

export const disparosProgramadosRelations = relations(disparosProgramados, ({one, many}) => ({
	disparosProgramadosAgenda: many(disparosProgramadosAgenda),
	empresa: one(empresa, {
		fields: [disparosProgramados.empCodigo],
		references: [empresa.empCodigo]
	}),
	integracoesYzidro: one(integracoesYzidro, {
		fields: [disparosProgramados.iyzCodigo],
		references: [integracoesYzidro.iyzCodigo]
	}),
	disparosProgramadosWhatsapps: many(disparosProgramadosWhatsapp),
	disparosProgramadosCampos: many(disparosProgramadosCampos),
}));

export const agendaRelations = relations(agenda, ({one}) => ({
	cliente: one(clientes, {
		fields: [agenda.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	funcionario: one(funcionario, {
		fields: [agenda.fuCodigo],
		references: [funcionario.fuCodigo]
	}),
}));

export const funcionarioRelations = relations(funcionario, ({one, many}) => ({
	agenda: many(agenda),
	itensMaqVeicAndamentos: many(itensMaqVeicAndamento),
	engContratoes: many(engContrato),
	vendasHistoricoStatuses: many(vendasHistoricoStatus),
	itensOperadorGers: many(itensOperadorGer),
	pabxRamais: many(pabxRamais),
	conta: one(contas, {
		fields: [funcionario.cbCodigoPag],
		references: [contas.cbCodigo]
	}),
	contaCorrente_cbCodigoPis: one(contaCorrente, {
		fields: [funcionario.cbCodigoPis],
		references: [contaCorrente.cbCodigo],
		relationName: "funcionario_cbCodigoPis_contaCorrente_cbCodigo"
	}),
	contaCorrente_cbCodigoSal: one(contaCorrente, {
		fields: [funcionario.cbCodigoSal],
		references: [contaCorrente.cbCodigo],
		relationName: "funcionario_cbCodigoSal_contaCorrente_cbCodigo"
	}),
	cargo: one(cargo, {
		fields: [funcionario.cgCodigo],
		references: [cargo.cgCodigo]
	}),
	cidade_ciCodigo: one(cidade, {
		fields: [funcionario.ciCodigo],
		references: [cidade.ciCodigo],
		relationName: "funcionario_ciCodigo_cidade_ciCodigo"
	}),
	cliente: one(clientes, {
		fields: [funcionario.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	deficiencia: one(deficiencia, {
		fields: [funcionario.defCodigo],
		references: [deficiencia.defCodigo]
	}),
	departamento: one(departamento, {
		fields: [funcionario.depCodigo],
		references: [departamento.depCodigo]
	}),
	estadoCivil: one(estadoCivil, {
		fields: [funcionario.ecCodigo],
		references: [estadoCivil.ecCodigo]
	}),
	empresa: one(empresa, {
		fields: [funcionario.empCodigo],
		references: [empresa.empCodigo]
	}),
	estado: one(estado, {
		fields: [funcionario.esCodigo],
		references: [estado.esCodigo]
	}),
	fornecedor: one(fornecedor, {
		fields: [funcionario.forCodigo],
		references: [fornecedor.forCodigo]
	}),
	centrocusto: one(centrocusto, {
		fields: [funcionario.fuCodCentroCusto],
		references: [centrocusto.ccCodigo]
	}),
	cidade_fuNaturalidade: one(cidade, {
		fields: [funcionario.fuNaturalidade],
		references: [cidade.ciCodigo],
		relationName: "funcionario_fuNaturalidade_cidade_ciCodigo"
	}),
	sindicato: one(sindicato, {
		fields: [funcionario.sdCodigo],
		references: [sindicato.sdCodigo]
	}),
	setor: one(setor, {
		fields: [funcionario.setCodigo],
		references: [setor.setCodigo]
	}),
	tipoPagamento: one(tipoPagamento, {
		fields: [funcionario.tpCodigoPag],
		references: [tipoPagamento.tpCodigo]
	}),
	solicitacaoCompras: many(solicitacaoCompra),
	itensServicos: many(itensServico),
	whatsappProtocolos: many(whatsappProtocolos),
	funcionarioOperadorWhats: many(funcionarioOperadorWhats),
	historicoOcorrenciaCrms: many(historicoOcorrenciaCrm),
	projetoEtapas_fuCodigoResp1: many(projetoEtapa, {
		relationName: "projetoEtapa_fuCodigoResp1_funcionario_fuCodigo"
	}),
	projetoEtapas_fuCodigoResp2: many(projetoEtapa, {
		relationName: "projetoEtapa_fuCodigoResp2_funcionario_fuCodigo"
	}),
	vendedors: many(vendedor),
	representantes: many(representantes),
	pedidos: many(pedido),
	dependentes: many(dependente),
	ocorrenciasCrms: many(ocorrenciasCrm),
	itensCursos: many(itensCurso),
	cargaHorarias: many(cargaHoraria),
	ctes: many(cte),
	projetoApontamentos: many(projetoApontamentos),
	mdfes: many(mdfe),
	feriasNotificacoes: many(feriasNotificacoes),
	projetos_fuCodigoPrevend: many(projetos, {
		relationName: "projetos_fuCodigoPrevend_funcionario_fuCodigo"
	}),
	projetos_fuCodigoResponsavel: many(projetos, {
		relationName: "projetos_fuCodigoResponsavel_funcionario_fuCodigo"
	}),
	projetos_fuCodigoVendedor: many(projetos, {
		relationName: "projetos_fuCodigoVendedor_funcionario_fuCodigo"
	}),
	projetos_fuValidadorProj: many(projetos, {
		relationName: "projetos_fuValidadorProj_funcionario_fuCodigo"
	}),
	vendas: many(vendas),
	parametros_fuCodigoResponsavelTicket: many(parametro, {
		relationName: "parametro_fuCodigoResponsavelTicket_funcionario_fuCodigo"
	}),
	parametros_fuCodigoSolicitacao: many(parametro, {
		relationName: "parametro_fuCodigoSolicitacao_funcionario_fuCodigo"
	}),
	folhaLancamentos: many(folhaLancamento),
	funcOrdemServicos: many(funcOrdemServico),
	holerites: many(holerite),
	almoxarifados: many(almoxarifado),
	eventoFuncionarios: many(eventoFuncionario),
	itensCotacaoCompras: many(itensCotacaoCompra),
	opItensProduzidos: many(opItensProduzidos),
	motoristas: many(motorista),
	whatsappProtocolosFuncionarios: many(whatsappProtocolosFuncionario),
	usuarios: many(usuario),
	pedidoCotacaos_fuCodigoAnalise: many(pedidoCotacao, {
		relationName: "pedidoCotacao_fuCodigoAnalise_funcionario_fuCodigo"
	}),
	pedidoCotacaos_fuCodigoAprovacao: many(pedidoCotacao, {
		relationName: "pedidoCotacao_fuCodigoAprovacao_funcionario_fuCodigo"
	}),
	recalculoParcelas: many(recalculoParcelas),
	ferias: many(ferias),
}));

export const inventarioEstoqueContagemRelations = relations(inventarioEstoqueContagem, ({one}) => ({
	log: one(log, {
		fields: [inventarioEstoqueContagem.logCodigo],
		references: [log.logCodigo]
	}),
	produto: one(produto, {
		fields: [inventarioEstoqueContagem.proCodigo],
		references: [produto.proCodigo]
	}),
	usuario: one(usuario, {
		fields: [inventarioEstoqueContagem.usuCodigo],
		references: [usuario.usuCodigo]
	}),
}));

export const logRelations = relations(log, ({one, many}) => ({
	inventarioEstoqueContagems: many(inventarioEstoqueContagem),
	logAuxiliarCarregamentos: many(logAuxiliarCarregamento),
	notas: many(nota),
	inventariosEstoqueContadores: many(inventariosEstoqueContadores),
	permissoesConcedidasLogsAcessos: many(permissoesConcedidasLogsAcesso),
	historicoRaioXES: many(historicoRaioX),
	contasRecebers: many(contasReceber),
	empresa: one(empresa, {
		fields: [log.empCodigo],
		references: [empresa.empCodigo]
	}),
	usuario: one(usuario, {
		fields: [log.usuCodigo],
		references: [usuario.usuCodigo]
	}),
	bloqueioTelas: many(bloqueioTelas),
	historicoLogs: many(historicoLog),
	vendas_logCodigoFaturamento: many(vendas, {
		relationName: "vendas_logCodigoFaturamento_log_logCodigo"
	}),
	vendas_logCodigo: many(vendas, {
		relationName: "vendas_logCodigo_log_logCodigo"
	}),
	parametros: many(parametro),
	logAuxiliarVendas: many(logAuxiliarVenda),
	produtos: many(produto),
	notaFaturas: many(notaFatura),
	compras: many(compra),
	baixaCreditos: many(baixaCredito),
	carregamentos: many(carregamento),
	clientes: many(clientes),
	inventariosEstoqueLeituras: many(inventariosEstoqueLeituras),
	terminalCaixas: many(terminalCaixa),
	historicoInteligenciaFiscals: many(historicoInteligenciaFiscal),
	dadosPagamentosExternos_logCodigoCriacao: many(dadosPagamentosExternos, {
		relationName: "dadosPagamentosExternos_logCodigoCriacao_log_logCodigo"
	}),
	dadosPagamentosExternos_logCodigoExclusao: many(dadosPagamentosExternos, {
		relationName: "dadosPagamentosExternos_logCodigoExclusao_log_logCodigo"
	}),
	dadosPagamentosExternos_logCodigo: many(dadosPagamentosExternos, {
		relationName: "dadosPagamentosExternos_logCodigo_log_logCodigo"
	}),
}));

export const contatoAssinaturasRelations = relations(contatoAssinaturas, ({one}) => ({
	assinatura: one(assinaturas, {
		fields: [contatoAssinaturas.assCodigo],
		references: [assinaturas.assCodigo]
	}),
	contato: one(contatos, {
		fields: [contatoAssinaturas.conCodigo],
		references: [contatos.conCodigo]
	}),
}));

export const assinaturasRelations = relations(assinaturas, ({many}) => ({
	contatoAssinaturas: many(contatoAssinaturas),
}));

export const contatosRelations = relations(contatos, ({one, many}) => ({
	contatoAssinaturas: many(contatoAssinaturas),
	pabxCdrs: many(pabxCdr),
	cliente: one(clientes, {
		fields: [contatos.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	fornecedor: one(fornecedor, {
		fields: [contatos.forCodigo],
		references: [fornecedor.forCodigo]
	}),
	funcao: one(funcao, {
		fields: [contatos.funCodigo],
		references: [funcao.funCodigo]
	}),
	usuario: one(usuario, {
		fields: [contatos.usuCodigoFuncao],
		references: [usuario.usuCodigo]
	}),
	whatsappProtocolos: many(whatsappProtocolos),
	historicoOcorrenciaCrms: many(historicoOcorrenciaCrm),
	ocorrenciasCrms: many(ocorrenciasCrm),
	notaContatoes: many(notaContato),
	contatosAplicativos: many(contatosAplicativos),
	vendas: many(vendas),
	npsHistoricos: many(npsHistorico),
	prospeccaos: many(prospeccao),
}));

export const requisicaoAtualizaEstoqueRelations = relations(requisicaoAtualizaEstoque, ({one, many}) => ({
	estoqueLocai: one(estoqueLocais, {
		fields: [requisicaoAtualizaEstoque.elcCodigo],
		references: [estoqueLocais.elcCodigo]
	}),
	lote: one(lote, {
		fields: [requisicaoAtualizaEstoque.ltCodigo],
		references: [lote.ltCodigo]
	}),
	produto: one(produto, {
		fields: [requisicaoAtualizaEstoque.proCodigo],
		references: [produto.proCodigo]
	}),
	requisicaoAtualizaEstoque: one(requisicaoAtualizaEstoque, {
		fields: [requisicaoAtualizaEstoque.raeCodigoPai],
		references: [requisicaoAtualizaEstoque.raeCodigo],
		relationName: "requisicaoAtualizaEstoque_raeCodigoPai_requisicaoAtualizaEstoque_raeCodigo"
	}),
	requisicaoAtualizaEstoques: many(requisicaoAtualizaEstoque, {
		relationName: "requisicaoAtualizaEstoque_raeCodigoPai_requisicaoAtualizaEstoque_raeCodigo"
	}),
}));

export const engItensFaturarRelations = relations(engItensFaturar, ({one}) => ({
	engAndamento: one(engAndamento, {
		fields: [engItensFaturar.engCodigoAndamento],
		references: [engAndamento.engCodigoAndamento]
	}),
	produto: one(produto, {
		fields: [engItensFaturar.proCodigo],
		references: [produto.proCodigo]
	}),
}));

export const engAndamentoRelations = relations(engAndamento, ({one, many}) => ({
	engItensFaturars: many(engItensFaturar),
	engServicosFaturars: many(engServicosFaturar),
	contasRecebers: many(contasReceber),
	engFaturaAndamentos: many(engFaturaAndamento),
	engEtapa: one(engEtapas, {
		fields: [engAndamento.engCodigoEtapa],
		references: [engEtapas.engCodigoEtapa]
	}),
}));

export const comissionamentoRelations = relations(comissionamento, ({one, many}) => ({
	cidade: one(cidade, {
		fields: [comissionamento.ciCodigo],
		references: [cidade.ciCodigo]
	}),
	cliente: one(clientes, {
		fields: [comissionamento.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	estado: one(estado, {
		fields: [comissionamento.esCodigo],
		references: [estado.esCodigo]
	}),
	grupoCliente: one(grupoCliente, {
		fields: [comissionamento.grcCodigo],
		references: [grupoCliente.grcCodigo]
	}),
	grupo: one(grupos, {
		fields: [comissionamento.grpCodigo],
		references: [grupos.grpCodigo]
	}),
	marca: one(marca, {
		fields: [comissionamento.maCodigo],
		references: [marca.maCodigo]
	}),
	condicaoPagto: one(condicaoPagto, {
		fields: [comissionamento.parCpCodigo],
		references: [condicaoPagto.parCpCodigo]
	}),
	produto: one(produto, {
		fields: [comissionamento.proCodigo],
		references: [produto.proCodigo]
	}),
	representante: one(representantes, {
		fields: [comissionamento.reCodigo],
		references: [representantes.reCodigo]
	}),
	regiao: one(regiao, {
		fields: [comissionamento.regCodigo],
		references: [regiao.reCodigo]
	}),
	tabelaPreco: one(tabelaPreco, {
		fields: [comissionamento.taCodigo],
		references: [tabelaPreco.taCodigo]
	}),
	tipoPagamento: one(tipoPagamento, {
		fields: [comissionamento.tpCodigo],
		references: [tipoPagamento.tpCodigo]
	}),
	itensVendas: many(itensVenda),
}));

export const cidadeRelations = relations(cidade, ({one, many}) => ({
	comissionamentos: many(comissionamento),
	funcionarios_ciCodigo: many(funcionario, {
		relationName: "funcionario_ciCodigo_cidade_ciCodigo"
	}),
	funcionarios_fuNaturalidade: many(funcionario, {
		relationName: "funcionario_fuNaturalidade_cidade_ciCodigo"
	}),
	nfs: many(nfs),
	representantes: many(representantes),
	bairros: many(bairro),
	parametroNfs: many(parametroNfs),
	regraBloqueioClientePorReps: many(regraBloqueioClientePorRep),
	maqVeics: many(maqVeic),
	contas_cbCidadeAvalista: many(contas, {
		relationName: "contas_cbCidadeAvalista_cidade_ciCodigo"
	}),
	contas_cbCidadeFavorecido: many(contas, {
		relationName: "contas_cbCidadeFavorecido_cidade_ciCodigo"
	}),
	rtcAliqCbsIbs: many(rtcAliqCbsIbs),
	webserviceNf: one(webserviceNfs, {
		fields: [cidade.wnsCodigo],
		references: [webserviceNfs.wnsCodigo]
	}),
	clientes: many(clientes),
	bairroClientes: many(bairroCliente),
	motoristas: many(motorista),
	dadosPagamentosExternos: many(dadosPagamentosExternos),
}));

export const grupoClienteRelations = relations(grupoCliente, ({many}) => ({
	comissionamentos: many(comissionamento),
	projetos: many(projetos),
	clientes: many(clientes),
	prospeccaos: many(prospeccao),
}));

export const gruposRelations = relations(grupos, ({many}) => ({
	comissionamentos: many(comissionamento),
	configGrupoComplementoIfoods: many(configGrupoComplementoIfood),
	inventariosEstoques: many(inventariosEstoque),
	categoriasComplementosIfoods: many(categoriasComplementosIfood),
	vendedors: many(vendedor),
	catalogosProdutosIfoods: many(catalogosProdutosIfood),
	categoriasIfoods: many(categoriasIfood),
	produtos: many(produto),
	subGrupos: many(subGrupo),
}));

export const marcaRelations = relations(marca, ({many}) => ({
	comissionamentos: many(comissionamento),
	catalogoReferencias: many(catalogoReferencia),
	marcasSelloutDistribuicaos: many(marcasSelloutDistribuicao),
	produtos: many(produto),
	geradors_maCodigoGerador: many(gerador, {
		relationName: "gerador_maCodigoGerador_marca_maCodigo"
	}),
	geradors_maCodigoMotor: many(gerador, {
		relationName: "gerador_maCodigoMotor_marca_maCodigo"
	}),
}));

export const condicaoPagtoRelations = relations(condicaoPagto, ({many}) => ({
	comissionamentos: many(comissionamento),
	notas: many(nota),
	engContratoes: many(engContrato),
	engEtapas: many(engEtapas),
	representacaos: many(representacao),
	locacaoGeradors: many(locacaoGerador),
	regrasValidacaoPedidos: many(regrasValidacaoPedido),
	nfs: many(nfs),
	pedidos: many(pedido),
	notaEnts: many(notaEnt),
	ocorrenciasCrms: many(ocorrenciasCrm),
	ctes: many(cte),
	producaos_parComissaoCompra: many(producao, {
		relationName: "producao_parComissaoCompra_condicaoPagto_parCpCodigo"
	}),
	producaos_parComissaoCompra: many(producao, {
		relationName: "producao_parComissaoCompra_condicaoPagto_parCpCodigo"
	}),
	producaos_parComissaoVenda: many(producao, {
		relationName: "producao_parComissaoVenda_condicaoPagto_parCpCodigo"
	}),
	producaos_parComissaoVenda: many(producao, {
		relationName: "producao_parComissaoVenda_condicaoPagto_parCpCodigo"
	}),
	producaos_parDespesa: many(producao, {
		relationName: "producao_parDespesa_condicaoPagto_parCpCodigo"
	}),
	producaos_parDespesa: many(producao, {
		relationName: "producao_parDespesa_condicaoPagto_parCpCodigo"
	}),
	producaos_parFrete: many(producao, {
		relationName: "producao_parFrete_condicaoPagto_parCpCodigo"
	}),
	producaos_parFrete: many(producao, {
		relationName: "producao_parFrete_condicaoPagto_parCpCodigo"
	}),
	vendas_parCpCodigo: many(vendas, {
		relationName: "vendas_parCpCodigo_condicaoPagto_parCpCodigo"
	}),
	vendas_parFrete: many(vendas, {
		relationName: "vendas_parFrete_condicaoPagto_parCpCodigo"
	}),
	aluguels: many(aluguel),
	pagamentosMdfes: many(pagamentosMdfe),
	notaDebitos: many(notaDebito),
	itensViagems: many(itensViagem),
	manutencaos: many(manutencao),
	manutencaoGeradors: many(manutencaoGerador),
	contratoEncerramentos: many(contratoEncerramento),
	compras_parCpCodigo: many(compra, {
		relationName: "compra_parCpCodigo_condicaoPagto_parCpCodigo"
	}),
	compras_parCpCodigoPadrao: many(compra, {
		relationName: "compra_parCpCodigoPadrao_condicaoPagto_parCpCodigo"
	}),
	clientes: many(clientes),
	orcamentos: many(orcamento),
	retornoAluguels: many(retornoAluguel),
	fornecedors: many(fornecedor),
	armazenagems: many(armazenagem),
	pedidoVendas_parCpCodigo: many(pedidoVendas, {
		relationName: "pedidoVendas_parCpCodigo_condicaoPagto_parCpCodigo"
	}),
	pedidoVendas_parCpCodigo: many(pedidoVendas, {
		relationName: "pedidoVendas_parCpCodigo_condicaoPagto_parCpCodigo"
	}),
	contratoes_parCpCodigoFin: many(contrato, {
		relationName: "contrato_parCpCodigoFin_condicaoPagto_parCpCodigo"
	}),
	contratoes_parCpCodigo: many(contrato, {
		relationName: "contrato_parCpCodigo_condicaoPagto_parCpCodigo"
	}),
	contratoOutrasDespesas: many(contratoOutrasDespesas),
	pedidoCotacaos: many(pedidoCotacao),
}));

export const regiaoRelations = relations(regiao, ({many}) => ({
	comissionamentos: many(comissionamento),
	representantes: many(representantes),
	bairros: many(bairro),
	representantesPrepostos: many(representantesPreposto),
	clientes: many(clientes),
	bairroClientes: many(bairroCliente),
}));

export const itensMaqVeicAndamentoRelations = relations(itensMaqVeicAndamento, ({one}) => ({
	core: one(cores, {
		fields: [itensMaqVeicAndamento.coCodigo],
		references: [cores.coCodigo]
	}),
	funcionario: one(funcionario, {
		fields: [itensMaqVeicAndamento.fuCodigo],
		references: [funcionario.fuCodigo]
	}),
	maqVeic: one(maqVeic, {
		fields: [itensMaqVeicAndamento.mvCodigo],
		references: [maqVeic.mvCodigo]
	}),
	produto: one(produto, {
		fields: [itensMaqVeicAndamento.proCodigo],
		references: [produto.proCodigo]
	}),
	producao: one(producao, {
		fields: [itensMaqVeicAndamento.prodCodigo],
		references: [producao.prodCodigo]
	}),
}));

export const coresRelations = relations(cores, ({many}) => ({
	itensMaqVeicAndamentos: many(itensMaqVeicAndamento),
	lotes: many(lote),
	itensRomaneioOpCors: many(itensRomaneioOpCor),
	opItensProduzidos: many(opItensProduzidos),
	itensCorProducaos: many(itensCorProducao),
}));

export const maqVeicRelations = relations(maqVeic, ({one, many}) => ({
	itensMaqVeicAndamentos: many(itensMaqVeicAndamento),
	veiculosCtes: many(veiculosCte),
	itensProducaos_mvCodigo: many(itensProducao, {
		relationName: "itensProducao_mvCodigo_maqVeic_mvCodigo"
	}),
	itensProducaos_mvCodigo: many(itensProducao, {
		relationName: "itensProducao_mvCodigo_maqVeic_mvCodigo"
	}),
	ctes: many(cte),
	veiculosMdfes: many(veiculosMdfe),
	mdfes: many(mdfe),
	viagems: many(viagem),
	vendas: many(vendas),
	ordemServicos: many(ordemServico),
	lancamentoVeiculos: many(lancamentoVeiculo),
	veiculoReboques_mvCodigo: many(veiculoReboque, {
		relationName: "veiculoReboque_mvCodigo_maqVeic_mvCodigo"
	}),
	veiculoReboques_vrCodigo: many(veiculoReboque, {
		relationName: "veiculoReboque_vrCodigo_maqVeic_mvCodigo"
	}),
	conhecimentoFretes: many(conhecimentoFrete),
	manutencaos: many(manutencao),
	itensMaqVeics: many(itensMaqVeic),
	cidade: one(cidade, {
		fields: [maqVeic.ciCodigo],
		references: [cidade.ciCodigo]
	}),
	estado: one(estado, {
		fields: [maqVeic.esCodigo],
		references: [estado.esCodigo]
	}),
	grupoVeiculo: one(grupoVeiculo, {
		fields: [maqVeic.gruCodigo],
		references: [grupoVeiculo.gruCodigo]
	}),
	motorista: one(motorista, {
		fields: [maqVeic.motCodigo],
		references: [motorista.motCodigo]
	}),
	carregamentos: many(carregamento),
	contasPagars: many(contasPagar),
}));

export const producaoRelations = relations(producao, ({one, many}) => ({
	itensMaqVeicAndamentos: many(itensMaqVeicAndamento),
	andamentoProcucaos: many(andamentoProcucao),
	andProducaos: many(andProducao),
	romaneioOps: many(romaneioOp),
	itensComposicaoProducaos: many(itensComposicaoProducao),
	itensProducaos: many(itensProducao),
	fciCops: many(fciCop),
	opItensConsumidos: many(opItensConsumidos),
	fciOps: many(fciOps),
	cliente: one(clientes, {
		fields: [producao.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	planoConta_coComissaoCompra: one(planoContas, {
		fields: [producao.coComissaoCompra],
		references: [planoContas.coCodigo],
		relationName: "producao_coComissaoCompra_planoContas_coCodigo"
	}),
	planoConta_coComissaoCompra: one(planoContas, {
		fields: [producao.coComissaoCompra],
		references: [planoContas.coCodigo],
		relationName: "producao_coComissaoCompra_planoContas_coCodigo"
	}),
	planoConta_coComissaoVenda: one(planoContas, {
		fields: [producao.coComissaoVenda],
		references: [planoContas.coCodigo],
		relationName: "producao_coComissaoVenda_planoContas_coCodigo"
	}),
	planoConta_coComissaoVenda: one(planoContas, {
		fields: [producao.coComissaoVenda],
		references: [planoContas.coCodigo],
		relationName: "producao_coComissaoVenda_planoContas_coCodigo"
	}),
	planoConta_coDespesa: one(planoContas, {
		fields: [producao.coDespesa],
		references: [planoContas.coCodigo],
		relationName: "producao_coDespesa_planoContas_coCodigo"
	}),
	planoConta_coDespesa: one(planoContas, {
		fields: [producao.coDespesa],
		references: [planoContas.coCodigo],
		relationName: "producao_coDespesa_planoContas_coCodigo"
	}),
	planoConta_coFrete: one(planoContas, {
		fields: [producao.coFrete],
		references: [planoContas.coCodigo],
		relationName: "producao_coFrete_planoContas_coCodigo"
	}),
	planoConta_coFrete: one(planoContas, {
		fields: [producao.coFrete],
		references: [planoContas.coCodigo],
		relationName: "producao_coFrete_planoContas_coCodigo"
	}),
	estoqueLocai: one(estoqueLocais, {
		fields: [producao.elcCodigo],
		references: [estoqueLocais.elcCodigo]
	}),
	empresa: one(empresa, {
		fields: [producao.empCodigo],
		references: [empresa.empCodigo]
	}),
	fornecedor_forComissaoCompra: one(fornecedor, {
		fields: [producao.forComissaoCompra],
		references: [fornecedor.forCodigo],
		relationName: "producao_forComissaoCompra_fornecedor_forCodigo"
	}),
	fornecedor_forComissaoCompra: one(fornecedor, {
		fields: [producao.forComissaoCompra],
		references: [fornecedor.forCodigo],
		relationName: "producao_forComissaoCompra_fornecedor_forCodigo"
	}),
	fornecedor_forComissaoVenda: one(fornecedor, {
		fields: [producao.forComissaoVenda],
		references: [fornecedor.forCodigo],
		relationName: "producao_forComissaoVenda_fornecedor_forCodigo"
	}),
	fornecedor_forComissaoVenda: one(fornecedor, {
		fields: [producao.forComissaoVenda],
		references: [fornecedor.forCodigo],
		relationName: "producao_forComissaoVenda_fornecedor_forCodigo"
	}),
	fornecedor_forDespesa: one(fornecedor, {
		fields: [producao.forDespesa],
		references: [fornecedor.forCodigo],
		relationName: "producao_forDespesa_fornecedor_forCodigo"
	}),
	fornecedor_forDespesa: one(fornecedor, {
		fields: [producao.forDespesa],
		references: [fornecedor.forCodigo],
		relationName: "producao_forDespesa_fornecedor_forCodigo"
	}),
	fornecedor_forFrete: one(fornecedor, {
		fields: [producao.forFrete],
		references: [fornecedor.forCodigo],
		relationName: "producao_forFrete_fornecedor_forCodigo"
	}),
	fornecedor_forFrete: one(fornecedor, {
		fields: [producao.forFrete],
		references: [fornecedor.forCodigo],
		relationName: "producao_forFrete_fornecedor_forCodigo"
	}),
	condicaoPagto_parComissaoCompra: one(condicaoPagto, {
		fields: [producao.parComissaoCompra],
		references: [condicaoPagto.parCpCodigo],
		relationName: "producao_parComissaoCompra_condicaoPagto_parCpCodigo"
	}),
	condicaoPagto_parComissaoCompra: one(condicaoPagto, {
		fields: [producao.parComissaoCompra],
		references: [condicaoPagto.parCpCodigo],
		relationName: "producao_parComissaoCompra_condicaoPagto_parCpCodigo"
	}),
	condicaoPagto_parComissaoVenda: one(condicaoPagto, {
		fields: [producao.parComissaoVenda],
		references: [condicaoPagto.parCpCodigo],
		relationName: "producao_parComissaoVenda_condicaoPagto_parCpCodigo"
	}),
	condicaoPagto_parComissaoVenda: one(condicaoPagto, {
		fields: [producao.parComissaoVenda],
		references: [condicaoPagto.parCpCodigo],
		relationName: "producao_parComissaoVenda_condicaoPagto_parCpCodigo"
	}),
	condicaoPagto_parDespesa: one(condicaoPagto, {
		fields: [producao.parDespesa],
		references: [condicaoPagto.parCpCodigo],
		relationName: "producao_parDespesa_condicaoPagto_parCpCodigo"
	}),
	condicaoPagto_parDespesa: one(condicaoPagto, {
		fields: [producao.parDespesa],
		references: [condicaoPagto.parCpCodigo],
		relationName: "producao_parDespesa_condicaoPagto_parCpCodigo"
	}),
	condicaoPagto_parFrete: one(condicaoPagto, {
		fields: [producao.parFrete],
		references: [condicaoPagto.parCpCodigo],
		relationName: "producao_parFrete_condicaoPagto_parCpCodigo"
	}),
	condicaoPagto_parFrete: one(condicaoPagto, {
		fields: [producao.parFrete],
		references: [condicaoPagto.parCpCodigo],
		relationName: "producao_parFrete_condicaoPagto_parCpCodigo"
	}),
	producao: one(producao, {
		fields: [producao.prodCodigoPai],
		references: [producao.prodCodigo],
		relationName: "producao_prodCodigoPai_producao_prodCodigo"
	}),
	producaos: many(producao, {
		relationName: "producao_prodCodigoPai_producao_prodCodigo"
	}),
	transportadora: one(transportadora, {
		fields: [producao.trCodigo],
		references: [transportadora.trCodigo]
	}),
	vendedor: one(vendedor, {
		fields: [producao.veCodigo],
		references: [vendedor.veCodigo]
	}),
	estadoPedido: one(estadoPedido, {
		fields: [producao.estCodigo],
		references: [estadoPedido.estCodigo]
	}),
	controleNumeracaoProducaos: many(controleNumeracaoProducao),
	requisicaoConsumoOps: many(requisicaoConsumoOp),
	itensMaqVeics: many(itensMaqVeic),
	itensSubProducaos: many(itensSubProducao),
	itensRomaneioOps: many(itensRomaneioOp),
	opItensProduzidos: many(opItensProduzidos),
	itensCorProducaos: many(itensCorProducao),
}));

export const debAutRetornoRegBRelations = relations(debAutRetornoRegB, ({one}) => ({
	debAutRetornoCabecalho: one(debAutRetornoCabecalho, {
		fields: [debAutRetornoRegB.dacCodigo],
		references: [debAutRetornoCabecalho.dacCodigo]
	}),
}));

export const debAutRetornoCabecalhoRelations = relations(debAutRetornoCabecalho, ({one, many}) => ({
	debAutRetornoRegBS: many(debAutRetornoRegB),
	usuario: one(usuario, {
		fields: [debAutRetornoCabecalho.usuCodigo],
		references: [usuario.usuCodigo]
	}),
	debAutRetornoRegFS: many(debAutRetornoRegF),
}));

export const tempAndamentoEstoqueRelations = relations(tempAndamentoEstoque, ({one}) => ({
	estoqueLocai: one(estoqueLocais, {
		fields: [tempAndamentoEstoque.elcCodigo],
		references: [estoqueLocais.elcCodigo]
	}),
}));

export const itensPedidoVendasRelations = relations(itensPedidoVendas, ({one}) => ({
	produto: one(produto, {
		fields: [itensPedidoVendas.proCodigo],
		references: [produto.proCodigo]
	}),
	pedidoVenda: one(pedidoVendas, {
		fields: [itensPedidoVendas.venPedCod],
		references: [pedidoVendas.venPedCod]
	}),
}));

export const pedidoVendasRelations = relations(pedidoVendas, ({one, many}) => ({
	itensPedidoVendas: many(itensPedidoVendas),
	cliente_cliCodigo: one(clientes, {
		fields: [pedidoVendas.cliCodigo],
		references: [clientes.cliCodigo],
		relationName: "pedidoVendas_cliCodigo_clientes_cliCodigo"
	}),
	cliente_cliCodigo: one(clientes, {
		fields: [pedidoVendas.cliCodigo],
		references: [clientes.cliCodigo],
		relationName: "pedidoVendas_cliCodigo_clientes_cliCodigo"
	}),
	estadoPedido_estCodigo: one(estadoPedido, {
		fields: [pedidoVendas.estCodigo],
		references: [estadoPedido.estCodigo],
		relationName: "pedidoVendas_estCodigo_estadoPedido_estCodigo"
	}),
	estadoPedido_estCodigo: one(estadoPedido, {
		fields: [pedidoVendas.estCodigo],
		references: [estadoPedido.estCodigo],
		relationName: "pedidoVendas_estCodigo_estadoPedido_estCodigo"
	}),
	condicaoPagto_parCpCodigo: one(condicaoPagto, {
		fields: [pedidoVendas.parCpCodigo],
		references: [condicaoPagto.parCpCodigo],
		relationName: "pedidoVendas_parCpCodigo_condicaoPagto_parCpCodigo"
	}),
	condicaoPagto_parCpCodigo: one(condicaoPagto, {
		fields: [pedidoVendas.parCpCodigo],
		references: [condicaoPagto.parCpCodigo],
		relationName: "pedidoVendas_parCpCodigo_condicaoPagto_parCpCodigo"
	}),
}));

export const processosAtoConcessoriosRelations = relations(processosAtoConcessorios, ({one}) => ({
	nota: one(nota, {
		fields: [processosAtoConcessorios.nfCodigo],
		references: [nota.nfCodigo]
	}),
	venda: one(vendas, {
		fields: [processosAtoConcessorios.venCodPedido],
		references: [vendas.venCodPedido]
	}),
}));

export const notaRelations = relations(nota, ({one, many}) => ({
	processosAtoConcessorios: many(processosAtoConcessorios),
	notaProdutorRefs: many(notaProdutorRef),
	bairroCliente: one(bairroCliente, {
		fields: [nota.bcCodigo],
		references: [bairroCliente.bcCodigo]
	}),
	cliente: one(clientes, {
		fields: [nota.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	empresa: one(empresa, {
		fields: [nota.empCodigo],
		references: [empresa.empCodigo]
	}),
	fornecedor: one(fornecedor, {
		fields: [nota.forCodigo],
		references: [fornecedor.forCodigo]
	}),
	log: one(log, {
		fields: [nota.logCodigo],
		references: [log.logCodigo]
	}),
	marketplace: one(marketplace, {
		fields: [nota.mkpCodigo],
		references: [marketplace.mkpCodigo]
	}),
	nota: one(nota, {
		fields: [nota.nfCodigoSubstituida],
		references: [nota.nfCodigo],
		relationName: "nota_nfCodigoSubstituida_nota_nfCodigo"
	}),
	notas: many(nota, {
		relationName: "nota_nfCodigoSubstituida_nota_nfCodigo"
	}),
	condicaoPagto: one(condicaoPagto, {
		fields: [nota.parCpCodigo],
		references: [condicaoPagto.parCpCodigo]
	}),
	serie: one(serie, {
		fields: [nota.sreCodigo],
		references: [serie.sreCodigo]
	}),
	tipoOperacao: one(tipoOperacao, {
		fields: [nota.toCodigo],
		references: [tipoOperacao.toCodigo]
	}),
	transportadora_trCodigo: one(transportadora, {
		fields: [nota.trCodigo],
		references: [transportadora.trCodigo],
		relationName: "nota_trCodigo_transportadora_trCodigo"
	}),
	transportadora_trCodigoRedespacho: one(transportadora, {
		fields: [nota.trCodigoRedespacho],
		references: [transportadora.trCodigo],
		relationName: "nota_trCodigoRedespacho_transportadora_trCodigo"
	}),
	venda: one(vendas, {
		fields: [nota.venCodPedido],
		references: [vendas.venCodPedido],
		relationName: "nota_venCodPedido_vendas_venCodPedido"
	}),
	notaVendas_nfCodigo: many(notaVenda, {
		relationName: "notaVenda_nfCodigo_nota_nfCodigo"
	}),
	notaVendas_nfCodigo: many(notaVenda, {
		relationName: "notaVenda_nfCodigo_nota_nfCodigo"
	}),
	itensNotas: many(itensNota),
	itensImportacaos: many(itensImportacao),
	fciNotas: many(fciNotas),
	notaContatoes: many(notaContato),
	rtcItens: many(rtcItens),
	itensGrupoExportacaos: many(itensGrupoExportacao),
	documentosMdfes: many(documentosMdfe),
	vendas_nfCodigoCancelado: many(vendas, {
		relationName: "vendas_nfCodigoCancelado_nota_nfCodigo"
	}),
	vendas_nfCodigoFatAntecipado: many(vendas, {
		relationName: "vendas_nfCodigoFatAntecipado_nota_nfCodigo"
	}),
	notaManutencaos: many(notaManutencao),
	pagamentoNfes: many(pagamentoNfe),
	autorizaXmls: many(autorizaXml),
	notaFaturas: many(notaFatura),
	cfes: many(cfe),
	rtcCabecalhos: many(rtcCabecalho),
	notaEcfRefs: many(notaEcfRef),
	cces: many(cce),
	notaFiscalRefs_nfCodigo: many(notaFiscalRef, {
		relationName: "notaFiscalRef_nfCodigo_nota_nfCodigo"
	}),
	notaFiscalRefs_nfCodigoReferenciada: many(notaFiscalRef, {
		relationName: "notaFiscalRef_nfCodigoReferenciada_nota_nfCodigo"
	}),
	armazenagems: many(armazenagem),
	retornosNfes_nfCodigo: many(retornosNfe, {
		relationName: "retornosNfe_nfCodigo_nota_nfCodigo"
	}),
	retornosNfes_nfCodigoRet: many(retornosNfe, {
		relationName: "retornosNfe_nfCodigoRet_nota_nfCodigo"
	}),
	itensLoteMedicamentos_nfCodigo: many(itensLoteMedicamento, {
		relationName: "itensLoteMedicamento_nfCodigo_nota_nfCodigo"
	}),
	itensLoteMedicamentos_nfCodigo: many(itensLoteMedicamento, {
		relationName: "itensLoteMedicamento_nfCodigo_nota_nfCodigo"
	}),
	remessaRetornoNfes: many(remessaRetornoNfe),
}));

export const entradaMercadoriaItensRelations = relations(entradaMercadoriaItens, ({one, many}) => ({
	entradaMercadoria: one(entradaMercadoria, {
		fields: [entradaMercadoriaItens.enmCodigo],
		references: [entradaMercadoria.enmCodigo]
	}),
	padraoEtiquetaPeso: one(padraoEtiquetaPeso, {
		fields: [entradaMercadoriaItens.pepCodigo],
		references: [padraoEtiquetaPeso.pepCodigo]
	}),
	produto: one(produto, {
		fields: [entradaMercadoriaItens.proCodigo],
		references: [produto.proCodigo]
	}),
	unidadesAlternativa: one(unidadesAlternativas, {
		fields: [entradaMercadoriaItens.unaCodigo],
		references: [unidadesAlternativas.unaCodigo]
	}),
	embalagens: many(embalagens),
}));

export const entradaMercadoriaRelations = relations(entradaMercadoria, ({one, many}) => ({
	entradaMercadoriaItens: many(entradaMercadoriaItens),
	embalagens: many(embalagens),
	estoqueLocai: one(estoqueLocais, {
		fields: [entradaMercadoria.elcCodigo],
		references: [estoqueLocais.elcCodigo]
	}),
	empresa: one(empresa, {
		fields: [entradaMercadoria.empCodigo],
		references: [empresa.empCodigo]
	}),
	fornecedor: one(fornecedor, {
		fields: [entradaMercadoria.forCodigo],
		references: [fornecedor.forCodigo]
	}),
	padraoArqRectoEmbalagen: one(padraoArqRectoEmbalagens, {
		fields: [entradaMercadoria.parCodigo],
		references: [padraoArqRectoEmbalagens.parCodigo]
	}),
	usuario: one(usuario, {
		fields: [entradaMercadoria.usuCodigo],
		references: [usuario.usuCodigo]
	}),
	entradaMercadoriaCaixas: many(entradaMercadoriaCaixas),
	compras: many(compra),
	entradaMercadoriaReativadas: many(entradaMercadoriaReativadas),
}));

export const padraoEtiquetaPesoRelations = relations(padraoEtiquetaPeso, ({many}) => ({
	entradaMercadoriaItens: many(entradaMercadoriaItens),
	entradaMercadoriaCaixas: many(entradaMercadoriaCaixas),
	produtos: many(produto),
}));

export const engArquivosRelations = relations(engArquivos, ({one}) => ({
	engContrato: one(engContrato, {
		fields: [engArquivos.engCodigo],
		references: [engContrato.engCodigo]
	}),
}));

export const atualizaBdReplicasRelations = relations(atualizaBdReplicas, ({one}) => ({
	atualizaBd: one(atualizaBd, {
		fields: [atualizaBdReplicas.abdCodigo],
		references: [atualizaBd.abdCodigo]
	}),
	basesReplicada: one(basesReplicadas, {
		fields: [atualizaBdReplicas.bdrCodigo],
		references: [basesReplicadas.bdrCodigo]
	}),
}));

export const atualizaBdRelations = relations(atualizaBd, ({many}) => ({
	atualizaBdReplicas: many(atualizaBdReplicas),
}));

export const basesReplicadasRelations = relations(basesReplicadas, ({many}) => ({
	atualizaBdReplicas: many(atualizaBdReplicas),
}));

export const estoqueLocaisRepresentanteRelations = relations(estoqueLocaisRepresentante, ({one}) => ({
	estoqueLocai: one(estoqueLocais, {
		fields: [estoqueLocaisRepresentante.elcCodigo],
		references: [estoqueLocais.elcCodigo]
	}),
	representante: one(representantes, {
		fields: [estoqueLocaisRepresentante.reCodigo],
		references: [representantes.reCodigo]
	}),
}));

export const itensPagamentosExternosRelations = relations(itensPagamentosExternos, ({one}) => ({
	dadosPagamentosExterno: one(dadosPagamentosExternos, {
		fields: [itensPagamentosExternos.dpeCodigo],
		references: [dadosPagamentosExternos.dpeCodigo]
	}),
	produto: one(produto, {
		fields: [itensPagamentosExternos.proCodigo],
		references: [produto.proCodigo]
	}),
}));

export const boletoJanelaUsoRelations = relations(boletoJanelaUso, ({one}) => ({
	parametroBoleto: one(parametroBoleto, {
		fields: [boletoJanelaUso.pbCodigo],
		references: [parametroBoleto.pbCodigo]
	}),
}));

export const honorariosHistoricoValorRelations = relations(honorariosHistoricoValor, ({one}) => ({
	honorario: one(honorarios, {
		fields: [honorariosHistoricoValor.hoCodigo],
		references: [honorarios.hoCodigo]
	}),
	usuario: one(usuario, {
		fields: [honorariosHistoricoValor.usuCodigo],
		references: [usuario.usuCodigo]
	}),
}));

export const honorariosRelations = relations(honorarios, ({one, many}) => ({
	honorariosHistoricoValors: many(honorariosHistoricoValor),
	conta: one(contas, {
		fields: [honorarios.cbCodigo],
		references: [contas.cbCodigo]
	}),
	centrocusto: one(centrocusto, {
		fields: [honorarios.ccCodigo],
		references: [centrocusto.ccCodigo]
	}),
	cliente: one(clientes, {
		fields: [honorarios.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	planoConta: one(planoContas, {
		fields: [honorarios.coCodigo],
		references: [planoContas.coCodigo]
	}),
	empresa: one(empresa, {
		fields: [honorarios.empCodigo],
		references: [empresa.empCodigo]
	}),
	honorario: one(honorarios, {
		fields: [honorarios.hoCodigoPai],
		references: [honorarios.hoCodigo],
		relationName: "honorarios_hoCodigoPai_honorarios_hoCodigo"
	}),
	honorarios: many(honorarios, {
		relationName: "honorarios_hoCodigoPai_honorarios_hoCodigo"
	}),
	motivoBloqueio: one(motivoBloqueio, {
		fields: [honorarios.mbCodigo],
		references: [motivoBloqueio.mbCodigo]
	}),
	produto: one(produto, {
		fields: [honorarios.proCodigo],
		references: [produto.proCodigo]
	}),
	tipoPagamento: one(tipoPagamento, {
		fields: [honorarios.tpCodigo],
		references: [tipoPagamento.tpCodigo]
	}),
	honorarioLancados_hoCodigo: many(honorarioLancados, {
		relationName: "honorarioLancados_hoCodigo_honorarios_hoCodigo"
	}),
	honorarioLancados_hoCodigo: many(honorarioLancados, {
		relationName: "honorarioLancados_hoCodigo_honorarios_hoCodigo"
	}),
	honorariosArquivos: many(honorariosArquivos),
}));

export const itensNfsRelations = relations(itensNfs, ({one}) => ({
	armazenagem: one(armazenagem, {
		fields: [itensNfs.arCodigo],
		references: [armazenagem.arCodigo]
	}),
	balanca: one(balanca, {
		fields: [itensNfs.baCodigo],
		references: [balanca.baCodigo]
	}),
	nf: one(nfs, {
		fields: [itensNfs.nfsCodigo],
		references: [nfs.nfsCodigo]
	}),
	itensServico: one(itensServico, {
		fields: [itensNfs.venCodPedido],
		references: [itensServico.serCodigo]
	}),
}));

export const armazenagemRelations = relations(armazenagem, ({one, many}) => ({
	itensNfs: many(itensNfs),
	contasRecebers: many(contasReceber),
	laudoArmazenagems: many(laudoArmazenagem),
	movimentoFinanceiros: many(movimentoFinanceiro),
	compras_arCodigoContrato: many(compra, {
		relationName: "compra_arCodigoContrato_armazenagem_arCodigo"
	}),
	compras_arCodigoPesagem: many(compra, {
		relationName: "compra_arCodigoPesagem_armazenagem_arCodigo"
	}),
	transferenciaArmazenagems: many(transferenciaArmazenagem, {
		relationName: "transferenciaArmazenagem_arCodigoContrato_armazenagem_arCodigo"
	}),
	armazenagem_arCodigoContrato: one(armazenagem, {
		fields: [armazenagem.arCodigoContrato],
		references: [armazenagem.arCodigo],
		relationName: "armazenagem_arCodigoContrato_armazenagem_arCodigo"
	}),
	armazenagems_arCodigoContrato: many(armazenagem, {
		relationName: "armazenagem_arCodigoContrato_armazenagem_arCodigo"
	}),
	armazenagem_arCodigoOrigem: one(armazenagem, {
		fields: [armazenagem.arCodigoOrigem],
		references: [armazenagem.arCodigo],
		relationName: "armazenagem_arCodigoOrigem_armazenagem_arCodigo"
	}),
	armazenagems_arCodigoOrigem: many(armazenagem, {
		relationName: "armazenagem_arCodigoOrigem_armazenagem_arCodigo"
	}),
	centrocusto: one(centrocusto, {
		fields: [armazenagem.ccCodigo],
		references: [centrocusto.ccCodigo]
	}),
	contrato: one(contrato, {
		fields: [armazenagem.ccvCodigo],
		references: [contrato.ccvCodigo]
	}),
	cliente: one(clientes, {
		fields: [armazenagem.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	planoConta: one(planoContas, {
		fields: [armazenagem.coCodigo],
		references: [planoContas.coCodigo]
	}),
	estoqueLocai: one(estoqueLocais, {
		fields: [armazenagem.elcCodigo],
		references: [estoqueLocais.elcCodigo]
	}),
	empresa: one(empresa, {
		fields: [armazenagem.empCodigo],
		references: [empresa.empCodigo]
	}),
	fornecedor_forCodigo: one(fornecedor, {
		fields: [armazenagem.forCodigo],
		references: [fornecedor.forCodigo],
		relationName: "armazenagem_forCodigo_fornecedor_forCodigo"
	}),
	fornecedor_forCodigoSilo: one(fornecedor, {
		fields: [armazenagem.forCodigoSilo],
		references: [fornecedor.forCodigo],
		relationName: "armazenagem_forCodigoSilo_fornecedor_forCodigo"
	}),
	lote: one(lote, {
		fields: [armazenagem.ltCodigo],
		references: [lote.ltCodigo]
	}),
	nota: one(nota, {
		fields: [armazenagem.nfCodigo],
		references: [nota.nfCodigo]
	}),
	nf: one(nfs, {
		fields: [armazenagem.nfsCodigo],
		references: [nfs.nfsCodigo]
	}),
	condicaoPagto: one(condicaoPagto, {
		fields: [armazenagem.parCpCodigo],
		references: [condicaoPagto.parCpCodigo]
	}),
	pedido: one(pedido, {
		fields: [armazenagem.peCodigo],
		references: [pedido.peCodigo]
	}),
	produto: one(produto, {
		fields: [armazenagem.proCodigo],
		references: [produto.proCodigo]
	}),
	tiposRomaneio: one(tiposRomaneio, {
		fields: [armazenagem.tprCodigo],
		references: [tiposRomaneio.tprCodigo]
	}),
	transportadora: one(transportadora, {
		fields: [armazenagem.trCodigo],
		references: [transportadora.trCodigo]
	}),
	transferenciaArmazenagem: one(transferenciaArmazenagem, {
		fields: [armazenagem.traCodigo],
		references: [transferenciaArmazenagem.traCodigo],
		relationName: "armazenagem_traCodigo_transferenciaArmazenagem_traCodigo"
	}),
	usuario_usuCodigoPrim: one(usuario, {
		fields: [armazenagem.usuCodigoPrim],
		references: [usuario.usuCodigo],
		relationName: "armazenagem_usuCodigoPrim_usuario_usuCodigo"
	}),
	usuario_usuCodigoSeg: one(usuario, {
		fields: [armazenagem.usuCodigoSeg],
		references: [usuario.usuCodigo],
		relationName: "armazenagem_usuCodigoSeg_usuario_usuCodigo"
	}),
	variedadeProduto: one(variedadeProduto, {
		fields: [armazenagem.vprCodigo],
		references: [variedadeProduto.vprCodigo]
	}),
}));

export const itensServicoRelations = relations(itensServico, ({one, many}) => ({
	itensNfs: many(itensNfs),
	funcionario: one(funcionario, {
		fields: [itensServico.fuCodigo],
		references: [funcionario.fuCodigo]
	}),
	nf: one(nfs, {
		fields: [itensServico.nfsCodigo],
		references: [nfs.nfsCodigo]
	}),
	venda: one(vendas, {
		fields: [itensServico.venCodPedido],
		references: [vendas.venCodPedido]
	}),
	tipoServico: one(tipoServicos, {
		fields: [itensServico.tsCodigo],
		references: [tipoServicos.tsCodigo]
	}),
}));

export const logAuxiliarCarregamentoRelations = relations(logAuxiliarCarregamento, ({one}) => ({
	log: one(log, {
		fields: [logAuxiliarCarregamento.logCodigo],
		references: [log.logCodigo]
	}),
}));

export const vendasCreditosApuradosRelations = relations(vendasCreditosApurados, ({one}) => ({
	regraApuracaoCredito: one(regraApuracaoCredito, {
		fields: [vendasCreditosApurados.racCodigo],
		references: [regraApuracaoCredito.racCodigo]
	}),
	venda: one(vendas, {
		fields: [vendasCreditosApurados.venCodPedido],
		references: [vendas.venCodPedido]
	}),
}));

export const regraApuracaoCreditoRelations = relations(regraApuracaoCredito, ({one, many}) => ({
	vendasCreditosApurados: many(vendasCreditosApurados),
	itensVendaCreditosApurados: many(itensVendaCreditosApurados),
	cliente: one(clientes, {
		fields: [regraApuracaoCredito.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	planoConta: one(planoContas, {
		fields: [regraApuracaoCredito.coCodigo],
		references: [planoContas.coCodigo]
	}),
	centrocusto: one(centrocusto, {
		fields: [regraApuracaoCredito.ccCodigo],
		references: [centrocusto.ccCodigo]
	}),
	empresa: one(empresa, {
		fields: [regraApuracaoCredito.empCodigo],
		references: [empresa.empCodigo]
	}),
	itensRegraApuracaoCreditos: many(itensRegraApuracaoCredito),
	creditoGeradoRegraApuracaos: many(creditoGeradoRegraApuracao),
}));

export const ecfRelations = relations(ecf, ({one, many}) => ({
	cliente: one(clientes, {
		fields: [ecf.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	serie: one(serie, {
		fields: [ecf.sreCodigo],
		references: [serie.sreCodigo]
	}),
	tipoOperacao: one(tipoOperacao, {
		fields: [ecf.toCodigo],
		references: [tipoOperacao.toCodigo]
	}),
	venda: one(vendas, {
		fields: [ecf.venCodPedido],
		references: [vendas.venCodPedido]
	}),
	itensEcfs: many(itensEcf),
	vendaEcfs: many(vendaEcf),
}));

export const serieRelations = relations(serie, ({one, many}) => ({
	ecfs: many(ecf),
	notas: many(nota),
	sats: many(sat),
	empresa: one(empresa, {
		fields: [serie.empCodigo],
		references: [empresa.empCodigo]
	}),
	regrasValidacaoPedidos: many(regrasValidacaoPedido),
	ctes: many(cte),
	vendas: many(vendas),
	parametros_serieEcf: many(parametro, {
		relationName: "parametro_serieEcf_serie_sreCodigo"
	}),
	parametros_serieNfceVenda: many(parametro, {
		relationName: "parametro_serieNfceVenda_serie_sreCodigo"
	}),
	parametros_serieNfe: many(parametro, {
		relationName: "parametro_serieNfe_serie_sreCodigo"
	}),
	parametros_serieNfeVenda: many(parametro, {
		relationName: "parametro_serieNfeVenda_serie_sreCodigo"
	}),
	serieXTetoFaturamentoMobiles_sreCodigo: many(serieXTetoFaturamentoMobile, {
		relationName: "serieXTetoFaturamentoMobile_sreCodigo_serie_sreCodigo"
	}),
	serieXTetoFaturamentoMobiles_sreCodigoSubstituta: many(serieXTetoFaturamentoMobile, {
		relationName: "serieXTetoFaturamentoMobile_sreCodigoSubstituta_serie_sreCodigo"
	}),
	cfes: many(cfe),
	clientes: many(clientes),
	terminalCaixas_sreCodigoNfceOffline: many(terminalCaixa, {
		relationName: "terminalCaixa_sreCodigoNfceOffline_serie_sreCodigo"
	}),
	terminalCaixas_sreCodigoNfeOffline: many(terminalCaixa, {
		relationName: "terminalCaixa_sreCodigoNfeOffline_serie_sreCodigo"
	}),
	estoqueLocais: many(estoqueLocais),
	tipoPedidoDemanders: many(tipoPedidoDemander),
	parametroCtes: many(parametroCte),
}));

export const tipoOperacaoRelations = relations(tipoOperacao, ({one, many}) => ({
	ecfs: many(ecf),
	notas: many(nota),
	classificacaoFiscalCtes: many(classificacaoFiscalCte),
	pedidos: many(pedido),
	notaEnts: many(notaEnt),
	ctes: many(cte),
	vendas: many(vendas),
	parametros_naturezaOperacaoNfeVenda: many(parametro, {
		relationName: "parametro_naturezaOperacaoNfeVenda_tipoOperacao_toCodigo"
	}),
	parametros_naturezaOperacaoSat: many(parametro, {
		relationName: "parametro_naturezaOperacaoSat_tipoOperacao_toCodigo"
	}),
	parametros_toCodigoNfce: many(parametro, {
		relationName: "parametro_toCodigoNfce_tipoOperacao_toCodigo"
	}),
	registrosAnalisadosRaioXES: many(registrosAnalisadosRaioX),
	conhecimentoFretes: many(conhecimentoFrete),
	compras: many(compra),
	classificacaoFiscals: many(classificacaoFiscal),
	estoqueLocai: one(estoqueLocais, {
		fields: [tipoOperacao.elcCodigoManutencaoEstoque],
		references: [estoqueLocais.elcCodigo]
	}),
	tipoPedidoDemanders: many(tipoPedidoDemander),
	rtcClassificacaoFiscals: many(rtcClassificacaoFiscal),
}));

export const notaProdutorRefRelations = relations(notaProdutorRef, ({one}) => ({
	estado: one(estado, {
		fields: [notaProdutorRef.esCodigo],
		references: [estado.esCodigo]
	}),
	nota: one(nota, {
		fields: [notaProdutorRef.nfCodigo],
		references: [nota.nfCodigo]
	}),
}));

export const desmembramentoConsumosRelations = relations(desmembramentoConsumos, ({one}) => ({
	desmembramento: one(desmembramento, {
		fields: [desmembramentoConsumos.dmbCodigo],
		references: [desmembramento.dmbCodigo]
	}),
	produto: one(produto, {
		fields: [desmembramentoConsumos.proCodigo],
		references: [produto.proCodigo]
	}),
}));

export const desmembramentoRelations = relations(desmembramento, ({one, many}) => ({
	desmembramentoConsumos: many(desmembramentoConsumos),
	desmembramentoItens: many(desmembramentoItens),
	produto: one(produto, {
		fields: [desmembramento.proCodigo],
		references: [produto.proCodigo]
	}),
}));

export const comandasRelations = relations(comandas, ({one, many}) => ({
	empresa: one(empresa, {
		fields: [comandas.empCodigo],
		references: [empresa.empCodigo]
	}),
	vendas: many(vendas),
}));

export const configGrupoComplementoIfoodRelations = relations(configGrupoComplementoIfood, ({one}) => ({
	grupo: one(grupos, {
		fields: [configGrupoComplementoIfood.grpCodigo],
		references: [grupos.grpCodigo]
	}),
	produto: one(produto, {
		fields: [configGrupoComplementoIfood.proCodigoPai],
		references: [produto.proCodigo]
	}),
}));

export const spedf0300Relations = relations(spedf0300, ({one}) => ({
	spedf0000: one(spedf0000, {
		fields: [spedf0300.sf0000Codigo],
		references: [spedf0000.sf0000Codigo]
	}),
}));

export const spedf0000Relations = relations(spedf0000, ({many}) => ({
	spedf0300s: many(spedf0300),
	spedf0220s: many(spedf0220),
	spedf0015s: many(spedf0015),
	spedf0460s: many(spedf0460),
	spedf0500s: many(spedf0500),
	spedfK200s: many(spedfK200),
	spedf0200s: many(spedf0200),
	spedf0450s: many(spedf0450),
	spedf0005s: many(spedf0005),
	spedfK100s: many(spedfK100),
	spedf0206s: many(spedf0206),
	spedf0150s: many(spedf0150),
	spedf0100s: many(spedf0100),
	spedfK280s: many(spedfK280),
	spedf0175s: many(spedf0175),
	spedf0305s: many(spedf0305),
	spedf0600s: many(spedf0600),
	spedf0400s: many(spedf0400),
	spedf0210s: many(spedf0210),
	spedf0205s: many(spedf0205),
	spedf0190s: many(spedf0190),
}));

export const boletoRelations = relations(boleto, ({one, many}) => ({
	campanhas_boCodigo: many(campanha, {
		relationName: "campanha_boCodigo_boleto_boCodigo"
	}),
	campanhas_boCodigoNotificacao: many(campanha, {
		relationName: "campanha_boCodigoNotificacao_boleto_boCodigo"
	}),
	envioWhatsapps: many(envioWhatsapp),
	boletoRetornos: many(boletoRetorno),
	caixas: many(caixa),
	itensBoletos: many(itensBoleto),
	conta: one(contas, {
		fields: [boleto.cbCodigo],
		references: [contas.cbCodigo]
	}),
	cliente: one(clientes, {
		fields: [boleto.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	empresa: one(empresa, {
		fields: [boleto.empCodigo],
		references: [empresa.empCodigo]
	}),
	parametroBoleto: one(parametroBoleto, {
		fields: [boleto.pbCodigo],
		references: [parametroBoleto.pbCodigo]
	}),
}));

export const modelosWhatsappRelations = relations(modelosWhatsapp, ({many}) => ({
	campanhas: many(campanha),
	envioWhatsapps: many(envioWhatsapp),
}));

export const cteObsContribuinteRelations = relations(cteObsContribuinte, ({one}) => ({
	cte: one(cte, {
		fields: [cteObsContribuinte.cteCodigo],
		references: [cte.cteCodigo]
	}),
}));

export const menusVisoesCamposValoresFormatacoesRelations = relations(menusVisoesCamposValoresFormatacoes, ({one}) => ({
	menusVisoesCampo: one(menusVisoesCampos, {
		fields: [menusVisoesCamposValoresFormatacoes.mvCodigo],
		references: [menusVisoesCampos.mvCodigo]
	}),
	menusVisoesOperacoe: one(menusVisoesOperacoes, {
		fields: [menusVisoesCamposValoresFormatacoes.mvoOperacao],
		references: [menusVisoesOperacoes.mvoCodigo]
	}),
	menusVisoe: one(menusVisoes, {
		fields: [menusVisoesCamposValoresFormatacoes.mvCodigo],
		references: [menusVisoes.mvCodigo]
	}),
}));

export const menusVisoesCamposRelations = relations(menusVisoesCampos, ({one, many}) => ({
	menusVisoesCamposValoresFormatacoes: many(menusVisoesCamposValoresFormatacoes),
	menusVisoesCamposValoresItens: many(menusVisoesCamposValoresItens),
	menusVisoesCamposLinhasItens: many(menusVisoesCamposLinhasItens),
	menusVisoesCamposValoresEstilos: many(menusVisoesCamposValoresEstilos),
	menusVisoe: one(menusVisoes, {
		fields: [menusVisoesCampos.mvCodigo],
		references: [menusVisoes.mvCodigo]
	}),
	menusVisoesOperacoe: one(menusVisoesOperacoes, {
		fields: [menusVisoesCampos.mvoOperacao],
		references: [menusVisoesOperacoes.mvoCodigo]
	}),
}));

export const menusVisoesOperacoesRelations = relations(menusVisoesOperacoes, ({many}) => ({
	menusVisoesCamposValoresFormatacoes: many(menusVisoesCamposValoresFormatacoes),
	menusVisoesCamposValoresItens: many(menusVisoesCamposValoresItens),
	menusVisoesCamposValoresEstilos: many(menusVisoesCamposValoresEstilos),
	menusVisoesCampos: many(menusVisoesCampos),
}));

export const menusVisoesRelations = relations(menusVisoes, ({one, many}) => ({
	menusVisoesCamposValoresFormatacoes: many(menusVisoesCamposValoresFormatacoes),
	menusVisoesCamposValoresEstilos: many(menusVisoesCamposValoresEstilos),
	menusVisoesCampos: many(menusVisoesCampos),
	menu: one(menus, {
		fields: [menusVisoes.menCodigo],
		references: [menus.menCodigo]
	}),
	usuario: one(usuario, {
		fields: [menusVisoes.usuCodigo],
		references: [usuario.usuCodigo]
	}),
}));

export const excecaoTabelaPrecoRelations = relations(excecaoTabelaPreco, ({one}) => ({
	produto: one(produto, {
		fields: [excecaoTabelaPreco.proCodigo],
		references: [produto.proCodigo]
	}),
	tabelaPreco: one(tabelaPreco, {
		fields: [excecaoTabelaPreco.taCodigo],
		references: [tabelaPreco.taCodigo]
	}),
}));

export const menusVisoesCamposValoresItensRelations = relations(menusVisoesCamposValoresItens, ({one}) => ({
	menusVisoesCampo: one(menusVisoesCampos, {
		fields: [menusVisoesCamposValoresItens.mvCodigo],
		references: [menusVisoesCampos.mvCodigo]
	}),
	menusVisoesOperacoe: one(menusVisoesOperacoes, {
		fields: [menusVisoesCamposValoresItens.mvoOperacao],
		references: [menusVisoesOperacoes.mvoCodigo]
	}),
}));

export const recursosCargaRelations = relations(recursosCarga, ({one}) => ({
	carregamento: one(carregamento, {
		fields: [recursosCarga.carCodigo],
		references: [carregamento.carCodigo]
	}),
	recurso: one(recursos, {
		fields: [recursosCarga.rcCodigo],
		references: [recursos.rcCodigo]
	}),
}));

export const recursosRelations = relations(recursos, ({one, many}) => ({
	recursosCargas: many(recursosCarga),
	unidade: one(unidade, {
		fields: [recursos.unCodigo],
		references: [unidade.unCodigo]
	}),
}));

export const cliMarcaGrupoSubRelations = relations(cliMarcaGrupoSub, ({one}) => ({
	cliente: one(clientes, {
		fields: [cliMarcaGrupoSub.cliCodigo],
		references: [clientes.cliCodigo]
	}),
}));

export const itensManutencaoGerRelations = relations(itensManutencaoGer, ({one}) => ({
	manutencaoGerador: one(manutencaoGerador, {
		fields: [itensManutencaoGer.manCodigo],
		references: [manutencaoGerador.manCodigo]
	}),
	produto: one(produto, {
		fields: [itensManutencaoGer.proCodigo],
		references: [produto.proCodigo]
	}),
}));

export const manutencaoGeradorRelations = relations(manutencaoGerador, ({one, many}) => ({
	itensManutencaoGers: many(itensManutencaoGer),
	despesasManutencaoGers: many(despesasManutencaoGer),
	contasRecebers: many(contasReceber),
	centrocusto: one(centrocusto, {
		fields: [manutencaoGerador.ccCodigo],
		references: [centrocusto.ccCodigo]
	}),
	cliente: one(clientes, {
		fields: [manutencaoGerador.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	planoConta: one(planoContas, {
		fields: [manutencaoGerador.coCodigo],
		references: [planoContas.coCodigo]
	}),
	gerador: one(gerador, {
		fields: [manutencaoGerador.gerCodigo],
		references: [gerador.gerCodigo]
	}),
	condicaoPagto: one(condicaoPagto, {
		fields: [manutencaoGerador.parCpCodigo],
		references: [condicaoPagto.parCpCodigo]
	}),
	itensChecklistMen: many(itensChecklistMan),
}));

export const itensEcfRelations = relations(itensEcf, ({one}) => ({
	ecf: one(ecf, {
		fields: [itensEcf.ecfCodigo],
		references: [ecf.ecfCodigo]
	}),
	produto: one(produto, {
		fields: [itensEcf.proCodigo],
		references: [produto.proCodigo]
	}),
}));

export const precoVendaXPdvOfflineRelations = relations(precoVendaXPdvOffline, ({one}) => ({
	produto: one(produto, {
		fields: [precoVendaXPdvOffline.proCodigo],
		references: [produto.proCodigo]
	}),
	terminalCaixa: one(terminalCaixa, {
		fields: [precoVendaXPdvOffline.txCodigo],
		references: [terminalCaixa.txCodigo]
	}),
}));

export const terminalCaixaRelations = relations(terminalCaixa, ({one, many}) => ({
	precoVendaXPdvOfflines: many(precoVendaXPdvOffline),
	tabPrecoItensXPdvOfflines: many(tabPrecoItensXPdvOffline),
	alteracoesTerminals: many(alteracoesTerminal),
	tabelaPrecoXPdvOfflines: many(tabelaPrecoXPdvOffline),
	replicarAlteracoesTerminals: many(replicarAlteracoesTerminal),
	itensEmprestimos: many(itensEmprestimo),
	vendas_txCodigo: many(vendas, {
		relationName: "vendas_txCodigo_terminalCaixa_txCodigo"
	}),
	vendas_txCodigo: many(vendas, {
		relationName: "vendas_txCodigo_terminalCaixa_txCodigo"
	}),
	alteracoesDfeSincOffs: many(alteracoesDfeSincOff),
	baixaCrecebers: many(baixaCreceber),
	terminalComputadors: many(terminalComputador),
	movimentoCaixas: many(movimentoCaixa),
	cfes: many(cfe),
	fechaCaixas: many(fechaCaixa),
	creditoCrecebers: many(creditoCreceber),
	baixaCreditos: many(baixaCredito),
	empresa: one(empresa, {
		fields: [terminalCaixa.empCodigo],
		references: [empresa.empCodigo]
	}),
	impressoraNaoFiscal: one(impressoraNaoFiscal, {
		fields: [terminalCaixa.infCodigo],
		references: [impressoraNaoFiscal.infCodigo]
	}),
	log: one(log, {
		fields: [terminalCaixa.logCodigo],
		references: [log.logCodigo]
	}),
	sat: one(sat, {
		fields: [terminalCaixa.satCodigo],
		references: [sat.satCodigo]
	}),
	serie_sreCodigoNfceOffline: one(serie, {
		fields: [terminalCaixa.sreCodigoNfceOffline],
		references: [serie.sreCodigo],
		relationName: "terminalCaixa_sreCodigoNfceOffline_serie_sreCodigo"
	}),
	serie_sreCodigoNfeOffline: one(serie, {
		fields: [terminalCaixa.sreCodigoNfeOffline],
		references: [serie.sreCodigo],
		relationName: "terminalCaixa_sreCodigoNfeOffline_serie_sreCodigo"
	}),
	usuario: one(usuario, {
		fields: [terminalCaixa.usuCodigoVinculoOffline],
		references: [usuario.usuCodigo]
	}),
	cartao: one(cartao, {
		fields: [terminalCaixa.carCodigoPixIntegrado],
		references: [cartao.carCodigo]
	}),
	terminaisSmartPo: one(terminaisSmartPos, {
		fields: [terminalCaixa.tspCodigo],
		references: [terminaisSmartPos.tspCodigo]
	}),
}));

export const fciDecRelations = relations(fciDec, ({one}) => ({
	compra: one(compra, {
		fields: [fciDec.cmpCodigo],
		references: [compra.cmpCodigo]
	}),
	produto: one(produto, {
		fields: [fciDec.proCodigo],
		references: [produto.proCodigo]
	}),
}));

export const compraRelations = relations(compra, ({one, many}) => ({
	fciDecs: many(fciDec),
	loteCompraAuxiliars: many(loteCompraAuxiliar),
	compraFrigorificos: many(compraFrigorifico),
	rtcItens: many(rtcItens),
	despesas: many(despesas),
	embalagens: many(embalagens),
	ordemServicos: many(ordemServico),
	andamentoEstoques: many(andamentoEstoque),
	itensCompras: many(itensCompra),
	rtcCabecalhos: many(rtcCabecalho),
	armazenagem_arCodigoContrato: one(armazenagem, {
		fields: [compra.arCodigoContrato],
		references: [armazenagem.arCodigo],
		relationName: "compra_arCodigoContrato_armazenagem_arCodigo"
	}),
	armazenagem_arCodigoPesagem: one(armazenagem, {
		fields: [compra.arCodigoPesagem],
		references: [armazenagem.arCodigo],
		relationName: "compra_arCodigoPesagem_armazenagem_arCodigo"
	}),
	centrocusto: one(centrocusto, {
		fields: [compra.ccCodigo],
		references: [centrocusto.ccCodigo]
	}),
	contrato: one(contrato, {
		fields: [compra.ccvCodigo],
		references: [contrato.ccvCodigo]
	}),
	planoConta: one(planoContas, {
		fields: [compra.coCodigo],
		references: [planoContas.coCodigo]
	}),
	estoqueLocai: one(estoqueLocais, {
		fields: [compra.elcCodigo],
		references: [estoqueLocais.elcCodigo]
	}),
	empresa: one(empresa, {
		fields: [compra.empCodigo],
		references: [empresa.empCodigo]
	}),
	entradaMercadoria: one(entradaMercadoria, {
		fields: [compra.enmCodigo],
		references: [entradaMercadoria.enmCodigo]
	}),
	estadoPedido: one(estadoPedido, {
		fields: [compra.estCodigo],
		references: [estadoPedido.estCodigo]
	}),
	fornecedor_forCodigo: one(fornecedor, {
		fields: [compra.forCodigo],
		references: [fornecedor.forCodigo],
		relationName: "compra_forCodigo_fornecedor_forCodigo"
	}),
	fornecedor_forTransportadora: one(fornecedor, {
		fields: [compra.forTransportadora],
		references: [fornecedor.forCodigo],
		relationName: "compra_forTransportadora_fornecedor_forCodigo"
	}),
	log: one(log, {
		fields: [compra.logCodigo],
		references: [log.logCodigo]
	}),
	condicaoPagto_parCpCodigo: one(condicaoPagto, {
		fields: [compra.parCpCodigo],
		references: [condicaoPagto.parCpCodigo],
		relationName: "compra_parCpCodigo_condicaoPagto_parCpCodigo"
	}),
	condicaoPagto_parCpCodigoPadrao: one(condicaoPagto, {
		fields: [compra.parCpCodigoPadrao],
		references: [condicaoPagto.parCpCodigo],
		relationName: "compra_parCpCodigoPadrao_condicaoPagto_parCpCodigo"
	}),
	pedido: one(pedido, {
		fields: [compra.peCodigo],
		references: [pedido.peCodigo]
	}),
	tipoDocumento: one(tipoDocumento, {
		fields: [compra.tdcCodigo],
		references: [tipoDocumento.tdcCodigo]
	}),
	tipoOperacao: one(tipoOperacao, {
		fields: [compra.toCodigo],
		references: [tipoOperacao.toCodigo]
	}),
	tipoPagamento: one(tipoPagamento, {
		fields: [compra.tpCodigo],
		references: [tipoPagamento.tpCodigo]
	}),
	transportadora: one(transportadora, {
		fields: [compra.trCodigo],
		references: [transportadora.trCodigo]
	}),
	baixaCpagars: many(baixaCpagar),
	compraDupXmls: many(compraDupXml),
	verbasFornecedores: many(verbasFornecedores),
	remessaRetornoNfes: many(remessaRetornoNfe),
	contasPagars: many(contasPagar),
}));

export const justificativaValorSistemaRelations = relations(justificativaValorSistema, ({one}) => ({
	empresa: one(empresa, {
		fields: [justificativaValorSistema.empCodigo],
		references: [empresa.empCodigo]
	}),
}));

export const tabPrecoItensXPdvOfflineRelations = relations(tabPrecoItensXPdvOffline, ({one}) => ({
	produto: one(produto, {
		fields: [tabPrecoItensXPdvOffline.proCodigo],
		references: [produto.proCodigo]
	}),
	tabelaPreco: one(tabelaPreco, {
		fields: [tabPrecoItensXPdvOffline.taCodigo],
		references: [tabelaPreco.taCodigo]
	}),
	tabelaPrecoIten: one(tabelaPrecoItens, {
		fields: [tabPrecoItensXPdvOffline.tpiCodigo],
		references: [tabelaPrecoItens.tpiCodigo]
	}),
	terminalCaixa: one(terminalCaixa, {
		fields: [tabPrecoItensXPdvOffline.txCodigo],
		references: [terminalCaixa.txCodigo]
	}),
}));

export const retTributacaoFiscalRelations = relations(retTributacaoFiscal, ({one, many}) => ({
	empresa: one(empresa, {
		fields: [retTributacaoFiscal.empCodigo],
		references: [empresa.empCodigo]
	}),
	classificacaoFiscal: one(classificacaoFiscal, {
		fields: [retTributacaoFiscal.codClassEnviada],
		references: [classificacaoFiscal.clCodigo]
	}),
	retRegrasTributacaoFiscals: many(retRegrasTributacaoFiscal),
}));

export const classificacaoFiscalRelations = relations(classificacaoFiscal, ({one, many}) => ({
	retTributacaoFiscals: many(retTributacaoFiscal),
	parametros: many(parametro),
	agrupadorFiscal: one(agrupadorFiscal, {
		fields: [classificacaoFiscal.agfCodigo],
		references: [agrupadorFiscal.agfCodigo]
	}),
	cst: one(cst, {
		fields: [classificacaoFiscal.csCodigo],
		references: [cst.csCodigo]
	}),
	empresa: one(empresa, {
		fields: [classificacaoFiscal.empCodigo],
		references: [empresa.empCodigo]
	}),
	estado: one(estado, {
		fields: [classificacaoFiscal.esCodigo],
		references: [estado.esCodigo]
	}),
	excecaoNcm: one(excecaoNcm, {
		fields: [classificacaoFiscal.excCodigo],
		references: [excecaoNcm.excCodigo]
	}),
	icm: one(icms, {
		fields: [classificacaoFiscal.icCodigo],
		references: [icms.icCodigo]
	}),
	motivoIcm_motCodigo: one(motivoIcms, {
		fields: [classificacaoFiscal.motCodigo],
		references: [motivoIcms.motCodigo],
		relationName: "classificacaoFiscal_motCodigo_motivoIcms_motCodigo"
	}),
	motivoIcm_motCodigoSt: one(motivoIcms, {
		fields: [classificacaoFiscal.motCodigoSt],
		references: [motivoIcms.motCodigo],
		relationName: "classificacaoFiscal_motCodigoSt_motivoIcms_motCodigo"
	}),
	numClassificacao: one(numClassificacao, {
		fields: [classificacaoFiscal.ncCodigo],
		references: [numClassificacao.ncCodigo]
	}),
	nfMensagem: one(nfMensagem, {
		fields: [classificacaoFiscal.nmCodigo],
		references: [nfMensagem.nmCodigo]
	}),
	natOperacao: one(natOperacao, {
		fields: [classificacaoFiscal.noCodigo],
		references: [natOperacao.noCodigo]
	}),
	tipoFiscal: one(tipoFiscal, {
		fields: [classificacaoFiscal.tfCodigo],
		references: [tipoFiscal.tfCodigo]
	}),
	tipoOperacao: one(tipoOperacao, {
		fields: [classificacaoFiscal.toCodigo],
		references: [tipoOperacao.toCodigo]
	}),
	tipoServico: one(tipoServicos, {
		fields: [classificacaoFiscal.tsCodigo],
		references: [tipoServicos.tsCodigo]
	}),
	retRegrasTributacaoFiscals: many(retRegrasTributacaoFiscal),
	retornoClassificacoesIntFiscals: many(retornoClassificacoesIntFiscal),
}));

export const abatimentoRelations = relations(abatimento, ({one}) => ({
	cliente: one(clientes, {
		fields: [abatimento.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	venda: one(vendas, {
		fields: [abatimento.venCodPedido],
		references: [vendas.venCodPedido]
	}),
}));

export const camposCaracteristicaLoteRelations = relations(camposCaracteristicaLote, ({one}) => ({
	grupo: one(grupo, {
		fields: [camposCaracteristicaLote.gruCodigo],
		references: [grupo.gruCodigo]
	}),
}));

export const grupoRelations = relations(grupo, ({many}) => ({
	camposCaracteristicaLotes: many(camposCaracteristicaLote),
	nivels: many(nivel),
	usuarios: many(usuario),
}));

export const veiculosCteRelations = relations(veiculosCte, ({one}) => ({
	cte: one(cte, {
		fields: [veiculosCte.cteCodigo],
		references: [cte.cteCodigo]
	}),
	maqVeic: one(maqVeic, {
		fields: [veiculosCte.mvCodigo],
		references: [maqVeic.mvCodigo]
	}),
}));

export const andamentoProcucaoRelations = relations(andamentoProcucao, ({one}) => ({
	estadoProducao: one(estadoProducao, {
		fields: [andamentoProcucao.espCodigo],
		references: [estadoProducao.espCodigo]
	}),
	producao: one(producao, {
		fields: [andamentoProcucao.prodCodigo],
		references: [producao.prodCodigo]
	}),
}));

export const estadoProducaoRelations = relations(estadoProducao, ({many}) => ({
	andamentoProcucaos: many(andamentoProcucao),
	andProducaos: many(andProducao),
	andamentoProcucaoConfeccaos: many(andamentoProcucaoConfeccao),
}));

export const itensEmprestimoRetRelations = relations(itensEmprestimoRet, ({one}) => ({
	emprestimo: one(emprestimo, {
		fields: [itensEmprestimoRet.emCodPedido],
		references: [emprestimo.emCodPedido]
	}),
	produto: one(produto, {
		fields: [itensEmprestimoRet.proCodigo],
		references: [produto.proCodigo]
	}),
}));

export const emprestimoRelations = relations(emprestimo, ({one, many}) => ({
	itensEmprestimoRets: many(itensEmprestimoRet),
	centrocusto: one(centrocusto, {
		fields: [emprestimo.ccCodigo],
		references: [centrocusto.ccCodigo]
	}),
	cliente_cliCodigo: one(clientes, {
		fields: [emprestimo.cliCodigo],
		references: [clientes.cliCodigo],
		relationName: "emprestimo_cliCodigo_clientes_cliCodigo"
	}),
	cliente_cliCodigo: one(clientes, {
		fields: [emprestimo.cliCodigo],
		references: [clientes.cliCodigo],
		relationName: "emprestimo_cliCodigo_clientes_cliCodigo"
	}),
	empresa: one(empresa, {
		fields: [emprestimo.empCodigo],
		references: [empresa.empCodigo]
	}),
	vendedor: one(vendedor, {
		fields: [emprestimo.veCodigo],
		references: [vendedor.veCodigo]
	}),
	itensEmprestimos: many(itensEmprestimo),
}));

export const spedf0220Relations = relations(spedf0220, ({one}) => ({
	spedf0000: one(spedf0000, {
		fields: [spedf0220.sf0000Codigo],
		references: [spedf0000.sf0000Codigo]
	}),
}));

export const bairroClienteRelations = relations(bairroCliente, ({one, many}) => ({
	notas: many(nota),
	entregaItens: many(entregaItens),
	itensCarregamentos: many(itensCarregamento),
	vendas: many(vendas),
	cfes: many(cfe),
	vendasAjustes: many(vendasAjustes),
	cidade: one(cidade, {
		fields: [bairroCliente.ciCodigo],
		references: [cidade.ciCodigo]
	}),
	cliente: one(clientes, {
		fields: [bairroCliente.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	estado: one(estado, {
		fields: [bairroCliente.esCodigo],
		references: [estado.esCodigo]
	}),
	regiao: one(regiao, {
		fields: [bairroCliente.reCodigo],
		references: [regiao.reCodigo]
	}),
}));

export const marketplaceRelations = relations(marketplace, ({one, many}) => ({
	notas: many(nota),
	conta: one(contas, {
		fields: [marketplace.cbCodigo],
		references: [contas.cbCodigo]
	}),
	vendas: many(vendas),
	integracoesYzidros: many(integracoesYzidro),
	marketplaceTrackcashes: many(marketplaceTrackcash),
}));

export const transportadoraRelations = relations(transportadora, ({many}) => ({
	notas_trCodigo: many(nota, {
		relationName: "nota_trCodigo_transportadora_trCodigo"
	}),
	notas_trCodigoRedespacho: many(nota, {
		relationName: "nota_trCodigoRedespacho_transportadora_trCodigo"
	}),
	notaEnts: many(notaEnt),
	laudoArmazenagems: many(laudoArmazenagem),
	producaos: many(producao),
	vendas_trCodigo: many(vendas, {
		relationName: "vendas_trCodigo_transportadora_trCodigo"
	}),
	vendas_trCodigoRedespacho: many(vendas, {
		relationName: "vendas_trCodigoRedespacho_transportadora_trCodigo"
	}),
	conhecimentoFretes: many(conhecimentoFrete),
	compras: many(compra),
	clientes: many(clientes),
	armazenagems: many(armazenagem),
	pedidoConfeccaos: many(pedidoConfeccao),
	contasPagars: many(contasPagar),
}));

export const alteracoesTerminalRelations = relations(alteracoesTerminal, ({one}) => ({
	historicoAlteracoe: one(historicoAlteracoes, {
		fields: [alteracoesTerminal.haCodigo],
		references: [historicoAlteracoes.haCodigo]
	}),
	terminalCaixa: one(terminalCaixa, {
		fields: [alteracoesTerminal.txCodigo],
		references: [terminalCaixa.txCodigo]
	}),
}));

export const historicoAlteracoesRelations = relations(historicoAlteracoes, ({many}) => ({
	alteracoesTerminals: many(alteracoesTerminal),
	replicarAlteracoesTerminals: many(replicarAlteracoesTerminal),
}));

export const saldoBancoRelations = relations(saldoBanco, ({one}) => ({
	conta: one(contas, {
		fields: [saldoBanco.cbCodigo],
		references: [contas.cbCodigo]
	}),
}));

export const historicoAcessoTribFiscalRelations = relations(historicoAcessoTribFiscal, ({one, many}) => ({
	empresa: one(empresa, {
		fields: [historicoAcessoTribFiscal.empCodigo],
		references: [empresa.empCodigo]
	}),
	historicoAcessoDetalhesTribFiscals: many(historicoAcessoDetalhesTribFiscal),
}));

export const factoringRelations = relations(factoring, ({one}) => ({
	conta: one(contas, {
		fields: [factoring.cbCodigoFac],
		references: [contas.cbCodigo]
	}),
	contasReceber: one(contasReceber, {
		fields: [factoring.crCodigo],
		references: [contasReceber.crCodigo]
	}),
}));

export const contasReceberRelations = relations(contasReceber, ({one, many}) => ({
	factorings: many(factoring),
	aditamentoGerador: one(aditamentoGerador, {
		fields: [contasReceber.adtCodigo],
		references: [aditamentoGerador.adtCodigo]
	}),
	armzFatExp: one(armzFatExp, {
		fields: [contasReceber.afeCodigo],
		references: [armzFatExp.afeCodigo]
	}),
	aluguel: one(aluguel, {
		fields: [contasReceber.aluCodigo],
		references: [aluguel.aluCodigo]
	}),
	armazenagem: one(armazenagem, {
		fields: [contasReceber.arCodigo],
		references: [armazenagem.arCodigo]
	}),
	carteiraCobranca: one(carteiraCobranca, {
		fields: [contasReceber.cacCodigo],
		references: [carteiraCobranca.cacCodigo]
	}),
	carregamento: one(carregamento, {
		fields: [contasReceber.carCodigo],
		references: [carregamento.carCodigo]
	}),
	conta: one(contas, {
		fields: [contasReceber.cbCodigo],
		references: [contas.cbCodigo]
	}),
	centrocusto: one(centrocusto, {
		fields: [contasReceber.ccCodigo],
		references: [centrocusto.ccCodigo]
	}),
	contratoEncerramento: one(contratoEncerramento, {
		fields: [contasReceber.cenCodigo],
		references: [contratoEncerramento.cenCodigo]
	}),
	cliente: one(clientes, {
		fields: [contasReceber.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	planoConta: one(planoContas, {
		fields: [contasReceber.coCodigo],
		references: [planoContas.coCodigo]
	}),
	contasReceber_crCodigoTaxaCartao: one(contasReceber, {
		fields: [contasReceber.crCodigoTaxaCartao],
		references: [contasReceber.crCodigo],
		relationName: "contasReceber_crCodigoTaxaCartao_contasReceber_crCodigo"
	}),
	contasRecebers_crCodigoTaxaCartao: many(contasReceber, {
		relationName: "contasReceber_crCodigoTaxaCartao_contasReceber_crCodigo"
	}),
	contasReceber_crRecalculo: one(contasReceber, {
		fields: [contasReceber.crRecalculo],
		references: [contasReceber.crCodigo],
		relationName: "contasReceber_crRecalculo_contasReceber_crCodigo"
	}),
	contasRecebers_crRecalculo: many(contasReceber, {
		relationName: "contasReceber_crRecalculo_contasReceber_crCodigo"
	}),
	contasReceber_crVinculo: one(contasReceber, {
		fields: [contasReceber.crVinculo],
		references: [contasReceber.crCodigo],
		relationName: "contasReceber_crVinculo_contasReceber_crCodigo"
	}),
	contasRecebers_crVinculo: many(contasReceber, {
		relationName: "contasReceber_crVinculo_contasReceber_crCodigo"
	}),
	baixaCreceber: one(baixaCreceber, {
		fields: [contasReceber.crVinculoVariacao],
		references: [baixaCreceber.crCodigo],
		relationName: "contasReceber_crVinculoVariacao_baixaCreceber_crCodigo"
	}),
	cte: one(cte, {
		fields: [contasReceber.cteCodigo],
		references: [cte.cteCodigo]
	}),
	eventoHolerite: one(eventoHolerite, {
		fields: [contasReceber.ehCodigo],
		references: [eventoHolerite.ehCodigo]
	}),
	empresa: one(empresa, {
		fields: [contasReceber.empCodigo],
		references: [empresa.empCodigo]
	}),
	engAndamento: one(engAndamento, {
		fields: [contasReceber.engCodigo],
		references: [engAndamento.engCodigoAndamento]
	}),
	engEtapa: one(engEtapas, {
		fields: [contasReceber.engCodigo],
		references: [engEtapas.engCodigoEtapa]
	}),
	engContrato: one(engContrato, {
		fields: [contasReceber.engCodigo],
		references: [engContrato.engCodigo]
	}),
	imobilizado: one(imobilizado, {
		fields: [contasReceber.imCodigo],
		references: [imobilizado.imCodigo]
	}),
	locacaoGerador: one(locacaoGerador, {
		fields: [contasReceber.locCodigo],
		references: [locacaoGerador.locCodigo]
	}),
	log: one(log, {
		fields: [contasReceber.logCodigo],
		references: [log.logCodigo]
	}),
	manutencaoGerador: one(manutencaoGerador, {
		fields: [contasReceber.manCodigo],
		references: [manutencaoGerador.manCodigo]
	}),
	moeda: one(moeda, {
		fields: [contasReceber.moeCodigo],
		references: [moeda.moeCodigo]
	}),
	notaDebito: one(notaDebito, {
		fields: [contasReceber.ndbCodigo],
		references: [notaDebito.ndbCodigo]
	}),
	nf: one(nfs, {
		fields: [contasReceber.nfsCodigo],
		references: [nfs.nfsCodigo]
	}),
	ocorrenciasCrm: one(ocorrenciasCrm, {
		fields: [contasReceber.occCodigo],
		references: [ocorrenciasCrm.occCodigo]
	}),
	retornoAluguel: one(retornoAluguel, {
		fields: [contasReceber.raCodigo],
		references: [retornoAluguel.raCodigo]
	}),
	recalculoParcela: one(recalculoParcelas, {
		fields: [contasReceber.recpCodigo],
		references: [recalculoParcelas.recpCodigo]
	}),
	representacao: one(representacao, {
		fields: [contasReceber.rprCodigo],
		references: [representacao.rprCodigo]
	}),
	tipoPagamento: one(tipoPagamento, {
		fields: [contasReceber.tpCodigo],
		references: [tipoPagamento.tpCodigo]
	}),
	venda: one(vendas, {
		fields: [contasReceber.venCodPedido],
		references: [vendas.venCodPedido]
	}),
	creditoCreceber: one(creditoCreceber, {
		fields: [contasReceber.crCodigoRecebAntecipado],
		references: [creditoCreceber.crCodigo]
	}),
	motivoBloqueio: one(motivoBloqueio, {
		fields: [contasReceber.mbCodigo],
		references: [motivoBloqueio.mbCodigo]
	}),
	antecipacaoRecebiveis: many(antecipacaoRecebiveis),
	itensBoletos: many(itensBoleto),
	baixaCrecebers: many(baixaCreceber, {
		relationName: "baixaCreceber_crCodigoCr_contasReceber_crCodigo"
	}),
	antecipacaoRecebiveisParcelas: many(antecipacaoRecebiveisParcelas),
	vendaMarketplaceDespesas: many(vendaMarketplaceDespesas),
	debAutTitulos: many(debAutTitulos),
	notaFaturas: many(notaFatura),
	verbasFornecedores: many(verbasFornecedores),
	dadosIndivPagamentosExternos: many(dadosIndivPagamentosExternos),
}));

export const pagamentoCfeRelations = relations(pagamentoCfe, ({one}) => ({
	cfe: one(cfe, {
		fields: [pagamentoCfe.cfeCodigo],
		references: [cfe.cfeCodigo]
	}),
}));

export const satRelations = relations(sat, ({one, many}) => ({
	empresa: one(empresa, {
		fields: [sat.empCodigo],
		references: [empresa.empCodigo]
	}),
	serie: one(serie, {
		fields: [sat.sreCodigo],
		references: [serie.sreCodigo]
	}),
	cfes: many(cfe),
	terminalCaixas: many(terminalCaixa),
	logsats: many(logsat),
}));

export const engEtapasRelations = relations(engEtapas, ({one, many}) => ({
	engContrato: one(engContrato, {
		fields: [engEtapas.engCodigo],
		references: [engContrato.engCodigo]
	}),
	condicaoPagto: one(condicaoPagto, {
		fields: [engEtapas.parCpCodigo],
		references: [condicaoPagto.parCpCodigo]
	}),
	contasRecebers: many(contasReceber),
	engItensAndamentos: many(engItensAndamento),
	engFaturaEtapas: many(engFaturaEtapas),
	engAndamentos: many(engAndamento),
	engServicosAndamentos: many(engServicosAndamento),
}));

export const classificacaoFiscalCteRelations = relations(classificacaoFiscalCte, ({one}) => ({
	cstCte: one(cstCte, {
		fields: [classificacaoFiscalCte.ccteCodigo],
		references: [cstCte.ccteCodigo]
	}),
	empresa: one(empresa, {
		fields: [classificacaoFiscalCte.empCodigo],
		references: [empresa.empCodigo]
	}),
	estado_esCodigoIni: one(estado, {
		fields: [classificacaoFiscalCte.esCodigoIni],
		references: [estado.esCodigo],
		relationName: "classificacaoFiscalCte_esCodigoIni_estado_esCodigo"
	}),
	estado_esCodigoTer: one(estado, {
		fields: [classificacaoFiscalCte.esCodigoTer],
		references: [estado.esCodigo],
		relationName: "classificacaoFiscalCte_esCodigoTer_estado_esCodigo"
	}),
	nfMensagem: one(nfMensagem, {
		fields: [classificacaoFiscalCte.nmCodigo],
		references: [nfMensagem.nmCodigo]
	}),
	natOperacao: one(natOperacao, {
		fields: [classificacaoFiscalCte.noCodigo],
		references: [natOperacao.noCodigo]
	}),
	tipoFiscal: one(tipoFiscal, {
		fields: [classificacaoFiscalCte.tfCodigo],
		references: [tipoFiscal.tfCodigo]
	}),
	tipoOperacao: one(tipoOperacao, {
		fields: [classificacaoFiscalCte.toCodigo],
		references: [tipoOperacao.toCodigo]
	}),
}));

export const cstCteRelations = relations(cstCte, ({many}) => ({
	classificacaoFiscalCtes: many(classificacaoFiscalCte),
}));

export const nfMensagemRelations = relations(nfMensagem, ({many}) => ({
	classificacaoFiscalCtes: many(classificacaoFiscalCte),
	classificacaoFiscals: many(classificacaoFiscal),
}));

export const natOperacaoRelations = relations(natOperacao, ({many}) => ({
	classificacaoFiscalCtes: many(classificacaoFiscalCte),
	ctes: many(cte),
	conhecimentoFretes: many(conhecimentoFrete),
	classificacaoFiscals: many(classificacaoFiscal),
}));

export const inventariosEstoqueContadoresRelations = relations(inventariosEstoqueContadores, ({one}) => ({
	inventariosEstoque: one(inventariosEstoque, {
		fields: [inventariosEstoqueContadores.ieCodigo],
		references: [inventariosEstoque.ieCodigo]
	}),
	log: one(log, {
		fields: [inventariosEstoqueContadores.logCodigo],
		references: [log.logCodigo]
	}),
	usuario: one(usuario, {
		fields: [inventariosEstoqueContadores.usuCodigo],
		references: [usuario.usuCodigo]
	}),
}));

export const inventariosEstoqueRelations = relations(inventariosEstoque, ({one, many}) => ({
	inventariosEstoqueContadores: many(inventariosEstoqueContadores),
	departamento: one(departamento, {
		fields: [inventariosEstoque.depCodigo],
		references: [departamento.depCodigo]
	}),
	estoqueLocai: one(estoqueLocais, {
		fields: [inventariosEstoque.elcCodigo],
		references: [estoqueLocais.elcCodigo]
	}),
	empresa: one(empresa, {
		fields: [inventariosEstoque.empCodigo],
		references: [empresa.empCodigo]
	}),
	grupo: one(grupos, {
		fields: [inventariosEstoque.grpCodigo],
		references: [grupos.grpCodigo]
	}),
	inventariosEstoqueStatus: one(inventariosEstoqueStatus, {
		fields: [inventariosEstoque.ieStatus],
		references: [inventariosEstoqueStatus.status]
	}),
	inventariosEstoqueTipo: one(inventariosEstoqueTipos, {
		fields: [inventariosEstoque.ieTipo],
		references: [inventariosEstoqueTipos.tipo]
	}),
	setor: one(setor, {
		fields: [inventariosEstoque.setCodigo],
		references: [setor.setCodigo]
	}),
	subGrupo: one(subGrupo, {
		fields: [inventariosEstoque.subCodigo],
		references: [subGrupo.subCodigo]
	}),
	inventariosEstoqueResumoLotes: many(inventariosEstoqueResumoLotes),
	inventariosEstoqueResumoProdutos: many(inventariosEstoqueResumoProdutos),
	andamentoEstoques: many(andamentoEstoque),
	inventariosEstoqueLeituras: many(inventariosEstoqueLeituras),
}));

export const produtoProcessoFabricacaoRelations = relations(produtoProcessoFabricacao, ({one}) => ({
	produto: one(produto, {
		fields: [produtoProcessoFabricacao.proCodigo],
		references: [produto.proCodigo]
	}),
}));

export const permissoesConcedidasLogsAcessoRelations = relations(permissoesConcedidasLogsAcesso, ({one}) => ({
	log: one(log, {
		fields: [permissoesConcedidasLogsAcesso.logCodigo],
		references: [log.logCodigo]
	}),
	menuPermissao: one(menuPermissao, {
		fields: [permissoesConcedidasLogsAcesso.mnpCodigo],
		references: [menuPermissao.mnpCodigo]
	}),
	usuario: one(usuario, {
		fields: [permissoesConcedidasLogsAcesso.usuCodigo],
		references: [usuario.usuCodigo]
	}),
}));

export const menuPermissaoRelations = relations(menuPermissao, ({many}) => ({
	permissoesConcedidasLogsAcessos: many(permissoesConcedidasLogsAcesso),
}));

export const precoDiferenciadoRepRelations = relations(precoDiferenciadoRep, ({one}) => ({
	produto: one(produto, {
		fields: [precoDiferenciadoRep.proCodigo],
		references: [produto.proCodigo]
	}),
	representante: one(representantes, {
		fields: [precoDiferenciadoRep.reCodigo],
		references: [representantes.reCodigo]
	}),
}));

export const departamentoRelations = relations(departamento, ({one, many}) => ({
	inventariosEstoques: many(inventariosEstoque),
	funcionarios: many(funcionario),
	setors: many(setor),
	impressoraNaoFiscal: one(impressoraNaoFiscal, {
		fields: [departamento.infCodigo],
		references: [impressoraNaoFiscal.infCodigo]
	}),
}));

export const inventariosEstoqueStatusRelations = relations(inventariosEstoqueStatus, ({many}) => ({
	inventariosEstoques: many(inventariosEstoque),
}));

export const inventariosEstoqueTiposRelations = relations(inventariosEstoqueTipos, ({many}) => ({
	inventariosEstoques: many(inventariosEstoque),
}));

export const setorRelations = relations(setor, ({one, many}) => ({
	inventariosEstoques: many(inventariosEstoque),
	funcionarios: many(funcionario),
	departamento: one(departamento, {
		fields: [setor.depCodigo],
		references: [departamento.depCodigo]
	}),
	impressoraNaoFiscal: one(impressoraNaoFiscal, {
		fields: [setor.infCodigo],
		references: [impressoraNaoFiscal.infCodigo]
	}),
	produtos: many(produto),
}));

export const subGrupoRelations = relations(subGrupo, ({one, many}) => ({
	inventariosEstoques: many(inventariosEstoque),
	produtos: many(produto),
	grupo: one(grupos, {
		fields: [subGrupo.grpCodigo],
		references: [grupos.grpCodigo]
	}),
}));

export const padraoArqRectoCredRelations = relations(padraoArqRectoCred, ({one, many}) => ({
	credenciadoraMeiosPgto: one(credenciadoraMeiosPgto, {
		fields: [padraoArqRectoCred.cmpCodigo],
		references: [credenciadoraMeiosPgto.cmpCodigo]
	}),
	arqRectoCreds: many(arqRectoCred),
}));

export const credenciadoraMeiosPgtoRelations = relations(credenciadoraMeiosPgto, ({one, many}) => ({
	padraoArqRectoCreds: many(padraoArqRectoCred),
	terminaisSmartPos: many(terminaisSmartPos),
	cartaoEmpresas: many(cartaoEmpresa),
	cartaos: many(cartao),
	cartaoTaxas: many(cartaoTaxa),
	arqRectoCreds: many(arqRectoCred),
	conta: one(contas, {
		fields: [credenciadoraMeiosPgto.cbCodigo],
		references: [contas.cbCodigo]
	}),
	credenciadoraCartao: one(credenciadoraCartao, {
		fields: [credenciadoraMeiosPgto.cctCodigo],
		references: [credenciadoraCartao.cctCodigo]
	}),
	planoConta: one(planoContas, {
		fields: [credenciadoraMeiosPgto.coCodigoTaxa],
		references: [planoContas.coCodigo]
	}),
	empresa: one(empresa, {
		fields: [credenciadoraMeiosPgto.empCodigo],
		references: [empresa.empCodigo]
	}),
}));

export const vendasHistoricoStatusRelations = relations(vendasHistoricoStatus, ({one}) => ({
	estadoPedido: one(estadoPedido, {
		fields: [vendasHistoricoStatus.estCodigo],
		references: [estadoPedido.estCodigo]
	}),
	funcionario: one(funcionario, {
		fields: [vendasHistoricoStatus.fuCodigo],
		references: [funcionario.fuCodigo]
	}),
	usuario: one(usuario, {
		fields: [vendasHistoricoStatus.usuCodigo],
		references: [usuario.usuCodigo]
	}),
	venda: one(vendas, {
		fields: [vendasHistoricoStatus.venCodPedido],
		references: [vendas.venCodPedido]
	}),
}));

export const estadoPedidoRelations = relations(estadoPedido, ({many}) => ({
	vendasHistoricoStatuses: many(vendasHistoricoStatus),
	regrasValidacaoPedidos: many(regrasValidacaoPedido),
	producaos: many(producao),
	vendas_estCodigo: many(vendas, {
		relationName: "vendas_estCodigo_estadoPedido_estCodigo"
	}),
	vendas_estCodigoEntrega: many(vendas, {
		relationName: "vendas_estCodigoEntrega_estadoPedido_estCodigo"
	}),
	compras: many(compra),
	orcamentos: many(orcamento),
	pedidoVendas_estCodigo: many(pedidoVendas, {
		relationName: "pedidoVendas_estCodigo_estadoPedido_estCodigo"
	}),
	pedidoVendas_estCodigo: many(pedidoVendas, {
		relationName: "pedidoVendas_estCodigo_estadoPedido_estCodigo"
	}),
}));

export const spedf0015Relations = relations(spedf0015, ({one}) => ({
	spedf0000: one(spedf0000, {
		fields: [spedf0015.sf0000Codigo],
		references: [spedf0000.sf0000Codigo]
	}),
}));

export const loteCompraAuxiliarRelations = relations(loteCompraAuxiliar, ({one}) => ({
	compra: one(compra, {
		fields: [loteCompraAuxiliar.cmpCodigo],
		references: [compra.cmpCodigo]
	}),
	lote: one(lote, {
		fields: [loteCompraAuxiliar.ltCodigo],
		references: [lote.ltCodigo]
	}),
	produto: one(produto, {
		fields: [loteCompraAuxiliar.proCodigo],
		references: [produto.proCodigo]
	}),
}));

export const motivoBloqueioRelations = relations(motivoBloqueio, ({many}) => ({
	honorarios: many(honorarios),
	contasRecebers: many(contasReceber),
}));

export const itensOperadorGerRelations = relations(itensOperadorGer, ({one}) => ({
	aditamentoGerador: one(aditamentoGerador, {
		fields: [itensOperadorGer.adtCodigo],
		references: [aditamentoGerador.adtCodigo]
	}),
	funcionario: one(funcionario, {
		fields: [itensOperadorGer.fuCodigo],
		references: [funcionario.fuCodigo]
	}),
	locacaoGerador: one(locacaoGerador, {
		fields: [itensOperadorGer.locCodigo],
		references: [locacaoGerador.locCodigo]
	}),
}));

export const aditamentoGeradorRelations = relations(aditamentoGerador, ({one, many}) => ({
	itensOperadorGers: many(itensOperadorGer),
	locacaoGerador: one(locacaoGerador, {
		fields: [aditamentoGerador.locCodigo],
		references: [locacaoGerador.locCodigo]
	}),
	contasRecebers: many(contasReceber),
	itensGeradors: many(itensGerador),
	faturaLocGers: many(faturaLocGer),
}));

export const locacaoGeradorRelations = relations(locacaoGerador, ({one, many}) => ({
	itensOperadorGers: many(itensOperadorGer),
	cliente: one(clientes, {
		fields: [locacaoGerador.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	condicaoPagto: one(condicaoPagto, {
		fields: [locacaoGerador.parCpCodigo],
		references: [condicaoPagto.parCpCodigo]
	}),
	aditamentoGeradors: many(aditamentoGerador),
	contasRecebers: many(contasReceber),
	itensFreteGers: many(itensFreteGer),
	itensChecklistGers: many(itensChecklistGer),
	itensGeradors: many(itensGerador),
	itensMateriaisGers: many(itensMateriaisGer),
	faturaLocGers: many(faturaLocGer),
}));

export const etiquetaRelations = relations(etiqueta, ({one}) => ({
	produto: one(produto, {
		fields: [etiqueta.proCodigo],
		references: [produto.proCodigo]
	}),
}));

export const pabxRamaisRelations = relations(pabxRamais, ({one}) => ({
	funcionario: one(funcionario, {
		fields: [pabxRamais.fuCodigo],
		references: [funcionario.fuCodigo]
	}),
	integracoesYzidro: one(integracoesYzidro, {
		fields: [pabxRamais.iyzCodigo],
		references: [integracoesYzidro.iyzCodigo]
	}),
}));

export const embalagemRelations = relations(embalagem, ({one, many}) => ({
	produto: one(produto, {
		fields: [embalagem.proCodigo],
		references: [produto.proCodigo]
	}),
	unidadesAlternativa: one(unidadesAlternativas, {
		fields: [embalagem.unaCodigo],
		references: [unidadesAlternativas.unaCodigo]
	}),
	etiquetaProdutos: many(etiquetaProduto),
	embalagemLotes: many(embalagemLote),
	entradaMercadoriaCaixas: many(entradaMercadoriaCaixas),
}));

export const itensNotaEntRelations = relations(itensNotaEnt, ({one}) => ({
	notaEnt: one(notaEnt, {
		fields: [itensNotaEnt.nfCodigo],
		references: [notaEnt.nfCodigo]
	}),
	produto: one(produto, {
		fields: [itensNotaEnt.proCodigo],
		references: [produto.proCodigo]
	}),
}));

export const notaEntRelations = relations(notaEnt, ({one, many}) => ({
	itensNotaEnts: many(itensNotaEnt),
	fornecedor: one(fornecedor, {
		fields: [notaEnt.forCodigo],
		references: [fornecedor.forCodigo]
	}),
	condicaoPagto: one(condicaoPagto, {
		fields: [notaEnt.parCpCodigo],
		references: [condicaoPagto.parCpCodigo]
	}),
	tipoOperacao: one(tipoOperacao, {
		fields: [notaEnt.toCodigo],
		references: [tipoOperacao.toCodigo]
	}),
	transportadora: one(transportadora, {
		fields: [notaEnt.trCodigo],
		references: [transportadora.trCodigo]
	}),
}));

export const legendaRelations = relations(legenda, ({many}) => ({
	tipoApontamentoProspeccaos: many(tipoApontamentoProspeccao),
	projetoStatuses: many(projetoStatus),
	statusOcorrenciaCrms: many(statusOcorrenciaCrm),
}));

export const andProducaoRelations = relations(andProducao, ({one}) => ({
	estadoProducao: one(estadoProducao, {
		fields: [andProducao.espCodigo],
		references: [estadoProducao.espCodigo]
	}),
	producao: one(producao, {
		fields: [andProducao.prodCodigo],
		references: [producao.prodCodigo]
	}),
}));

export const embalagensInventarioRelations = relations(embalagensInventario, ({one, many}) => ({
	estoqueLocai: one(estoqueLocais, {
		fields: [embalagensInventario.elcCodigo],
		references: [estoqueLocais.elcCodigo]
	}),
	embalagen: one(embalagens, {
		fields: [embalagensInventario.emsCodigo],
		references: [embalagens.emsCodigo]
	}),
	produto: one(produto, {
		fields: [embalagensInventario.proCodigo],
		references: [produto.proCodigo]
	}),
	andamentoEstoques: many(andamentoEstoque),
}));

export const embalagensRelations = relations(embalagens, ({one, many}) => ({
	embalagensInventarios: many(embalagensInventario),
	balanca: one(balancas, {
		fields: [embalagens.balCodigo],
		references: [balancas.balCodigo]
	}),
	carregamento: one(carregamento, {
		fields: [embalagens.carCodigo],
		references: [carregamento.carCodigo]
	}),
	compra: one(compra, {
		fields: [embalagens.cmpCodigo],
		references: [compra.cmpCodigo]
	}),
	estoqueLocai: one(estoqueLocais, {
		fields: [embalagens.elcCodigo],
		references: [estoqueLocais.elcCodigo]
	}),
	entradaMercadoriaIten: one(entradaMercadoriaItens, {
		fields: [embalagens.emiCodigo],
		references: [entradaMercadoriaItens.emiCodigo]
	}),
	empresa: one(empresa, {
		fields: [embalagens.empCodigo],
		references: [empresa.empCodigo]
	}),
	embalagen: one(embalagens, {
		fields: [embalagens.emsCodigoOrigem],
		references: [embalagens.emsCodigo],
		relationName: "embalagens_emsCodigoOrigem_embalagens_emsCodigo"
	}),
	embalagens: many(embalagens, {
		relationName: "embalagens_emsCodigoOrigem_embalagens_emsCodigo"
	}),
	entradaMercadoria: one(entradaMercadoria, {
		fields: [embalagens.enmCodigo],
		references: [entradaMercadoria.enmCodigo]
	}),
	lote: one(lote, {
		fields: [embalagens.ltCodigo],
		references: [lote.ltCodigo]
	}),
	opItensProduzido: one(opItensProduzidos, {
		fields: [embalagens.oipCodigo],
		references: [opItensProduzidos.oipCodigo]
	}),
	produto: one(produto, {
		fields: [embalagens.proCodigo],
		references: [produto.proCodigo]
	}),
	unidadesAlternativa: one(unidadesAlternativas, {
		fields: [embalagens.unaCodigo],
		references: [unidadesAlternativas.unaCodigo]
	}),
	venda: one(vendas, {
		fields: [embalagens.venCodPedido],
		references: [vendas.venCodPedido]
	}),
	itensEmbalagens: many(itensEmbalagens),
	entradaMercadoriaCaixas: many(entradaMercadoriaCaixas),
	movimentacaoVolumes: many(movimentacaoVolumes),
	andamentoEstoques: many(andamentoEstoque),
	conferenciaRetornos: many(conferenciaRetorno),
	entradaMercadoriaReativadas: many(entradaMercadoriaReativadas),
}));

export const notaVendaRelations = relations(notaVenda, ({one}) => ({
	nota_nfCodigo: one(nota, {
		fields: [notaVenda.nfCodigo],
		references: [nota.nfCodigo],
		relationName: "notaVenda_nfCodigo_nota_nfCodigo"
	}),
	nota_nfCodigo: one(nota, {
		fields: [notaVenda.nfCodigo],
		references: [nota.nfCodigo],
		relationName: "notaVenda_nfCodigo_nota_nfCodigo"
	}),
	venda_venCodPedido: one(vendas, {
		fields: [notaVenda.venCodPedido],
		references: [vendas.venCodPedido],
		relationName: "notaVenda_venCodPedido_vendas_venCodPedido"
	}),
	venda_venCodPedido: one(vendas, {
		fields: [notaVenda.venCodPedido],
		references: [vendas.venCodPedido],
		relationName: "notaVenda_venCodPedido_vendas_venCodPedido"
	}),
}));

export const parametrosSincronizacaoOldRelations = relations(parametrosSincronizacaoOld, ({one}) => ({
	bancoLogin: one(bancoLogin, {
		fields: [parametrosSincronizacaoOld.balCodigo],
		references: [bancoLogin.balCodigo]
	}),
}));

export const bancoLoginRelations = relations(bancoLogin, ({many}) => ({
	parametrosSincronizacaoOlds: many(parametrosSincronizacaoOld),
}));

export const contaCorrenteRelations = relations(contaCorrente, ({one, many}) => ({
	funcionarios_cbCodigoPis: many(funcionario, {
		relationName: "funcionario_cbCodigoPis_contaCorrente_cbCodigo"
	}),
	funcionarios_cbCodigoSal: many(funcionario, {
		relationName: "funcionario_cbCodigoSal_contaCorrente_cbCodigo"
	}),
	chequePres: many(chequePre),
	agencia_agCodigo: one(agencia, {
		fields: [contaCorrente.agCodigo],
		references: [agencia.agCodigo],
		relationName: "contaCorrente_agCodigo_agencia_agCodigo"
	}),
	agencia_agCodigo: one(agencia, {
		fields: [contaCorrente.agCodigo],
		references: [agencia.agCodigo],
		relationName: "contaCorrente_agCodigo_agencia_agCodigo"
	}),
	agencia_agCodigo: one(agencia, {
		fields: [contaCorrente.agCodigo],
		references: [agencia.agCodigo],
		relationName: "contaCorrente_agCodigo_agencia_agCodigo"
	}),
	cliente: one(clientes, {
		fields: [contaCorrente.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	baixaCpagars: many(baixaCpagar),
}));

export const cargoRelations = relations(cargo, ({many}) => ({
	funcionarios: many(funcionario),
}));

export const deficienciaRelations = relations(deficiencia, ({many}) => ({
	funcionarios: many(funcionario),
}));

export const estadoCivilRelations = relations(estadoCivil, ({many}) => ({
	funcionarios: many(funcionario),
}));

export const sindicatoRelations = relations(sindicato, ({one, many}) => ({
	funcionarios: many(funcionario),
	estado: one(estado, {
		fields: [sindicato.esCodigo],
		references: [estado.esCodigo]
	}),
}));

export const promocoesRelations = relations(promocoes, ({one, many}) => ({
	promocoesGrupo: one(promocoesGrupo, {
		fields: [promocoes.prgCodigo],
		references: [promocoesGrupo.prgCodigo]
	}),
	itensVendaLimitePromocaos: many(itensVendaLimitePromocao),
	promocoesProdutos: many(promocoesProdutos),
	itensVendas: many(itensVenda),
}));

export const promocoesGrupoRelations = relations(promocoesGrupo, ({many}) => ({
	promocoes: many(promocoes),
	promocoesGrupoXEmpresas: many(promocoesGrupoXEmpresa),
}));

export const solicitacaoCompraRelations = relations(solicitacaoCompra, ({one, many}) => ({
	centrocusto: one(centrocusto, {
		fields: [solicitacaoCompra.ccCodigo],
		references: [centrocusto.ccCodigo]
	}),
	empresa: one(empresa, {
		fields: [solicitacaoCompra.empCodigo],
		references: [empresa.empCodigo]
	}),
	funcionario: one(funcionario, {
		fields: [solicitacaoCompra.fuCodigo],
		references: [funcionario.fuCodigo]
	}),
	itensSolicitacaoCompras: many(itensSolicitacaoCompra),
}));

export const layoutVariaveisFieldsRelations = relations(layoutVariaveisFields, ({one, many}) => ({
	layoutVariavei: one(layoutVariaveis, {
		fields: [layoutVariaveisFields.lavCodigo],
		references: [layoutVariaveis.lavCodigo]
	}),
	layoutVariaveisTabela: one(layoutVariaveisTabela, {
		fields: [layoutVariaveisFields.lvtCodigo],
		references: [layoutVariaveisTabela.lvtCodigo]
	}),
	layoutVariaveisDesigns: many(layoutVariaveisDesign),
}));

export const layoutVariaveisRelations = relations(layoutVariaveis, ({one, many}) => ({
	layoutVariaveisFields: many(layoutVariaveisFields),
	layout: one(layouts, {
		fields: [layoutVariaveis.layCodigo],
		references: [layouts.layCodigo]
	}),
	layoutsLayoutSql: one(layoutsLayoutSqls, {
		fields: [layoutVariaveis.llsCodigo],
		references: [layoutsLayoutSqls.llsCodigo]
	}),
	layoutVariaveisTabelas: many(layoutVariaveisTabela),
}));

export const layoutVariaveisTabelaRelations = relations(layoutVariaveisTabela, ({one, many}) => ({
	layoutVariaveisFields: many(layoutVariaveisFields),
	layoutVariavei: one(layoutVariaveis, {
		fields: [layoutVariaveisTabela.lavCodigo],
		references: [layoutVariaveis.lavCodigo]
	}),
}));

export const codigoRelacionadoRelations = relations(codigoRelacionado, ({one}) => ({
	produto: one(produto, {
		fields: [codigoRelacionado.proCodigo],
		references: [produto.proCodigo]
	}),
}));

export const parametroCfeRelations = relations(parametroCfe, ({one}) => ({
	empresa: one(empresa, {
		fields: [parametroCfe.empCodigo],
		references: [empresa.empCodigo]
	}),
}));

export const spedf0460Relations = relations(spedf0460, ({one}) => ({
	spedf0000: one(spedf0000, {
		fields: [spedf0460.sf0000Codigo],
		references: [spedf0000.sf0000Codigo]
	}),
}));

export const envioWhatsappRelations = relations(envioWhatsapp, ({one, many}) => ({
	boleto: one(boleto, {
		fields: [envioWhatsapp.boCodigo],
		references: [boleto.boCodigo]
	}),
	empresa: one(empresa, {
		fields: [envioWhatsapp.empCodigo],
		references: [empresa.empCodigo]
	}),
	envioWhatsapp: one(envioWhatsapp, {
		fields: [envioWhatsapp.enwPrimeiraMensagem],
		references: [envioWhatsapp.enwCodigo],
		relationName: "envioWhatsapp_enwPrimeiraMensagem_envioWhatsapp_enwCodigo"
	}),
	envioWhatsapps: many(envioWhatsapp, {
		relationName: "envioWhatsapp_enwPrimeiraMensagem_envioWhatsapp_enwCodigo"
	}),
	integracoesYzidro: one(integracoesYzidro, {
		fields: [envioWhatsapp.iyzCodigo],
		references: [integracoesYzidro.iyzCodigo]
	}),
	modelosWhatsapp: one(modelosWhatsapp, {
		fields: [envioWhatsapp.mowCodigo],
		references: [modelosWhatsapp.mowCodigo]
	}),
	venda: one(vendas, {
		fields: [envioWhatsapp.venCodPedido],
		references: [vendas.venCodPedido]
	}),
}));

export const romaneioOpRelations = relations(romaneioOp, ({one, many}) => ({
	producao: one(producao, {
		fields: [romaneioOp.prodCodigo],
		references: [producao.prodCodigo]
	}),
	itensRomaneioOps: many(itensRomaneioOp),
}));

export const extratoOfxFechadoRelations = relations(extratoOfxFechado, ({one}) => ({
	conta: one(contas, {
		fields: [extratoOfxFechado.cbCodigo],
		references: [contas.cbCodigo]
	}),
}));

export const itensComposicaoProducaoRelations = relations(itensComposicaoProducao, ({one}) => ({
	estoqueLocai: one(estoqueLocais, {
		fields: [itensComposicaoProducao.elcCodigo],
		references: [estoqueLocais.elcCodigo]
	}),
	lote: one(lote, {
		fields: [itensComposicaoProducao.ltCodigo],
		references: [lote.ltCodigo]
	}),
	produto: one(produto, {
		fields: [itensComposicaoProducao.proCodigo],
		references: [produto.proCodigo]
	}),
	producao: one(producao, {
		fields: [itensComposicaoProducao.prodCodigo],
		references: [producao.prodCodigo]
	}),
}));

export const representacaoRelations = relations(representacao, ({one, many}) => ({
	centrocusto: one(centrocusto, {
		fields: [representacao.ccCodigo],
		references: [centrocusto.ccCodigo]
	}),
	cliente: one(clientes, {
		fields: [representacao.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	planoConta: one(planoContas, {
		fields: [representacao.coCodigo],
		references: [planoContas.coCodigo]
	}),
	empresa: one(empresa, {
		fields: [representacao.empCodigo],
		references: [empresa.empCodigo]
	}),
	condicaoPagto: one(condicaoPagto, {
		fields: [representacao.parCpCodigo],
		references: [condicaoPagto.parCpCodigo]
	}),
	representante: one(representantes, {
		fields: [representacao.reCodigo],
		references: [representantes.reCodigo]
	}),
	representado: one(representado, {
		fields: [representacao.repCodigo],
		references: [representado.repCodigo]
	}),
	tabelaPreco: one(tabelaPreco, {
		fields: [representacao.taCodigo],
		references: [tabelaPreco.taCodigo]
	}),
	contasRecebers: many(contasReceber),
	itensRepresentacaos: many(itensRepresentacao),
	creditoCrecebers: many(creditoCreceber),
}));

export const spedf0500Relations = relations(spedf0500, ({one}) => ({
	spedf0000: one(spedf0000, {
		fields: [spedf0500.sf0000Codigo],
		references: [spedf0000.sf0000Codigo]
	}),
}));

export const agrupamentoBancarioRelations = relations(agrupamentoBancario, ({one}) => ({
	caixa_cxCodigo: one(caixa, {
		fields: [agrupamentoBancario.cxCodigo],
		references: [caixa.cxCodigo],
		relationName: "agrupamentoBancario_cxCodigo_caixa_cxCodigo"
	}),
	caixa_cxCodigo: one(caixa, {
		fields: [agrupamentoBancario.cxCodigo],
		references: [caixa.cxCodigo],
		relationName: "agrupamentoBancario_cxCodigo_caixa_cxCodigo"
	}),
}));

export const tipoServicosRelations = relations(tipoServicos, ({one, many}) => ({
	itensServicos: many(itensServico),
	itensServicoOrcs: many(itensServicoOrc),
	itensNotas: many(itensNota),
	nfs: many(nfs),
	cnae: one(cnae, {
		fields: [tipoServicos.codCnae],
		references: [cnae.cnaeCodigo]
	}),
	itensOrdemServicos: many(itensOrdemServico),
	servicosDescontinuadas: many(servicosDescontinuada),
	classificacaoFiscals: many(classificacaoFiscal),
}));

export const despesasManutencaoGerRelations = relations(despesasManutencaoGer, ({one}) => ({
	manutencaoGerador: one(manutencaoGerador, {
		fields: [despesasManutencaoGer.manCodigo],
		references: [manutencaoGerador.manCodigo]
	}),
}));

export const projetoModeloEtapasRelations = relations(projetoModeloEtapas, ({one}) => ({
	projetoEtapaModelo: one(projetoEtapaModelo, {
		fields: [projetoModeloEtapas.pemCodigo],
		references: [projetoEtapaModelo.pemCodigo]
	}),
	projetoModelo: one(projetoModelo, {
		fields: [projetoModeloEtapas.pmoCodigo],
		references: [projetoModelo.pmoCodigo]
	}),
}));

export const projetoEtapaModeloRelations = relations(projetoEtapaModelo, ({many}) => ({
	projetoModeloEtapas: many(projetoModeloEtapas),
	projetoEtapas: many(projetoEtapa),
}));

export const projetoModeloRelations = relations(projetoModelo, ({many}) => ({
	projetoModeloEtapas: many(projetoModeloEtapas),
	projetos: many(projetos),
}));

export const itensProducaoRelations = relations(itensProducao, ({one}) => ({
	estoqueLocai: one(estoqueLocais, {
		fields: [itensProducao.elcCodigo],
		references: [estoqueLocais.elcCodigo]
	}),
	lote: one(lote, {
		fields: [itensProducao.ltCodigo],
		references: [lote.ltCodigo]
	}),
	maqVeic_mvCodigo: one(maqVeic, {
		fields: [itensProducao.mvCodigo],
		references: [maqVeic.mvCodigo],
		relationName: "itensProducao_mvCodigo_maqVeic_mvCodigo"
	}),
	maqVeic_mvCodigo: one(maqVeic, {
		fields: [itensProducao.mvCodigo],
		references: [maqVeic.mvCodigo],
		relationName: "itensProducao_mvCodigo_maqVeic_mvCodigo"
	}),
	produto: one(produto, {
		fields: [itensProducao.proCodigo],
		references: [produto.proCodigo]
	}),
	producao: one(producao, {
		fields: [itensProducao.prodCodigo],
		references: [producao.prodCodigo]
	}),
}));

export const cadastroCarteirinhaRelations = relations(cadastroCarteirinha, ({one}) => ({
	cliente_cliCodigo: one(clientes, {
		fields: [cadastroCarteirinha.cliCodigo],
		references: [clientes.cliCodigo],
		relationName: "cadastroCarteirinha_cliCodigo_clientes_cliCodigo"
	}),
	cliente_cliCodigo: one(clientes, {
		fields: [cadastroCarteirinha.cliCodigo],
		references: [clientes.cliCodigo],
		relationName: "cadastroCarteirinha_cliCodigo_clientes_cliCodigo"
	}),
}));

export const itensServicoOrcRelations = relations(itensServicoOrc, ({one}) => ({
	orcamento: one(orcamento, {
		fields: [itensServicoOrc.orcCodigo],
		references: [orcamento.orcCodigo]
	}),
	tipoServico: one(tipoServicos, {
		fields: [itensServicoOrc.tsCodigo],
		references: [tipoServicos.tsCodigo]
	}),
}));

export const orcamentoRelations = relations(orcamento, ({one, many}) => ({
	itensServicoOrcs: many(itensServicoOrc),
	itensOrcs: many(itensOrc),
	cliente: one(clientes, {
		fields: [orcamento.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	estoqueLocai: one(estoqueLocais, {
		fields: [orcamento.elcCodigo],
		references: [estoqueLocais.elcCodigo]
	}),
	empresa: one(empresa, {
		fields: [orcamento.empCodigo],
		references: [empresa.empCodigo]
	}),
	estadoPedido: one(estadoPedido, {
		fields: [orcamento.estCodigo],
		references: [estadoPedido.estCodigo]
	}),
	condicaoPagto: one(condicaoPagto, {
		fields: [orcamento.parCpCodigo],
		references: [condicaoPagto.parCpCodigo]
	}),
	representante: one(representantes, {
		fields: [orcamento.reCodigo],
		references: [representantes.reCodigo]
	}),
	tabelaPreco_taCodigo: one(tabelaPreco, {
		fields: [orcamento.taCodigo],
		references: [tabelaPreco.taCodigo],
		relationName: "orcamento_taCodigo_tabelaPreco_taCodigo"
	}),
	tabelaPreco_taCodigo: one(tabelaPreco, {
		fields: [orcamento.taCodigo],
		references: [tabelaPreco.taCodigo],
		relationName: "orcamento_taCodigo_tabelaPreco_taCodigo"
	}),
	usuario: one(usuario, {
		fields: [orcamento.usuCodigo],
		references: [usuario.usuCodigo]
	}),
	vendedor: one(vendedor, {
		fields: [orcamento.veCodigo],
		references: [vendedor.veCodigo]
	}),
}));

export const itensExpedidosVsDevolvidosRelations = relations(itensExpedidosVsDevolvidos, ({one, many}) => ({
	produto: one(produto, {
		fields: [itensExpedidosVsDevolvidos.proCodigo],
		references: [produto.proCodigo]
	}),
	usuario: one(usuario, {
		fields: [itensExpedidosVsDevolvidos.usuCodigo],
		references: [usuario.usuCodigo]
	}),
	vendasAjuste: one(vendasAjustes, {
		fields: [itensExpedidosVsDevolvidos.vajCodigo],
		references: [vendasAjustes.vajCodigo]
	}),
	venda: one(vendas, {
		fields: [itensExpedidosVsDevolvidos.venCodPedido],
		references: [vendas.venCodPedido]
	}),
	conferenciaRetornos: many(conferenciaRetorno),
}));

export const vendasAjustesRelations = relations(vendasAjustes, ({one, many}) => ({
	itensExpedidosVsDevolvidos: many(itensExpedidosVsDevolvidos),
	imagens: many(imagens),
	conferenciaRetornos: many(conferenciaRetorno),
	itensVenda_iteCodigo: one(itensVenda, {
		fields: [vendasAjustes.iteCodigo],
		references: [itensVenda.iteCodigo],
		relationName: "vendasAjustes_iteCodigo_itensVenda_iteCodigo"
	}),
	produto: one(produto, {
		fields: [vendasAjustes.proCodigo],
		references: [produto.proCodigo]
	}),
	venda: one(vendas, {
		fields: [vendasAjustes.venCodPedido],
		references: [vendas.venCodPedido]
	}),
	motivoAjustePedido: one(motivoAjustePedido, {
		fields: [vendasAjustes.mapCodigo],
		references: [motivoAjustePedido.mapCodigo]
	}),
	usuario_usuCodigo: one(usuario, {
		fields: [vendasAjustes.usuCodigo],
		references: [usuario.usuCodigo],
		relationName: "vendasAjustes_usuCodigo_usuario_usuCodigo"
	}),
	usuario_usuCodigoAprovacao: one(usuario, {
		fields: [vendasAjustes.usuCodigoAprovacao],
		references: [usuario.usuCodigo],
		relationName: "vendasAjustes_usuCodigoAprovacao_usuario_usuCodigo"
	}),
	bairroCliente: one(bairroCliente, {
		fields: [vendasAjustes.bcCodigo],
		references: [bairroCliente.bcCodigo]
	}),
	carregamento: one(carregamento, {
		fields: [vendasAjustes.carCodigo],
		references: [carregamento.carCodigo]
	}),
	itensVenda_iteCodigoDevolucao: one(itensVenda, {
		fields: [vendasAjustes.iteCodigoDevolucao],
		references: [itensVenda.iteCodigo],
		relationName: "vendasAjustes_iteCodigoDevolucao_itensVenda_iteCodigo"
	}),
}));

export const drawbackRelations = relations(drawback, ({one}) => ({
	produto: one(produto, {
		fields: [drawback.proCodigo],
		references: [produto.proCodigo]
	}),
}));

export const engServicosFaturarRelations = relations(engServicosFaturar, ({one}) => ({
	engAndamento: one(engAndamento, {
		fields: [engServicosFaturar.engCodigoAndamento],
		references: [engAndamento.engCodigoAndamento]
	}),
}));

export const menusVisoesCamposLinhasItensRelations = relations(menusVisoesCamposLinhasItens, ({one}) => ({
	menusVisoesCampo: one(menusVisoesCampos, {
		fields: [menusVisoesCamposLinhasItens.mvCodigo],
		references: [menusVisoesCampos.mvCodigo]
	}),
}));

export const pabxCdrRelations = relations(pabxCdr, ({one, many}) => ({
	cliente: one(clientes, {
		fields: [pabxCdr.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	contato: one(contatos, {
		fields: [pabxCdr.conCodigo],
		references: [contatos.conCodigo]
	}),
	fornecedor: one(fornecedor, {
		fields: [pabxCdr.forCodigo],
		references: [fornecedor.forCodigo]
	}),
	historicoOcorrenciaCrm: one(historicoOcorrenciaCrm, {
		fields: [pabxCdr.hocCodigo],
		references: [historicoOcorrenciaCrm.hocCodigo]
	}),
	prospeccaoIten: one(prospeccaoItens, {
		fields: [pabxCdr.ippCodigo],
		references: [prospeccaoItens.ippCodigo]
	}),
	projetoApontamento: one(projetoApontamentos, {
		fields: [pabxCdr.praCodigo],
		references: [projetoApontamentos.praCodigo]
	}),
	integracoesYzidro: one(integracoesYzidro, {
		fields: [pabxCdr.iyzCodigo],
		references: [integracoesYzidro.iyzCodigo]
	}),
	interacoesAtendimentos: many(interacoesAtendimentos),
}));

export const historicoOcorrenciaCrmRelations = relations(historicoOcorrenciaCrm, ({one, many}) => ({
	pabxCdrs: many(pabxCdr),
	whatsappProtocolos: many(whatsappProtocolos),
	cliente: one(clientes, {
		fields: [historicoOcorrenciaCrm.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	contato: one(contatos, {
		fields: [historicoOcorrenciaCrm.conCodigo],
		references: [contatos.conCodigo]
	}),
	funcionario: one(funcionario, {
		fields: [historicoOcorrenciaCrm.fuCodigo],
		references: [funcionario.fuCodigo]
	}),
	ocorrenciasCrm: one(ocorrenciasCrm, {
		fields: [historicoOcorrenciaCrm.occCodigo],
		references: [ocorrenciasCrm.occCodigo]
	}),
	statusOcorrenciaCrm: one(statusOcorrenciaCrm, {
		fields: [historicoOcorrenciaCrm.socCodigo],
		references: [statusOcorrenciaCrm.socCodigo]
	}),
	tipoApontamentoOcorrencia: one(tipoApontamentoOcorrencia, {
		fields: [historicoOcorrenciaCrm.taoCodigo],
		references: [tipoApontamentoOcorrencia.taoCodigo]
	}),
}));

export const projetoApontamentosRelations = relations(projetoApontamentos, ({one, many}) => ({
	pabxCdrs: many(pabxCdr),
	whatsappProtocolos: many(whatsappProtocolos),
	funcionario: one(funcionario, {
		fields: [projetoApontamentos.fuCodigo],
		references: [funcionario.fuCodigo]
	}),
	projetoEtapaEspecificacoe: one(projetoEtapaEspecificacoes, {
		fields: [projetoApontamentos.peeCodigo],
		references: [projetoEtapaEspecificacoes.peeCodigo]
	}),
	projetoEtapa: one(projetoEtapa, {
		fields: [projetoApontamentos.preCodigo],
		references: [projetoEtapa.preCodigo]
	}),
	projeto: one(projetos, {
		fields: [projetoApontamentos.prjCodigo],
		references: [projetos.prjCodigo]
	}),
}));

export const adicionaisRelations = relations(adicionais, ({one, many}) => ({
	produto_proCodigoAdd: one(produto, {
		fields: [adicionais.proCodigoAdd],
		references: [produto.proCodigo],
		relationName: "adicionais_proCodigoAdd_produto_proCodigo"
	}),
	produto_proCodigo: one(produto, {
		fields: [adicionais.proCodigo],
		references: [produto.proCodigo],
		relationName: "adicionais_proCodigo_produto_proCodigo"
	}),
	itensAdicionais: many(itensAdicionais),
}));

export const itensCarretoCteRelations = relations(itensCarretoCte, ({one}) => ({
	componenteCte: one(componenteCte, {
		fields: [itensCarretoCte.comCodigo],
		references: [componenteCte.comCodigo]
	}),
	cte: one(cte, {
		fields: [itensCarretoCte.cteCodigo],
		references: [cte.cteCodigo]
	}),
}));

export const funcaoRelations = relations(funcao, ({many}) => ({
	contatos: many(contatos),
}));

export const itensCarretoMdfeRelations = relations(itensCarretoMdfe, ({one}) => ({
	componenteCte: one(componenteCte, {
		fields: [itensCarretoMdfe.comCodigo],
		references: [componenteCte.comCodigo]
	}),
	mdfe: one(mdfe, {
		fields: [itensCarretoMdfe.mdfCodigo],
		references: [mdfe.mdfCodigo]
	}),
}));

export const mdfeRelations = relations(mdfe, ({one, many}) => ({
	itensCarretoMdfes: many(itensCarretoMdfe),
	mdfUfPercursos: many(mdfUfPercurso),
	mdfValePedagios: many(mdfValePedagio),
	eventoMdfes: many(eventoMdfe),
	veiculosMdfes: many(veiculosMdfe),
	documentosMdfes: many(documentosMdfe),
	empresa: one(empresa, {
		fields: [mdfe.empCodigo],
		references: [empresa.empCodigo]
	}),
	estado_esCodigoCarreg: one(estado, {
		fields: [mdfe.esCodigoCarreg],
		references: [estado.esCodigo],
		relationName: "mdfe_esCodigoCarreg_estado_esCodigo"
	}),
	estado_esCodigoDescarreg: one(estado, {
		fields: [mdfe.esCodigoDescarreg],
		references: [estado.esCodigo],
		relationName: "mdfe_esCodigoDescarreg_estado_esCodigo"
	}),
	funcionario: one(funcionario, {
		fields: [mdfe.fuCodigo],
		references: [funcionario.fuCodigo]
	}),
	maqVeic: one(maqVeic, {
		fields: [mdfe.mvCodigo],
		references: [maqVeic.mvCodigo]
	}),
	parcelasPagamentosMdfes: many(parcelasPagamentosMdfe),
	municipioMdfes: many(municipioMdfe),
	pagamentosMdfes: many(pagamentosMdfe),
	motoristaMdfes: many(motoristaMdfe),
	autorizaXmls: many(autorizaXml),
	componentesPagamentosMdfes: many(componentesPagamentosMdfe),
	seguroMdfes: many(seguroMdfe),
	mdfCiots: many(mdfCiot),
}));

export const unidadeRelations = relations(unidade, ({many}) => ({
	unidadesAlternativas: many(unidadesAlternativas),
	recursos: many(recursos),
	anpCombustiveis: many(anpCombustiveis),
}));

export const fciCopRelations = relations(fciCop, ({one}) => ({
	produto_matCodigo: one(produto, {
		fields: [fciCop.matCodigo],
		references: [produto.proCodigo],
		relationName: "fciCop_matCodigo_produto_proCodigo"
	}),
	produto_proCodigo: one(produto, {
		fields: [fciCop.proCodigo],
		references: [produto.proCodigo],
		relationName: "fciCop_proCodigo_produto_proCodigo"
	}),
	producao: one(producao, {
		fields: [fciCop.prodCodigo],
		references: [producao.prodCodigo]
	}),
}));

export const itensVendaCreditosApuradosRelations = relations(itensVendaCreditosApurados, ({one}) => ({
	regraApuracaoCredito: one(regraApuracaoCredito, {
		fields: [itensVendaCreditosApurados.racCodigo],
		references: [regraApuracaoCredito.racCodigo]
	}),
	itensVenda: one(itensVenda, {
		fields: [itensVendaCreditosApurados.iteCodigo],
		references: [itensVenda.iteCodigo]
	}),
}));

export const itensVendaRelations = relations(itensVenda, ({one, many}) => ({
	itensVendaCreditosApurados: many(itensVendaCreditosApurados),
	aniversariante_aniCodigo: one(aniversariante, {
		fields: [itensVenda.aniCodigo],
		references: [aniversariante.aniCodigo],
		relationName: "itensVenda_aniCodigo_aniversariante_aniCodigo"
	}),
	aniversariante_aniCodigo: one(aniversariante, {
		fields: [itensVenda.aniCodigo],
		references: [aniversariante.aniCodigo],
		relationName: "itensVenda_aniCodigo_aniversariante_aniCodigo"
	}),
	cliente: one(clientes, {
		fields: [itensVenda.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	comissionamento: one(comissionamento, {
		fields: [itensVenda.comCodigo],
		references: [comissionamento.comCodigo]
	}),
	lote: one(lote, {
		fields: [itensVenda.ltCodigo],
		references: [lote.ltCodigo]
	}),
	nf: one(nfs, {
		fields: [itensVenda.nfsCodigo],
		references: [nfs.nfsCodigo]
	}),
	promocoe: one(promocoes, {
		fields: [itensVenda.prmCodigo],
		references: [promocoes.prmCodigo]
	}),
	produto_proCodigo: one(produto, {
		fields: [itensVenda.proCodigo],
		references: [produto.proCodigo],
		relationName: "itensVenda_proCodigo_produto_proCodigo"
	}),
	produto_proCodigoInicial: one(produto, {
		fields: [itensVenda.proCodigoInicial],
		references: [produto.proCodigo],
		relationName: "itensVenda_proCodigoInicial_produto_proCodigo"
	}),
	unidadesAlternativa_unaCodigo: one(unidadesAlternativas, {
		fields: [itensVenda.unaCodigo],
		references: [unidadesAlternativas.unaCodigo],
		relationName: "itensVenda_unaCodigo_unidadesAlternativas_unaCodigo"
	}),
	unidadesAlternativa_unaCodigoInicial: one(unidadesAlternativas, {
		fields: [itensVenda.unaCodigoInicial],
		references: [unidadesAlternativas.unaCodigo],
		relationName: "itensVenda_unaCodigoInicial_unidadesAlternativas_unaCodigo"
	}),
	venda_venCodPedido: one(vendas, {
		fields: [itensVenda.venCodPedido],
		references: [vendas.venCodPedido],
		relationName: "itensVenda_venCodPedido_vendas_venCodPedido"
	}),
	venda_venCodPedidoPai: one(vendas, {
		fields: [itensVenda.venCodPedidoPai],
		references: [vendas.venCodPedido],
		relationName: "itensVenda_venCodPedidoPai_vendas_venCodPedido"
	}),
	venda_venCodPedidoPaiInicial: one(vendas, {
		fields: [itensVenda.venCodPedidoPaiInicial],
		references: [vendas.venCodPedido],
		relationName: "itensVenda_venCodPedidoPaiInicial_vendas_venCodPedido"
	}),
	tabelaPreco: one(tabelaPreco, {
		fields: [itensVenda.taCodigo],
		references: [tabelaPreco.taCodigo]
	}),
	produto_iteProdutoOriginal: one(produto, {
		fields: [itensVenda.iteProdutoOriginal],
		references: [produto.proCodigo],
		relationName: "itensVenda_iteProdutoOriginal_produto_proCodigo"
	}),
	vendasAjustes_iteCodigo: many(vendasAjustes, {
		relationName: "vendasAjustes_iteCodigo_itensVenda_iteCodigo"
	}),
	vendasAjustes_iteCodigoDevolucao: many(vendasAjustes, {
		relationName: "vendasAjustes_iteCodigoDevolucao_itensVenda_iteCodigo"
	}),
	itensAdicionais: many(itensAdicionais),
	devolucoesVendas: many(devolucoesVenda),
}));

export const imagensRelations = relations(imagens, ({one}) => ({
	cliente: one(clientes, {
		fields: [imagens.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	vendasAjuste: one(vendasAjustes, {
		fields: [imagens.vajCodigo],
		references: [vendasAjustes.vajCodigo]
	}),
}));

export const engAditivoRelations = relations(engAditivo, ({one, many}) => ({
	engContrato: one(engContrato, {
		fields: [engAditivo.engCodigo],
		references: [engContrato.engCodigo]
	}),
	engAditivoCustos: many(engAditivoCustos),
}));

export const logosRelations = relations(logos, ({one}) => ({
	empresa: one(empresa, {
		fields: [logos.empCodigo],
		references: [empresa.empCodigo]
	}),
}));

export const whatsappProtocolosRelations = relations(whatsappProtocolos, ({one, many}) => ({
	cliente: one(clientes, {
		fields: [whatsappProtocolos.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	contato: one(contatos, {
		fields: [whatsappProtocolos.conCodigo],
		references: [contatos.conCodigo]
	}),
	funcionario: one(funcionario, {
		fields: [whatsappProtocolos.fuCodigo],
		references: [funcionario.fuCodigo]
	}),
	historicoOcorrenciaCrm: one(historicoOcorrenciaCrm, {
		fields: [whatsappProtocolos.hocCodigo],
		references: [historicoOcorrenciaCrm.hocCodigo]
	}),
	prospeccaoIten: one(prospeccaoItens, {
		fields: [whatsappProtocolos.ippCodigo],
		references: [prospeccaoItens.ippCodigo]
	}),
	integracoesYzidro: one(integracoesYzidro, {
		fields: [whatsappProtocolos.iyzCodigo],
		references: [integracoesYzidro.iyzCodigo]
	}),
	projetoApontamento: one(projetoApontamentos, {
		fields: [whatsappProtocolos.praCodigo],
		references: [projetoApontamentos.praCodigo]
	}),
	interacoesAtendimentos: many(interacoesAtendimentos),
	whatsappProtocolosFuncionarios: many(whatsappProtocolosFuncionario),
	whatsappProtocolosArquivos: many(whatsappProtocolosArquivos),
}));

export const projetoStatusRelations = relations(projetoStatus, ({one, many}) => ({
	legenda: one(legenda, {
		fields: [projetoStatus.legCodigo],
		references: [legenda.legCodigo]
	}),
	projetoTipo: one(projetoTipo, {
		fields: [projetoStatus.pjtCodigo],
		references: [projetoTipo.pjtCodigo]
	}),
	projetos: many(projetos),
}));

export const projetoTipoRelations = relations(projetoTipo, ({many}) => ({
	projetoStatuses: many(projetoStatus),
	projetos: many(projetos),
	projetoTipoUsuarios: many(projetoTipoUsuario),
}));

export const categoriasComplementosIfoodRelations = relations(categoriasComplementosIfood, ({one}) => ({
	grupo: one(grupos, {
		fields: [categoriasComplementosIfood.grpCodigo],
		references: [grupos.grpCodigo]
	}),
}));

export const tabelaPrecoXPdvOfflineRelations = relations(tabelaPrecoXPdvOffline, ({one}) => ({
	tabelaPreco: one(tabelaPreco, {
		fields: [tabelaPrecoXPdvOffline.taCodigo],
		references: [tabelaPreco.taCodigo]
	}),
	terminalCaixa: one(terminalCaixa, {
		fields: [tabelaPrecoXPdvOffline.txCodigo],
		references: [terminalCaixa.txCodigo]
	}),
}));

export const pesagemCarregamentoRelations = relations(pesagemCarregamento, ({one, many}) => ({
	carregamento: one(carregamento, {
		fields: [pesagemCarregamento.carCodigo],
		references: [carregamento.carCodigo],
		relationName: "pesagemCarregamento_carCodigo_carregamento_carCodigo"
	}),
	empresa: one(empresa, {
		fields: [pesagemCarregamento.empCodigo],
		references: [empresa.empCodigo]
	}),
	usuario_usuCodigoPrim: one(usuario, {
		fields: [pesagemCarregamento.usuCodigoPrim],
		references: [usuario.usuCodigo],
		relationName: "pesagemCarregamento_usuCodigoPrim_usuario_usuCodigo"
	}),
	usuario_usuCodigoSeg: one(usuario, {
		fields: [pesagemCarregamento.usuCodigoSeg],
		references: [usuario.usuCodigo],
		relationName: "pesagemCarregamento_usuCodigoSeg_usuario_usuCodigo"
	}),
	carregamentos: many(carregamento, {
		relationName: "carregamento_pcCodigo_pesagemCarregamento_pcCodigo"
	}),
}));

export const veiculosRelations = relations(veiculos, ({one}) => ({
	cliente: one(clientes, {
		fields: [veiculos.cliCodigo],
		references: [clientes.cliCodigo]
	}),
}));

export const clientesAlteracoesRelations = relations(clientesAlteracoes, ({one}) => ({
	cliente: one(clientes, {
		fields: [clientesAlteracoes.cliCodigo],
		references: [clientes.cliCodigo]
	}),
}));

export const produtosIfoodRelations = relations(produtosIfood, ({one}) => ({
	produto: one(produto, {
		fields: [produtosIfood.proCodigo],
		references: [produto.proCodigo]
	}),
}));

export const mdfUfPercursoRelations = relations(mdfUfPercurso, ({one}) => ({
	estado: one(estado, {
		fields: [mdfUfPercurso.esCodigo],
		references: [estado.esCodigo]
	}),
	mdfe: one(mdfe, {
		fields: [mdfUfPercurso.mdfCodigo],
		references: [mdfe.mdfCodigo]
	}),
}));

export const spedfK200Relations = relations(spedfK200, ({one}) => ({
	spedf0000: one(spedf0000, {
		fields: [spedfK200.sf0000Codigo],
		references: [spedf0000.sf0000Codigo]
	}),
}));

export const itensNotaRelations = relations(itensNota, ({one, many}) => ({
	nota: one(nota, {
		fields: [itensNota.nfCodigo],
		references: [nota.nfCodigo]
	}),
	produto: one(produto, {
		fields: [itensNota.proCodigo],
		references: [produto.proCodigo]
	}),
	tipoServico: one(tipoServicos, {
		fields: [itensNota.tsCodigo],
		references: [tipoServicos.tsCodigo]
	}),
	unidadesAlternativa: one(unidadesAlternativas, {
		fields: [itensNota.unaCodigo],
		references: [unidadesAlternativas.unaCodigo]
	}),
	rtcItens: many(rtcItens),
	retornosNfes_iteCodigo: many(retornosNfe, {
		relationName: "retornosNfe_iteCodigo_itensNota_iteCodigo"
	}),
	retornosNfes_iteCodigoRet: many(retornosNfe, {
		relationName: "retornosNfe_iteCodigoRet_itensNota_iteCodigo"
	}),
}));

export const entregaItensRelations = relations(entregaItens, ({one, many}) => ({
	bairroCliente: one(bairroCliente, {
		fields: [entregaItens.bcCodigo],
		references: [bairroCliente.bcCodigo]
	}),
	carregamento: one(carregamento, {
		fields: [entregaItens.carCodigo],
		references: [carregamento.carCodigo]
	}),
	entregaLote: one(entregaLote, {
		fields: [entregaItens.elCodigo],
		references: [entregaLote.elCodigo]
	}),
	estoqueLocai: one(estoqueLocais, {
		fields: [entregaItens.elcCodigo],
		references: [estoqueLocais.elcCodigo]
	}),
	produto: one(produto, {
		fields: [entregaItens.proCodigo],
		references: [produto.proCodigo]
	}),
	venda: one(vendas, {
		fields: [entregaItens.venCodPedido],
		references: [vendas.venCodPedido]
	}),
	andamentoEstoques: many(andamentoEstoque),
}));

export const funcionarioOperadorWhatsRelations = relations(funcionarioOperadorWhats, ({one}) => ({
	funcionario: one(funcionario, {
		fields: [funcionarioOperadorWhats.fuCodigo],
		references: [funcionario.fuCodigo]
	}),
	integracoesYzidro: one(integracoesYzidro, {
		fields: [funcionarioOperadorWhats.iyzCodigo],
		references: [integracoesYzidro.iyzCodigo]
	}),
}));

export const permissaoRelations = relations(permissao, ({one}) => ({
	menu: one(menus, {
		fields: [permissao.menCodigo],
		references: [menus.menCodigo]
	}),
	usuario: one(usuario, {
		fields: [permissao.usuCodigo],
		references: [usuario.usuCodigo]
	}),
}));

export const ocorrenciasCrmRelations = relations(ocorrenciasCrm, ({one, many}) => ({
	historicoOcorrenciaCrms: many(historicoOcorrenciaCrm),
	contasRecebers: many(contasReceber),
	interacoesAtendimentos: many(interacoesAtendimentos),
	causaCrm: one(causaCrm, {
		fields: [ocorrenciasCrm.cauCodigo],
		references: [causaCrm.cauCodigo]
	}),
	conta: one(contas, {
		fields: [ocorrenciasCrm.cbCodigo],
		references: [contas.cbCodigo]
	}),
	centrocusto: one(centrocusto, {
		fields: [ocorrenciasCrm.ccCodigo],
		references: [centrocusto.ccCodigo]
	}),
	cliente: one(clientes, {
		fields: [ocorrenciasCrm.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	planoConta: one(planoContas, {
		fields: [ocorrenciasCrm.coCodigo],
		references: [planoContas.coCodigo]
	}),
	contato: one(contatos, {
		fields: [ocorrenciasCrm.conCodigo],
		references: [contatos.conCodigo]
	}),
	empresa: one(empresa, {
		fields: [ocorrenciasCrm.empCodigo],
		references: [empresa.empCodigo]
	}),
	funcionario: one(funcionario, {
		fields: [ocorrenciasCrm.fuCodigo],
		references: [funcionario.fuCodigo]
	}),
	motivoCrm: one(motivoCrm, {
		fields: [ocorrenciasCrm.moCodigo],
		references: [motivoCrm.moCodigo]
	}),
	condicaoPagto: one(condicaoPagto, {
		fields: [ocorrenciasCrm.parCpCodigo],
		references: [condicaoPagto.parCpCodigo]
	}),
	projeto: one(projetos, {
		fields: [ocorrenciasCrm.prjCodigo],
		references: [projetos.prjCodigo],
		relationName: "ocorrenciasCrm_prjCodigo_projetos_prjCodigo"
	}),
	solucaoCrm: one(solucaoCrm, {
		fields: [ocorrenciasCrm.scrCodigo],
		references: [solucaoCrm.scrCodigo]
	}),
	statusOcorrenciaCrm: one(statusOcorrenciaCrm, {
		fields: [ocorrenciasCrm.socCodigo],
		references: [statusOcorrenciaCrm.socCodigo]
	}),
	tipoPagamento: one(tipoPagamento, {
		fields: [ocorrenciasCrm.tpCodigo],
		references: [tipoPagamento.tpCodigo]
	}),
	usuario: one(usuario, {
		fields: [ocorrenciasCrm.usuCodigo],
		references: [usuario.usuCodigo]
	}),
	venda: one(vendas, {
		fields: [ocorrenciasCrm.venCodPedido],
		references: [vendas.venCodPedido]
	}),
	projetos: many(projetos, {
		relationName: "projetos_occCodigo_ocorrenciasCrm_occCodigo"
	}),
	movimentoFinanceiros: many(movimentoFinanceiro),
	ocorrenciasMenus: many(ocorrenciasMenus),
}));

export const statusOcorrenciaCrmRelations = relations(statusOcorrenciaCrm, ({one, many}) => ({
	historicoOcorrenciaCrms: many(historicoOcorrenciaCrm),
	ocorrenciasCrms: many(ocorrenciasCrm),
	legenda: one(legenda, {
		fields: [statusOcorrenciaCrm.legCodigo],
		references: [legenda.legCodigo]
	}),
}));

export const tipoApontamentoOcorrenciaRelations = relations(tipoApontamentoOcorrencia, ({many}) => ({
	historicoOcorrenciaCrms: many(historicoOcorrenciaCrm),
}));

export const projetoEtapaRelations = relations(projetoEtapa, ({one, many}) => ({
	funcionario_fuCodigoResp1: one(funcionario, {
		fields: [projetoEtapa.fuCodigoResp1],
		references: [funcionario.fuCodigo],
		relationName: "projetoEtapa_fuCodigoResp1_funcionario_fuCodigo"
	}),
	funcionario_fuCodigoResp2: one(funcionario, {
		fields: [projetoEtapa.fuCodigoResp2],
		references: [funcionario.fuCodigo],
		relationName: "projetoEtapa_fuCodigoResp2_funcionario_fuCodigo"
	}),
	projetoEtapaModelo: one(projetoEtapaModelo, {
		fields: [projetoEtapa.pemCodigo],
		references: [projetoEtapaModelo.pemCodigo]
	}),
	projeto: one(projetos, {
		fields: [projetoEtapa.prjCodigo],
		references: [projetos.prjCodigo]
	}),
	projetoApontamentos: many(projetoApontamentos),
	projetoEtapaEspecificacoes: many(projetoEtapaEspecificacoes),
}));

export const projetosRelations = relations(projetos, ({one, many}) => ({
	projetoEtapas: many(projetoEtapa),
	interacoesAtendimentos: many(interacoesAtendimentos),
	ocorrenciasCrms: many(ocorrenciasCrm, {
		relationName: "ocorrenciasCrm_prjCodigo_projetos_prjCodigo"
	}),
	projetoApontamentos: many(projetoApontamentos),
	versaoProjetos: many(versaoProjetos),
	cliente: one(clientes, {
		fields: [projetos.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	funcionario_fuCodigoPrevend: one(funcionario, {
		fields: [projetos.fuCodigoPrevend],
		references: [funcionario.fuCodigo],
		relationName: "projetos_fuCodigoPrevend_funcionario_fuCodigo"
	}),
	funcionario_fuCodigoResponsavel: one(funcionario, {
		fields: [projetos.fuCodigoResponsavel],
		references: [funcionario.fuCodigo],
		relationName: "projetos_fuCodigoResponsavel_funcionario_fuCodigo"
	}),
	funcionario_fuCodigoVendedor: one(funcionario, {
		fields: [projetos.fuCodigoVendedor],
		references: [funcionario.fuCodigo],
		relationName: "projetos_fuCodigoVendedor_funcionario_fuCodigo"
	}),
	grupoCliente: one(grupoCliente, {
		fields: [projetos.grcCodigo],
		references: [grupoCliente.grcCodigo]
	}),
	metodologia: one(metodologia, {
		fields: [projetos.metCodigo],
		references: [metodologia.metCodigo]
	}),
	ocorrenciasCrm: one(ocorrenciasCrm, {
		fields: [projetos.occCodigo],
		references: [ocorrenciasCrm.occCodigo],
		relationName: "projetos_occCodigo_ocorrenciasCrm_occCodigo"
	}),
	projetoTipo: one(projetoTipo, {
		fields: [projetos.pjtCodigo],
		references: [projetoTipo.pjtCodigo]
	}),
	projetoModelo: one(projetoModelo, {
		fields: [projetos.pmoCodigo],
		references: [projetoModelo.pmoCodigo]
	}),
	projetosMacro: one(projetosMacro, {
		fields: [projetos.prmCodigo],
		references: [projetosMacro.prmCodigo]
	}),
	projetoStatus: one(projetoStatus, {
		fields: [projetos.prsCodigo],
		references: [projetoStatus.prsCodigo]
	}),
	usuario_usuCodigoComissaoPreVend: one(usuario, {
		fields: [projetos.usuCodigoComissaoPreVend],
		references: [usuario.usuCodigo],
		relationName: "projetos_usuCodigoComissaoPreVend_usuario_usuCodigo"
	}),
	usuario_usuCodigoComissaoResp: one(usuario, {
		fields: [projetos.usuCodigoComissaoResp],
		references: [usuario.usuCodigo],
		relationName: "projetos_usuCodigoComissaoResp_usuario_usuCodigo"
	}),
	usuario_usuCodigoComissaoVendedor: one(usuario, {
		fields: [projetos.usuCodigoComissaoVendedor],
		references: [usuario.usuCodigo],
		relationName: "projetos_usuCodigoComissaoVendedor_usuario_usuCodigo"
	}),
	venda: one(vendas, {
		fields: [projetos.venCodPedido],
		references: [vendas.venCodPedido],
		relationName: "projetos_venCodPedido_vendas_venCodPedido"
	}),
	contasPagar_cpCodigoComissaoPrevenda: one(contasPagar, {
		fields: [projetos.cpCodigoComissaoPrevenda],
		references: [contasPagar.cpCodigo],
		relationName: "projetos_cpCodigoComissaoPrevenda_contasPagar_cpCodigo"
	}),
	contasPagar_cpCodigoComissaoServico: one(contasPagar, {
		fields: [projetos.cpCodigoComissaoServico],
		references: [contasPagar.cpCodigo],
		relationName: "projetos_cpCodigoComissaoServico_contasPagar_cpCodigo"
	}),
	contasPagar_cpCodigoComissaoVenda: one(contasPagar, {
		fields: [projetos.cpCodigoComissaoVenda],
		references: [contasPagar.cpCodigo],
		relationName: "projetos_cpCodigoComissaoVenda_contasPagar_cpCodigo"
	}),
	projeto: one(projetos, {
		fields: [projetos.prjCausadorCodigo],
		references: [projetos.prjCodigo],
		relationName: "projetos_prjCausadorCodigo_projetos_prjCodigo"
	}),
	projetos: many(projetos, {
		relationName: "projetos_prjCausadorCodigo_projetos_prjCodigo"
	}),
	funcionario_fuValidadorProj: one(funcionario, {
		fields: [projetos.fuValidadorProj],
		references: [funcionario.fuCodigo],
		relationName: "projetos_fuValidadorProj_funcionario_fuCodigo"
	}),
	vendas: many(vendas, {
		relationName: "vendas_prjCodigo_projetos_prjCodigo"
	}),
	historicoPrevisaoProjetos: many(historicoPrevisaoProjeto),
	projetoPrincipals: many(projetoPrincipal),
	projetosDisponibilidadeClientes: many(projetosDisponibilidadeCliente),
}));

export const vendaEcfRelations = relations(vendaEcf, ({one}) => ({
	ecf: one(ecf, {
		fields: [vendaEcf.ecfCodigo],
		references: [ecf.ecfCodigo]
	}),
	venda: one(vendas, {
		fields: [vendaEcf.venCodPedido],
		references: [vendas.venCodPedido]
	}),
}));

export const mdfValePedagioRelations = relations(mdfValePedagio, ({one}) => ({
	mdfe: one(mdfe, {
		fields: [mdfValePedagio.mdfCodigo],
		references: [mdfe.mdfCodigo]
	}),
}));

export const produtoXClienteRelations = relations(produtoXCliente, ({one}) => ({
	cliente: one(clientes, {
		fields: [produtoXCliente.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	produto: one(produto, {
		fields: [produtoXCliente.proCodigo],
		references: [produto.proCodigo]
	}),
}));

export const hisProdutoRelations = relations(hisProduto, ({one}) => ({
	produto: one(produto, {
		fields: [hisProduto.proCodigo],
		references: [produto.proCodigo]
	}),
}));

export const itensCarregamentoRelations = relations(itensCarregamento, ({one}) => ({
	bairroCliente: one(bairroCliente, {
		fields: [itensCarregamento.bcCodigo],
		references: [bairroCliente.bcCodigo]
	}),
	carregamento: one(carregamento, {
		fields: [itensCarregamento.carCodigo],
		references: [carregamento.carCodigo]
	}),
	produto: one(produto, {
		fields: [itensCarregamento.proCodigo],
		references: [produto.proCodigo]
	}),
	venda: one(vendas, {
		fields: [itensCarregamento.venPedCod],
		references: [vendas.venCodPedido]
	}),
}));

export const parametroBoletoCelularesRelations = relations(parametroBoletoCelulares, ({one}) => ({
	parametroBoleto: one(parametroBoleto, {
		fields: [parametroBoletoCelulares.pbCodigo],
		references: [parametroBoleto.pbCodigo]
	}),
}));

export const desmembramentoItensRelations = relations(desmembramentoItens, ({one}) => ({
	desmembramento: one(desmembramento, {
		fields: [desmembramentoItens.dmbCodigo],
		references: [desmembramento.dmbCodigo]
	}),
	produto: one(produto, {
		fields: [desmembramentoItens.proCodigo],
		references: [produto.proCodigo]
	}),
}));

export const estoqueEmpresaSaldoLoteRelations = relations(estoqueEmpresaSaldoLote, ({one}) => ({
	empresa: one(empresa, {
		fields: [estoqueEmpresaSaldoLote.empCodigo],
		references: [empresa.empCodigo]
	}),
	lote: one(lote, {
		fields: [estoqueEmpresaSaldoLote.ltCodigo],
		references: [lote.ltCodigo]
	}),
}));

export const itensImportacaoRelations = relations(itensImportacao, ({one}) => ({
	nota: one(nota, {
		fields: [itensImportacao.nfCodigo],
		references: [nota.nfCodigo]
	}),
	produto: one(produto, {
		fields: [itensImportacao.proCodigo],
		references: [produto.proCodigo]
	}),
}));

export const regrasValidacaoPedidoRelations = relations(regrasValidacaoPedido, ({one}) => ({
	cliente: one(clientes, {
		fields: [regrasValidacaoPedido.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	estadoPedido: one(estadoPedido, {
		fields: [regrasValidacaoPedido.estCodigo],
		references: [estadoPedido.estCodigo]
	}),
	condicaoPagto: one(condicaoPagto, {
		fields: [regrasValidacaoPedido.parCpCodigo],
		references: [condicaoPagto.parCpCodigo]
	}),
	serie: one(serie, {
		fields: [regrasValidacaoPedido.sreCodigo],
		references: [serie.sreCodigo]
	}),
	tabelaPreco: one(tabelaPreco, {
		fields: [regrasValidacaoPedido.taCodigo],
		references: [tabelaPreco.taCodigo]
	}),
	tipoPagamento: one(tipoPagamento, {
		fields: [regrasValidacaoPedido.tpCodigo],
		references: [tipoPagamento.tpCodigo]
	}),
}));

export const spedf0200Relations = relations(spedf0200, ({one}) => ({
	spedf0000: one(spedf0000, {
		fields: [spedf0200.sf0000Codigo],
		references: [spedf0000.sf0000Codigo]
	}),
}));

export const pedidosReembarcadosRelations = relations(pedidosReembarcados, ({one}) => ({
	carregamento_carCodigo: one(carregamento, {
		fields: [pedidosReembarcados.carCodigo],
		references: [carregamento.carCodigo],
		relationName: "pedidosReembarcados_carCodigo_carregamento_carCodigo"
	}),
	carregamento_carCodigoOrigemPedido: one(carregamento, {
		fields: [pedidosReembarcados.carCodigoOrigemPedido],
		references: [carregamento.carCodigo],
		relationName: "pedidosReembarcados_carCodigoOrigemPedido_carregamento_carCodigo"
	}),
	usuario: one(usuario, {
		fields: [pedidosReembarcados.usuCodigo],
		references: [usuario.usuCodigo]
	}),
	venda: one(vendas, {
		fields: [pedidosReembarcados.venCodPedido],
		references: [vendas.venCodPedido]
	}),
}));

export const markUpConteudoRelations = relations(markUpConteudo, ({one}) => ({
	despMarkup: one(despMarkup, {
		fields: [markUpConteudo.dmCodigo],
		references: [despMarkup.dmCodigo]
	}),
	markUp: one(markUp, {
		fields: [markUpConteudo.marCodigo],
		references: [markUp.marCodigo]
	}),
}));

export const despMarkupRelations = relations(despMarkup, ({many}) => ({
	markUpConteudos: many(markUpConteudo),
}));

export const markUpRelations = relations(markUp, ({many}) => ({
	markUpConteudos: many(markUpConteudo),
	produtos: many(produto),
}));

export const rtcResumoClassificacaoFiscalRelations = relations(rtcResumoClassificacaoFiscal, ({one, many}) => ({
	usuario: one(usuario, {
		fields: [rtcResumoClassificacaoFiscal.usuCodigo],
		references: [usuario.usuCodigo]
	}),
	rtcClassificacaoFiscals: many(rtcClassificacaoFiscal),
}));

export const itensVendaLimitePromocaoRelations = relations(itensVendaLimitePromocao, ({one}) => ({
	venda: one(vendas, {
		fields: [itensVendaLimitePromocao.venCodPedido],
		references: [vendas.venCodPedido]
	}),
	produto: one(produto, {
		fields: [itensVendaLimitePromocao.proCodigo],
		references: [produto.proCodigo]
	}),
	promocoe: one(promocoes, {
		fields: [itensVendaLimitePromocao.prmCodigo],
		references: [promocoes.prmCodigo]
	}),
}));

export const itensLacPagarRelations = relations(itensLacPagar, ({one}) => ({
	contasPagar_cpCodigo: one(contasPagar, {
		fields: [itensLacPagar.cpCodigo],
		references: [contasPagar.cpCodigo],
		relationName: "itensLacPagar_cpCodigo_contasPagar_cpCodigo"
	}),
	contasPagar_cpCodigo: one(contasPagar, {
		fields: [itensLacPagar.cpCodigo],
		references: [contasPagar.cpCodigo],
		relationName: "itensLacPagar_cpCodigo_contasPagar_cpCodigo"
	}),
}));

export const pedidoRelations = relations(pedido, ({one, many}) => ({
	centrocusto: one(centrocusto, {
		fields: [pedido.ccCodigo],
		references: [centrocusto.ccCodigo]
	}),
	contrato: one(contrato, {
		fields: [pedido.ccvCodigo],
		references: [contrato.ccvCodigo]
	}),
	cotacaoCompra: one(cotacaoCompra, {
		fields: [pedido.cotCodigo],
		references: [cotacaoCompra.cotCodigo]
	}),
	empresa: one(empresa, {
		fields: [pedido.empCodigo],
		references: [empresa.empCodigo]
	}),
	fornecedor: one(fornecedor, {
		fields: [pedido.forCodigo],
		references: [fornecedor.forCodigo]
	}),
	funcionario: one(funcionario, {
		fields: [pedido.fuCodigo],
		references: [funcionario.fuCodigo]
	}),
	motivoDivergencia: one(motivoDivergencia, {
		fields: [pedido.modCodigo],
		references: [motivoDivergencia.modCodigo]
	}),
	condicaoPagto: one(condicaoPagto, {
		fields: [pedido.parCpCodigo],
		references: [condicaoPagto.parCpCodigo]
	}),
	tipoOperacao: one(tipoOperacao, {
		fields: [pedido.toCodigo],
		references: [tipoOperacao.toCodigo]
	}),
	tipoPagamento: one(tipoPagamento, {
		fields: [pedido.tpCodigo],
		references: [tipoPagamento.tpCodigo]
	}),
	planoConta: one(planoContas, {
		fields: [pedido.coCodigo],
		references: [planoContas.coCodigo]
	}),
	itensCompras: many(itensCompra),
	compras: many(compra),
	itensPedidoCotacaos: many(itensPedidoCotacao),
	itensCotacaoCompras: many(itensCotacaoCompra),
	itensSolicitacaoCompras: many(itensSolicitacaoCompra),
	itensPedidos: many(itensPedido),
	armazenagems: many(armazenagem),
	contasPagars: many(contasPagar),
	pedidoCotacaos: many(pedidoCotacao),
}));

export const contratoRelations = relations(contrato, ({one, many}) => ({
	pedidos: many(pedido),
	despesas: many(despesas),
	vendas: many(vendas),
	contratoEncerramentos: many(contratoEncerramento),
	compras: many(compra),
	armazenagems: many(armazenagem),
	contratoItens: many(contratoItens),
	centrocusto: one(centrocusto, {
		fields: [contrato.ccCodigo],
		references: [centrocusto.ccCodigo]
	}),
	contrato: one(contrato, {
		fields: [contrato.ccvCodigoContratoVenda],
		references: [contrato.ccvCodigo],
		relationName: "contrato_ccvCodigoContratoVenda_contrato_ccvCodigo"
	}),
	contratoes: many(contrato, {
		relationName: "contrato_ccvCodigoContratoVenda_contrato_ccvCodigo"
	}),
	cliente: one(clientes, {
		fields: [contrato.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	planoConta: one(planoContas, {
		fields: [contrato.coCodigo],
		references: [planoContas.coCodigo]
	}),
	empresa: one(empresa, {
		fields: [contrato.empCodigo],
		references: [empresa.empCodigo]
	}),
	fornecedor: one(fornecedor, {
		fields: [contrato.forCodigo],
		references: [fornecedor.forCodigo]
	}),
	moeda: one(moeda, {
		fields: [contrato.moeCodigo],
		references: [moeda.moeCodigo]
	}),
	condicaoPagto_parCpCodigoFin: one(condicaoPagto, {
		fields: [contrato.parCpCodigoFin],
		references: [condicaoPagto.parCpCodigo],
		relationName: "contrato_parCpCodigoFin_condicaoPagto_parCpCodigo"
	}),
	condicaoPagto_parCpCodigo: one(condicaoPagto, {
		fields: [contrato.parCpCodigo],
		references: [condicaoPagto.parCpCodigo],
		relationName: "contrato_parCpCodigo_condicaoPagto_parCpCodigo"
	}),
	tipoContrato: one(tipoContrato, {
		fields: [contrato.tctCodigo],
		references: [tipoContrato.tctCodigo]
	}),
	tipoPagamento: one(tipoPagamento, {
		fields: [contrato.tpCodigo],
		references: [tipoPagamento.tpCodigo]
	}),
	contratoOutrasDespesas: many(contratoOutrasDespesas),
	contasPagars: many(contasPagar),
}));

export const cotacaoCompraRelations = relations(cotacaoCompra, ({one, many}) => ({
	pedidos: many(pedido),
	itensPedidoCotacaos: many(itensPedidoCotacao),
	itensCotacaoCompras: many(itensCotacaoCompra),
	itensPedidos: many(itensPedido),
	pedidoCotacaos: many(pedidoCotacao),
	fornecedorCotacaoCompras: many(fornecedorCotacaoCompra),
	centrocusto: one(centrocusto, {
		fields: [cotacaoCompra.ccCodigo],
		references: [centrocusto.ccCodigo]
	}),
	empresa: one(empresa, {
		fields: [cotacaoCompra.empCodigo],
		references: [empresa.empCodigo]
	}),
}));

export const motivoDivergenciaRelations = relations(motivoDivergencia, ({many}) => ({
	pedidos: many(pedido),
}));

export const historicoRaioXRelations = relations(historicoRaioX, ({one, many}) => ({
	log: one(log, {
		fields: [historicoRaioX.logCodigo],
		references: [log.logCodigo]
	}),
	registrosAnalisadosRaioXES: many(registrosAnalisadosRaioX),
}));

export const movimentoChequeRelations = relations(movimentoCheque, ({one}) => ({
	conta: one(contas, {
		fields: [movimentoCheque.cbCodigo],
		references: [contas.cbCodigo]
	}),
	chequePre: one(chequePre, {
		fields: [movimentoCheque.chCodigo],
		references: [chequePre.chCodigo]
	}),
	baixaLote: one(baixaLote, {
		fields: [movimentoCheque.loCodigo],
		references: [baixaLote.loCodigo]
	}),
}));

export const chequePreRelations = relations(chequePre, ({one, many}) => ({
	movimentoCheques: many(movimentoCheque),
	contaCorrente: one(contaCorrente, {
		fields: [chequePre.cbCodigo],
		references: [contaCorrente.cbCodigo]
	}),
	custodiaCheque: one(custodiaCheque, {
		fields: [chequePre.cchCodigo],
		references: [custodiaCheque.cchCodigo]
	}),
	cliente: one(clientes, {
		fields: [chequePre.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	conta: one(contas, {
		fields: [chequePre.coCodigo],
		references: [contas.cbCodigo]
	}),
	empresa: one(empresa, {
		fields: [chequePre.empCodigo],
		references: [empresa.empCodigo]
	}),
	motivosEstornoCheque: one(motivosEstornoCheque, {
		fields: [chequePre.mecCodigo],
		references: [motivosEstornoCheque.mecCodigo]
	}),
	caixas: many(caixa),
	baixaCrecebers: many(baixaCreceber),
	pagamentosVendas: many(pagamentosVenda),
	baixaCpagars: many(baixaCpagar),
}));

export const baixaLoteRelations = relations(baixaLote, ({one, many}) => ({
	movimentoCheques: many(movimentoCheque),
	baixaCrecebers_loCodigo: many(baixaCreceber, {
		relationName: "baixaCreceber_loCodigo_baixaLote_loCodigo"
	}),
	baixaCrecebers_loCodigo: many(baixaCreceber, {
		relationName: "baixaCreceber_loCodigo_baixaLote_loCodigo"
	}),
	movimentoCaixas: many(movimentoCaixa),
	cliente: one(clientes, {
		fields: [baixaLote.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	moeda: one(moeda, {
		fields: [baixaLote.moeCodigo],
		references: [moeda.moeCodigo]
	}),
	correcaoMovimentoCaixa: one(correcaoMovimentoCaixa, {
		fields: [baixaLote.cmcCodigo],
		references: [correcaoMovimentoCaixa.cmcCodigo]
	}),
	terminaisSmartPo: one(terminaisSmartPos, {
		fields: [baixaLote.tspCodigo],
		references: [terminaisSmartPos.tspCodigo]
	}),
	baixaCreditos: many(baixaCredito),
}));

export const mudancasProgramadasRelations = relations(mudancasProgramadas, ({one}) => ({
	produto: one(produto, {
		fields: [mudancasProgramadas.proCodigo],
		references: [produto.proCodigo]
	}),
	numClassificacao: one(numClassificacao, {
		fields: [mudancasProgramadas.ncCodigo],
		references: [numClassificacao.ncCodigo]
	}),
	empresa: one(empresa, {
		fields: [mudancasProgramadas.empCodigo],
		references: [empresa.empCodigo]
	}),
}));

export const numClassificacaoRelations = relations(numClassificacao, ({many}) => ({
	mudancasProgramadas: many(mudancasProgramadas),
	registrosAnalisadosRaioXES: many(registrosAnalisadosRaioX),
	produtos: many(produto),
	classificacaoFiscals: many(classificacaoFiscal),
	rtcClassificacaoFiscals: many(rtcClassificacaoFiscal),
}));

export const eventoCteRelations = relations(eventoCte, ({one}) => ({
	cte: one(cte, {
		fields: [eventoCte.cteCodigo],
		references: [cte.cteCodigo]
	}),
}));

export const composicaoGeneroRelations = relations(composicaoGenero, ({one}) => ({
	generoMateriaPrima: one(generoMateriaPrima, {
		fields: [composicaoGenero.gmpCodigo],
		references: [generoMateriaPrima.gmpCodigo]
	}),
	produto: one(produto, {
		fields: [composicaoGenero.proCodigo],
		references: [produto.proCodigo]
	}),
}));

export const generoMateriaPrimaRelations = relations(generoMateriaPrima, ({many}) => ({
	composicaoGeneros: many(composicaoGenero),
}));

export const armzFatExpRelations = relations(armzFatExp, ({one, many}) => ({
	contasRecebers: many(contasReceber),
	empresa: one(empresa, {
		fields: [armzFatExp.empCodigo],
		references: [empresa.empCodigo]
	}),
	produto: one(produto, {
		fields: [armzFatExp.proCodigo],
		references: [produto.proCodigo]
	}),
	usuario: one(usuario, {
		fields: [armzFatExp.usuCodigo],
		references: [usuario.usuCodigo]
	}),
	movimentoFinanceiros: many(movimentoFinanceiro),
}));

export const aluguelRelations = relations(aluguel, ({one, many}) => ({
	contasRecebers: many(contasReceber),
	itensRetornoAluguels: many(itensRetornoAluguel),
	itensAluguels: many(itensAluguel),
	conta: one(contas, {
		fields: [aluguel.cbCodigo],
		references: [contas.cbCodigo]
	}),
	centrocusto: one(centrocusto, {
		fields: [aluguel.ccCodigo],
		references: [centrocusto.ccCodigo]
	}),
	cliente: one(clientes, {
		fields: [aluguel.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	planoConta: one(planoContas, {
		fields: [aluguel.coCodigo],
		references: [planoContas.coCodigo]
	}),
	estoqueLocai: one(estoqueLocais, {
		fields: [aluguel.elcCodigo],
		references: [estoqueLocais.elcCodigo]
	}),
	empresa: one(empresa, {
		fields: [aluguel.empCodigo],
		references: [empresa.empCodigo]
	}),
	condicaoPagto: one(condicaoPagto, {
		fields: [aluguel.parCpCodigo],
		references: [condicaoPagto.parCpCodigo]
	}),
	tipoPagamento: one(tipoPagamento, {
		fields: [aluguel.tpCodigo],
		references: [tipoPagamento.tpCodigo]
	}),
	andamentoEstoques: many(andamentoEstoque),
	retornoAluguels: many(retornoAluguel),
}));

export const carteiraCobrancaRelations = relations(carteiraCobranca, ({many}) => ({
	contasRecebers: many(contasReceber),
	parametros: many(parametro),
	antecipacaoRecebiveis: many(antecipacaoRecebiveis),
	contasPagars: many(contasPagar),
}));

export const contratoEncerramentoRelations = relations(contratoEncerramento, ({one, many}) => ({
	contasRecebers: many(contasReceber),
	centrocusto: one(centrocusto, {
		fields: [contratoEncerramento.ccCodigo],
		references: [centrocusto.ccCodigo]
	}),
	contrato: one(contrato, {
		fields: [contratoEncerramento.ccvCodigo],
		references: [contrato.ccvCodigo]
	}),
	planoConta: one(planoContas, {
		fields: [contratoEncerramento.coCodigo],
		references: [planoContas.coCodigo]
	}),
	condicaoPagto: one(condicaoPagto, {
		fields: [contratoEncerramento.parCpCodigo],
		references: [condicaoPagto.parCpCodigo]
	}),
	tipoPagamento: one(tipoPagamento, {
		fields: [contratoEncerramento.tpCodigo],
		references: [tipoPagamento.tpCodigo]
	}),
	contasPagars: many(contasPagar),
}));

export const baixaCreceberRelations = relations(baixaCreceber, ({one, many}) => ({
	contasRecebers: many(contasReceber, {
		relationName: "contasReceber_crVinculoVariacao_baixaCreceber_crCodigo"
	}),
	caixas: many(caixa),
	cartao: one(cartao, {
		fields: [baixaCreceber.carCodigo],
		references: [cartao.carCodigo]
	}),
	conta: one(contas, {
		fields: [baixaCreceber.cbCodigo],
		references: [contas.cbCodigo]
	}),
	chequePre: one(chequePre, {
		fields: [baixaCreceber.chCodigo],
		references: [chequePre.chCodigo]
	}),
	planoConta: one(planoContas, {
		fields: [baixaCreceber.coCodigo],
		references: [planoContas.coCodigo]
	}),
	contasReceber: one(contasReceber, {
		fields: [baixaCreceber.crCodigoCr],
		references: [contasReceber.crCodigo],
		relationName: "baixaCreceber_crCodigoCr_contasReceber_crCodigo"
	}),
	empresa: one(empresa, {
		fields: [baixaCreceber.empCodigo],
		references: [empresa.empCodigo]
	}),
	baixaLote_loCodigo: one(baixaLote, {
		fields: [baixaCreceber.loCodigo],
		references: [baixaLote.loCodigo],
		relationName: "baixaCreceber_loCodigo_baixaLote_loCodigo"
	}),
	baixaLote_loCodigo: one(baixaLote, {
		fields: [baixaCreceber.loCodigo],
		references: [baixaLote.loCodigo],
		relationName: "baixaCreceber_loCodigo_baixaLote_loCodigo"
	}),
	tipoPagamento: one(tipoPagamento, {
		fields: [baixaCreceber.tpCodigo],
		references: [tipoPagamento.tpCodigo]
	}),
	terminalCaixa: one(terminalCaixa, {
		fields: [baixaCreceber.txCodigo],
		references: [terminalCaixa.txCodigo]
	}),
	venda: one(vendas, {
		fields: [baixaCreceber.venCodPedido],
		references: [vendas.venCodPedido]
	}),
	contasPagar: one(contasPagar, {
		fields: [baixaCreceber.cpCodigoTaxa],
		references: [contasPagar.cpCodigo]
	}),
	arqRectoCredItens: many(arqRectoCredItens),
}));

export const imobilizadoRelations = relations(imobilizado, ({one, many}) => ({
	contasRecebers: many(contasReceber),
	planoConta_coCodigoA: one(planoContas, {
		fields: [imobilizado.coCodigoA],
		references: [planoContas.coCodigo],
		relationName: "imobilizado_coCodigoA_planoContas_coCodigo"
	}),
	planoConta_coCodigoP: one(planoContas, {
		fields: [imobilizado.coCodigoP],
		references: [planoContas.coCodigo],
		relationName: "imobilizado_coCodigoP_planoContas_coCodigo"
	}),
	contasPagars: many(contasPagar),
}));

export const moedaRelations = relations(moeda, ({many}) => ({
	contasRecebers: many(contasReceber),
	vendas: many(vendas),
	baixaLotes: many(baixaLote),
	contas: many(contas),
	notaFaturas: many(notaFatura),
	creditoCrecebers: many(creditoCreceber),
	contratoes: many(contrato),
	cotacoes: many(cotacoes),
	contasPagars: many(contasPagar),
}));

export const notaDebitoRelations = relations(notaDebito, ({one, many}) => ({
	contasRecebers: many(contasReceber),
	faturaNotaDebitos: many(faturaNotaDebito),
	cliente: one(clientes, {
		fields: [notaDebito.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	planoConta: one(planoContas, {
		fields: [notaDebito.coCodigo],
		references: [planoContas.coCodigo]
	}),
	condicaoPagto: one(condicaoPagto, {
		fields: [notaDebito.parCpCodigo],
		references: [condicaoPagto.parCpCodigo]
	}),
	tipoPagamento: one(tipoPagamento, {
		fields: [notaDebito.tpCodigo],
		references: [tipoPagamento.tpCodigo]
	}),
}));

export const retornoAluguelRelations = relations(retornoAluguel, ({one, many}) => ({
	contasRecebers: many(contasReceber),
	itensRetornoAluguels: many(itensRetornoAluguel),
	andamentoEstoques: many(andamentoEstoque),
	aluguel: one(aluguel, {
		fields: [retornoAluguel.aluCodigo],
		references: [aluguel.aluCodigo]
	}),
	conta: one(contas, {
		fields: [retornoAluguel.cbCodigo],
		references: [contas.cbCodigo]
	}),
	centrocusto: one(centrocusto, {
		fields: [retornoAluguel.ccCodigo],
		references: [centrocusto.ccCodigo]
	}),
	cliente: one(clientes, {
		fields: [retornoAluguel.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	planoConta: one(planoContas, {
		fields: [retornoAluguel.coCodigo],
		references: [planoContas.coCodigo]
	}),
	condicaoPagto: one(condicaoPagto, {
		fields: [retornoAluguel.parCpCodigo],
		references: [condicaoPagto.parCpCodigo]
	}),
	tipoPagamento: one(tipoPagamento, {
		fields: [retornoAluguel.tpCodigo],
		references: [tipoPagamento.tpCodigo]
	}),
}));

export const recalculoParcelasRelations = relations(recalculoParcelas, ({one, many}) => ({
	contasRecebers: many(contasReceber),
	crRecalculos: many(crRecalculo),
	centrocusto: one(centrocusto, {
		fields: [recalculoParcelas.ccCodigo],
		references: [centrocusto.ccCodigo]
	}),
	planoConta: one(planoContas, {
		fields: [recalculoParcelas.coCodigo],
		references: [planoContas.coCodigo]
	}),
	empresa: one(empresa, {
		fields: [recalculoParcelas.empCodigo],
		references: [empresa.empCodigo]
	}),
	funcionario: one(funcionario, {
		fields: [recalculoParcelas.recpFuCodigo],
		references: [funcionario.fuCodigo]
	}),
}));

export const creditoCreceberRelations = relations(creditoCreceber, ({one, many}) => ({
	contasRecebers: many(contasReceber),
	creditoGeradoRegraApuracaos: many(creditoGeradoRegraApuracao),
	centrocusto: one(centrocusto, {
		fields: [creditoCreceber.ccCodigo],
		references: [centrocusto.ccCodigo]
	}),
	cliente: one(clientes, {
		fields: [creditoCreceber.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	planoConta: one(planoContas, {
		fields: [creditoCreceber.coCodigo],
		references: [planoContas.coCodigo]
	}),
	creditoCreceber: one(creditoCreceber, {
		fields: [creditoCreceber.crVinculo],
		references: [creditoCreceber.crCodigo],
		relationName: "creditoCreceber_crVinculo_creditoCreceber_crCodigo"
	}),
	creditoCrecebers: many(creditoCreceber, {
		relationName: "creditoCreceber_crVinculo_creditoCreceber_crCodigo"
	}),
	baixaCredito: one(baixaCredito, {
		fields: [creditoCreceber.crVinculoVariacao],
		references: [baixaCredito.crCodigo],
		relationName: "creditoCreceber_crVinculoVariacao_baixaCredito_crCodigo"
	}),
	empresa: one(empresa, {
		fields: [creditoCreceber.empCodigo],
		references: [empresa.empCodigo]
	}),
	moeda: one(moeda, {
		fields: [creditoCreceber.moeCodigo],
		references: [moeda.moeCodigo]
	}),
	representacao: one(representacao, {
		fields: [creditoCreceber.rprCodigo],
		references: [representacao.rprCodigo]
	}),
	transferenciaArmazenagem: one(transferenciaArmazenagem, {
		fields: [creditoCreceber.traCodigo],
		references: [transferenciaArmazenagem.traCodigo]
	}),
	terminalCaixa: one(terminalCaixa, {
		fields: [creditoCreceber.txCodigoBloqueio],
		references: [terminalCaixa.txCodigo]
	}),
	usuario: one(usuario, {
		fields: [creditoCreceber.usuCodigoBloqueio],
		references: [usuario.usuCodigo]
	}),
	venda_venCodPedido: one(vendas, {
		fields: [creditoCreceber.venCodPedido],
		references: [vendas.venCodPedido],
		relationName: "creditoCreceber_venCodPedido_vendas_venCodPedido"
	}),
	venda_venCodPedidoPrioridade: one(vendas, {
		fields: [creditoCreceber.venCodPedidoPrioridade],
		references: [vendas.venCodPedido],
		relationName: "creditoCreceber_venCodPedidoPrioridade_vendas_venCodPedido"
	}),
	baixaCreditos: many(baixaCredito, {
		relationName: "baixaCredito_crCodigoCr_creditoCreceber_crCodigo"
	}),
}));

export const relatorioDinamicoExibicaoRelations = relations(relatorioDinamicoExibicao, ({one}) => ({
	relatorioDinamico: one(relatorioDinamico, {
		fields: [relatorioDinamicoExibicao.relCodigo],
		references: [relatorioDinamico.relCodigo]
	}),
}));

export const relatorioDinamicoRelations = relations(relatorioDinamico, ({many}) => ({
	relatorioDinamicoExibicaos: many(relatorioDinamicoExibicao),
	relatorioDinamicoUsuarios: many(relatorioDinamicoUsuarios),
}));

export const espacoAgendamentoRelations = relations(espacoAgendamento, ({one}) => ({
	cliente: one(clientes, {
		fields: [espacoAgendamento.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	espacoReserva: one(espacoReserva, {
		fields: [espacoAgendamento.erCodigo],
		references: [espacoReserva.erCodigo]
	}),
}));

export const espacoReservaRelations = relations(espacoReserva, ({many}) => ({
	espacoAgendamentos: many(espacoAgendamento),
}));

export const catalogoReferenciaRelations = relations(catalogoReferencia, ({one}) => ({
	marca: one(marca, {
		fields: [catalogoReferencia.maCodigo],
		references: [marca.maCodigo]
	}),
	produto: one(produto, {
		fields: [catalogoReferencia.proCodigo],
		references: [produto.proCodigo]
	}),
}));

export const impressoraNaoFiscalRelations = relations(impressoraNaoFiscal, ({one, many}) => ({
	setors: many(setor),
	departamentos: many(departamento),
	terminalCaixas: many(terminalCaixa),
	modeloImpNaoFiscal: one(modeloImpNaoFiscal, {
		fields: [impressoraNaoFiscal.infCodigoModelo],
		references: [modeloImpNaoFiscal.infCodigo]
	}),
}));

export const bairroRelations = relations(bairro, ({one, many}) => ({
	cidade: one(cidade, {
		fields: [bairro.ciCodigo],
		references: [cidade.ciCodigo]
	}),
	estado: one(estado, {
		fields: [bairro.esCodigo],
		references: [estado.esCodigo]
	}),
	regiao: one(regiao, {
		fields: [bairro.reCodigo],
		references: [regiao.reCodigo]
	}),
	vendas: many(vendas),
}));

export const etiquetaProdutoRelations = relations(etiquetaProduto, ({one}) => ({
	cliente: one(clientes, {
		fields: [etiquetaProduto.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	embalagem: one(embalagem, {
		fields: [etiquetaProduto.embCodigo],
		references: [embalagem.embCodigo]
	}),
	etiquetaModelo: one(etiquetaModelo, {
		fields: [etiquetaProduto.etmCodigo],
		references: [etiquetaModelo.etmCodigo]
	}),
	fornecedor: one(fornecedor, {
		fields: [etiquetaProduto.forCodigo],
		references: [fornecedor.forCodigo]
	}),
	lote: one(lote, {
		fields: [etiquetaProduto.ltCodigo],
		references: [lote.ltCodigo]
	}),
	produto: one(produto, {
		fields: [etiquetaProduto.proCodigo],
		references: [produto.proCodigo]
	}),
	venda: one(vendas, {
		fields: [etiquetaProduto.venCodPedido],
		references: [vendas.venCodPedido]
	}),
}));

export const etiquetaModeloRelations = relations(etiquetaModelo, ({one, many}) => ({
	etiquetaProdutos: many(etiquetaProduto),
	etiquetasCustomizadas: many(etiquetasCustomizadas),
	etiquetaObjetos: many(etiquetaObjetos),
	visaoRelatorio: one(visaoRelatorio, {
		fields: [etiquetaModelo.vsrCodigo],
		references: [visaoRelatorio.vsrCodigo]
	}),
}));

export const padraoRetornoBoletoPlanilhaRelations = relations(padraoRetornoBoletoPlanilha, ({one, many}) => ({
	conta: one(contas, {
		fields: [padraoRetornoBoletoPlanilha.cbCodigoBaixa],
		references: [contas.cbCodigo]
	}),
	boletoRetornoArqs: many(boletoRetornoArq),
}));

export const cteDocAnterioresRelations = relations(cteDocAnteriores, ({one}) => ({
	cliente: one(clientes, {
		fields: [cteDocAnteriores.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	cte: one(cte, {
		fields: [cteDocAnteriores.cteCodigo],
		references: [cte.cteCodigo]
	}),
}));

export const layoutsRelations = relations(layouts, ({many}) => ({
	layoutVariaveis: many(layoutVariaveis),
	layoutsLayoutSqls: many(layoutsLayoutSqls),
}));

export const layoutsLayoutSqlsRelations = relations(layoutsLayoutSqls, ({one, many}) => ({
	layoutVariaveis: many(layoutVariaveis),
	layout: one(layouts, {
		fields: [layoutsLayoutSqls.layCodigo],
		references: [layouts.layCodigo]
	}),
	layoutSql: one(layoutSqls, {
		fields: [layoutsLayoutSqls.lsqlCodigo],
		references: [layoutSqls.lsqlCodigo]
	}),
}));

export const agenciaRelations = relations(agencia, ({one, many}) => ({
	banco: one(bancos, {
		fields: [agencia.banCodigo],
		references: [bancos.banCodigo]
	}),
	contas: many(contas),
	contaCorrentes_agCodigo: many(contaCorrente, {
		relationName: "contaCorrente_agCodigo_agencia_agCodigo"
	}),
	contaCorrentes_agCodigo: many(contaCorrente, {
		relationName: "contaCorrente_agCodigo_agencia_agCodigo"
	}),
	contaCorrentes_agCodigo: many(contaCorrente, {
		relationName: "contaCorrente_agCodigo_agencia_agCodigo"
	}),
}));

export const bancosRelations = relations(bancos, ({many}) => ({
	agencias: many(agencia),
	openFinanceRegras: many(openFinanceRegras),
	regrasConciliacaoAutomaticas: many(regrasConciliacaoAutomatica),
}));

export const promocoesProdutosRelations = relations(promocoesProdutos, ({one}) => ({
	promocoe: one(promocoes, {
		fields: [promocoesProdutos.prmCodigo],
		references: [promocoes.prmCodigo]
	}),
}));

export const dependenteRelations = relations(dependente, ({one}) => ({
	funcionario: one(funcionario, {
		fields: [dependente.fuCodigo],
		references: [funcionario.fuCodigo]
	}),
}));

export const dtSelectReplicaClienteRelations = relations(dtSelectReplicaCliente, ({one}) => ({
	cliente: one(clientes, {
		fields: [dtSelectReplicaCliente.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	dtSelectsReplica: one(dtSelectsReplicas, {
		fields: [dtSelectReplicaCliente.srCodigo],
		references: [dtSelectsReplicas.srCodigo]
	}),
}));

export const dtSelectsReplicasRelations = relations(dtSelectsReplicas, ({many}) => ({
	dtSelectReplicaClientes: many(dtSelectReplicaCliente),
	dtSelectReplicaIndices: many(dtSelectReplicaIndices),
}));

export const ultimaSincronizacaoTrackcashRelations = relations(ultimaSincronizacaoTrackcash, ({one}) => ({
	empresa: one(empresa, {
		fields: [ultimaSincronizacaoTrackcash.empCodigo],
		references: [empresa.empCodigo]
	}),
	integracoesYzidro: one(integracoesYzidro, {
		fields: [ultimaSincronizacaoTrackcash.iyzCodigo],
		references: [integracoesYzidro.iyzCodigo]
	}),
}));

export const operacaoEstoqueRelations = relations(operacaoEstoque, ({one, many}) => ({
	planoConta: one(planoContas, {
		fields: [operacaoEstoque.coCodigo],
		references: [planoContas.coCodigo]
	}),
	fornecedor: one(fornecedor, {
		fields: [operacaoEstoque.forCodigo],
		references: [fornecedor.forCodigo]
	}),
	manutencaoEstoques: many(manutencaoEstoque),
}));

export const opItensConsumidosRelations = relations(opItensConsumidos, ({one, many}) => ({
	estoqueLocai: one(estoqueLocais, {
		fields: [opItensConsumidos.elcCodigo],
		references: [estoqueLocais.elcCodigo]
	}),
	lote: one(lote, {
		fields: [opItensConsumidos.ltCodigo],
		references: [lote.ltCodigo]
	}),
	opItensProduzido: one(opItensProduzidos, {
		fields: [opItensConsumidos.oipCodigo],
		references: [opItensProduzidos.oipCodigo]
	}),
	produto_proCodigoAcabado: one(produto, {
		fields: [opItensConsumidos.proCodigoAcabado],
		references: [produto.proCodigo],
		relationName: "opItensConsumidos_proCodigoAcabado_produto_proCodigo"
	}),
	produto_proCodigo: one(produto, {
		fields: [opItensConsumidos.proCodigo],
		references: [produto.proCodigo],
		relationName: "opItensConsumidos_proCodigo_produto_proCodigo"
	}),
	producao: one(producao, {
		fields: [opItensConsumidos.prodCodigo],
		references: [producao.prodCodigo]
	}),
	andamentoEstoques: many(andamentoEstoque),
}));

export const opItensProduzidosRelations = relations(opItensProduzidos, ({one, many}) => ({
	opItensConsumidos: many(opItensConsumidos),
	controleNumeracaoProducaos: many(controleNumeracaoProducao),
	embalagens: many(embalagens),
	requisicaoConsumoOps: many(requisicaoConsumoOp),
	andamentoEstoques: many(andamentoEstoque),
	core: one(cores, {
		fields: [opItensProduzidos.coCodigo],
		references: [cores.coCodigo]
	}),
	estoqueLocai: one(estoqueLocais, {
		fields: [opItensProduzidos.elcCodigo],
		references: [estoqueLocais.elcCodigo]
	}),
	funcionario: one(funcionario, {
		fields: [opItensProduzidos.fuCodigo],
		references: [funcionario.fuCodigo]
	}),
	lote: one(lote, {
		fields: [opItensProduzidos.ltCodigo],
		references: [lote.ltCodigo]
	}),
	produto: one(produto, {
		fields: [opItensProduzidos.proCodigo],
		references: [produto.proCodigo]
	}),
	producao: one(producao, {
		fields: [opItensProduzidos.prodCodigo],
		references: [producao.prodCodigo]
	}),
	turno: one(turno, {
		fields: [opItensProduzidos.turCodigo],
		references: [turno.turCodigo]
	}),
}));

export const perguntasUsuariosRelations = relations(perguntasUsuarios, ({one}) => ({
	pergunta: one(perguntas, {
		fields: [perguntasUsuarios.perCodigo],
		references: [perguntas.perCodigo]
	}),
	usuario: one(usuario, {
		fields: [perguntasUsuarios.usuCodigo],
		references: [usuario.usuCodigo]
	}),
}));

export const perguntasRelations = relations(perguntas, ({many}) => ({
	perguntasUsuarios: many(perguntasUsuarios),
}));

export const interacoesAtendimentosRelations = relations(interacoesAtendimentos, ({one}) => ({
	pabxCdr: one(pabxCdr, {
		fields: [interacoesAtendimentos.cdrCodigo],
		references: [pabxCdr.cdrCodigo]
	}),
	ocorrenciasCrm: one(ocorrenciasCrm, {
		fields: [interacoesAtendimentos.occCodigo],
		references: [ocorrenciasCrm.occCodigo]
	}),
	prospeccao: one(prospeccao, {
		fields: [interacoesAtendimentos.ppcCodigo],
		references: [prospeccao.ppcCodigo]
	}),
	projeto: one(projetos, {
		fields: [interacoesAtendimentos.prjCodigo],
		references: [projetos.prjCodigo]
	}),
	whatsappProtocolo: one(whatsappProtocolos, {
		fields: [interacoesAtendimentos.wapProtocolo],
		references: [whatsappProtocolos.wapProtocolo]
	}),
}));

export const fciNotasRelations = relations(fciNotas, ({one}) => ({
	nota: one(nota, {
		fields: [fciNotas.nfCodigo],
		references: [nota.nfCodigo]
	}),
	produto: one(produto, {
		fields: [fciNotas.proCodigo],
		references: [produto.proCodigo]
	}),
}));

export const causaCrmRelations = relations(causaCrm, ({one, many}) => ({
	ocorrenciasCrms: many(ocorrenciasCrm),
	motivoCrm: one(motivoCrm, {
		fields: [causaCrm.moCodigo],
		references: [motivoCrm.moCodigo]
	}),
	solucaoCrms: many(solucaoCrm),
}));

export const motivoCrmRelations = relations(motivoCrm, ({many}) => ({
	ocorrenciasCrms: many(ocorrenciasCrm),
	causaCrms: many(causaCrm),
}));

export const solucaoCrmRelations = relations(solucaoCrm, ({one, many}) => ({
	ocorrenciasCrms: many(ocorrenciasCrm),
	causaCrm: one(causaCrm, {
		fields: [solucaoCrm.cauCodigo],
		references: [causaCrm.cauCodigo]
	}),
	centrocusto: one(centrocusto, {
		fields: [solucaoCrm.ccCodigo],
		references: [centrocusto.ccCodigo]
	}),
	planoConta: one(planoContas, {
		fields: [solucaoCrm.coCodigo],
		references: [planoContas.coCodigo]
	}),
}));

export const cteObsFiscoRelations = relations(cteObsFisco, ({one}) => ({
	cte: one(cte, {
		fields: [cteObsFisco.cteCodigo],
		references: [cte.cteCodigo]
	}),
}));

export const balancaFaturaRelations = relations(balancaFatura, ({one}) => ({
	balanca: one(balanca, {
		fields: [balancaFatura.baCodigo],
		references: [balanca.baCodigo]
	}),
}));

export const spedf0450Relations = relations(spedf0450, ({one}) => ({
	spedf0000: one(spedf0000, {
		fields: [spedf0450.sf0000Codigo],
		references: [spedf0000.sf0000Codigo]
	}),
}));

export const itensRetornoAluguelRelations = relations(itensRetornoAluguel, ({one}) => ({
	aluguel: one(aluguel, {
		fields: [itensRetornoAluguel.aluCodigo],
		references: [aluguel.aluCodigo]
	}),
	itensAluguel: one(itensAluguel, {
		fields: [itensRetornoAluguel.itaCodigo],
		references: [itensAluguel.itaCodigo]
	}),
	retornoAluguel: one(retornoAluguel, {
		fields: [itensRetornoAluguel.raCodigo],
		references: [retornoAluguel.raCodigo]
	}),
	unidadesAlternativa: one(unidadesAlternativas, {
		fields: [itensRetornoAluguel.unaCodigo],
		references: [unidadesAlternativas.unaCodigo]
	}),
}));

export const itensAluguelRelations = relations(itensAluguel, ({one, many}) => ({
	itensRetornoAluguels: many(itensRetornoAluguel),
	aluguel: one(aluguel, {
		fields: [itensAluguel.aluCodigo],
		references: [aluguel.aluCodigo]
	}),
	produto: one(produto, {
		fields: [itensAluguel.proCodigo],
		references: [produto.proCodigo]
	}),
	unidadesAlternativa: one(unidadesAlternativas, {
		fields: [itensAluguel.unaCodigo],
		references: [unidadesAlternativas.unaCodigo]
	}),
}));

export const itensRegraApuracaoCreditoRelations = relations(itensRegraApuracaoCredito, ({one}) => ({
	regraApuracaoCredito: one(regraApuracaoCredito, {
		fields: [itensRegraApuracaoCredito.racCodigo],
		references: [regraApuracaoCredito.racCodigo]
	}),
	produto: one(produto, {
		fields: [itensRegraApuracaoCredito.proCodigo],
		references: [produto.proCodigo]
	}),
}));

export const itensTransMercadoriaRelations = relations(itensTransMercadoria, ({one}) => ({
	produto: one(produto, {
		fields: [itensTransMercadoria.proCodigo],
		references: [produto.proCodigo]
	}),
	transMercadoria: one(transMercadoria, {
		fields: [itensTransMercadoria.trmCodigo],
		references: [transMercadoria.trmCodigo]
	}),
}));

export const transMercadoriaRelations = relations(transMercadoria, ({many}) => ({
	itensTransMercadorias: many(itensTransMercadoria),
}));

export const itensCursoRelations = relations(itensCurso, ({one}) => ({
	curso: one(curso, {
		fields: [itensCurso.curCodigo],
		references: [curso.curCodigo]
	}),
	funcionario: one(funcionario, {
		fields: [itensCurso.fuCodigo],
		references: [funcionario.fuCodigo]
	}),
}));

export const cursoRelations = relations(curso, ({many}) => ({
	itensCursos: many(itensCurso),
}));

export const marcasSelloutDistribuicaoRelations = relations(marcasSelloutDistribuicao, ({one}) => ({
	integracaoSelloutDistribuicao: one(integracaoSelloutDistribuicao, {
		fields: [marcasSelloutDistribuicao.isdCodigo],
		references: [integracaoSelloutDistribuicao.isdCodigo]
	}),
	marca: one(marca, {
		fields: [marcasSelloutDistribuicao.maCodigo],
		references: [marca.maCodigo]
	}),
}));

export const integracaoSelloutDistribuicaoRelations = relations(integracaoSelloutDistribuicao, ({one, many}) => ({
	marcasSelloutDistribuicaos: many(marcasSelloutDistribuicao),
	fornecedor: one(fornecedor, {
		fields: [integracaoSelloutDistribuicao.forCodigo],
		references: [fornecedor.forCodigo]
	}),
	empresa: one(empresa, {
		fields: [integracaoSelloutDistribuicao.empCodigo],
		references: [empresa.empCodigo]
	}),
	produtosSelloutDistribuicaos: many(produtosSelloutDistribuicao),
}));

export const regrasEstIntelFiscalRelations = relations(regrasEstIntelFiscal, ({one}) => ({
	empresa: one(empresa, {
		fields: [regrasEstIntelFiscal.empCodigo],
		references: [empresa.empCodigo]
	}),
}));

export const terminaisSmartPosRelations = relations(terminaisSmartPos, ({one, many}) => ({
	empresa: one(empresa, {
		fields: [terminaisSmartPos.empCodigo],
		references: [empresa.empCodigo]
	}),
	credenciadoraMeiosPgto: one(credenciadoraMeiosPgto, {
		fields: [terminaisSmartPos.cmpCodigo],
		references: [credenciadoraMeiosPgto.cmpCodigo]
	}),
	cartao: one(cartao, {
		fields: [terminaisSmartPos.carCodigoPix],
		references: [cartao.carCodigo]
	}),
	baixaLotes: many(baixaLote),
	pagamentosVendas: many(pagamentosVenda),
	terminalCaixas: many(terminalCaixa),
}));

export const cartaoRelations = relations(cartao, ({one, many}) => ({
	terminaisSmartPos: many(terminaisSmartPos),
	cartaoEmpresas: many(cartaoEmpresa),
	parametros: many(parametro),
	baixaCrecebers: many(baixaCreceber),
	conta: one(contas, {
		fields: [cartao.cbCodigo],
		references: [contas.cbCodigo]
	}),
	credenciadoraMeiosPgto: one(credenciadoraMeiosPgto, {
		fields: [cartao.cmpCodigoOld],
		references: [credenciadoraMeiosPgto.cmpCodigo]
	}),
	planoConta: one(planoContas, {
		fields: [cartao.coCodigoTaxa],
		references: [planoContas.coCodigo]
	}),
	tipoPagamento: one(tipoPagamento, {
		fields: [cartao.tpCodigo],
		references: [tipoPagamento.tpCodigo]
	}),
	pagamentosVendas: many(pagamentosVenda),
	terminalCaixas: many(terminalCaixa),
}));

export const fciMpcRelations = relations(fciMpc, ({one}) => ({
	produto: one(produto, {
		fields: [fciMpc.proCodigo],
		references: [produto.proCodigo]
	}),
}));

export const notaContatoRelations = relations(notaContato, ({one}) => ({
	contato: one(contatos, {
		fields: [notaContato.conCodigo],
		references: [contatos.conCodigo]
	}),
	nota: one(nota, {
		fields: [notaContato.nfCodigo],
		references: [nota.nfCodigo]
	}),
}));

export const itensCompraFrigorificoRelations = relations(itensCompraFrigorifico, ({one}) => ({
	compraFrigorifico: one(compraFrigorifico, {
		fields: [itensCompraFrigorifico.friCodigo],
		references: [compraFrigorifico.friCodigo]
	}),
	produto: one(produto, {
		fields: [itensCompraFrigorifico.proCodigo],
		references: [produto.proCodigo]
	}),
}));

export const compraFrigorificoRelations = relations(compraFrigorifico, ({one, many}) => ({
	itensCompraFrigorificos: many(itensCompraFrigorifico),
	compra: one(compra, {
		fields: [compraFrigorifico.cmpCodigo],
		references: [compra.cmpCodigo]
	}),
	fornecedor: one(fornecedor, {
		fields: [compraFrigorifico.forCodigo],
		references: [fornecedor.forCodigo]
	}),
}));

export const catalogosProdutosIfoodRelations = relations(catalogosProdutosIfood, ({one}) => ({
	catalogosIfood: one(catalogosIfood, {
		fields: [catalogosProdutosIfood.cifCodigo],
		references: [catalogosIfood.cifCodigo]
	}),
	grupo: one(grupos, {
		fields: [catalogosProdutosIfood.grpCodigo],
		references: [grupos.grpCodigo]
	}),
	produto: one(produto, {
		fields: [catalogosProdutosIfood.proCodigo],
		references: [produto.proCodigo]
	}),
}));

export const catalogosIfoodRelations = relations(catalogosIfood, ({one, many}) => ({
	catalogosProdutosIfoods: many(catalogosProdutosIfood),
	categoriasIfoods: many(categoriasIfood),
	tabelaPreco: one(tabelaPreco, {
		fields: [catalogosIfood.taCodigo],
		references: [tabelaPreco.taCodigo]
	}),
}));

export const examemedicoRelations = relations(examemedico, ({one, many}) => ({
	medico: one(medico, {
		fields: [examemedico.medCodigo],
		references: [medico.medCodigo]
	}),
	examemedicoclientes: many(examemedicocliente),
}));

export const medicoRelations = relations(medico, ({one, many}) => ({
	examemedicos: many(examemedico),
	codPai: one(codPais, {
		fields: [medico.codPais],
		references: [codPais.codPais]
	}),
	estado: one(estado, {
		fields: [medico.esCodigo],
		references: [estado.esCodigo]
	}),
}));

export const cargaHorariaRelations = relations(cargaHoraria, ({one}) => ({
	funcionario: one(funcionario, {
		fields: [cargaHoraria.fuCodigo],
		references: [funcionario.fuCodigo]
	}),
	turno: one(turno, {
		fields: [cargaHoraria.turCodigo],
		references: [turno.turCodigo]
	}),
}));

export const turnoRelations = relations(turno, ({many}) => ({
	cargaHorarias: many(cargaHoraria),
	opItensProduzidos: many(opItensProduzidos),
}));

export const fciUmcRelations = relations(fciUmc, ({one}) => ({
	produto: one(produto, {
		fields: [fciUmc.proCodigo],
		references: [produto.proCodigo]
	}),
}));

export const spedf0005Relations = relations(spedf0005, ({one}) => ({
	spedf0000: one(spedf0000, {
		fields: [spedf0005.sf0000Codigo],
		references: [spedf0000.sf0000Codigo]
	}),
}));

export const estoqueEmpresaFechamentoRelations = relations(estoqueEmpresaFechamento, ({one}) => ({
	empresa: one(empresa, {
		fields: [estoqueEmpresaFechamento.empCodigo],
		references: [empresa.empCodigo]
	}),
	produto: one(produto, {
		fields: [estoqueEmpresaFechamento.proCodigo],
		references: [produto.proCodigo]
	}),
}));

export const eventoMdfeRelations = relations(eventoMdfe, ({one}) => ({
	mdfe: one(mdfe, {
		fields: [eventoMdfe.mdfCodigo],
		references: [mdfe.mdfCodigo]
	}),
}));

export const etiquetasCustomizadasRelations = relations(etiquetasCustomizadas, ({one}) => ({
	etiquetaModelo: one(etiquetaModelo, {
		fields: [etiquetasCustomizadas.etmCodigo],
		references: [etiquetaModelo.etmCodigo]
	}),
	produto: one(produto, {
		fields: [etiquetasCustomizadas.proCodigo],
		references: [produto.proCodigo]
	}),
}));

export const produtoControleQualidadeRelations = relations(produtoControleQualidade, ({one}) => ({
	produto: one(produto, {
		fields: [produtoControleQualidade.proCodigo],
		references: [produto.proCodigo]
	}),
}));

export const maquina1Relations = relations(maquina1, ({one}) => ({
	cliente: one(clientes, {
		fields: [maquina1.cliCodigo],
		references: [clientes.cliCodigo]
	}),
}));

export const creditoGeradoRegraApuracaoRelations = relations(creditoGeradoRegraApuracao, ({one}) => ({
	creditoCreceber: one(creditoCreceber, {
		fields: [creditoGeradoRegraApuracao.ccCodigo],
		references: [creditoCreceber.crCodigo]
	}),
	regraApuracaoCredito: one(regraApuracaoCredito, {
		fields: [creditoGeradoRegraApuracao.racCodigo],
		references: [regraApuracaoCredito.racCodigo]
	}),
	usuario: one(usuario, {
		fields: [creditoGeradoRegraApuracao.usuCodigo],
		references: [usuario.usuCodigo]
	}),
}));

export const conferenciaFinanceiraCargasRelations = relations(conferenciaFinanceiraCargas, ({one}) => ({
	carregamento: one(carregamento, {
		fields: [conferenciaFinanceiraCargas.carCodigoPrincipal],
		references: [carregamento.carCodigo]
	}),
}));

export const itensRepresentacaoRelations = relations(itensRepresentacao, ({one}) => ({
	produto: one(produto, {
		fields: [itensRepresentacao.proCodigo],
		references: [produto.proCodigo]
	}),
	representacao: one(representacao, {
		fields: [itensRepresentacao.rprCodigo],
		references: [representacao.rprCodigo]
	}),
	unidadesAlternativa: one(unidadesAlternativas, {
		fields: [itensRepresentacao.unaCodigo],
		references: [unidadesAlternativas.unaCodigo]
	}),
}));

export const replicarAlteracoesTerminalRelations = relations(replicarAlteracoesTerminal, ({one}) => ({
	historicoAlteracoe: one(historicoAlteracoes, {
		fields: [replicarAlteracoesTerminal.haCodigo],
		references: [historicoAlteracoes.haCodigo]
	}),
	terminalCaixa: one(terminalCaixa, {
		fields: [replicarAlteracoesTerminal.txCodigo],
		references: [terminalCaixa.txCodigo]
	}),
}));

export const openFinanceRegrasRelations = relations(openFinanceRegras, ({one}) => ({
	banco: one(bancos, {
		fields: [openFinanceRegras.banCodigo],
		references: [bancos.banCodigo]
	}),
	conta: one(contas, {
		fields: [openFinanceRegras.cbCodigo],
		references: [contas.cbCodigo]
	}),
}));

export const cobCfProcedaRelations = relations(cobCfProceda, ({many}) => ({
	ctes: many(cte),
	conhecimentoFretes: many(conhecimentoFrete),
}));

export const rtcItensRelations = relations(rtcItens, ({one}) => ({
	rtcCabecalho: one(rtcCabecalho, {
		fields: [rtcItens.rcCodigo],
		references: [rtcCabecalho.rcCodigo]
	}),
	nota: one(nota, {
		fields: [rtcItens.nfCodigo],
		references: [nota.nfCodigo]
	}),
	compra: one(compra, {
		fields: [rtcItens.cmpCodigo],
		references: [compra.cmpCodigo]
	}),
	itensNota: one(itensNota, {
		fields: [rtcItens.iteCodigoNota],
		references: [itensNota.iteCodigo]
	}),
	itensCompra: one(itensCompra, {
		fields: [rtcItens.iteCodigoCompra],
		references: [itensCompra.iteCodigo]
	}),
}));

export const rtcCabecalhoRelations = relations(rtcCabecalho, ({one, many}) => ({
	rtcItens: many(rtcItens),
	nota: one(nota, {
		fields: [rtcCabecalho.nfCodigo],
		references: [nota.nfCodigo]
	}),
	compra: one(compra, {
		fields: [rtcCabecalho.cmpCodigo],
		references: [compra.cmpCodigo]
	}),
}));

export const itensCompraRelations = relations(itensCompra, ({one, many}) => ({
	rtcItens: many(rtcItens),
	cfop: one(cfop, {
		fields: [itensCompra.cfCodigo],
		references: [cfop.cfCodigo]
	}),
	compra: one(compra, {
		fields: [itensCompra.cmpCodigo],
		references: [compra.cmpCodigo]
	}),
	cst: one(cst, {
		fields: [itensCompra.csCodigo],
		references: [cst.csCodigo]
	}),
	pedido: one(pedido, {
		fields: [itensCompra.peCodigo],
		references: [pedido.peCodigo]
	}),
	produto_proCodigo: one(produto, {
		fields: [itensCompra.proCodigo],
		references: [produto.proCodigo],
		relationName: "itensCompra_proCodigo_produto_proCodigo"
	}),
	produto_proCodigo: one(produto, {
		fields: [itensCompra.proCodigo],
		references: [produto.proCodigo],
		relationName: "itensCompra_proCodigo_produto_proCodigo"
	}),
	tipoProduto: one(tipoProduto, {
		fields: [itensCompra.tiCodigo],
		references: [tipoProduto.tiCodigo]
	}),
	talhao: one(talhao, {
		fields: [itensCompra.tlhCodigo],
		references: [talhao.tlhCodigo]
	}),
	unidadesAlternativa: one(unidadesAlternativas, {
		fields: [itensCompra.unaCodigo],
		references: [unidadesAlternativas.unaCodigo]
	}),
}));

export const faturaNotaDebitoRelations = relations(faturaNotaDebito, ({one}) => ({
	notaDebito: one(notaDebito, {
		fields: [faturaNotaDebito.ndbCodigo],
		references: [notaDebito.ndbCodigo]
	}),
}));

export const veiculosMdfeRelations = relations(veiculosMdfe, ({one}) => ({
	mdfe: one(mdfe, {
		fields: [veiculosMdfe.mdfCodigo],
		references: [mdfe.mdfCodigo]
	}),
	maqVeic: one(maqVeic, {
		fields: [veiculosMdfe.mvCodigo],
		references: [maqVeic.mvCodigo]
	}),
}));

export const cteDestinadoRelations = relations(cteDestinado, ({one}) => ({
	empresa: one(empresa, {
		fields: [cteDestinado.empCodigo],
		references: [empresa.empCodigo]
	}),
}));

export const custodiaChequeRelations = relations(custodiaCheque, ({one, many}) => ({
	chequePres: many(chequePre),
	conta: one(contas, {
		fields: [custodiaCheque.cbCodigo],
		references: [contas.cbCodigo]
	}),
}));

export const motivosEstornoChequeRelations = relations(motivosEstornoCheque, ({many}) => ({
	chequePres: many(chequePre),
}));

export const despesasRelations = relations(despesas, ({one}) => ({
	contrato: one(contrato, {
		fields: [despesas.ccvCodigo],
		references: [contrato.ccvCodigo]
	}),
	compra: one(compra, {
		fields: [despesas.cmpCodigo],
		references: [compra.cmpCodigo]
	}),
	planoConta: one(planoContas, {
		fields: [despesas.coCodigo],
		references: [planoContas.coCodigo]
	}),
	produto: one(produto, {
		fields: [despesas.proCodigo],
		references: [produto.proCodigo]
	}),
}));

export const vendasExcluidasScanntechRelations = relations(vendasExcluidasScanntech, ({one}) => ({
	empresa: one(empresa, {
		fields: [vendasExcluidasScanntech.empCodigo],
		references: [empresa.empCodigo]
	}),
}));

export const motoristaCteRelations = relations(motoristaCte, ({one}) => ({
	cte: one(cte, {
		fields: [motoristaCte.cteCodigo],
		references: [cte.cteCodigo]
	}),
	motorista: one(motorista, {
		fields: [motoristaCte.motCodigo],
		references: [motorista.motCodigo]
	}),
}));

export const motoristaRelations = relations(motorista, ({one, many}) => ({
	motoristaCtes: many(motoristaCte),
	viagems: many(viagem),
	vendas: many(vendas),
	lancamentoVeiculos: many(lancamentoVeiculo),
	conhecimentoFretes: many(conhecimentoFrete),
	motoristaMdfes: many(motoristaMdfe),
	maqVeics: many(maqVeic),
	carregamentos: many(carregamento),
	cidade: one(cidade, {
		fields: [motorista.ciCodigo],
		references: [cidade.ciCodigo]
	}),
	estoqueLocai: one(estoqueLocais, {
		fields: [motorista.elcCodigoProntaEntrega],
		references: [estoqueLocais.elcCodigo]
	}),
	estado: one(estado, {
		fields: [motorista.esCodigo],
		references: [estado.esCodigo]
	}),
	funcionario: one(funcionario, {
		fields: [motorista.fuCodigo],
		references: [funcionario.fuCodigo]
	}),
}));

export const duplicatasRelations = relations(duplicatas, ({one}) => ({
	cliente: one(clientes, {
		fields: [duplicatas.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	empresa: one(empresa, {
		fields: [duplicatas.empCodigo],
		references: [empresa.empCodigo]
	}),
}));

export const bloqueioTelasRelations = relations(bloqueioTelas, ({one}) => ({
	log: one(log, {
		fields: [bloqueioTelas.logCodigoBoleto],
		references: [log.logCodigo]
	}),
}));

export const laudoArmazenagemRelations = relations(laudoArmazenagem, ({one, many}) => ({
	armazenagem: one(armazenagem, {
		fields: [laudoArmazenagem.arCodigo],
		references: [armazenagem.arCodigo]
	}),
	cliente: one(clientes, {
		fields: [laudoArmazenagem.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	empresa: one(empresa, {
		fields: [laudoArmazenagem.empCodigo],
		references: [empresa.empCodigo]
	}),
	produto: one(produto, {
		fields: [laudoArmazenagem.proCodigo],
		references: [produto.proCodigo],
		relationName: "laudoArmazenagem_proCodigo_produto_proCodigo"
	}),
	transportadora: one(transportadora, {
		fields: [laudoArmazenagem.trCodigo],
		references: [transportadora.trCodigo]
	}),
	produtos: many(produto, {
		relationName: "produto_laCodigo_laudoArmazenagem_laCodigo"
	}),
}));

export const solicitadosPermissaoEspecialRelations = relations(solicitadosPermissaoEspecial, ({one}) => ({
	solicitaPermissaoEspecial: one(solicitaPermissaoEspecial, {
		fields: [solicitadosPermissaoEspecial.speCodigo],
		references: [solicitaPermissaoEspecial.speCodigo]
	}),
}));

export const solicitaPermissaoEspecialRelations = relations(solicitaPermissaoEspecial, ({many}) => ({
	solicitadosPermissaoEspecials: many(solicitadosPermissaoEspecial),
}));

export const tokenIntegracoesRelations = relations(tokenIntegracoes, ({one}) => ({
	integracoesYzidro_iyzCodigo: one(integracoesYzidro, {
		fields: [tokenIntegracoes.iyzCodigo],
		references: [integracoesYzidro.iyzCodigo],
		relationName: "tokenIntegracoes_iyzCodigo_integracoesYzidro_iyzCodigo"
	}),
	integracoesYzidro_iyzCodigo: one(integracoesYzidro, {
		fields: [tokenIntegracoes.iyzCodigo],
		references: [integracoesYzidro.iyzCodigo],
		relationName: "tokenIntegracoes_iyzCodigo_integracoesYzidro_iyzCodigo"
	}),
	conta: one(contas, {
		fields: [tokenIntegracoes.cbCodigo],
		references: [contas.cbCodigo]
	}),
	parametroBoleto: one(parametroBoleto, {
		fields: [tokenIntegracoes.pbCodigo],
		references: [parametroBoleto.pbCodigo]
	}),
}));

export const projetoEtapaEspecificacoesRelations = relations(projetoEtapaEspecificacoes, ({one, many}) => ({
	projetoApontamentos: many(projetoApontamentos),
	projetoEtapa: one(projetoEtapa, {
		fields: [projetoEtapaEspecificacoes.preCodigo],
		references: [projetoEtapa.preCodigo]
	}),
	usuario: one(usuario, {
		fields: [projetoEtapaEspecificacoes.usuCodigo],
		references: [usuario.usuCodigo]
	}),
}));

export const itensGrupoExportacaoRelations = relations(itensGrupoExportacao, ({one}) => ({
	nota: one(nota, {
		fields: [itensGrupoExportacao.nfCodigo],
		references: [nota.nfCodigo]
	}),
	produto: one(produto, {
		fields: [itensGrupoExportacao.proCodigo],
		references: [produto.proCodigo]
	}),
}));

export const itensEmprestimoRelations = relations(itensEmprestimo, ({one}) => ({
	emprestimo: one(emprestimo, {
		fields: [itensEmprestimo.emCodPedido],
		references: [emprestimo.emCodPedido]
	}),
	lote: one(lote, {
		fields: [itensEmprestimo.ltCodigo],
		references: [lote.ltCodigo]
	}),
	produto: one(produto, {
		fields: [itensEmprestimo.proCodigo],
		references: [produto.proCodigo]
	}),
	terminalCaixa: one(terminalCaixa, {
		fields: [itensEmprestimo.txCodigoBloqueio],
		references: [terminalCaixa.txCodigo]
	}),
	unidadesAlternativa: one(unidadesAlternativas, {
		fields: [itensEmprestimo.unaCodigo],
		references: [unidadesAlternativas.unaCodigo]
	}),
	usuario: one(usuario, {
		fields: [itensEmprestimo.usuCodigoBloqueio],
		references: [usuario.usuCodigo]
	}),
	venda: one(vendas, {
		fields: [itensEmprestimo.venCodPedido],
		references: [vendas.venCodPedido]
	}),
}));

export const estoqueLocaisSaldoLoteRelations = relations(estoqueLocaisSaldoLote, ({one}) => ({
	estoqueLocai: one(estoqueLocais, {
		fields: [estoqueLocaisSaldoLote.elcCodigo],
		references: [estoqueLocais.elcCodigo]
	}),
	lote: one(lote, {
		fields: [estoqueLocaisSaldoLote.ltCodigo],
		references: [lote.ltCodigo]
	}),
}));

export const liberacaoSaldoRelations = relations(liberacaoSaldo, ({one}) => ({
	cliente: one(clientes, {
		fields: [liberacaoSaldo.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	produto: one(produto, {
		fields: [liberacaoSaldo.proCodigo],
		references: [produto.proCodigo]
	}),
}));

export const versaoProjetosRelations = relations(versaoProjetos, ({one}) => ({
	projeto: one(projetos, {
		fields: [versaoProjetos.prjCodigo],
		references: [projetos.prjCodigo]
	}),
	versao: one(versao, {
		fields: [versaoProjetos.verCodigo],
		references: [versao.verCodigo]
	}),
}));

export const versaoRelations = relations(versao, ({many}) => ({
	versaoProjetos: many(versaoProjetos),
}));

export const usuariosEmpresaRelations = relations(usuariosEmpresa, ({one}) => ({
	empresa: one(empresa, {
		fields: [usuariosEmpresa.empCodigo],
		references: [empresa.empCodigo]
	}),
	usuario: one(usuario, {
		fields: [usuariosEmpresa.usuCodigo],
		references: [usuario.usuCodigo]
	}),
}));

export const layoutSqlsRelations = relations(layoutSqls, ({many}) => ({
	layoutsLayoutSqls: many(layoutsLayoutSqls),
}));

export const produtoCstNaturezaReceitaRelations = relations(produtoCstNaturezaReceita, ({one}) => ({
	naturezaReceita: one(naturezaReceita, {
		fields: [produtoCstNaturezaReceita.nrCodigo],
		references: [naturezaReceita.nrCodigo]
	}),
	planoConta: one(planoContas, {
		fields: [produtoCstNaturezaReceita.coCodigo],
		references: [planoContas.coCodigo]
	}),
	produto: one(produto, {
		fields: [produtoCstNaturezaReceita.proCodigo],
		references: [produto.proCodigo]
	}),
}));

export const naturezaReceitaRelations = relations(naturezaReceita, ({one, many}) => ({
	produtoCstNaturezaReceitas: many(produtoCstNaturezaReceita),
	planoConta_coCodigoCofins: one(planoContas, {
		fields: [naturezaReceita.coCodigoCofins],
		references: [planoContas.coCodigo],
		relationName: "naturezaReceita_coCodigoCofins_planoContas_coCodigo"
	}),
	planoConta_coCodigoPis: one(planoContas, {
		fields: [naturezaReceita.coCodigoPis],
		references: [planoContas.coCodigo],
		relationName: "naturezaReceita_coCodigoPis_planoContas_coCodigo"
	}),
}));

export const documentosMdfeRelations = relations(documentosMdfe, ({one, many}) => ({
	cte: one(cte, {
		fields: [documentosMdfe.cteCodigo],
		references: [cte.cteCodigo]
	}),
	cliente: one(clientes, {
		fields: [documentosMdfe.docTomador],
		references: [clientes.cliCodigo]
	}),
	mdfe: one(mdfe, {
		fields: [documentosMdfe.mdfCodigo],
		references: [mdfe.mdfCodigo]
	}),
	municipioMdfe: one(municipioMdfe, {
		fields: [documentosMdfe.munCodigo],
		references: [municipioMdfe.munCodigo]
	}),
	nota: one(nota, {
		fields: [documentosMdfe.nfCodigo],
		references: [nota.nfCodigo]
	}),
	seguroMdfes: many(seguroMdfe),
}));

export const municipioMdfeRelations = relations(municipioMdfe, ({one, many}) => ({
	documentosMdfes: many(documentosMdfe),
	mdfe: one(mdfe, {
		fields: [municipioMdfe.mdfCodigo],
		references: [mdfe.mdfCodigo]
	}),
}));

export const cartaoEmpresaRelations = relations(cartaoEmpresa, ({one}) => ({
	cartao: one(cartao, {
		fields: [cartaoEmpresa.carCodigo],
		references: [cartao.carCodigo]
	}),
	credenciadoraMeiosPgto: one(credenciadoraMeiosPgto, {
		fields: [cartaoEmpresa.cmpCodigo],
		references: [credenciadoraMeiosPgto.cmpCodigo]
	}),
	empresa: one(empresa, {
		fields: [cartaoEmpresa.empCodigo],
		references: [empresa.empCodigo]
	}),
}));

export const yzidroTipoIntegracoesRelations = relations(yzidroTipoIntegracoes, ({one, many}) => ({
	yzidroClassificacaoIntegracoe: one(yzidroClassificacaoIntegracoes, {
		fields: [yzidroTipoIntegracoes.ytiClassificacao],
		references: [yzidroClassificacaoIntegracoes.yciClassificacao]
	}),
	integracoesYzidros: many(integracoesYzidro),
}));

export const yzidroClassificacaoIntegracoesRelations = relations(yzidroClassificacaoIntegracoes, ({many}) => ({
	yzidroTipoIntegracoes: many(yzidroTipoIntegracoes),
}));

export const cnaeRelations = relations(cnae, ({many}) => ({
	tipoServicos: many(tipoServicos),
	clientes: many(clientes),
}));

export const layoutVariaveisDesignRelations = relations(layoutVariaveisDesign, ({one}) => ({
	layoutVariaveisField: one(layoutVariaveisFields, {
		fields: [layoutVariaveisDesign.lvfCodigo],
		references: [layoutVariaveisFields.lvfCodigo]
	}),
}));

export const aniversarianteRelations = relations(aniversariante, ({many}) => ({
	itensVendas_aniCodigo: many(itensVenda, {
		relationName: "itensVenda_aniCodigo_aniversariante_aniCodigo"
	}),
	itensVendas_aniCodigo: many(itensVenda, {
		relationName: "itensVenda_aniCodigo_aniversariante_aniCodigo"
	}),
}));

export const arquivosProspeccaoItensRelations = relations(arquivosProspeccaoItens, ({one}) => ({
	prospeccaoIten: one(prospeccaoItens, {
		fields: [arquivosProspeccaoItens.ippCodigo],
		references: [prospeccaoItens.ippCodigo]
	}),
}));

export const boletoRetornoRelations = relations(boletoRetorno, ({one}) => ({
	boleto: one(boleto, {
		fields: [boletoRetorno.boCodigo],
		references: [boleto.boCodigo]
	}),
	boletoRetornoArq: one(boletoRetornoArq, {
		fields: [boletoRetorno.braCodigo],
		references: [boletoRetornoArq.braCodigo]
	}),
	conta: one(contas, {
		fields: [boletoRetorno.cbCodigo],
		references: [contas.cbCodigo]
	}),
	parametroBoleto: one(parametroBoleto, {
		fields: [boletoRetorno.pbCodigo],
		references: [parametroBoleto.pbCodigo]
	}),
}));

export const boletoRetornoArqRelations = relations(boletoRetornoArq, ({one, many}) => ({
	boletoRetornos: many(boletoRetorno),
	conta: one(contas, {
		fields: [boletoRetornoArq.cbCodigo],
		references: [contas.cbCodigo]
	}),
	parametroBoleto: one(parametroBoleto, {
		fields: [boletoRetornoArq.pbCodigo],
		references: [parametroBoleto.pbCodigo]
	}),
	padraoRetornoBoletoPlanilha: one(padraoRetornoBoletoPlanilha, {
		fields: [boletoRetornoArq.prbCodigo],
		references: [padraoRetornoBoletoPlanilha.prbCodigo]
	}),
}));

export const etiquetaGondolaRelations = relations(etiquetaGondola, ({one}) => ({
	produto: one(produto, {
		fields: [etiquetaGondola.proCodigo],
		references: [produto.proCodigo]
	}),
}));

export const fornecedorXmlConversaoRelations = relations(fornecedorXmlConversao, ({one}) => ({
	fornecedor: one(fornecedor, {
		fields: [fornecedorXmlConversao.forCodigo],
		references: [fornecedor.forCodigo]
	}),
	produto: one(produto, {
		fields: [fornecedorXmlConversao.proCodigo],
		references: [produto.proCodigo]
	}),
}));

export const fciOpsRelations = relations(fciOps, ({one}) => ({
	produto: one(produto, {
		fields: [fciOps.proCodigo],
		references: [produto.proCodigo]
	}),
	producao: one(producao, {
		fields: [fciOps.prodCodigo],
		references: [producao.prodCodigo]
	}),
}));

export const baixaCpagarRelations = relations(baixaCpagar, ({one, many}) => ({
	caixas: many(caixa),
	conta: one(contas, {
		fields: [baixaCpagar.cbCodigo],
		references: [contas.cbCodigo]
	}),
	contaCorrente: one(contaCorrente, {
		fields: [baixaCpagar.cctCodigo],
		references: [contaCorrente.cbCodigo]
	}),
	chequePre: one(chequePre, {
		fields: [baixaCpagar.chCodigo],
		references: [chequePre.chCodigo]
	}),
	compra: one(compra, {
		fields: [baixaCpagar.cmpCodigo],
		references: [compra.cmpCodigo]
	}),
	planoConta: one(planoContas, {
		fields: [baixaCpagar.coCodigo],
		references: [planoContas.coCodigo]
	}),
	empresa: one(empresa, {
		fields: [baixaCpagar.empCodigo],
		references: [empresa.empCodigo]
	}),
	contasPagar: one(contasPagar, {
		fields: [baixaCpagar.cpCodigoCp],
		references: [contasPagar.cpCodigo],
		relationName: "baixaCpagar_cpCodigoCp_contasPagar_cpCodigo"
	}),
	contasPagars: many(contasPagar, {
		relationName: "contasPagar_cpVinculoVariacao_baixaCpagar_cpCodigo"
	}),
}));

export const enderecosRelations = relations(enderecos, ({many}) => ({
	lotes: many(lote),
}));

export const gradeTamanhoRelations = relations(gradeTamanho, ({many}) => ({
	lotes: many(lote),
}));

export const saborRelations = relations(sabor, ({many}) => ({
	lotes: many(lote),
}));

export const talhaoRelations = relations(talhao, ({one, many}) => ({
	lotes: many(lote),
	vendas: many(vendas),
	talhaoAnos: many(talhaoAno),
	fornecedor: one(fornecedor, {
		fields: [talhao.forCodigo],
		references: [fornecedor.forCodigo]
	}),
	itensCompras: many(itensCompra),
	itensPedidos: many(itensPedido),
}));

export const cteNotasFiscaisRelations = relations(cteNotasFiscais, ({one}) => ({
	cte: one(cte, {
		fields: [cteNotasFiscais.cteCodigo],
		references: [cte.cteCodigo]
	}),
}));

export const extratoOfxAbertoRelations = relations(extratoOfxAberto, ({one}) => ({
	conta: one(contas, {
		fields: [extratoOfxAberto.cbCodigo],
		references: [contas.cbCodigo]
	}),
}));

export const parcelasPagamentosMdfeRelations = relations(parcelasPagamentosMdfe, ({one}) => ({
	mdfe: one(mdfe, {
		fields: [parcelasPagamentosMdfe.mdfCodigo],
		references: [mdfe.mdfCodigo]
	}),
}));

export const yzidroWebStorageRelations = relations(yzidroWebStorage, ({one}) => ({
	empresa: one(empresa, {
		fields: [yzidroWebStorage.empCodigo],
		references: [empresa.empCodigo]
	}),
}));

export const contatosAplicativosRelations = relations(contatosAplicativos, ({one}) => ({
	aplicativo: one(aplicativos, {
		fields: [contatosAplicativos.appCodigo],
		references: [aplicativos.appCodigo]
	}),
	contato: one(contatos, {
		fields: [contatosAplicativos.conCodigo],
		references: [contatos.conCodigo]
	}),
}));

export const aplicativosRelations = relations(aplicativos, ({many}) => ({
	contatosAplicativos: many(contatosAplicativos),
}));

export const feriasNotificacoesRelations = relations(feriasNotificacoes, ({one}) => ({
	alerta: one(alerta, {
		fields: [feriasNotificacoes.altCodigo],
		references: [alerta.altCodigo]
	}),
	feria: one(ferias, {
		fields: [feriasNotificacoes.ferCodigo],
		references: [ferias.ferCodigo]
	}),
	funcionario: one(funcionario, {
		fields: [feriasNotificacoes.fuCodigo],
		references: [funcionario.fuCodigo]
	}),
}));

export const alertaRelations = relations(alerta, ({many}) => ({
	feriasNotificacoes: many(feriasNotificacoes),
}));

export const feriasRelations = relations(ferias, ({one, many}) => ({
	feriasNotificacoes: many(feriasNotificacoes),
	funcionario: one(funcionario, {
		fields: [ferias.fuCodigo],
		references: [funcionario.fuCodigo]
	}),
}));

export const viagemRelations = relations(viagem, ({one, many}) => ({
	centrocusto: one(centrocusto, {
		fields: [viagem.ccCodigo],
		references: [centrocusto.ccCodigo]
	}),
	empresa: one(empresa, {
		fields: [viagem.empCodigo],
		references: [empresa.empCodigo]
	}),
	motorista: one(motorista, {
		fields: [viagem.motCodigo],
		references: [motorista.motCodigo]
	}),
	maqVeic: one(maqVeic, {
		fields: [viagem.mvCodigo],
		references: [maqVeic.mvCodigo]
	}),
	produto: one(produto, {
		fields: [viagem.proCodigo],
		references: [produto.proCodigo]
	}),
	transfereciaConta: one(transfereciaContas, {
		fields: [viagem.trcCodigo],
		references: [transfereciaContas.trcCodigo]
	}),
	usuario: one(usuario, {
		fields: [viagem.usuCodigo],
		references: [usuario.usuCodigo]
	}),
	itensViagems: many(itensViagem),
}));

export const transfereciaContasRelations = relations(transfereciaContas, ({one, many}) => ({
	viagems: many(viagem),
	itensViagems: many(itensViagem),
	conta_cbCodigoDest: one(contas, {
		fields: [transfereciaContas.cbCodigoDest],
		references: [contas.cbCodigo],
		relationName: "transfereciaContas_cbCodigoDest_contas_cbCodigo"
	}),
	conta_cbCodigoOrig: one(contas, {
		fields: [transfereciaContas.cbCodigoOrig],
		references: [contas.cbCodigo],
		relationName: "transfereciaContas_cbCodigoOrig_contas_cbCodigo"
	}),
	fechaCaixa: one(fechaCaixa, {
		fields: [transfereciaContas.fxCodigo],
		references: [fechaCaixa.fxCodigo]
	}),
}));

export const controleNumeracaoProducaoRelations = relations(controleNumeracaoProducao, ({one}) => ({
	opItensProduzido: one(opItensProduzidos, {
		fields: [controleNumeracaoProducao.oipCodigo],
		references: [opItensProduzidos.oipCodigo]
	}),
	produto_proCodigoAcabado: one(produto, {
		fields: [controleNumeracaoProducao.proCodigoAcabado],
		references: [produto.proCodigo],
		relationName: "controleNumeracaoProducao_proCodigoAcabado_produto_proCodigo"
	}),
	produto_proCodigo: one(produto, {
		fields: [controleNumeracaoProducao.proCodigo],
		references: [produto.proCodigo],
		relationName: "controleNumeracaoProducao_proCodigo_produto_proCodigo"
	}),
	producao: one(producao, {
		fields: [controleNumeracaoProducao.prodCodigo],
		references: [producao.prodCodigo]
	}),
}));

export const itensCompraMadeiraRelations = relations(itensCompraMadeira, ({one}) => ({
	compraMadeira: one(compraMadeira, {
		fields: [itensCompraMadeira.cmmCodigo],
		references: [compraMadeira.cmmCodigo]
	}),
	produto: one(produto, {
		fields: [itensCompraMadeira.proCodigo],
		references: [produto.proCodigo]
	}),
}));

export const compraMadeiraRelations = relations(compraMadeira, ({one, many}) => ({
	itensCompraMadeiras: many(itensCompraMadeira),
	fornecedor_forCodigo: one(fornecedor, {
		fields: [compraMadeira.forCodigo],
		references: [fornecedor.forCodigo],
		relationName: "compraMadeira_forCodigo_fornecedor_forCodigo"
	}),
	fornecedor_forCodigo: one(fornecedor, {
		fields: [compraMadeira.forCodigo],
		references: [fornecedor.forCodigo],
		relationName: "compraMadeira_forCodigo_fornecedor_forCodigo"
	}),
}));

export const controladoriaRelations = relations(controladoria, ({one}) => ({
	centrocusto: one(centrocusto, {
		fields: [controladoria.ccCodigo],
		references: [centrocusto.ccCodigo]
	}),
	planoConta: one(planoContas, {
		fields: [controladoria.coCodigo],
		references: [planoContas.coCodigo]
	}),
	empresa: one(empresa, {
		fields: [controladoria.empCodigo],
		references: [empresa.empCodigo]
	}),
}));

export const dreVisaoPlanosRelations = relations(dreVisaoPlanos, ({one}) => ({
	planoConta: one(planoContas, {
		fields: [dreVisaoPlanos.coCodigo],
		references: [planoContas.coCodigo]
	}),
	dreVisao: one(dreVisao, {
		fields: [dreVisaoPlanos.dvCodigo],
		references: [dreVisao.dvCodigo]
	}),
	empresa: one(empresa, {
		fields: [dreVisaoPlanos.empCodigo],
		references: [empresa.empCodigo]
	}),
}));

export const dreVisaoRelations = relations(dreVisao, ({many}) => ({
	dreVisaoPlanos: many(dreVisaoPlanos),
}));

export const menusVisoesCamposValoresEstilosRelations = relations(menusVisoesCamposValoresEstilos, ({one}) => ({
	menusVisoesCampo: one(menusVisoesCampos, {
		fields: [menusVisoesCamposValoresEstilos.mvCodigo],
		references: [menusVisoesCampos.mvCodigo]
	}),
	menusVisoesOperacoe: one(menusVisoesOperacoes, {
		fields: [menusVisoesCamposValoresEstilos.mvoOperacao],
		references: [menusVisoesOperacoes.mvoCodigo]
	}),
	menusVisoe: one(menusVisoes, {
		fields: [menusVisoesCamposValoresEstilos.mvCodigo],
		references: [menusVisoes.mvCodigo]
	}),
}));

export const metodologiaRelations = relations(metodologia, ({many}) => ({
	projetos: many(projetos),
}));

export const projetosMacroRelations = relations(projetosMacro, ({many}) => ({
	projetos: many(projetos),
}));

export const historicoLogRelations = relations(historicoLog, ({one}) => ({
	empresa: one(empresa, {
		fields: [historicoLog.empCodigo],
		references: [empresa.empCodigo]
	}),
	log: one(log, {
		fields: [historicoLog.logCodigo],
		references: [log.logCodigo]
	}),
}));

export const mesasRelations = relations(mesas, ({one, many}) => ({
	vendas: many(vendas),
	empresa: one(empresa, {
		fields: [mesas.empCodigo],
		references: [empresa.empCodigo]
	}),
	mesa: one(mesas, {
		fields: [mesas.mePrincipal],
		references: [mesas.meCodigo],
		relationName: "mesas_mePrincipal_mesas_meCodigo"
	}),
	mesas: many(mesas, {
		relationName: "mesas_mePrincipal_mesas_meCodigo"
	}),
}));

export const representantesPrepostoRelations = relations(representantesPreposto, ({one, many}) => ({
	vendas: many(vendas),
	estado: one(estado, {
		fields: [representantesPreposto.esCodigo],
		references: [estado.esCodigo]
	}),
	representante: one(representantes, {
		fields: [representantesPreposto.reCodigo],
		references: [representantes.reCodigo]
	}),
	regiao: one(regiao, {
		fields: [representantesPreposto.regCodigo],
		references: [regiao.reCodigo]
	}),
	clientes: many(clientes),
}));

export const retiradoPorRelations = relations(retiradoPor, ({many}) => ({
	vendas: many(vendas),
}));

export const tipoPagamentoWebRelations = relations(tipoPagamentoWeb, ({one, many}) => ({
	vendas: many(vendas),
	tipoPagamento: one(tipoPagamento, {
		fields: [tipoPagamentoWeb.tpCodigo],
		references: [tipoPagamento.tpCodigo]
	}),
	integracoesYzidro: one(integracoesYzidro, {
		fields: [tipoPagamentoWeb.iyzCodigo],
		references: [integracoesYzidro.iyzCodigo]
	}),
}));

export const motivoRecusaOrcamentoRelations = relations(motivoRecusaOrcamento, ({many}) => ({
	vendas: many(vendas),
	motivoPerdaProspeccaos: many(motivoPerdaProspeccao),
}));

export const parametroRelations = relations(parametro, ({one}) => ({
	planoConta_ativo: one(planoContas, {
		fields: [parametro.ativo],
		references: [planoContas.coCodigo],
		relationName: "parametro_ativo_planoContas_coCodigo"
	}),
	carteiraCobranca: one(carteiraCobranca, {
		fields: [parametro.cacCodigoPadrao],
		references: [carteiraCobranca.cacCodigo]
	}),
	cartao: one(cartao, {
		fields: [parametro.carCodigoWeb],
		references: [cartao.carCodigo]
	}),
	conta_cbCodigoContaPixAutomatico: one(contas, {
		fields: [parametro.cbCodigoContaPixAutomatico],
		references: [contas.cbCodigo],
		relationName: "parametro_cbCodigoContaPixAutomatico_contas_cbCodigo"
	}),
	conta_cbContaViagem: one(contas, {
		fields: [parametro.cbContaViagem],
		references: [contas.cbCodigo],
		relationName: "parametro_cbContaViagem_contas_cbCodigo"
	}),
	centrocusto_ccCodigoArmzAluguel: one(centrocusto, {
		fields: [parametro.ccCodigoArmzAluguel],
		references: [centrocusto.ccCodigo],
		relationName: "parametro_ccCodigoArmzAluguel_centrocusto_ccCodigo"
	}),
	centrocusto_ccCodigoSolicitacao: one(centrocusto, {
		fields: [parametro.ccCodigoSolicitacao],
		references: [centrocusto.ccCodigo],
		relationName: "parametro_ccCodigoSolicitacao_centrocusto_ccCodigo"
	}),
	centrocusto_centroCustoAluguel: one(centrocusto, {
		fields: [parametro.centroCustoAluguel],
		references: [centrocusto.ccCodigo],
		relationName: "parametro_centroCustoAluguel_centrocusto_ccCodigo"
	}),
	centrocusto_centroCustoDefaultVenda: one(centrocusto, {
		fields: [parametro.centroCustoDefaultVenda],
		references: [centrocusto.ccCodigo],
		relationName: "parametro_centroCustoDefaultVenda_centrocusto_ccCodigo"
	}),
	centrocusto_centroCustoVendaAt: one(centrocusto, {
		fields: [parametro.centroCustoVendaAt],
		references: [centrocusto.ccCodigo],
		relationName: "parametro_centroCustoVendaAt_centrocusto_ccCodigo"
	}),
	classificacaoFiscal: one(classificacaoFiscal, {
		fields: [parametro.classificacaoPadraoNfe],
		references: [classificacaoFiscal.clCodigo]
	}),
	cliente_cliCodigoTransAutomatica: one(clientes, {
		fields: [parametro.cliCodigoTransAutomatica],
		references: [clientes.cliCodigo],
		relationName: "parametro_cliCodigoTransAutomatica_clientes_cliCodigo"
	}),
	cliente_cliInutilizacao: one(clientes, {
		fields: [parametro.cliInutilizacao],
		references: [clientes.cliCodigo],
		relationName: "parametro_cliInutilizacao_clientes_cliCodigo"
	}),
	conta_contaCartao: one(contas, {
		fields: [parametro.contaCartao],
		references: [contas.cbCodigo],
		relationName: "parametro_contaCartao_contas_cbCodigo"
	}),
	conta_contaChDevolvido: one(contas, {
		fields: [parametro.contaChDevolvido],
		references: [contas.cbCodigo],
		relationName: "parametro_contaChDevolvido_contas_cbCodigo"
	}),
	conta_contaCredito: one(contas, {
		fields: [parametro.contaCredito],
		references: [contas.cbCodigo],
		relationName: "parametro_contaCredito_contas_cbCodigo"
	}),
	conta_contaTerceiro: one(contas, {
		fields: [parametro.contaTerceiro],
		references: [contas.cbCodigo],
		relationName: "parametro_contaTerceiro_contas_cbCodigo"
	}),
	vendedor: one(vendedor, {
		fields: [parametro.contratoVendedorPadrao],
		references: [vendedor.veCodigo]
	}),
	estoqueLocai_elcCodigoAuxiliar: one(estoqueLocais, {
		fields: [parametro.elcCodigoAuxiliar],
		references: [estoqueLocais.elcCodigo],
		relationName: "parametro_elcCodigoAuxiliar_estoqueLocais_elcCodigo"
	}),
	estoqueLocai_elcCodigoPesqProduto1: one(estoqueLocais, {
		fields: [parametro.elcCodigoPesqProduto1],
		references: [estoqueLocais.elcCodigo],
		relationName: "parametro_elcCodigoPesqProduto1_estoqueLocais_elcCodigo"
	}),
	estoqueLocai_elcCodigoPesqProduto2: one(estoqueLocais, {
		fields: [parametro.elcCodigoPesqProduto2],
		references: [estoqueLocais.elcCodigo],
		relationName: "parametro_elcCodigoPesqProduto2_estoqueLocais_elcCodigo"
	}),
	estoqueLocai_elcCodigoTransAutomatica: one(estoqueLocais, {
		fields: [parametro.elcCodigoTransAutomatica],
		references: [estoqueLocais.elcCodigo],
		relationName: "parametro_elcCodigoTransAutomatica_estoqueLocais_elcCodigo"
	}),
	empresa_empCodigo: one(empresa, {
		fields: [parametro.empCodigo],
		references: [empresa.empCodigo],
		relationName: "parametro_empCodigo_empresa_empCodigo"
	}),
	empresa_empresaLimiteCreditoDemander: one(empresa, {
		fields: [parametro.empresaLimiteCreditoDemander],
		references: [empresa.empCodigo],
		relationName: "parametro_empresaLimiteCreditoDemander_empresa_empCodigo"
	}),
	fornecedor_forCodigoIntegracaoMtrix: one(fornecedor, {
		fields: [parametro.forCodigoIntegracaoMtrix],
		references: [fornecedor.forCodigo],
		relationName: "parametro_forCodigoIntegracaoMtrix_fornecedor_forCodigo"
	}),
	fornecedor_fornecedorGenericoRh: one(fornecedor, {
		fields: [parametro.fornecedorGenericoRh],
		references: [fornecedor.forCodigo],
		relationName: "parametro_fornecedorGenericoRh_fornecedor_forCodigo"
	}),
	funcionario_fuCodigoResponsavelTicket: one(funcionario, {
		fields: [parametro.fuCodigoResponsavelTicket],
		references: [funcionario.fuCodigo],
		relationName: "parametro_fuCodigoResponsavelTicket_funcionario_fuCodigo"
	}),
	funcionario_fuCodigoSolicitacao: one(funcionario, {
		fields: [parametro.fuCodigoSolicitacao],
		references: [funcionario.fuCodigo],
		relationName: "parametro_fuCodigoSolicitacao_funcionario_fuCodigo"
	}),
	estoqueLocai_localEstoqueEcommerce: one(estoqueLocais, {
		fields: [parametro.localEstoqueEcommerce],
		references: [estoqueLocais.elcCodigo],
		relationName: "parametro_localEstoqueEcommerce_estoqueLocais_elcCodigo"
	}),
	estoqueLocai_localEstoqueProducaoConsumo: one(estoqueLocais, {
		fields: [parametro.localEstoqueProducaoConsumo],
		references: [estoqueLocais.elcCodigo],
		relationName: "parametro_localEstoqueProducaoConsumo_estoqueLocais_elcCodigo"
	}),
	estoqueLocai_localEstoqueProducao: one(estoqueLocais, {
		fields: [parametro.localEstoqueProducao],
		references: [estoqueLocais.elcCodigo],
		relationName: "parametro_localEstoqueProducao_estoqueLocais_elcCodigo"
	}),
	log: one(log, {
		fields: [parametro.logCodigoBloqueioFaturamento],
		references: [log.logCodigo]
	}),
	tipoOperacao_naturezaOperacaoNfeVenda: one(tipoOperacao, {
		fields: [parametro.naturezaOperacaoNfeVenda],
		references: [tipoOperacao.toCodigo],
		relationName: "parametro_naturezaOperacaoNfeVenda_tipoOperacao_toCodigo"
	}),
	tipoOperacao_naturezaOperacaoSat: one(tipoOperacao, {
		fields: [parametro.naturezaOperacaoSat],
		references: [tipoOperacao.toCodigo],
		relationName: "parametro_naturezaOperacaoSat_tipoOperacao_toCodigo"
	}),
	planoConta_passivo: one(planoContas, {
		fields: [parametro.passivo],
		references: [planoContas.coCodigo],
		relationName: "parametro_passivo_planoContas_coCodigo"
	}),
	planoConta_planoContasAluguel: one(planoContas, {
		fields: [parametro.planoContasAluguel],
		references: [planoContas.coCodigo],
		relationName: "parametro_planoContasAluguel_planoContas_coCodigo"
	}),
	planoConta_planoContasFgts: one(planoContas, {
		fields: [parametro.planoContasFgts],
		references: [planoContas.coCodigo],
		relationName: "parametro_planoContasFgts_planoContas_coCodigo"
	}),
	representante: one(representantes, {
		fields: [parametro.reCodigoPadraoClienteApp],
		references: [representantes.reCodigo]
	}),
	serie_serieEcf: one(serie, {
		fields: [parametro.serieEcf],
		references: [serie.sreCodigo],
		relationName: "parametro_serieEcf_serie_sreCodigo"
	}),
	serie_serieNfceVenda: one(serie, {
		fields: [parametro.serieNfceVenda],
		references: [serie.sreCodigo],
		relationName: "parametro_serieNfceVenda_serie_sreCodigo"
	}),
	serie_serieNfe: one(serie, {
		fields: [parametro.serieNfe],
		references: [serie.sreCodigo],
		relationName: "parametro_serieNfe_serie_sreCodigo"
	}),
	serie_serieNfeVenda: one(serie, {
		fields: [parametro.serieNfeVenda],
		references: [serie.sreCodigo],
		relationName: "parametro_serieNfeVenda_serie_sreCodigo"
	}),
	tabelaPreco_taCodigoReajuste: one(tabelaPreco, {
		fields: [parametro.taCodigoReajuste],
		references: [tabelaPreco.taCodigo],
		relationName: "parametro_taCodigoReajuste_tabelaPreco_taCodigo"
	}),
	tabelaPreco_taCodigoRefAnalisePedido: one(tabelaPreco, {
		fields: [parametro.taCodigoRefAnalisePedido],
		references: [tabelaPreco.taCodigo],
		relationName: "parametro_taCodigoRefAnalisePedido_tabelaPreco_taCodigo"
	}),
	tipoOperacao_toCodigoNfce: one(tipoOperacao, {
		fields: [parametro.toCodigoNfce],
		references: [tipoOperacao.toCodigo],
		relationName: "parametro_toCodigoNfce_tipoOperacao_toCodigo"
	}),
	tipoPagamento_tpCodigoCheque: one(tipoPagamento, {
		fields: [parametro.tpCodigoCheque],
		references: [tipoPagamento.tpCodigo],
		relationName: "parametro_tpCodigoCheque_tipoPagamento_tpCodigo"
	}),
	tipoPagamento_tpCodigoCreditos: one(tipoPagamento, {
		fields: [parametro.tpCodigoCreditos],
		references: [tipoPagamento.tpCodigo],
		relationName: "parametro_tpCodigoCreditos_tipoPagamento_tpCodigo"
	}),
	tipoPagamento_tpCodigoDinheiro: one(tipoPagamento, {
		fields: [parametro.tpCodigoDinheiro],
		references: [tipoPagamento.tpCodigo],
		relationName: "parametro_tpCodigoDinheiro_tipoPagamento_tpCodigo"
	}),
	conta_txContaDestinoDoc: one(contas, {
		fields: [parametro.txContaDestinoDoc],
		references: [contas.cbCodigo],
		relationName: "parametro_txContaDestinoDoc_contas_cbCodigo"
	}),
	conta_txContaDestino: one(contas, {
		fields: [parametro.txContaDestino],
		references: [contas.cbCodigo],
		relationName: "parametro_txContaDestino_contas_cbCodigo"
	}),
	conta_txContaOrigemDoc: one(contas, {
		fields: [parametro.txContaOrigemDoc],
		references: [contas.cbCodigo],
		relationName: "parametro_txContaOrigemDoc_contas_cbCodigo"
	}),
	conta_txContaOrigem: one(contas, {
		fields: [parametro.txContaOrigem],
		references: [contas.cbCodigo],
		relationName: "parametro_txContaOrigem_contas_cbCodigo"
	}),
	usuario: one(usuario, {
		fields: [parametro.usuCodigoApp],
		references: [usuario.usuCodigo]
	}),
	estoqueLocai_elcCodigoCheckout: one(estoqueLocais, {
		fields: [parametro.elcCodigoCheckout],
		references: [estoqueLocais.elcCodigo],
		relationName: "parametro_elcCodigoCheckout_estoqueLocais_elcCodigo"
	}),
	rtcCodigosCclasstrib: one(rtcCodigosCclasstrib, {
		fields: [parametro.cclasstribPadrao],
		references: [rtcCodigosCclasstrib.rccCodigo]
	}),
	rtcClassificacaoFiscal: one(rtcClassificacaoFiscal, {
		fields: [parametro.classificacaoPadraoRtc],
		references: [rtcClassificacaoFiscal.rcfCodigo]
	}),
}));

export const rtcCodigosCclasstribRelations = relations(rtcCodigosCclasstrib, ({one, many}) => ({
	parametros: many(parametro),
	rtcCstIbsCb: one(rtcCstIbsCbs, {
		fields: [rtcCodigosCclasstrib.rcicCodigo],
		references: [rtcCstIbsCbs.rcicCodigo]
	}),
	rtcCreditosPresumido: one(rtcCreditosPresumidos, {
		fields: [rtcCodigosCclasstrib.rcpCodigo],
		references: [rtcCreditosPresumidos.rcpCodigo]
	}),
	rtcClassificacaoFiscals_rccCodigo: many(rtcClassificacaoFiscal, {
		relationName: "rtcClassificacaoFiscal_rccCodigo_rtcCodigosCclasstrib_rccCodigo"
	}),
	rtcClassificacaoFiscals_rccCodigoTribRegular: many(rtcClassificacaoFiscal, {
		relationName: "rtcClassificacaoFiscal_rccCodigoTribRegular_rtcCodigosCclasstrib_rccCodigo"
	}),
}));

export const rtcClassificacaoFiscalRelations = relations(rtcClassificacaoFiscal, ({one, many}) => ({
	parametros: many(parametro),
	numClassificacao: one(numClassificacao, {
		fields: [rtcClassificacaoFiscal.ncCodigo],
		references: [numClassificacao.ncCodigo]
	}),
	rtcAgrupadorFiscal: one(rtcAgrupadorFiscal, {
		fields: [rtcClassificacaoFiscal.rafCodigo],
		references: [rtcAgrupadorFiscal.rafCodigo]
	}),
	produto: one(produto, {
		fields: [rtcClassificacaoFiscal.proCodigo],
		references: [produto.proCodigo]
	}),
	tipoOperacao: one(tipoOperacao, {
		fields: [rtcClassificacaoFiscal.toCodigo],
		references: [tipoOperacao.toCodigo]
	}),
	tipoFiscal: one(tipoFiscal, {
		fields: [rtcClassificacaoFiscal.tfCodigo],
		references: [tipoFiscal.tfCodigo]
	}),
	rtcCodigosCclasstrib_rccCodigo: one(rtcCodigosCclasstrib, {
		fields: [rtcClassificacaoFiscal.rccCodigo],
		references: [rtcCodigosCclasstrib.rccCodigo],
		relationName: "rtcClassificacaoFiscal_rccCodigo_rtcCodigosCclasstrib_rccCodigo"
	}),
	empresa: one(empresa, {
		fields: [rtcClassificacaoFiscal.empCodigo],
		references: [empresa.empCodigo]
	}),
	rtcCodigosCclasstrib_rccCodigoTribRegular: one(rtcCodigosCclasstrib, {
		fields: [rtcClassificacaoFiscal.rccCodigoTribRegular],
		references: [rtcCodigosCclasstrib.rccCodigo],
		relationName: "rtcClassificacaoFiscal_rccCodigoTribRegular_rtcCodigosCclasstrib_rccCodigo"
	}),
	rtcResumoClassificacaoFiscal: one(rtcResumoClassificacaoFiscal, {
		fields: [rtcClassificacaoFiscal.rrcfCodigo],
		references: [rtcResumoClassificacaoFiscal.rrcfCodigo]
	}),
}));

export const folhaLancamentoRelations = relations(folhaLancamento, ({one, many}) => ({
	eventoFolha: one(eventoFolha, {
		fields: [folhaLancamento.efCodigo],
		references: [eventoFolha.efCodigo]
	}),
	empresa: one(empresa, {
		fields: [folhaLancamento.empCodigo],
		references: [empresa.empCodigo]
	}),
	funcionario: one(funcionario, {
		fields: [folhaLancamento.fuCodigo],
		references: [funcionario.fuCodigo]
	}),
	movimentoFinanceiros: many(movimentoFinanceiro),
	contasPagars: many(contasPagar),
}));

export const antecipacaoRecebiveisRelations = relations(antecipacaoRecebiveis, ({one, many}) => ({
	carteiraCobranca: one(carteiraCobranca, {
		fields: [antecipacaoRecebiveis.cacCodigo],
		references: [carteiraCobranca.cacCodigo]
	}),
	conta_cbCodigoCredito: one(contas, {
		fields: [antecipacaoRecebiveis.cbCodigoCredito],
		references: [contas.cbCodigo],
		relationName: "antecipacaoRecebiveis_cbCodigoCredito_contas_cbCodigo"
	}),
	conta_cbCodigoRetorno: one(contas, {
		fields: [antecipacaoRecebiveis.cbCodigoRetorno],
		references: [contas.cbCodigo],
		relationName: "antecipacaoRecebiveis_cbCodigoRetorno_contas_cbCodigo"
	}),
	conta_cbCodigoVirtual: one(contas, {
		fields: [antecipacaoRecebiveis.cbCodigoVirtual],
		references: [contas.cbCodigo],
		relationName: "antecipacaoRecebiveis_cbCodigoVirtual_contas_cbCodigo"
	}),
	contasReceber: one(contasReceber, {
		fields: [antecipacaoRecebiveis.crCodigo],
		references: [contasReceber.crCodigo]
	}),
	fornecedor: one(fornecedor, {
		fields: [antecipacaoRecebiveis.forCodigo],
		references: [fornecedor.forCodigo]
	}),
	antecipacaoRecebiveisParcelas: many(antecipacaoRecebiveisParcelas),
}));

export const engItensAndamentoRelations = relations(engItensAndamento, ({one}) => ({
	engEtapa: one(engEtapas, {
		fields: [engItensAndamento.engCodigoEtapa],
		references: [engEtapas.engCodigoEtapa]
	}),
	produto: one(produto, {
		fields: [engItensAndamento.proCodigo],
		references: [produto.proCodigo]
	}),
}));

export const nfsFaturaRelations = relations(nfsFatura, ({one}) => ({
	nf: one(nfs, {
		fields: [nfsFatura.nfsCodigo],
		references: [nfs.nfsCodigo]
	}),
}));

export const balancasRelations = relations(balancas, ({many}) => ({
	embalagens: many(embalagens),
}));

export const spedfK100Relations = relations(spedfK100, ({one}) => ({
	spedf0000: one(spedf0000, {
		fields: [spedfK100.sf0000Codigo],
		references: [spedf0000.sf0000Codigo]
	}),
}));

export const ordemServicoRelations = relations(ordemServico, ({one, many}) => ({
	empresa: one(empresa, {
		fields: [ordemServico.empCodigo],
		references: [empresa.empCodigo]
	}),
	cliente: one(clientes, {
		fields: [ordemServico.oseCodCliente],
		references: [clientes.cliCodigo]
	}),
	compra: one(compra, {
		fields: [ordemServico.oseCodEntradaMercadoria],
		references: [compra.cmpCodigo]
	}),
	maqVeic: one(maqVeic, {
		fields: [ordemServico.oseCodVeiculo],
		references: [maqVeic.mvCodigo]
	}),
	venda: one(vendas, {
		fields: [ordemServico.venCodPedido],
		references: [vendas.venCodPedido]
	}),
	itensOrdemServicos: many(itensOrdemServico),
}));

export const produtosSimilaresRelations = relations(produtosSimilares, ({one}) => ({
	produto_psCodigoPrincipal: one(produto, {
		fields: [produtosSimilares.psCodigoPrincipal],
		references: [produto.proCodigo],
		relationName: "produtosSimilares_psCodigoPrincipal_produto_proCodigo"
	}),
	produto_psCodigoSimilar: one(produto, {
		fields: [produtosSimilares.psCodigoSimilar],
		references: [produto.proCodigo],
		relationName: "produtosSimilares_psCodigoSimilar_produto_proCodigo"
	}),
}));

export const registrosAnalisadosRaioXRelations = relations(registrosAnalisadosRaioX, ({one}) => ({
	historicoRaioX: one(historicoRaioX, {
		fields: [registrosAnalisadosRaioX.hrxCodigo],
		references: [historicoRaioX.hrxCodigo]
	}),
	tipoFiscal: one(tipoFiscal, {
		fields: [registrosAnalisadosRaioX.tfCodigo],
		references: [tipoFiscal.tfCodigo]
	}),
	tipoOperacao: one(tipoOperacao, {
		fields: [registrosAnalisadosRaioX.toCodigo],
		references: [tipoOperacao.toCodigo]
	}),
	produto: one(produto, {
		fields: [registrosAnalisadosRaioX.proCodigo],
		references: [produto.proCodigo]
	}),
	numClassificacao: one(numClassificacao, {
		fields: [registrosAnalisadosRaioX.ncCodigo],
		references: [numClassificacao.ncCodigo]
	}),
	rtcAgrupadorFiscal: one(rtcAgrupadorFiscal, {
		fields: [registrosAnalisadosRaioX.rafCodigo],
		references: [rtcAgrupadorFiscal.rafCodigo]
	}),
}));

export const rtcAgrupadorFiscalRelations = relations(rtcAgrupadorFiscal, ({many}) => ({
	registrosAnalisadosRaioXES: many(registrosAnalisadosRaioX),
	produtos: many(produto),
	rtcClassificacaoFiscals: many(rtcClassificacaoFiscal),
}));

export const itensOrdemServicoRelations = relations(itensOrdemServico, ({one}) => ({
	ordemServico: one(ordemServico, {
		fields: [itensOrdemServico.oseCodigo],
		references: [ordemServico.oseCodigo]
	}),
	produto: one(produto, {
		fields: [itensOrdemServico.proCodigo],
		references: [produto.proCodigo]
	}),
	tipoServico: one(tipoServicos, {
		fields: [itensOrdemServico.tsCodigo],
		references: [tipoServicos.tsCodigo]
	}),
	unidadesAlternativa: one(unidadesAlternativas, {
		fields: [itensOrdemServico.unaCodigo],
		references: [unidadesAlternativas.unaCodigo]
	}),
}));

export const alteracoesDfeSincOffRelations = relations(alteracoesDfeSincOff, ({one}) => ({
	terminalCaixa: one(terminalCaixa, {
		fields: [alteracoesDfeSincOff.txCodigo],
		references: [terminalCaixa.txCodigo]
	}),
}));

export const permissaoLembreteRelations = relations(permissaoLembrete, ({one}) => ({
	usuario_usuCodigo: one(usuario, {
		fields: [permissaoLembrete.usuCodigo],
		references: [usuario.usuCodigo],
		relationName: "permissaoLembrete_usuCodigo_usuario_usuCodigo"
	}),
	usuario_usuCodigo: one(usuario, {
		fields: [permissaoLembrete.usuCodigo],
		references: [usuario.usuCodigo],
		relationName: "permissaoLembrete_usuCodigo_usuario_usuCodigo"
	}),
}));

export const inventariosEstoqueResumoLotesRelations = relations(inventariosEstoqueResumoLotes, ({one}) => ({
	inventariosEstoque: one(inventariosEstoque, {
		fields: [inventariosEstoqueResumoLotes.ieCodigo],
		references: [inventariosEstoque.ieCodigo]
	}),
	lote: one(lote, {
		fields: [inventariosEstoqueResumoLotes.ltCodigo],
		references: [lote.ltCodigo]
	}),
}));

export const spedf0206Relations = relations(spedf0206, ({one}) => ({
	spedf0000: one(spedf0000, {
		fields: [spedf0206.sf0000Codigo],
		references: [spedf0000.sf0000Codigo]
	}),
}));

export const yzidroWebMetasVendasRelations = relations(yzidroWebMetasVendas, ({one}) => ({
	empresa: one(empresa, {
		fields: [yzidroWebMetasVendas.empCodigo],
		references: [empresa.empCodigo]
	}),
}));

export const lancamentoVeiculoRelations = relations(lancamentoVeiculo, ({one, many}) => ({
	centrocusto: one(centrocusto, {
		fields: [lancamentoVeiculo.ccCodigo],
		references: [centrocusto.ccCodigo]
	}),
	planoConta: one(planoContas, {
		fields: [lancamentoVeiculo.coCodigo],
		references: [planoContas.coCodigo]
	}),
	empresa: one(empresa, {
		fields: [lancamentoVeiculo.empCodigo],
		references: [empresa.empCodigo]
	}),
	fornecedor: one(fornecedor, {
		fields: [lancamentoVeiculo.forCodigo],
		references: [fornecedor.forCodigo]
	}),
	motorista: one(motorista, {
		fields: [lancamentoVeiculo.motCodigo],
		references: [motorista.motCodigo]
	}),
	maqVeic: one(maqVeic, {
		fields: [lancamentoVeiculo.mvCodigo],
		references: [maqVeic.mvCodigo]
	}),
	produto: one(produto, {
		fields: [lancamentoVeiculo.proCodigo],
		references: [produto.proCodigo]
	}),
	movimentoFinanceiros: many(movimentoFinanceiro),
	contasPagars: many(contasPagar),
}));

export const spedf0150Relations = relations(spedf0150, ({one}) => ({
	spedf0000: one(spedf0000, {
		fields: [spedf0150.sf0000Codigo],
		references: [spedf0000.sf0000Codigo]
	}),
}));

export const tipoPagamentoXTabelaPrecoRelations = relations(tipoPagamentoXTabelaPreco, ({one}) => ({
	tabelaPreco: one(tabelaPreco, {
		fields: [tipoPagamentoXTabelaPreco.taCodigo],
		references: [tabelaPreco.taCodigo]
	}),
	tipoPagamento: one(tipoPagamento, {
		fields: [tipoPagamentoXTabelaPreco.tpCodigo],
		references: [tipoPagamento.tpCodigo]
	}),
}));

export const fciCicRelations = relations(fciCic, ({one}) => ({
	produto: one(produto, {
		fields: [fciCic.proCodigo],
		references: [produto.proCodigo]
	}),
}));

export const examemedicoclienteRelations = relations(examemedicocliente, ({one}) => ({
	examemedico: one(examemedico, {
		fields: [examemedicocliente.emCodigo],
		references: [examemedico.emCodigo]
	}),
}));

export const autXmlDfeRelations = relations(autXmlDfe, ({one}) => ({
	cliente: one(clientes, {
		fields: [autXmlDfe.cliCodigo],
		references: [clientes.cliCodigo]
	}),
}));

export const funcOrdemServicoRelations = relations(funcOrdemServico, ({one}) => ({
	funcionario: one(funcionario, {
		fields: [funcOrdemServico.funCodigo],
		references: [funcionario.fuCodigo]
	}),
}));

export const itensBoletoRelations = relations(itensBoleto, ({one}) => ({
	boleto: one(boleto, {
		fields: [itensBoleto.boCodigo],
		references: [boleto.boCodigo]
	}),
	contasReceber: one(contasReceber, {
		fields: [itensBoleto.crCodigo],
		references: [contasReceber.crCodigo]
	}),
}));

export const terminalComputadorRelations = relations(terminalComputador, ({one}) => ({
	empresa: one(empresa, {
		fields: [terminalComputador.empCodigo],
		references: [empresa.empCodigo]
	}),
	terminalCaixa: one(terminalCaixa, {
		fields: [terminalComputador.txCodigo],
		references: [terminalCaixa.txCodigo]
	}),
}));

export const parametroNfsRelations = relations(parametroNfs, ({one}) => ({
	cidade: one(cidade, {
		fields: [parametroNfs.ciCodigo],
		references: [cidade.ciCodigo]
	}),
	empresa: one(empresa, {
		fields: [parametroNfs.empCodigo],
		references: [empresa.empCodigo]
	}),
}));

export const clienteXEmpresaRelations = relations(clienteXEmpresa, ({one}) => ({
	cliente: one(clientes, {
		fields: [clienteXEmpresa.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	empresa: one(empresa, {
		fields: [clienteXEmpresa.empCodigo],
		references: [empresa.empCodigo]
	}),
}));

export const notaManutencaoRelations = relations(notaManutencao, ({one}) => ({
	nota: one(nota, {
		fields: [notaManutencao.nfCodigo],
		references: [nota.nfCodigo]
	}),
	manutencaoEstoque: one(manutencaoEstoque, {
		fields: [notaManutencao.manCodigo],
		references: [manutencaoEstoque.manCodigo]
	}),
}));

export const veiculoReboqueRelations = relations(veiculoReboque, ({one}) => ({
	maqVeic_mvCodigo: one(maqVeic, {
		fields: [veiculoReboque.mvCodigo],
		references: [maqVeic.mvCodigo],
		relationName: "veiculoReboque_mvCodigo_maqVeic_mvCodigo"
	}),
	maqVeic_vrCodigo: one(maqVeic, {
		fields: [veiculoReboque.vrCodigo],
		references: [maqVeic.mvCodigo],
		relationName: "veiculoReboque_vrCodigo_maqVeic_mvCodigo"
	}),
}));

export const itensFreteGerRelations = relations(itensFreteGer, ({one}) => ({
	grupoVeiculo: one(grupoVeiculo, {
		fields: [itensFreteGer.gruCodigo],
		references: [grupoVeiculo.gruCodigo]
	}),
	locacaoGerador: one(locacaoGerador, {
		fields: [itensFreteGer.locCodigo],
		references: [locacaoGerador.locCodigo]
	}),
}));

export const grupoVeiculoRelations = relations(grupoVeiculo, ({many}) => ({
	itensFreteGers: many(itensFreteGer),
	maqVeics: many(maqVeic),
}));

export const servicosSelecionadosPagamentosExternosRelations = relations(servicosSelecionadosPagamentosExternos, ({one}) => ({
	dadosPagamentosExterno: one(dadosPagamentosExternos, {
		fields: [servicosSelecionadosPagamentosExternos.dpeCodigo],
		references: [dadosPagamentosExternos.dpeCodigo]
	}),
	servicosFrete: one(servicosFrete, {
		fields: [servicosSelecionadosPagamentosExternos.sfCodigo],
		references: [servicosFrete.sfCodigo]
	}),
}));

export const itensEmbalagensRelations = relations(itensEmbalagens, ({one}) => ({
	embalagen: one(embalagens, {
		fields: [itensEmbalagens.emsCodigo],
		references: [embalagens.emsCodigo]
	}),
	produto: one(produto, {
		fields: [itensEmbalagens.proCodigo],
		references: [produto.proCodigo]
	}),
	lote: one(lote, {
		fields: [itensEmbalagens.ltCodigo],
		references: [lote.ltCodigo]
	}),
}));

export const engAditivoCustosRelations = relations(engAditivoCustos, ({one}) => ({
	planoConta: one(planoContas, {
		fields: [engAditivoCustos.coCodigo],
		references: [planoContas.coCodigo]
	}),
	engAditivo: one(engAditivo, {
		fields: [engAditivoCustos.engCodigoAditivo],
		references: [engAditivo.engCodigoAditivo]
	}),
	engContrato: one(engContrato, {
		fields: [engAditivoCustos.engCodigo],
		references: [engContrato.engCodigo]
	}),
}));

export const requisicaoConsumoOpRelations = relations(requisicaoConsumoOp, ({one}) => ({
	lote: one(lote, {
		fields: [requisicaoConsumoOp.ltCodigo],
		references: [lote.ltCodigo]
	}),
	opItensProduzido: one(opItensProduzidos, {
		fields: [requisicaoConsumoOp.oipCodigo],
		references: [opItensProduzidos.oipCodigo]
	}),
	produto: one(produto, {
		fields: [requisicaoConsumoOp.proCodigo],
		references: [produto.proCodigo]
	}),
	producao: one(producao, {
		fields: [requisicaoConsumoOp.prodCodigo],
		references: [producao.prodCodigo]
	}),
}));

export const itensCfeRelations = relations(itensCfe, ({one}) => ({
	cfe: one(cfe, {
		fields: [itensCfe.cfeCodigo],
		references: [cfe.cfeCodigo]
	}),
	produto: one(produto, {
		fields: [itensCfe.proCodigo],
		references: [produto.proCodigo]
	}),
	venda: one(vendas, {
		fields: [itensCfe.venCodPedido],
		references: [vendas.venCodPedido]
	}),
}));

export const talhaoAnoRelations = relations(talhaoAno, ({one}) => ({
	produto: one(produto, {
		fields: [talhaoAno.proCodigo],
		references: [produto.proCodigo]
	}),
	talhao: one(talhao, {
		fields: [talhaoAno.tlhCodigo],
		references: [talhao.tlhCodigo]
	}),
}));

export const historicoAcessoDetalhesTribFiscalRelations = relations(historicoAcessoDetalhesTribFiscal, ({one}) => ({
	historicoAcessoTribFiscal: one(historicoAcessoTribFiscal, {
		fields: [historicoAcessoDetalhesTribFiscal.hafCodigo],
		references: [historicoAcessoTribFiscal.hafCodigo]
	}),
}));

export const variacoesProdutoRelations = relations(variacoesProduto, ({one}) => ({
	produto: one(produto, {
		fields: [variacoesProduto.proCodigo],
		references: [produto.proCodigo]
	}),
}));

export const correcaoEstoqueRelations = relations(correcaoEstoque, ({one}) => ({
	estoqueLocai: one(estoqueLocais, {
		fields: [correcaoEstoque.elcCodigo],
		references: [estoqueLocais.elcCodigo]
	}),
	produto: one(produto, {
		fields: [correcaoEstoque.proCodigo],
		references: [produto.proCodigo]
	}),
	usuario: one(usuario, {
		fields: [correcaoEstoque.usuCodigo],
		references: [usuario.usuCodigo]
	}),
}));

export const historicoPrevisaoProjetoRelations = relations(historicoPrevisaoProjeto, ({one}) => ({
	motivoMudancaPrevisaoProjeto: one(motivoMudancaPrevisaoProjeto, {
		fields: [historicoPrevisaoProjeto.mmpCodigo],
		references: [motivoMudancaPrevisaoProjeto.mmpCodigo]
	}),
	usuario: one(usuario, {
		fields: [historicoPrevisaoProjeto.usuCodigo],
		references: [usuario.usuCodigo]
	}),
	projeto: one(projetos, {
		fields: [historicoPrevisaoProjeto.prjCodigo],
		references: [projetos.prjCodigo]
	}),
}));

export const motivoMudancaPrevisaoProjetoRelations = relations(motivoMudancaPrevisaoProjeto, ({many}) => ({
	historicoPrevisaoProjetos: many(historicoPrevisaoProjeto),
}));

export const logAuxiliarVendaRelations = relations(logAuxiliarVenda, ({one}) => ({
	log: one(log, {
		fields: [logAuxiliarVenda.logCodigo],
		references: [log.logCodigo]
	}),
}));

export const padraoArqRectoEmbalagensRelations = relations(padraoArqRectoEmbalagens, ({many}) => ({
	entradaMercadorias: many(entradaMercadoria),
}));

export const embalagemLoteRelations = relations(embalagemLote, ({one, many}) => ({
	embalagem: one(embalagem, {
		fields: [embalagemLote.embCodigo],
		references: [embalagem.embCodigo]
	}),
	lote: one(lote, {
		fields: [embalagemLote.ltCodigo],
		references: [lote.ltCodigo]
	}),
	etiqEmbalagemLotes: many(etiqEmbalagemLote),
}));

export const composicaoProdutoRelations = relations(composicaoProduto, ({one}) => ({
	produto_matCodigo: one(produto, {
		fields: [composicaoProduto.matCodigo],
		references: [produto.proCodigo],
		relationName: "composicaoProduto_matCodigo_produto_proCodigo"
	}),
	produto_proCodigo: one(produto, {
		fields: [composicaoProduto.proCodigo],
		references: [produto.proCodigo],
		relationName: "composicaoProduto_proCodigo_produto_proCodigo"
	}),
}));

export const vendaMarketplaceRelations = relations(vendaMarketplace, ({one}) => ({
	empresa: one(empresa, {
		fields: [vendaMarketplace.empCodigo],
		references: [empresa.empCodigo]
	}),
	integracoesYzidro: one(integracoesYzidro, {
		fields: [vendaMarketplace.iyzCodigo],
		references: [integracoesYzidro.iyzCodigo]
	}),
	marketplaceTrackcash: one(marketplaceTrackcash, {
		fields: [vendaMarketplace.mptCodigo],
		references: [marketplaceTrackcash.mptCodigo]
	}),
}));

export const marketplaceTrackcashRelations = relations(marketplaceTrackcash, ({one, many}) => ({
	vendaMarketplaces: many(vendaMarketplace),
	vendaMarketplaceDespesas: many(vendaMarketplaceDespesas),
	marketplace: one(marketplace, {
		fields: [marketplaceTrackcash.mkpCodigo],
		references: [marketplace.mkpCodigo]
	}),
	integracoesYzidro: one(integracoesYzidro, {
		fields: [marketplaceTrackcash.iyzCodigo],
		references: [integracoesYzidro.iyzCodigo]
	}),
}));

export const pagamentosMdfeRelations = relations(pagamentosMdfe, ({one}) => ({
	mdfe: one(mdfe, {
		fields: [pagamentosMdfe.mdfCodigo],
		references: [mdfe.mdfCodigo]
	}),
	condicaoPagto: one(condicaoPagto, {
		fields: [pagamentosMdfe.parCpCodigo],
		references: [condicaoPagto.parCpCodigo]
	}),
}));

export const inventariosEstoqueResumoProdutosRelations = relations(inventariosEstoqueResumoProdutos, ({one}) => ({
	inventariosEstoque: one(inventariosEstoque, {
		fields: [inventariosEstoqueResumoProdutos.ieCodigo],
		references: [inventariosEstoque.ieCodigo]
	}),
	produto: one(produto, {
		fields: [inventariosEstoqueResumoProdutos.proCodigo],
		references: [produto.proCodigo]
	}),
}));

export const honorarioLancadosRelations = relations(honorarioLancados, ({one}) => ({
	honorario_hoCodigo: one(honorarios, {
		fields: [honorarioLancados.hoCodigo],
		references: [honorarios.hoCodigo],
		relationName: "honorarioLancados_hoCodigo_honorarios_hoCodigo"
	}),
	honorario_hoCodigo: one(honorarios, {
		fields: [honorarioLancados.hoCodigo],
		references: [honorarios.hoCodigo],
		relationName: "honorarioLancados_hoCodigo_honorarios_hoCodigo"
	}),
	venda: one(vendas, {
		fields: [honorarioLancados.venCodPedido],
		references: [vendas.venCodPedido]
	}),
}));

export const numeracaoDfeRelations = relations(numeracaoDfe, ({one}) => ({
	empresa: one(empresa, {
		fields: [numeracaoDfe.empCodigo],
		references: [empresa.empCodigo]
	}),
}));

export const itensManutencaoEstoqueRelations = relations(itensManutencaoEstoque, ({one}) => ({
	manutencaoEstoque: one(manutencaoEstoque, {
		fields: [itensManutencaoEstoque.manCodigo],
		references: [manutencaoEstoque.manCodigo]
	}),
	produto_proCodigo: one(produto, {
		fields: [itensManutencaoEstoque.proCodigo],
		references: [produto.proCodigo],
		relationName: "itensManutencaoEstoque_proCodigo_produto_proCodigo"
	}),
	produto_proCodigo: one(produto, {
		fields: [itensManutencaoEstoque.proCodigo],
		references: [produto.proCodigo],
		relationName: "itensManutencaoEstoque_proCodigo_produto_proCodigo"
	}),
	unidadesAlternativa: one(unidadesAlternativas, {
		fields: [itensManutencaoEstoque.unaCodigo],
		references: [unidadesAlternativas.unaCodigo]
	}),
}));

export const itensAlmoxarifadoRelations = relations(itensAlmoxarifado, ({one}) => ({
	almoxarifado: one(almoxarifado, {
		fields: [itensAlmoxarifado.almCodigo],
		references: [almoxarifado.almCodigo]
	}),
	produto_proCodigo: one(produto, {
		fields: [itensAlmoxarifado.proCodigo],
		references: [produto.proCodigo],
		relationName: "itensAlmoxarifado_proCodigo_produto_proCodigo"
	}),
	produto_proCodigo: one(produto, {
		fields: [itensAlmoxarifado.proCodigo],
		references: [produto.proCodigo],
		relationName: "itensAlmoxarifado_proCodigo_produto_proCodigo"
	}),
}));

export const almoxarifadoRelations = relations(almoxarifado, ({one, many}) => ({
	itensAlmoxarifados: many(itensAlmoxarifado),
	funcionario: one(funcionario, {
		fields: [almoxarifado.fuCodigo],
		references: [funcionario.fuCodigo]
	}),
	usuario: one(usuario, {
		fields: [almoxarifado.usuCodigo],
		references: [usuario.usuCodigo]
	}),
}));

export const catracaLogRelations = relations(catracaLog, ({one}) => ({
	cliente: one(clientes, {
		fields: [catracaLog.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	catraca: one(catraca, {
		fields: [catracaLog.ctCodigo],
		references: [catraca.ctCodigo]
	}),
	usuario: one(usuario, {
		fields: [catracaLog.usuCodigo],
		references: [usuario.usuCodigo]
	}),
}));

export const catracaRelations = relations(catraca, ({one, many}) => ({
	catracaLogs: many(catracaLog),
	tipoExameMedico: one(tipoExameMedico, {
		fields: [catraca.temCodigo],
		references: [tipoExameMedico.temCodigo]
	}),
}));

export const arqRectoCredItensRelations = relations(arqRectoCredItens, ({one, many}) => ({
	agrupamentoBaixa: one(agrupamentoBaixas, {
		fields: [arqRectoCredItens.abCodigo],
		references: [agrupamentoBaixas.abCodigo]
	}),
	arqRectoCred: one(arqRectoCred, {
		fields: [arqRectoCredItens.arcCodigo],
		references: [arqRectoCred.arcCodigo]
	}),
	baixaCreceber: one(baixaCreceber, {
		fields: [arqRectoCredItens.bcrCodigo],
		references: [baixaCreceber.crCodigo]
	}),
	arqRectoCredIten: one(arqRectoCredItens, {
		fields: [arqRectoCredItens.rciCodigoProcessado],
		references: [arqRectoCredItens.rciCodigo],
		relationName: "arqRectoCredItens_rciCodigoProcessado_arqRectoCredItens_rciCodigo"
	}),
	arqRectoCredItens: many(arqRectoCredItens, {
		relationName: "arqRectoCredItens_rciCodigoProcessado_arqRectoCredItens_rciCodigo"
	}),
}));

export const agrupamentoBaixasRelations = relations(agrupamentoBaixas, ({many}) => ({
	arqRectoCredItens: many(arqRectoCredItens),
}));

export const arqRectoCredRelations = relations(arqRectoCred, ({one, many}) => ({
	arqRectoCredItens: many(arqRectoCredItens),
	credenciadoraMeiosPgto: one(credenciadoraMeiosPgto, {
		fields: [arqRectoCred.cmpCodigo],
		references: [credenciadoraMeiosPgto.cmpCodigo]
	}),
	padraoArqRectoCred: one(padraoArqRectoCred, {
		fields: [arqRectoCred.pacCodigo],
		references: [padraoArqRectoCred.pacCodigo]
	}),
	usuario: one(usuario, {
		fields: [arqRectoCred.usuCodigo],
		references: [usuario.usuCodigo]
	}),
}));

export const spedf0100Relations = relations(spedf0100, ({one}) => ({
	spedf0000: one(spedf0000, {
		fields: [spedf0100.sf0000Codigo],
		references: [spedf0000.sf0000Codigo]
	}),
}));

export const produtosSelloutDistribuicaoRelations = relations(produtosSelloutDistribuicao, ({one}) => ({
	integracaoSelloutDistribuicao: one(integracaoSelloutDistribuicao, {
		fields: [produtosSelloutDistribuicao.isdCodigo],
		references: [integracaoSelloutDistribuicao.isdCodigo]
	}),
	produto: one(produto, {
		fields: [produtosSelloutDistribuicao.proCodigo],
		references: [produto.proCodigo]
	}),
}));

export const itensViagemRelations = relations(itensViagem, ({one}) => ({
	conta_cbCodigoDest: one(contas, {
		fields: [itensViagem.cbCodigoDest],
		references: [contas.cbCodigo],
		relationName: "itensViagem_cbCodigoDest_contas_cbCodigo"
	}),
	conta_cbCodigo: one(contas, {
		fields: [itensViagem.cbCodigo],
		references: [contas.cbCodigo],
		relationName: "itensViagem_cbCodigo_contas_cbCodigo"
	}),
	centrocusto: one(centrocusto, {
		fields: [itensViagem.ccCodigo],
		references: [centrocusto.ccCodigo]
	}),
	planoConta: one(planoContas, {
		fields: [itensViagem.coCodigo],
		references: [planoContas.coCodigo]
	}),
	fornecedor: one(fornecedor, {
		fields: [itensViagem.forCodigo],
		references: [fornecedor.forCodigo]
	}),
	condicaoPagto: one(condicaoPagto, {
		fields: [itensViagem.parCpCodigo],
		references: [condicaoPagto.parCpCodigo]
	}),
	transfereciaConta: one(transfereciaContas, {
		fields: [itensViagem.trcCodigo],
		references: [transfereciaContas.trcCodigo]
	}),
	viagem: one(viagem, {
		fields: [itensViagem.viaCodigo],
		references: [viagem.viaCodigo]
	}),
}));

export const entradaMercadoriaCaixasRelations = relations(entradaMercadoriaCaixas, ({one}) => ({
	embalagem: one(embalagem, {
		fields: [entradaMercadoriaCaixas.embCodigo],
		references: [embalagem.embCodigo]
	}),
	embalagen: one(embalagens, {
		fields: [entradaMercadoriaCaixas.emsCodigo],
		references: [embalagens.emsCodigo]
	}),
	entradaMercadoria: one(entradaMercadoria, {
		fields: [entradaMercadoriaCaixas.enmCodigo],
		references: [entradaMercadoria.enmCodigo]
	}),
	padraoEtiquetaPeso: one(padraoEtiquetaPeso, {
		fields: [entradaMercadoriaCaixas.pepCodigo],
		references: [padraoEtiquetaPeso.pepCodigo]
	}),
	produto: one(produto, {
		fields: [entradaMercadoriaCaixas.proCodigo],
		references: [produto.proCodigo]
	}),
	usuario: one(usuario, {
		fields: [entradaMercadoriaCaixas.usuCodigo],
		references: [usuario.usuCodigo]
	}),
}));

export const importOpVendaRelations = relations(importOpVenda, ({one}) => ({
	empresa: one(empresa, {
		fields: [importOpVenda.empCodigo],
		references: [empresa.empCodigo]
	}),
}));

export const itensChecklistGerRelations = relations(itensChecklistGer, ({one}) => ({
	checkList: one(checkList, {
		fields: [itensChecklistGer.chkCodigo],
		references: [checkList.chkCodigo]
	}),
	locacaoGerador: one(locacaoGerador, {
		fields: [itensChecklistGer.locCodigo],
		references: [locacaoGerador.locCodigo]
	}),
}));

export const checkListRelations = relations(checkList, ({many}) => ({
	itensChecklistGers: many(itensChecklistGer),
	itensChecklistMen: many(itensChecklistMan),
}));

export const etiqEmbalagemLoteRelations = relations(etiqEmbalagemLote, ({one}) => ({
	embalagemLote: one(embalagemLote, {
		fields: [etiqEmbalagemLote.emlCodigo],
		references: [embalagemLote.emlCodigo]
	}),
}));

export const tipoEmpresarialRelations = relations(tipoEmpresarial, ({many}) => ({
	empresas: many(empresa),
}));

export const movimentacaoVolumesRelations = relations(movimentacaoVolumes, ({one}) => ({
	estoqueLocai_elcCodigoDestino: one(estoqueLocais, {
		fields: [movimentacaoVolumes.elcCodigoDestino],
		references: [estoqueLocais.elcCodigo],
		relationName: "movimentacaoVolumes_elcCodigoDestino_estoqueLocais_elcCodigo"
	}),
	estoqueLocai_elcCodigo: one(estoqueLocais, {
		fields: [movimentacaoVolumes.elcCodigo],
		references: [estoqueLocais.elcCodigo],
		relationName: "movimentacaoVolumes_elcCodigo_estoqueLocais_elcCodigo"
	}),
	embalagen: one(embalagens, {
		fields: [movimentacaoVolumes.emsCodigo],
		references: [embalagens.emsCodigo]
	}),
	manutencaoEstoque: one(manutencaoEstoque, {
		fields: [movimentacaoVolumes.manCodigo],
		references: [manutencaoEstoque.manCodigo]
	}),
	produto: one(produto, {
		fields: [movimentacaoVolumes.proCodigo],
		references: [produto.proCodigo]
	}),
	usuario: one(usuario, {
		fields: [movimentacaoVolumes.usuCodigo],
		references: [usuario.usuCodigo]
	}),
	venda: one(vendas, {
		fields: [movimentacaoVolumes.venCodPedido],
		references: [vendas.venCodPedido]
	}),
}));

export const andamentoEstoqueRelations = relations(andamentoEstoque, ({one}) => ({
	aluguel: one(aluguel, {
		fields: [andamentoEstoque.aluCodigo],
		references: [aluguel.aluCodigo]
	}),
	cfe: one(cfe, {
		fields: [andamentoEstoque.cfeCodigo],
		references: [cfe.cfeCodigo]
	}),
	compra: one(compra, {
		fields: [andamentoEstoque.cmpCodigo],
		references: [compra.cmpCodigo]
	}),
	entregaIten: one(entregaItens, {
		fields: [andamentoEstoque.eiCodigo],
		references: [entregaItens.eiCodigo]
	}),
	estoqueLocai: one(estoqueLocais, {
		fields: [andamentoEstoque.elcCodigo],
		references: [estoqueLocais.elcCodigo]
	}),
	embalagensInventario: one(embalagensInventario, {
		fields: [andamentoEstoque.emiCodigo],
		references: [embalagensInventario.emiCodigo]
	}),
	empresa: one(empresa, {
		fields: [andamentoEstoque.empCodigo],
		references: [empresa.empCodigo]
	}),
	embalagen: one(embalagens, {
		fields: [andamentoEstoque.emsCodigo],
		references: [embalagens.emsCodigo]
	}),
	acomEstoqueOld: one(acomEstoqueOld, {
		fields: [andamentoEstoque.feCodigo],
		references: [acomEstoqueOld.feCodigo]
	}),
	inventariosEstoque: one(inventariosEstoque, {
		fields: [andamentoEstoque.ieCodigo],
		references: [inventariosEstoque.ieCodigo]
	}),
	lote: one(lote, {
		fields: [andamentoEstoque.ltCodigo],
		references: [lote.ltCodigo]
	}),
	opItensConsumido: one(opItensConsumidos, {
		fields: [andamentoEstoque.oicCodigo],
		references: [opItensConsumidos.oicCodigo]
	}),
	opItensProduzido: one(opItensProduzidos, {
		fields: [andamentoEstoque.oipCodigo],
		references: [opItensProduzidos.oipCodigo]
	}),
	produto: one(produto, {
		fields: [andamentoEstoque.proCodigo],
		references: [produto.proCodigo]
	}),
	retornoAluguel: one(retornoAluguel, {
		fields: [andamentoEstoque.raCodigo],
		references: [retornoAluguel.raCodigo]
	}),
}));

export const acomEstoqueOldRelations = relations(acomEstoqueOld, ({many}) => ({
	andamentoEstoques: many(andamentoEstoque),
}));

export const servicosDescontinuadaRelations = relations(servicosDescontinuada, ({one}) => ({
	tipoServico: one(tipoServicos, {
		fields: [servicosDescontinuada.tsCodigo],
		references: [tipoServicos.tsCodigo]
	}),
}));

export const histAndProdutoRelations = relations(histAndProduto, ({one}) => ({
	estoqueLocai: one(estoqueLocais, {
		fields: [histAndProduto.elcCodigo],
		references: [estoqueLocais.elcCodigo]
	}),
}));

export const pagamentoNfeRelations = relations(pagamentoNfe, ({one}) => ({
	nota: one(nota, {
		fields: [pagamentoNfe.nfCodigo],
		references: [nota.nfCodigo]
	}),
}));

export const remessaBoletoRelations = relations(remessaBoleto, ({one, many}) => ({
	parametroBoleto: one(parametroBoleto, {
		fields: [remessaBoleto.pbCodigo],
		references: [parametroBoleto.pbCodigo]
	}),
	remessaBoletoItens: many(remessaBoletoItens),
}));

export const correcaoMovimentoCaixaRelations = relations(correcaoMovimentoCaixa, ({one, many}) => ({
	movimentoCaixa: one(movimentoCaixa, {
		fields: [correcaoMovimentoCaixa.mxCodigo],
		references: [movimentoCaixa.mxCodigo]
	}),
	usuario: one(usuario, {
		fields: [correcaoMovimentoCaixa.usuCodigo],
		references: [usuario.usuCodigo]
	}),
	baixaLotes: many(baixaLote),
}));

export const movimentoCaixaRelations = relations(movimentoCaixa, ({one, many}) => ({
	correcaoMovimentoCaixas: many(correcaoMovimentoCaixa),
	baixaLote: one(baixaLote, {
		fields: [movimentoCaixa.crCodigo],
		references: [baixaLote.loCodigo]
	}),
	terminalCaixa: one(terminalCaixa, {
		fields: [movimentoCaixa.txCodigo],
		references: [terminalCaixa.txCodigo]
	}),
}));

export const receitaOpticaRelations = relations(receitaOptica, ({one}) => ({
	cliente: one(clientes, {
		fields: [receitaOptica.cliCodigo],
		references: [clientes.cliCodigo]
	}),
}));

export const geradorRelations = relations(gerador, ({one, many}) => ({
	manutencaoGeradors: many(manutencaoGerador),
	itensGeradors: many(itensGerador),
	marca_maCodigoGerador: one(marca, {
		fields: [gerador.maCodigoGerador],
		references: [marca.maCodigo],
		relationName: "gerador_maCodigoGerador_marca_maCodigo"
	}),
	marca_maCodigoMotor: one(marca, {
		fields: [gerador.maCodigoMotor],
		references: [marca.maCodigo],
		relationName: "gerador_maCodigoMotor_marca_maCodigo"
	}),
	produto: one(produto, {
		fields: [gerador.proCodigo],
		references: [produto.proCodigo]
	}),
	tabelaGeradors: many(tabelaGerador),
}));

export const itensChecklistManRelations = relations(itensChecklistMan, ({one}) => ({
	checkList: one(checkList, {
		fields: [itensChecklistMan.chkCodigo],
		references: [checkList.chkCodigo]
	}),
	manutencaoGerador: one(manutencaoGerador, {
		fields: [itensChecklistMan.manCodigo],
		references: [manutencaoGerador.manCodigo]
	}),
}));

export const motoristaMdfeRelations = relations(motoristaMdfe, ({one}) => ({
	mdfe: one(mdfe, {
		fields: [motoristaMdfe.mdfCodigo],
		references: [mdfe.mdfCodigo]
	}),
	motorista: one(motorista, {
		fields: [motoristaMdfe.motCodigo],
		references: [motorista.motCodigo]
	}),
}));

export const antecipacaoRecebiveisParcelasRelations = relations(antecipacaoRecebiveisParcelas, ({one}) => ({
	antecipacaoRecebivei: one(antecipacaoRecebiveis, {
		fields: [antecipacaoRecebiveisParcelas.anrCodigo],
		references: [antecipacaoRecebiveis.anrCodigo]
	}),
	contasReceber: one(contasReceber, {
		fields: [antecipacaoRecebiveisParcelas.crCodigo],
		references: [contasReceber.crCodigo]
	}),
	contasPagar: one(contasPagar, {
		fields: [antecipacaoRecebiveisParcelas.cpCodigo],
		references: [contasPagar.cpCodigo]
	}),
}));

export const andamentoProcucaoConfeccaoRelations = relations(andamentoProcucaoConfeccao, ({one}) => ({
	estadoProducao: one(estadoProducao, {
		fields: [andamentoProcucaoConfeccao.espCodigo],
		references: [estadoProducao.espCodigo]
	}),
	pedidoConfeccao: one(pedidoConfeccao, {
		fields: [andamentoProcucaoConfeccao.prodCodigo],
		references: [pedidoConfeccao.prodCodigo]
	}),
}));

export const pedidoConfeccaoRelations = relations(pedidoConfeccao, ({one, many}) => ({
	andamentoProcucaoConfeccaos: many(andamentoProcucaoConfeccao),
	itensPedidoConfeccaos: many(itensPedidoConfeccao),
	cliente: one(clientes, {
		fields: [pedidoConfeccao.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	tabelaPreco: one(tabelaPreco, {
		fields: [pedidoConfeccao.taCodigo],
		references: [tabelaPreco.taCodigo]
	}),
	transportadora: one(transportadora, {
		fields: [pedidoConfeccao.trCodigo],
		references: [transportadora.trCodigo]
	}),
	vendedor: one(vendedor, {
		fields: [pedidoConfeccao.veCodigo],
		references: [vendedor.veCodigo]
	}),
	itensPedidoConfeccaoMats: many(itensPedidoConfeccaoMat),
}));

export const categoriasIfoodRelations = relations(categoriasIfood, ({one}) => ({
	catalogosIfood: one(catalogosIfood, {
		fields: [categoriasIfood.cifCodigo],
		references: [catalogosIfood.cifCodigo]
	}),
	grupo: one(grupos, {
		fields: [categoriasIfood.grpCodigo],
		references: [grupos.grpCodigo]
	}),
}));

export const vendaMarketplaceDespesasRelations = relations(vendaMarketplaceDespesas, ({one}) => ({
	contasPagar: one(contasPagar, {
		fields: [vendaMarketplaceDespesas.cpCodigo],
		references: [contasPagar.cpCodigo]
	}),
	contasReceber: one(contasReceber, {
		fields: [vendaMarketplaceDespesas.crCodigo],
		references: [contasReceber.crCodigo]
	}),
	configuracaoVendaMarketplace: one(configuracaoVendaMarketplace, {
		fields: [vendaMarketplaceDespesas.cvmCodigo],
		references: [configuracaoVendaMarketplace.cvmCodigo]
	}),
	empresa: one(empresa, {
		fields: [vendaMarketplaceDespesas.empCodigo],
		references: [empresa.empCodigo]
	}),
	marketplaceTrackcash: one(marketplaceTrackcash, {
		fields: [vendaMarketplaceDespesas.mptCodigo],
		references: [marketplaceTrackcash.mptCodigo]
	}),
}));

export const configuracaoVendaMarketplaceRelations = relations(configuracaoVendaMarketplace, ({one, many}) => ({
	vendaMarketplaceDespesas: many(vendaMarketplaceDespesas),
	centrocusto: one(centrocusto, {
		fields: [configuracaoVendaMarketplace.ccCodigo],
		references: [centrocusto.ccCodigo]
	}),
	planoConta: one(planoContas, {
		fields: [configuracaoVendaMarketplace.coCodigo],
		references: [planoContas.coCodigo]
	}),
	fornecedor: one(fornecedor, {
		fields: [configuracaoVendaMarketplace.forCodigo],
		references: [fornecedor.forCodigo]
	}),
	integracoesYzidro: one(integracoesYzidro, {
		fields: [configuracaoVendaMarketplace.iyzCodigo],
		references: [integracoesYzidro.iyzCodigo]
	}),
	tipoPagamento: one(tipoPagamento, {
		fields: [configuracaoVendaMarketplace.tpCodigo],
		references: [tipoPagamento.tpCodigo]
	}),
}));

export const itensMaqVeicRelations = relations(itensMaqVeic, ({one}) => ({
	maqVeic: one(maqVeic, {
		fields: [itensMaqVeic.mvCodigo],
		references: [maqVeic.mvCodigo]
	}),
	producao: one(producao, {
		fields: [itensMaqVeic.prodCodigo],
		references: [producao.prodCodigo]
	}),
}));

export const parametroUsuarioBackupRelations = relations(parametroUsuarioBackup, ({one}) => ({
	usuario: one(usuario, {
		fields: [parametroUsuarioBackup.usuCodigo],
		references: [usuario.usuCodigo]
	}),
}));

export const movimentoFinanceiroRelations = relations(movimentoFinanceiro, ({one}) => ({
	armzFatExp: one(armzFatExp, {
		fields: [movimentoFinanceiro.afeCodigo],
		references: [armzFatExp.afeCodigo]
	}),
	armazenagem: one(armazenagem, {
		fields: [movimentoFinanceiro.arCodigo],
		references: [armazenagem.arCodigo]
	}),
	centrocusto: one(centrocusto, {
		fields: [movimentoFinanceiro.ccCodigo],
		references: [centrocusto.ccCodigo]
	}),
	planoConta: one(planoContas, {
		fields: [movimentoFinanceiro.coCodigo],
		references: [planoContas.coCodigo]
	}),
	cte: one(cte, {
		fields: [movimentoFinanceiro.cteCodigo],
		references: [cte.cteCodigo]
	}),
	eventoHolerite: one(eventoHolerite, {
		fields: [movimentoFinanceiro.ehCodigo],
		references: [eventoHolerite.ehCodigo]
	}),
	folhaLancamento: one(folhaLancamento, {
		fields: [movimentoFinanceiro.flCodigo],
		references: [folhaLancamento.flCodigo]
	}),
	folhaPgto: one(folhaPgto, {
		fields: [movimentoFinanceiro.foCodigo],
		references: [folhaPgto.foCodigo]
	}),
	lancamentoVeiculo: one(lancamentoVeiculo, {
		fields: [movimentoFinanceiro.lvCodigo],
		references: [lancamentoVeiculo.lvCodigo]
	}),
	manutencao: one(manutencao, {
		fields: [movimentoFinanceiro.maCodigo],
		references: [manutencao.maCodigo]
	}),
	ocorrenciasCrm: one(ocorrenciasCrm, {
		fields: [movimentoFinanceiro.occCodigo],
		references: [ocorrenciasCrm.occCodigo]
	}),
	transferenciaArmazenagem: one(transferenciaArmazenagem, {
		fields: [movimentoFinanceiro.traCodigo],
		references: [transferenciaArmazenagem.traCodigo]
	}),
}));

export const transferenciaArmazenagemRelations = relations(transferenciaArmazenagem, ({one, many}) => ({
	movimentoFinanceiros: many(movimentoFinanceiro),
	creditoCrecebers: many(creditoCreceber),
	armazenagem: one(armazenagem, {
		fields: [transferenciaArmazenagem.arCodigoContrato],
		references: [armazenagem.arCodigo],
		relationName: "transferenciaArmazenagem_arCodigoContrato_armazenagem_arCodigo"
	}),
	cliente: one(clientes, {
		fields: [transferenciaArmazenagem.cliCodigoDestino],
		references: [clientes.cliCodigo]
	}),
	fornecedor: one(fornecedor, {
		fields: [transferenciaArmazenagem.forCodigo],
		references: [fornecedor.forCodigo]
	}),
	produto: one(produto, {
		fields: [transferenciaArmazenagem.proCodigo],
		references: [produto.proCodigo]
	}),
	usuario: one(usuario, {
		fields: [transferenciaArmazenagem.usuCodigo],
		references: [usuario.usuCodigo]
	}),
	armazenagems: many(armazenagem, {
		relationName: "armazenagem_traCodigo_transferenciaArmazenagem_traCodigo"
	}),
}));

export const itensRomaneioOpCorRelations = relations(itensRomaneioOpCor, ({one}) => ({
	core: one(cores, {
		fields: [itensRomaneioOpCor.coCodigo],
		references: [cores.coCodigo]
	}),
	itensRomaneioOp: one(itensRomaneioOp, {
		fields: [itensRomaneioOpCor.iteCodigo],
		references: [itensRomaneioOp.iteCodigo]
	}),
}));

export const itensRomaneioOpRelations = relations(itensRomaneioOp, ({one, many}) => ({
	itensRomaneioOpCors: many(itensRomaneioOpCor),
	produto: one(produto, {
		fields: [itensRomaneioOp.proCodigo],
		references: [produto.proCodigo]
	}),
	producao: one(producao, {
		fields: [itensRomaneioOp.prodCodigo],
		references: [producao.prodCodigo]
	}),
	romaneioOp: one(romaneioOp, {
		fields: [itensRomaneioOp.romCodigo],
		references: [romaneioOp.romCodigo]
	}),
}));

export const spedfK280Relations = relations(spedfK280, ({one}) => ({
	spedf0000: one(spedf0000, {
		fields: [spedfK280.sf0000Codigo],
		references: [spedf0000.sf0000Codigo]
	}),
}));

export const conferenciaRetornoRelations = relations(conferenciaRetorno, ({one}) => ({
	carregamento: one(carregamento, {
		fields: [conferenciaRetorno.carCodigo],
		references: [carregamento.carCodigo]
	}),
	estoqueLocai: one(estoqueLocais, {
		fields: [conferenciaRetorno.elcCodigoConferencia],
		references: [estoqueLocais.elcCodigo]
	}),
	embalagen: one(embalagens, {
		fields: [conferenciaRetorno.emsCodigo],
		references: [embalagens.emsCodigo]
	}),
	itensExpedidosVsDevolvido: one(itensExpedidosVsDevolvidos, {
		fields: [conferenciaRetorno.iedCodigo],
		references: [itensExpedidosVsDevolvidos.iedCodigo]
	}),
	lote: one(lote, {
		fields: [conferenciaRetorno.ltCodigo],
		references: [lote.ltCodigo]
	}),
	produto: one(produto, {
		fields: [conferenciaRetorno.proCodigo],
		references: [produto.proCodigo]
	}),
	vendasAjuste: one(vendasAjustes, {
		fields: [conferenciaRetorno.vajCodigo],
		references: [vendasAjustes.vajCodigo]
	}),
}));

export const regraBloqueioClientePorRepRelations = relations(regraBloqueioClientePorRep, ({one}) => ({
	cidade: one(cidade, {
		fields: [regraBloqueioClientePorRep.ciCodigo],
		references: [cidade.ciCodigo]
	}),
	cliente: one(clientes, {
		fields: [regraBloqueioClientePorRep.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	estado: one(estado, {
		fields: [regraBloqueioClientePorRep.esCodigo],
		references: [estado.esCodigo]
	}),
	representante: one(representantes, {
		fields: [regraBloqueioClientePorRep.reCodigo],
		references: [representantes.reCodigo]
	}),
}));

export const crRecalculoRelations = relations(crRecalculo, ({one}) => ({
	recalculoParcela: one(recalculoParcelas, {
		fields: [crRecalculo.recpCodigo],
		references: [recalculoParcelas.recpCodigo]
	}),
}));

export const tiposRomaneioRelations = relations(tiposRomaneio, ({one, many}) => ({
	produto: one(produto, {
		fields: [tiposRomaneio.proCodigo],
		references: [produto.proCodigo]
	}),
	armazenagems: many(armazenagem),
}));

export const cuponsIfoodRelations = relations(cuponsIfood, ({one}) => ({
	produto: one(produto, {
		fields: [cuponsIfood.proCodigo],
		references: [produto.proCodigo]
	}),
	venda: one(vendas, {
		fields: [cuponsIfood.venCodPedido],
		references: [vendas.venCodPedido]
	}),
}));

export const itensGeradorRelations = relations(itensGerador, ({one}) => ({
	aditamentoGerador: one(aditamentoGerador, {
		fields: [itensGerador.adtCodigo],
		references: [aditamentoGerador.adtCodigo]
	}),
	gerador: one(gerador, {
		fields: [itensGerador.gerCodigo],
		references: [gerador.gerCodigo]
	}),
	locacaoGerador: one(locacaoGerador, {
		fields: [itensGerador.locCodigo],
		references: [locacaoGerador.locCodigo]
	}),
	regimeTrabalho: one(regimeTrabalho, {
		fields: [itensGerador.regCodigo],
		references: [regimeTrabalho.regCodigo]
	}),
}));

export const regimeTrabalhoRelations = relations(regimeTrabalho, ({many}) => ({
	itensGeradors: many(itensGerador),
	tabelaGeradors: many(tabelaGerador),
}));

export const autorizaXmlRelations = relations(autorizaXml, ({one}) => ({
	cliente: one(clientes, {
		fields: [autorizaXml.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	cte: one(cte, {
		fields: [autorizaXml.cteCodigo],
		references: [cte.cteCodigo]
	}),
	mdfe: one(mdfe, {
		fields: [autorizaXml.mdfCodigo],
		references: [mdfe.mdfCodigo]
	}),
	nota: one(nota, {
		fields: [autorizaXml.nfCodigo],
		references: [nota.nfCodigo]
	}),
}));

export const serieXTetoFaturamentoMobileRelations = relations(serieXTetoFaturamentoMobile, ({one}) => ({
	representante: one(representantes, {
		fields: [serieXTetoFaturamentoMobile.reCodigo],
		references: [representantes.reCodigo]
	}),
	serie_sreCodigo: one(serie, {
		fields: [serieXTetoFaturamentoMobile.sreCodigo],
		references: [serie.sreCodigo],
		relationName: "serieXTetoFaturamentoMobile_sreCodigo_serie_sreCodigo"
	}),
	serie_sreCodigoSubstituta: one(serie, {
		fields: [serieXTetoFaturamentoMobile.sreCodigoSubstituta],
		references: [serie.sreCodigo],
		relationName: "serieXTetoFaturamentoMobile_sreCodigoSubstituta_serie_sreCodigo"
	}),
}));

export const promocaoRelations = relations(promocao, ({one}) => ({
	produto: one(produto, {
		fields: [promocao.proCodigo],
		references: [produto.proCodigo]
	}),
}));

export const cartaoTaxaRelations = relations(cartaoTaxa, ({one, many}) => ({
	bandeira: one(bandeiras, {
		fields: [cartaoTaxa.bndCodigo],
		references: [bandeiras.bndCodigo]
	}),
	credenciadoraMeiosPgto: one(credenciadoraMeiosPgto, {
		fields: [cartaoTaxa.cmpCodigo],
		references: [credenciadoraMeiosPgto.cmpCodigo]
	}),
	pagamentosVendas: many(pagamentosVenda),
}));

export const bandeirasRelations = relations(bandeiras, ({many}) => ({
	cartaoTaxas: many(cartaoTaxa),
}));

export const certificadoRelations = relations(certificado, ({one}) => ({
	empresa: one(empresa, {
		fields: [certificado.empCodigo],
		references: [empresa.empCodigo]
	}),
}));

export const debAutRetornoRegFRelations = relations(debAutRetornoRegF, ({one}) => ({
	debAutRetornoCabecalho: one(debAutRetornoCabecalho, {
		fields: [debAutRetornoRegF.dacCodigo],
		references: [debAutRetornoCabecalho.dacCodigo]
	}),
	debAutTitulo: one(debAutTitulos, {
		fields: [debAutRetornoRegF.datCodigo],
		references: [debAutTitulos.datCodigo]
	}),
}));

export const debAutTitulosRelations = relations(debAutTitulos, ({one, many}) => ({
	debAutRetornoRegFS: many(debAutRetornoRegF),
	contasReceber: one(contasReceber, {
		fields: [debAutTitulos.crCodigo],
		references: [contasReceber.crCodigo]
	}),
}));

export const cargaCteRelations = relations(cargaCte, ({one}) => ({
	cte: one(cte, {
		fields: [cargaCte.cteCodigo],
		references: [cte.cteCodigo]
	}),
}));

export const engFaturaEtapasRelations = relations(engFaturaEtapas, ({one}) => ({
	engEtapa: one(engEtapas, {
		fields: [engFaturaEtapas.engCodigoEtapa],
		references: [engEtapas.engCodigoEtapa]
	}),
}));

export const cfopRelations = relations(cfop, ({many}) => ({
	itensCompras: many(itensCompra),
}));

export const cstRelations = relations(cst, ({many}) => ({
	itensCompras: many(itensCompra),
	classificacaoFiscals: many(classificacaoFiscal),
}));

export const tipoProdutoRelations = relations(tipoProduto, ({many}) => ({
	itensCompras: many(itensCompra),
}));

export const agrupadorFiscalRelations = relations(agrupadorFiscal, ({many}) => ({
	produtos: many(produto),
	classificacaoFiscals: many(classificacaoFiscal),
}));

export const grupoCarregamentoRelations = relations(grupoCarregamento, ({many}) => ({
	produtos: many(produto),
}));

export const gruposCaracteristicaLoteRelations = relations(gruposCaracteristicaLote, ({many}) => ({
	produtos: many(produto),
}));

export const eventoFuncionarioRelations = relations(eventoFuncionario, ({one}) => ({
	eventoFolha: one(eventoFolha, {
		fields: [eventoFuncionario.efCodigo],
		references: [eventoFolha.efCodigo]
	}),
	funcionario: one(funcionario, {
		fields: [eventoFuncionario.fuCodigo],
		references: [funcionario.fuCodigo]
	}),
}));

export const engFaturaAndamentoRelations = relations(engFaturaAndamento, ({one}) => ({
	engAndamento: one(engAndamento, {
		fields: [engFaturaAndamento.engCodigoAndamento],
		references: [engAndamento.engCodigoAndamento]
	}),
}));

export const spedf0175Relations = relations(spedf0175, ({one}) => ({
	spedf0000: one(spedf0000, {
		fields: [spedf0175.sf0000Codigo],
		references: [spedf0000.sf0000Codigo]
	}),
}));

export const spedf0305Relations = relations(spedf0305, ({one}) => ({
	spedf0000: one(spedf0000, {
		fields: [spedf0305.sf0000Codigo],
		references: [spedf0000.sf0000Codigo]
	}),
}));

export const itensMateriaisGerRelations = relations(itensMateriaisGer, ({one}) => ({
	locacaoGerador: one(locacaoGerador, {
		fields: [itensMateriaisGer.locCodigo],
		references: [locacaoGerador.locCodigo]
	}),
	produto: one(produto, {
		fields: [itensMateriaisGer.proCodigo],
		references: [produto.proCodigo]
	}),
}));

export const notaFaturaRelations = relations(notaFatura, ({one}) => ({
	contasReceber: one(contasReceber, {
		fields: [notaFatura.crCodigo],
		references: [contasReceber.crCodigo]
	}),
	log: one(log, {
		fields: [notaFatura.logCodigo],
		references: [log.logCodigo]
	}),
	moeda: one(moeda, {
		fields: [notaFatura.moeCodigo],
		references: [moeda.moeCodigo]
	}),
	nota: one(nota, {
		fields: [notaFatura.nfCodigo],
		references: [nota.nfCodigo]
	}),
}));

export const recalculoCmItensRelations = relations(recalculoCmItens, ({one}) => ({
	produto: one(produto, {
		fields: [recalculoCmItens.proCodigo],
		references: [produto.proCodigo]
	}),
	recalculoCm: one(recalculoCm, {
		fields: [recalculoCmItens.recCodigo],
		references: [recalculoCm.recCodigo]
	}),
}));

export const recalculoCmRelations = relations(recalculoCm, ({one, many}) => ({
	recalculoCmItens: many(recalculoCmItens),
	usuario_recUsuario: one(usuario, {
		fields: [recalculoCm.recUsuario],
		references: [usuario.usuCodigo],
		relationName: "recalculoCm_recUsuario_usuario_usuCodigo"
	}),
	usuario_usuCodigo: one(usuario, {
		fields: [recalculoCm.usuCodigo],
		references: [usuario.usuCodigo],
		relationName: "recalculoCm_usuCodigo_usuario_usuCodigo"
	}),
}));

export const spedf0600Relations = relations(spedf0600, ({one}) => ({
	spedf0000: one(spedf0000, {
		fields: [spedf0600.sf0000Codigo],
		references: [spedf0000.sf0000Codigo]
	}),
}));

export const rtcAliqCbsIbsRelations = relations(rtcAliqCbsIbs, ({one}) => ({
	estado: one(estado, {
		fields: [rtcAliqCbsIbs.esCodigo],
		references: [estado.esCodigo]
	}),
	cidade: one(cidade, {
		fields: [rtcAliqCbsIbs.ciCodigo],
		references: [cidade.ciCodigo]
	}),
}));

export const estoqueLocaisSaldoRelations = relations(estoqueLocaisSaldo, ({one}) => ({
	estoqueLocai: one(estoqueLocais, {
		fields: [estoqueLocaisSaldo.elcCodigo],
		references: [estoqueLocais.elcCodigo]
	}),
	produto: one(produto, {
		fields: [estoqueLocaisSaldo.proCodigo],
		references: [produto.proCodigo]
	}),
}));

export const estoqueEmpresaSaldoRelations = relations(estoqueEmpresaSaldo, ({one}) => ({
	planoConta_coCodigoFatArmazenagem: one(planoContas, {
		fields: [estoqueEmpresaSaldo.coCodigoFatArmazenagem],
		references: [planoContas.coCodigo],
		relationName: "estoqueEmpresaSaldo_coCodigoFatArmazenagem_planoContas_coCodigo"
	}),
	planoConta_coCodigo: one(planoContas, {
		fields: [estoqueEmpresaSaldo.coCodigo],
		references: [planoContas.coCodigo],
		relationName: "estoqueEmpresaSaldo_coCodigo_planoContas_coCodigo"
	}),
	empresa: one(empresa, {
		fields: [estoqueEmpresaSaldo.empCodigo],
		references: [empresa.empCodigo]
	}),
	produto: one(produto, {
		fields: [estoqueEmpresaSaldo.proCodigo],
		references: [produto.proCodigo]
	}),
}));

export const componentesPagamentosMdfeRelations = relations(componentesPagamentosMdfe, ({one}) => ({
	mdfe: one(mdfe, {
		fields: [componentesPagamentosMdfe.mdfCodigo],
		references: [mdfe.mdfCodigo]
	}),
}));

export const rtcCteRelations = relations(rtcCte, ({one}) => ({
	cte: one(cte, {
		fields: [rtcCte.cteCodigo],
		references: [cte.cteCodigo]
	}),
}));

export const pagamentosVendaRelations = relations(pagamentosVenda, ({one}) => ({
	cartao: one(cartao, {
		fields: [pagamentosVenda.carCodigo],
		references: [cartao.carCodigo]
	}),
	chequePre: one(chequePre, {
		fields: [pagamentosVenda.chCodigo],
		references: [chequePre.chCodigo]
	}),
	cartaoTaxa: one(cartaoTaxa, {
		fields: [pagamentosVenda.ctCodigo],
		references: [cartaoTaxa.ctCodigo]
	}),
	venda: one(vendas, {
		fields: [pagamentosVenda.venCodPedido],
		references: [vendas.venCodPedido]
	}),
	terminaisSmartPo: one(terminaisSmartPos, {
		fields: [pagamentosVenda.tspCodigo],
		references: [terminaisSmartPos.tspCodigo]
	}),
}));

export const webserviceNfsRelations = relations(webserviceNfs, ({many}) => ({
	cidades: many(cidade),
}));

export const permissoesUsuarioRelations = relations(permissoesUsuario, ({one}) => ({
	usuario_usuCodigo: one(usuario, {
		fields: [permissoesUsuario.usuCodigo],
		references: [usuario.usuCodigo],
		relationName: "permissoesUsuario_usuCodigo_usuario_usuCodigo"
	}),
	usuario_usuCodigo: one(usuario, {
		fields: [permissoesUsuario.usuCodigo],
		references: [usuario.usuCodigo],
		relationName: "permissoesUsuario_usuCodigo_usuario_usuCodigo"
	}),
}));

export const parametroUsuarioOrcRelations = relations(parametroUsuarioOrc, ({one}) => ({
	usuario: one(usuario, {
		fields: [parametroUsuarioOrc.usuCodigo],
		references: [usuario.usuCodigo]
	}),
}));

export const projetoPrincipalRelations = relations(projetoPrincipal, ({one}) => ({
	projeto: one(projetos, {
		fields: [projetoPrincipal.prjCodigo],
		references: [projetos.prjCodigo]
	}),
}));

export const produtoXEmpresaRelations = relations(produtoXEmpresa, ({one}) => ({
	empresa: one(empresa, {
		fields: [produtoXEmpresa.empCodigo],
		references: [empresa.empCodigo]
	}),
	produto: one(produto, {
		fields: [produtoXEmpresa.proCodigo],
		references: [produto.proCodigo]
	}),
}));

export const remessaBoletoItensRelations = relations(remessaBoletoItens, ({one}) => ({
	remessaBoleto: one(remessaBoleto, {
		fields: [remessaBoletoItens.rboCodigo],
		references: [remessaBoleto.rboCodigo]
	}),
}));

export const nfeDestinadaRelations = relations(nfeDestinada, ({one}) => ({
	empresa: one(empresa, {
		fields: [nfeDestinada.empCodigo],
		references: [empresa.empCodigo]
	}),
}));

export const emailOldRelations = relations(emailOld, ({one}) => ({
	cliente_cliCodigo: one(clientes, {
		fields: [emailOld.cliCodigo],
		references: [clientes.cliCodigo],
		relationName: "emailOld_cliCodigo_clientes_cliCodigo"
	}),
	cliente_cliCodigo: one(clientes, {
		fields: [emailOld.cliCodigo],
		references: [clientes.cliCodigo],
		relationName: "emailOld_cliCodigo_clientes_cliCodigo"
	}),
	fornecedor_forCodigo: one(fornecedor, {
		fields: [emailOld.forCodigo],
		references: [fornecedor.forCodigo],
		relationName: "emailOld_forCodigo_fornecedor_forCodigo"
	}),
	fornecedor_forCodigo: one(fornecedor, {
		fields: [emailOld.forCodigo],
		references: [fornecedor.forCodigo],
		relationName: "emailOld_forCodigo_fornecedor_forCodigo"
	}),
}));

export const fechaCaixaRelations = relations(fechaCaixa, ({one, many}) => ({
	usuario_fxRespAbertura: one(usuario, {
		fields: [fechaCaixa.fxRespAbertura],
		references: [usuario.usuCodigo],
		relationName: "fechaCaixa_fxRespAbertura_usuario_usuCodigo"
	}),
	usuario_fxRespFechamento: one(usuario, {
		fields: [fechaCaixa.fxRespFechamento],
		references: [usuario.usuCodigo],
		relationName: "fechaCaixa_fxRespFechamento_usuario_usuCodigo"
	}),
	terminalCaixa: one(terminalCaixa, {
		fields: [fechaCaixa.txCodigo],
		references: [terminalCaixa.txCodigo]
	}),
	usuario_usuCodigoConferencia: one(usuario, {
		fields: [fechaCaixa.usuCodigoConferencia],
		references: [usuario.usuCodigo],
		relationName: "fechaCaixa_usuCodigoConferencia_usuario_usuCodigo"
	}),
	transfereciaContas: many(transfereciaContas),
}));

export const tipoDocumentoRelations = relations(tipoDocumento, ({one, many}) => ({
	compras: many(compra),
	empresa: one(empresa, {
		fields: [tipoDocumento.empCodigo],
		references: [empresa.empCodigo]
	}),
}));

export const engItensMateriaisRelations = relations(engItensMateriais, ({one}) => ({
	engContrato: one(engContrato, {
		fields: [engItensMateriais.engCodigo],
		references: [engContrato.engCodigo]
	}),
	produto: one(produto, {
		fields: [engItensMateriais.proCodigo],
		references: [produto.proCodigo]
	}),
}));

export const baixaCreditoRelations = relations(baixaCredito, ({one, many}) => ({
	creditoCrecebers: many(creditoCreceber, {
		relationName: "creditoCreceber_crVinculoVariacao_baixaCredito_crCodigo"
	}),
	conta: one(contas, {
		fields: [baixaCredito.cbCodigo],
		references: [contas.cbCodigo]
	}),
	creditoCreceber: one(creditoCreceber, {
		fields: [baixaCredito.crCodigoCr],
		references: [creditoCreceber.crCodigo],
		relationName: "baixaCredito_crCodigoCr_creditoCreceber_crCodigo"
	}),
	empresa: one(empresa, {
		fields: [baixaCredito.empCodigo],
		references: [empresa.empCodigo]
	}),
	baixaLote: one(baixaLote, {
		fields: [baixaCredito.loCodigo],
		references: [baixaLote.loCodigo]
	}),
	log: one(log, {
		fields: [baixaCredito.logCodigo],
		references: [log.logCodigo]
	}),
	terminalCaixa: one(terminalCaixa, {
		fields: [baixaCredito.txCodigo],
		references: [terminalCaixa.txCodigo]
	}),
	venda: one(vendas, {
		fields: [baixaCredito.venCodPedido],
		references: [vendas.venCodPedido]
	}),
}));

export const itensOrcRelations = relations(itensOrc, ({one}) => ({
	orcamento: one(orcamento, {
		fields: [itensOrc.orcCodigo],
		references: [orcamento.orcCodigo]
	}),
	produto: one(produto, {
		fields: [itensOrc.proCodigo],
		references: [produto.proCodigo]
	}),
	unidadesAlternativa: one(unidadesAlternativas, {
		fields: [itensOrc.unaCodigo],
		references: [unidadesAlternativas.unaCodigo]
	}),
	tabelaPreco: one(tabelaPreco, {
		fields: [itensOrc.taCodigo],
		references: [tabelaPreco.taCodigo]
	}),
}));

export const nivelRelations = relations(nivel, ({one}) => ({
	grupo: one(grupo, {
		fields: [nivel.gruCodigo],
		references: [grupo.gruCodigo]
	}),
	menu: one(menus, {
		fields: [nivel.menCodigo],
		references: [menus.menCodigo]
	}),
}));

export const entradaMercadoriaReativadasRelations = relations(entradaMercadoriaReativadas, ({one}) => ({
	embalagen: one(embalagens, {
		fields: [entradaMercadoriaReativadas.emsCodigo],
		references: [embalagens.emsCodigo]
	}),
	entradaMercadoria: one(entradaMercadoria, {
		fields: [entradaMercadoriaReativadas.enmCodigo],
		references: [entradaMercadoria.enmCodigo]
	}),
	produto: one(produto, {
		fields: [entradaMercadoriaReativadas.proCodigo],
		references: [produto.proCodigo]
	}),
	usuario: one(usuario, {
		fields: [entradaMercadoriaReativadas.usuCodigo],
		references: [usuario.usuCodigo]
	}),
}));

export const itensSubProducaoRelations = relations(itensSubProducao, ({one}) => ({
	produto: one(produto, {
		fields: [itensSubProducao.proCodigo],
		references: [produto.proCodigo]
	}),
	producao: one(producao, {
		fields: [itensSubProducao.prodCodigo],
		references: [producao.prodCodigo]
	}),
}));

export const exameMedicoRelations = relations(exameMedico, ({one}) => ({
	cliente: one(clientes, {
		fields: [exameMedico.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	tipoExameMedico: one(tipoExameMedico, {
		fields: [exameMedico.temCodigo],
		references: [tipoExameMedico.temCodigo]
	}),
}));

export const tipoExameMedicoRelations = relations(tipoExameMedico, ({many}) => ({
	exameMedicos: many(exameMedico),
	catracas: many(catraca),
}));

export const residuoRelations = relations(residuo, ({one}) => ({
	produto_proCodigo: one(produto, {
		fields: [residuo.proCodigo],
		references: [produto.proCodigo],
		relationName: "residuo_proCodigo_produto_proCodigo"
	}),
	produto_resCodigo: one(produto, {
		fields: [residuo.resCodigo],
		references: [produto.proCodigo],
		relationName: "residuo_resCodigo_produto_proCodigo"
	}),
}));

export const etiquetaObjetosRelations = relations(etiquetaObjetos, ({one}) => ({
	etiquetaModelo: one(etiquetaModelo, {
		fields: [etiquetaObjetos.etmCodigo],
		references: [etiquetaModelo.etmCodigo]
	}),
}));

export const itensPedidoCotacaoRelations = relations(itensPedidoCotacao, ({one}) => ({
	cotacaoCompra: one(cotacaoCompra, {
		fields: [itensPedidoCotacao.cotCodigo],
		references: [cotacaoCompra.cotCodigo]
	}),
	itensCotacaoCompra: one(itensCotacaoCompra, {
		fields: [itensPedidoCotacao.iccCodigo],
		references: [itensCotacaoCompra.iccCodigo]
	}),
	pedidoCotacao: one(pedidoCotacao, {
		fields: [itensPedidoCotacao.pdcCodigo],
		references: [pedidoCotacao.pdcCodigo]
	}),
	pedido: one(pedido, {
		fields: [itensPedidoCotacao.peCodigo],
		references: [pedido.peCodigo]
	}),
}));

export const itensCotacaoCompraRelations = relations(itensCotacaoCompra, ({one, many}) => ({
	itensPedidoCotacaos: many(itensPedidoCotacao),
	cotacaoCompra: one(cotacaoCompra, {
		fields: [itensCotacaoCompra.cotCodigo],
		references: [cotacaoCompra.cotCodigo]
	}),
	funcionario: one(funcionario, {
		fields: [itensCotacaoCompra.fuCodigo],
		references: [funcionario.fuCodigo]
	}),
	produto_iccProdutoPedido: one(produto, {
		fields: [itensCotacaoCompra.iccProdutoPedido],
		references: [produto.proCodigo],
		relationName: "itensCotacaoCompra_iccProdutoPedido_produto_proCodigo"
	}),
	pedido: one(pedido, {
		fields: [itensCotacaoCompra.peCodigo],
		references: [pedido.peCodigo]
	}),
	produto_proCodigo: one(produto, {
		fields: [itensCotacaoCompra.proCodigo],
		references: [produto.proCodigo],
		relationName: "itensCotacaoCompra_proCodigo_produto_proCodigo"
	}),
	usuario: one(usuario, {
		fields: [itensCotacaoCompra.usuCodigoAprovacao],
		references: [usuario.usuCodigo]
	}),
	itensSolicitacaoCompras: many(itensSolicitacaoCompra),
}));

export const pedidoCotacaoRelations = relations(pedidoCotacao, ({one, many}) => ({
	itensPedidoCotacaos: many(itensPedidoCotacao),
	cotacaoCompra: one(cotacaoCompra, {
		fields: [pedidoCotacao.cotCodigo],
		references: [cotacaoCompra.cotCodigo]
	}),
	fornecedorCotacaoCompra: one(fornecedorCotacaoCompra, {
		fields: [pedidoCotacao.fccCodigo],
		references: [fornecedorCotacaoCompra.fccCodigo]
	}),
	funcionario_fuCodigoAnalise: one(funcionario, {
		fields: [pedidoCotacao.fuCodigoAnalise],
		references: [funcionario.fuCodigo],
		relationName: "pedidoCotacao_fuCodigoAnalise_funcionario_fuCodigo"
	}),
	funcionario_fuCodigoAprovacao: one(funcionario, {
		fields: [pedidoCotacao.fuCodigoAprovacao],
		references: [funcionario.fuCodigo],
		relationName: "pedidoCotacao_fuCodigoAprovacao_funcionario_fuCodigo"
	}),
	condicaoPagto: one(condicaoPagto, {
		fields: [pedidoCotacao.parCpCodigo],
		references: [condicaoPagto.parCpCodigo]
	}),
	pedido: one(pedido, {
		fields: [pedidoCotacao.peCodigo],
		references: [pedido.peCodigo]
	}),
}));

export const itensSolicitacaoCompraRelations = relations(itensSolicitacaoCompra, ({one}) => ({
	itensCotacaoCompra: one(itensCotacaoCompra, {
		fields: [itensSolicitacaoCompra.iccCodigo],
		references: [itensCotacaoCompra.iccCodigo]
	}),
	usuario_iscUsuarioAutorizacao: one(usuario, {
		fields: [itensSolicitacaoCompra.iscUsuarioAutorizacao],
		references: [usuario.usuCodigo],
		relationName: "itensSolicitacaoCompra_iscUsuarioAutorizacao_usuario_usuCodigo"
	}),
	usuario_iscUsuarioInsercao: one(usuario, {
		fields: [itensSolicitacaoCompra.iscUsuarioInsercao],
		references: [usuario.usuCodigo],
		relationName: "itensSolicitacaoCompra_iscUsuarioInsercao_usuario_usuCodigo"
	}),
	pedido: one(pedido, {
		fields: [itensSolicitacaoCompra.peCodigo],
		references: [pedido.peCodigo]
	}),
	produto: one(produto, {
		fields: [itensSolicitacaoCompra.proCodigo],
		references: [produto.proCodigo]
	}),
	solicitacaoCompra: one(solicitacaoCompra, {
		fields: [itensSolicitacaoCompra.slcCodigo],
		references: [solicitacaoCompra.slcCodigo]
	}),
}));

export const ultimaConsultaFrancesinhaRelations = relations(ultimaConsultaFrancesinha, ({one}) => ({
	parametroBoleto: one(parametroBoleto, {
		fields: [ultimaConsultaFrancesinha.pbCodigo],
		references: [parametroBoleto.pbCodigo]
	}),
}));

export const disparosProgramadosWhatsappRelations = relations(disparosProgramadosWhatsapp, ({one}) => ({
	disparosProgramado: one(disparosProgramados, {
		fields: [disparosProgramadosWhatsapp.dipCodigo],
		references: [disparosProgramados.dipCodigo]
	}),
}));

export const rtcCstIbsCbsRelations = relations(rtcCstIbsCbs, ({many}) => ({
	rtcCodigosCclasstribs: many(rtcCodigosCclasstrib),
}));

export const rtcCreditosPresumidosRelations = relations(rtcCreditosPresumidos, ({many}) => ({
	rtcCodigosCclasstribs: many(rtcCodigosCclasstrib),
}));

export const itensPedidoConfeccaoRelations = relations(itensPedidoConfeccao, ({one}) => ({
	produto: one(produto, {
		fields: [itensPedidoConfeccao.proCodigo],
		references: [produto.proCodigo]
	}),
	pedidoConfeccao: one(pedidoConfeccao, {
		fields: [itensPedidoConfeccao.prodCodigo],
		references: [pedidoConfeccao.prodCodigo]
	}),
}));

export const codPaisRelations = relations(codPais, ({many}) => ({
	clientes: many(clientes),
	fornecedors: many(fornecedor),
	medicos: many(medico),
}));

export const grupoEconomicoRelations = relations(grupoEconomico, ({many}) => ({
	clientes: many(clientes),
	fornecedors: many(fornecedor),
}));

export const primeiroContatoRelations = relations(primeiroContato, ({many}) => ({
	clientes: many(clientes),
	prospeccaos: many(prospeccao),
}));

export const situacaoClienteRelations = relations(situacaoCliente, ({many}) => ({
	clientes: many(clientes),
}));

export const segmentoClienteRelations = relations(segmentoCliente, ({many}) => ({
	clientes: many(clientes),
	prospeccaos: many(prospeccao),
}));

export const motivoAjustePedidoRelations = relations(motivoAjustePedido, ({many}) => ({
	vendasAjustes: many(vendasAjustes),
}));

export const notaEcfRefRelations = relations(notaEcfRef, ({one}) => ({
	nota: one(nota, {
		fields: [notaEcfRef.nfCodigo],
		references: [nota.nfCodigo]
	}),
}));

export const seguroMdfeRelations = relations(seguroMdfe, ({one}) => ({
	documentosMdfe: one(documentosMdfe, {
		fields: [seguroMdfe.docCodigo],
		references: [documentosMdfe.docCodigo]
	}),
	fornecedor: one(fornecedor, {
		fields: [seguroMdfe.forCodigo],
		references: [fornecedor.forCodigo]
	}),
	mdfe: one(mdfe, {
		fields: [seguroMdfe.mdfCodigo],
		references: [mdfe.mdfCodigo]
	}),
	cliente: one(clientes, {
		fields: [seguroMdfe.segTomador],
		references: [clientes.cliCodigo]
	}),
}));

export const excecaoNcmRelations = relations(excecaoNcm, ({many}) => ({
	classificacaoFiscals: many(classificacaoFiscal),
}));

export const icmsRelations = relations(icms, ({many}) => ({
	classificacaoFiscals: many(classificacaoFiscal),
}));

export const motivoIcmsRelations = relations(motivoIcms, ({many}) => ({
	classificacaoFiscals_motCodigo: many(classificacaoFiscal, {
		relationName: "classificacaoFiscal_motCodigo_motivoIcms_motCodigo"
	}),
	classificacaoFiscals_motCodigoSt: many(classificacaoFiscal, {
		relationName: "classificacaoFiscal_motCodigoSt_motivoIcms_motCodigo"
	}),
}));

export const rastroRelations = relations(rastro, ({one, many}) => ({
	rastro: one(rastro, {
		fields: [rastro.rasCodigoPai],
		references: [rastro.rasCodigo],
		relationName: "rastro_rasCodigoPai_rastro_rasCodigo"
	}),
	rastros: many(rastro, {
		relationName: "rastro_rasCodigoPai_rastro_rasCodigo"
	}),
}));

export const yzidroServicosThreadsRelations = relations(yzidroServicosThreads, ({one}) => ({
	yzidroServico: one(yzidroServicos, {
		fields: [yzidroServicosThreads.yzsCodigo],
		references: [yzidroServicos.yzsCodigo]
	}),
}));

export const yzidroServicosRelations = relations(yzidroServicos, ({many}) => ({
	yzidroServicosThreads: many(yzidroServicosThreads),
}));

export const engServicosAndamentoRelations = relations(engServicosAndamento, ({one}) => ({
	engEtapa: one(engEtapas, {
		fields: [engServicosAndamento.engCodigoEtapa],
		references: [engEtapas.engCodigoEtapa]
	}),
}));

export const itensPedidoRelations = relations(itensPedido, ({one}) => ({
	cotacaoCompra: one(cotacaoCompra, {
		fields: [itensPedido.cotCodigo],
		references: [cotacaoCompra.cotCodigo]
	}),
	pedido: one(pedido, {
		fields: [itensPedido.peCodigo],
		references: [pedido.peCodigo]
	}),
	produto_proCodigo: one(produto, {
		fields: [itensPedido.proCodigo],
		references: [produto.proCodigo],
		relationName: "itensPedido_proCodigo_produto_proCodigo"
	}),
	produto_proCodigo: one(produto, {
		fields: [itensPedido.proCodigo],
		references: [produto.proCodigo],
		relationName: "itensPedido_proCodigo_produto_proCodigo"
	}),
	talhao: one(talhao, {
		fields: [itensPedido.tlhCodigo],
		references: [talhao.tlhCodigo]
	}),
	unidadesAlternativa: one(unidadesAlternativas, {
		fields: [itensPedido.unaCodigo],
		references: [unidadesAlternativas.unaCodigo]
	}),
}));

export const visaoRelatorioRelations = relations(visaoRelatorio, ({many}) => ({
	etiquetaModelos: many(etiquetaModelo),
	colunasVisaoRelatorios: many(colunasVisaoRelatorio),
}));

export const planoContasRfbRelations = relations(planoContasRfb, ({many}) => ({
	planoContas: many(planoContas),
}));

export const substatusEntregaMlRelations = relations(substatusEntregaMl, ({one}) => ({
	statusEntregaMl: one(statusEntregaMl, {
		fields: [substatusEntregaMl.semStatus],
		references: [statusEntregaMl.semStatus]
	}),
}));

export const statusEntregaMlRelations = relations(statusEntregaMl, ({many}) => ({
	substatusEntregaMls: many(substatusEntregaMl),
}));

export const compraDupXmlRelations = relations(compraDupXml, ({one}) => ({
	compra: one(compra, {
		fields: [compraDupXml.cmpCodigo],
		references: [compra.cmpCodigo]
	}),
}));

export const anpCombustiveisRelations = relations(anpCombustiveis, ({one}) => ({
	unidade: one(unidade, {
		fields: [anpCombustiveis.unCodigo],
		references: [unidade.unCodigo]
	}),
}));

export const vendasKitEcommerceRelations = relations(vendasKitEcommerce, ({one}) => ({
	venda: one(vendas, {
		fields: [vendasKitEcommerce.venCodPedido],
		references: [vendas.venCodPedido]
	}),
}));

export const npsHistoricoRelations = relations(npsHistorico, ({one}) => ({
	cliente: one(clientes, {
		fields: [npsHistorico.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	contato: one(contatos, {
		fields: [npsHistorico.conCodigo],
		references: [contatos.conCodigo]
	}),
	motivoNp: one(motivoNps, {
		fields: [npsHistorico.mtnCodigo],
		references: [motivoNps.mtnCodigo]
	}),
	usuario: one(usuario, {
		fields: [npsHistorico.usuCodigo],
		references: [usuario.usuCodigo]
	}),
}));

export const motivoNpsRelations = relations(motivoNps, ({many}) => ({
	npsHistoricos: many(npsHistorico),
}));

export const faturaLocGerRelations = relations(faturaLocGer, ({one}) => ({
	aditamentoGerador: one(aditamentoGerador, {
		fields: [faturaLocGer.adtCodigo],
		references: [aditamentoGerador.adtCodigo]
	}),
	locacaoGerador: one(locacaoGerador, {
		fields: [faturaLocGer.locCodigo],
		references: [locacaoGerador.locCodigo]
	}),
}));

export const dependentesClientesRelations = relations(dependentesClientes, ({one}) => ({
	cliente: one(clientes, {
		fields: [dependentesClientes.cliCodigo],
		references: [clientes.cliCodigo]
	}),
}));

export const cceRelations = relations(cce, ({one}) => ({
	nota: one(nota, {
		fields: [cce.nfCodigo],
		references: [nota.nfCodigo]
	}),
}));

export const inventariosEstoqueLeiturasRelations = relations(inventariosEstoqueLeituras, ({one}) => ({
	inventariosEstoque: one(inventariosEstoque, {
		fields: [inventariosEstoqueLeituras.ieCodigo],
		references: [inventariosEstoque.ieCodigo]
	}),
	log: one(log, {
		fields: [inventariosEstoqueLeituras.logCodigo],
		references: [log.logCodigo]
	}),
	produto: one(produto, {
		fields: [inventariosEstoqueLeituras.proCodigo],
		references: [produto.proCodigo]
	}),
	usuario: one(usuario, {
		fields: [inventariosEstoqueLeituras.usuCodigo],
		references: [usuario.usuCodigo]
	}),
}));

export const fornecedorPagamentoRelations = relations(fornecedorPagamento, ({one}) => ({
	fornecedor: one(fornecedor, {
		fields: [fornecedorPagamento.forCodigo],
		references: [fornecedor.forCodigo]
	}),
}));

export const promocoesGrupoXEmpresaRelations = relations(promocoesGrupoXEmpresa, ({one}) => ({
	empresa: one(empresa, {
		fields: [promocoesGrupoXEmpresa.empCodigo],
		references: [empresa.empCodigo]
	}),
	promocoesGrupo: one(promocoesGrupo, {
		fields: [promocoesGrupoXEmpresa.prgCodigo],
		references: [promocoesGrupo.prgCodigo]
	}),
}));

export const notaFiscalRefRelations = relations(notaFiscalRef, ({one}) => ({
	estado: one(estado, {
		fields: [notaFiscalRef.esCodigo],
		references: [estado.esCodigo]
	}),
	nota_nfCodigo: one(nota, {
		fields: [notaFiscalRef.nfCodigo],
		references: [nota.nfCodigo],
		relationName: "notaFiscalRef_nfCodigo_nota_nfCodigo"
	}),
	nota_nfCodigoReferenciada: one(nota, {
		fields: [notaFiscalRef.nfCodigoReferenciada],
		references: [nota.nfCodigo],
		relationName: "notaFiscalRef_nfCodigoReferenciada_nota_nfCodigo"
	}),
}));

export const credenciadoraCartaoRelations = relations(credenciadoraCartao, ({many}) => ({
	credenciadoraMeiosPgtos: many(credenciadoraMeiosPgto),
}));

export const modeloImpNaoFiscalRelations = relations(modeloImpNaoFiscal, ({many}) => ({
	impressoraNaoFiscals: many(impressoraNaoFiscal),
}));

export const parametroMdfeRelations = relations(parametroMdfe, ({one}) => ({
	empresa: one(empresa, {
		fields: [parametroMdfe.empCodigo],
		references: [empresa.empCodigo]
	}),
	cliente: one(clientes, {
		fields: [parametroMdfe.segTomador],
		references: [clientes.cliCodigo]
	}),
	fornecedor: one(fornecedor, {
		fields: [parametroMdfe.seguradora],
		references: [fornecedor.forCodigo]
	}),
}));

export const pollingIfoodRelations = relations(pollingIfood, ({one}) => ({
	empresa: one(empresa, {
		fields: [pollingIfood.empCodigo],
		references: [empresa.empCodigo]
	}),
}));

export const disparosProgramadosCamposRelations = relations(disparosProgramadosCampos, ({one}) => ({
	disparosProgramado: one(disparosProgramados, {
		fields: [disparosProgramadosCampos.dipCodigo],
		references: [disparosProgramados.dipCodigo]
	}),
}));

export const itensAdicionaisRelations = relations(itensAdicionais, ({one}) => ({
	adicionai: one(adicionais, {
		fields: [itensAdicionais.adcCodigo],
		references: [adicionais.adcCodigo]
	}),
	itensVenda: one(itensVenda, {
		fields: [itensAdicionais.iteCodigo],
		references: [itensVenda.iteCodigo]
	}),
	produto: one(produto, {
		fields: [itensAdicionais.proCodigo],
		references: [produto.proCodigo]
	}),
	venda: one(vendas, {
		fields: [itensAdicionais.venCodPedido],
		references: [vendas.venCodPedido]
	}),
}));

export const programacaoResgateRelations = relations(programacaoResgate, ({one}) => ({
	conta: one(contas, {
		fields: [programacaoResgate.cbCodigo],
		references: [contas.cbCodigo]
	}),
}));

export const menuBiRelations = relations(menuBi, ({one}) => ({
	usuario: one(usuario, {
		fields: [menuBi.usuCodigo],
		references: [usuario.usuCodigo]
	}),
	visaoBi: one(visaoBi, {
		fields: [menuBi.viCodigo],
		references: [visaoBi.viCodigo]
	}),
}));

export const visaoBiRelations = relations(visaoBi, ({many}) => ({
	menuBis: many(menuBi),
	permissaoBis: many(permissaoBi),
}));

export const permissaoEspecialEscalaRelations = relations(permissaoEspecialEscala, ({one}) => ({
	usuario: one(usuario, {
		fields: [permissaoEspecialEscala.usuCodigo],
		references: [usuario.usuCodigo]
	}),
}));

export const itensVendaCorteRelations = relations(itensVendaCorte, ({one}) => ({
	produto: one(produto, {
		fields: [itensVendaCorte.proCodigo],
		references: [produto.proCodigo]
	}),
	representante: one(representantes, {
		fields: [itensVendaCorte.reCodigo],
		references: [representantes.reCodigo]
	}),
}));

export const planoFaturamentoRelations = relations(planoFaturamento, ({one}) => ({
	planoConta_coCodigo: one(planoContas, {
		fields: [planoFaturamento.coCodigo],
		references: [planoContas.coCodigo],
		relationName: "planoFaturamento_coCodigo_planoContas_coCodigo"
	}),
	planoConta_coCodigo: one(planoContas, {
		fields: [planoFaturamento.coCodigo],
		references: [planoContas.coCodigo],
		relationName: "planoFaturamento_coCodigo_planoContas_coCodigo"
	}),
}));

export const spedf0400Relations = relations(spedf0400, ({one}) => ({
	spedf0000: one(spedf0000, {
		fields: [spedf0400.sf0000Codigo],
		references: [spedf0000.sf0000Codigo]
	}),
}));

export const interesseRelations = relations(interesse, ({many}) => ({
	prospeccaos: many(prospeccao),
}));

export const prospeccaoHistoricoRelations = relations(prospeccaoHistorico, ({many}) => ({
	prospeccaos: many(prospeccao),
}));

export const prospeccaoMotivoRelations = relations(prospeccaoMotivo, ({many}) => ({
	prospeccaos: many(prospeccao),
}));

export const estoqueLocalFechamentoRelations = relations(estoqueLocalFechamento, ({one}) => ({
	estoqueLocai: one(estoqueLocais, {
		fields: [estoqueLocalFechamento.elcCodigo],
		references: [estoqueLocais.elcCodigo]
	}),
	produto: one(produto, {
		fields: [estoqueLocalFechamento.proCodigo],
		references: [produto.proCodigo]
	}),
}));

export const rotinasWhatsappRelations = relations(rotinasWhatsapp, ({one}) => ({
	integracoesYzidro: one(integracoesYzidro, {
		fields: [rotinasWhatsapp.iyzCodigo],
		references: [integracoesYzidro.iyzCodigo]
	}),
	empresa: one(empresa, {
		fields: [rotinasWhatsapp.empCodigo],
		references: [empresa.empCodigo]
	}),
}));

export const tipoPedidoDemanderRelations = relations(tipoPedidoDemander, ({one}) => ({
	estoqueLocai: one(estoqueLocais, {
		fields: [tipoPedidoDemander.elcCodigo],
		references: [estoqueLocais.elcCodigo]
	}),
	serie: one(serie, {
		fields: [tipoPedidoDemander.sreCodigo],
		references: [serie.sreCodigo]
	}),
	tipoOperacao: one(tipoOperacao, {
		fields: [tipoPedidoDemander.toCodigo],
		references: [tipoOperacao.toCodigo]
	}),
	empresa: one(empresa, {
		fields: [tipoPedidoDemander.empCodigo],
		references: [empresa.empCodigo]
	}),
}));

export const filiacaoRelations = relations(filiacao, ({one}) => ({
	produto_proCodigo: one(produto, {
		fields: [filiacao.proCodigo],
		references: [produto.proCodigo],
		relationName: "filiacao_proCodigo_produto_proCodigo"
	}),
	produto_proCodigo: one(produto, {
		fields: [filiacao.proCodigo],
		references: [produto.proCodigo],
		relationName: "filiacao_proCodigo_produto_proCodigo"
	}),
}));

export const parametroCteRelations = relations(parametroCte, ({one}) => ({
	empresa: one(empresa, {
		fields: [parametroCte.empCodigo],
		references: [empresa.empCodigo]
	}),
	serie: one(serie, {
		fields: [parametroCte.sreCodigo],
		references: [serie.sreCodigo]
	}),
}));

export const historicoInteligenciaFiscalRelations = relations(historicoInteligenciaFiscal, ({one}) => ({
	empresa: one(empresa, {
		fields: [historicoInteligenciaFiscal.empCodigo],
		references: [empresa.empCodigo]
	}),
	log: one(log, {
		fields: [historicoInteligenciaFiscal.logCodigo],
		references: [log.logCodigo]
	}),
}));

export const devolucoesVendaRelations = relations(devolucoesVenda, ({one}) => ({
	produto: one(produto, {
		fields: [devolucoesVenda.proCodigo],
		references: [produto.proCodigo]
	}),
	venda_venCodPedidoDev: one(vendas, {
		fields: [devolucoesVenda.venCodPedidoDev],
		references: [vendas.venCodPedido],
		relationName: "devolucoesVenda_venCodPedidoDev_vendas_venCodPedido"
	}),
	venda_venCodPedido: one(vendas, {
		fields: [devolucoesVenda.venCodPedido],
		references: [vendas.venCodPedido],
		relationName: "devolucoesVenda_venCodPedido_vendas_venCodPedido"
	}),
	itensVenda: one(itensVenda, {
		fields: [devolucoesVenda.iteCodigo],
		references: [itensVenda.iteCodigo]
	}),
}));

export const representanteBloqueioProdutoRelations = relations(representanteBloqueioProduto, ({one}) => ({
	cliente: one(clientes, {
		fields: [representanteBloqueioProduto.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	produto: one(produto, {
		fields: [representanteBloqueioProduto.proCodigo],
		references: [produto.proCodigo]
	}),
	representante: one(representantes, {
		fields: [representanteBloqueioProduto.reCodigo],
		references: [representantes.reCodigo]
	}),
}));

export const spedf0210Relations = relations(spedf0210, ({one}) => ({
	spedf0000: one(spedf0000, {
		fields: [spedf0210.sf0000Codigo],
		references: [spedf0000.sf0000Codigo]
	}),
}));

export const produtosDevolvidosTribFiscalRelations = relations(produtosDevolvidosTribFiscal, ({one}) => ({
	empresa: one(empresa, {
		fields: [produtosDevolvidosTribFiscal.empCodigo],
		references: [empresa.empCodigo]
	}),
}));

export const consolidacaoEmissaoPixRelations = relations(consolidacaoEmissaoPix, ({one}) => ({
	conta: one(contas, {
		fields: [consolidacaoEmissaoPix.cbCodigo],
		references: [contas.cbCodigo]
	}),
}));

export const campanhaDisparoRelations = relations(campanhaDisparo, ({one}) => ({
	campanha: one(campanha, {
		fields: [campanhaDisparo.camCodigo],
		references: [campanha.camCodigo]
	}),
	integracoesYzidro: one(integracoesYzidro, {
		fields: [campanhaDisparo.iyzCodigo],
		references: [integracoesYzidro.iyzCodigo]
	}),
}));

export const itensCorProducaoRelations = relations(itensCorProducao, ({one}) => ({
	core: one(cores, {
		fields: [itensCorProducao.coCodigo],
		references: [cores.coCodigo]
	}),
	producao: one(producao, {
		fields: [itensCorProducao.prodCodigo],
		references: [producao.prodCodigo]
	}),
}));

export const verbasFornecedoresRelations = relations(verbasFornecedores, ({one}) => ({
	compra: one(compra, {
		fields: [verbasFornecedores.cmpCodigo],
		references: [compra.cmpCodigo]
	}),
	contasReceber: one(contasReceber, {
		fields: [verbasFornecedores.crCodigo],
		references: [contasReceber.crCodigo]
	}),
	fornecedor: one(fornecedor, {
		fields: [verbasFornecedores.forCodigo],
		references: [fornecedor.forCodigo]
	}),
	produto: one(produto, {
		fields: [verbasFornecedores.proCodigo],
		references: [produto.proCodigo]
	}),
}));

export const retRegrasTributacaoFiscalRelations = relations(retRegrasTributacaoFiscal, ({one}) => ({
	retTributacaoFiscal: one(retTributacaoFiscal, {
		fields: [retRegrasTributacaoFiscal.rtfCodigo],
		references: [retTributacaoFiscal.rtfCodigo]
	}),
	empresa: one(empresa, {
		fields: [retRegrasTributacaoFiscal.empCodigo],
		references: [empresa.empCodigo]
	}),
	classificacaoFiscal: one(classificacaoFiscal, {
		fields: [retRegrasTributacaoFiscal.codClassEnviada],
		references: [classificacaoFiscal.clCodigo]
	}),
}));

export const fciRelations = relations(fci, ({one}) => ({
	produto: one(produto, {
		fields: [fci.proCodigo],
		references: [produto.proCodigo]
	}),
}));

export const parametroUsuarioRelations = relations(parametroUsuario, ({one}) => ({
	usuario: one(usuario, {
		fields: [parametroUsuario.usuCodigo],
		references: [usuario.usuCodigo]
	}),
}));

export const contratoItensRelations = relations(contratoItens, ({one}) => ({
	contrato: one(contrato, {
		fields: [contratoItens.ccvCodigo],
		references: [contrato.ccvCodigo]
	}),
	produto: one(produto, {
		fields: [contratoItens.proCodigo],
		references: [produto.proCodigo]
	}),
	unidadesAlternativa: one(unidadesAlternativas, {
		fields: [contratoItens.unaCodigo],
		references: [unidadesAlternativas.unaCodigo]
	}),
}));

export const relatorioDinamicoUsuariosRelations = relations(relatorioDinamicoUsuarios, ({one}) => ({
	relatorioDinamico: one(relatorioDinamico, {
		fields: [relatorioDinamicoUsuarios.relCodigo],
		references: [relatorioDinamico.relCodigo]
	}),
	usuario: one(usuario, {
		fields: [relatorioDinamicoUsuarios.usuCodigo],
		references: [usuario.usuCodigo]
	}),
}));

export const honorariosArquivosRelations = relations(honorariosArquivos, ({one}) => ({
	honorario: one(honorarios, {
		fields: [honorariosArquivos.hoCodigo],
		references: [honorarios.hoCodigo]
	}),
}));

export const whatsappProtocolosFuncionarioRelations = relations(whatsappProtocolosFuncionario, ({one}) => ({
	funcionario: one(funcionario, {
		fields: [whatsappProtocolosFuncionario.fuCodigo],
		references: [funcionario.fuCodigo]
	}),
	whatsappProtocolo: one(whatsappProtocolos, {
		fields: [whatsappProtocolosFuncionario.wapProtocolo],
		references: [whatsappProtocolos.wapProtocolo]
	}),
}));

export const atualizaPedidoWebRelations = relations(atualizaPedidoWeb, ({one}) => ({
	statusPedidoWeb: one(statusPedidoWeb, {
		fields: [atualizaPedidoWeb.spwCodigo],
		references: [statusPedidoWeb.spwCodigo]
	}),
	venda: one(vendas, {
		fields: [atualizaPedidoWeb.venCodPedido],
		references: [vendas.venCodPedido]
	}),
}));

export const statusPedidoWebRelations = relations(statusPedidoWeb, ({many}) => ({
	atualizaPedidoWebs: many(atualizaPedidoWeb),
}));

export const dtSelectReplicaIndicesRelations = relations(dtSelectReplicaIndices, ({one}) => ({
	dtSelectsReplica: one(dtSelectsReplicas, {
		fields: [dtSelectReplicaIndices.srCodigo],
		references: [dtSelectsReplicas.srCodigo]
	}),
}));

export const retornosNfeRelations = relations(retornosNfe, ({one}) => ({
	itensNota_iteCodigo: one(itensNota, {
		fields: [retornosNfe.iteCodigo],
		references: [itensNota.iteCodigo],
		relationName: "retornosNfe_iteCodigo_itensNota_iteCodigo"
	}),
	itensNota_iteCodigoRet: one(itensNota, {
		fields: [retornosNfe.iteCodigoRet],
		references: [itensNota.iteCodigo],
		relationName: "retornosNfe_iteCodigoRet_itensNota_iteCodigo"
	}),
	nota_nfCodigo: one(nota, {
		fields: [retornosNfe.nfCodigo],
		references: [nota.nfCodigo],
		relationName: "retornosNfe_nfCodigo_nota_nfCodigo"
	}),
	nota_nfCodigoRet: one(nota, {
		fields: [retornosNfe.nfCodigoRet],
		references: [nota.nfCodigo],
		relationName: "retornosNfe_nfCodigoRet_nota_nfCodigo"
	}),
	produto: one(produto, {
		fields: [retornosNfe.proCodigo],
		references: [produto.proCodigo]
	}),
}));

export const ocorrenciasMenusRelations = relations(ocorrenciasMenus, ({one}) => ({
	ocorrenciasCrm: one(ocorrenciasCrm, {
		fields: [ocorrenciasMenus.occCodigo],
		references: [ocorrenciasCrm.occCodigo]
	}),
}));

export const itensPedidoConfeccaoMatRelations = relations(itensPedidoConfeccaoMat, ({one}) => ({
	produto: one(produto, {
		fields: [itensPedidoConfeccaoMat.proCodigo],
		references: [produto.proCodigo]
	}),
	pedidoConfeccao: one(pedidoConfeccao, {
		fields: [itensPedidoConfeccaoMat.prodCodigo],
		references: [pedidoConfeccao.prodCodigo]
	}),
}));

export const tipoContratoRelations = relations(tipoContrato, ({many}) => ({
	contratoes: many(contrato),
}));

export const logsatRelations = relations(logsat, ({one}) => ({
	sat: one(sat, {
		fields: [logsat.satCodigo],
		references: [sat.satCodigo]
	}),
}));

export const tabelaGeradorRelations = relations(tabelaGerador, ({one}) => ({
	gerador: one(gerador, {
		fields: [tabelaGerador.gerCodigo],
		references: [gerador.gerCodigo]
	}),
	regimeTrabalho: one(regimeTrabalho, {
		fields: [tabelaGerador.regCodigo],
		references: [regimeTrabalho.regCodigo]
	}),
}));

export const contratoOutrasDespesasRelations = relations(contratoOutrasDespesas, ({one}) => ({
	centrocusto: one(centrocusto, {
		fields: [contratoOutrasDespesas.ccCodigo],
		references: [centrocusto.ccCodigo]
	}),
	contrato: one(contrato, {
		fields: [contratoOutrasDespesas.ccvCodigo],
		references: [contrato.ccvCodigo]
	}),
	planoConta: one(planoContas, {
		fields: [contratoOutrasDespesas.coCodigo],
		references: [planoContas.coCodigo]
	}),
	fornecedor: one(fornecedor, {
		fields: [contratoOutrasDespesas.forCodigo],
		references: [fornecedor.forCodigo]
	}),
	condicaoPagto: one(condicaoPagto, {
		fields: [contratoOutrasDespesas.parCpCodigo],
		references: [condicaoPagto.parCpCodigo]
	}),
}));

export const registrosExcluidosRelations = relations(registrosExcluidos, ({one}) => ({
	empresa_empCodigo: one(empresa, {
		fields: [registrosExcluidos.empCodigo],
		references: [empresa.empCodigo],
		relationName: "registrosExcluidos_empCodigo_empresa_empCodigo"
	}),
	empresa_empCodigo: one(empresa, {
		fields: [registrosExcluidos.empCodigo],
		references: [empresa.empCodigo],
		relationName: "registrosExcluidos_empCodigo_empresa_empCodigo"
	}),
}));

export const cotacoesRelations = relations(cotacoes, ({one}) => ({
	moeda: one(moeda, {
		fields: [cotacoes.moeCodigo],
		references: [moeda.moeCodigo]
	}),
}));

export const itensLoteMedicamentoRelations = relations(itensLoteMedicamento, ({one}) => ({
	nota_nfCodigo: one(nota, {
		fields: [itensLoteMedicamento.nfCodigo],
		references: [nota.nfCodigo],
		relationName: "itensLoteMedicamento_nfCodigo_nota_nfCodigo"
	}),
	nota_nfCodigo: one(nota, {
		fields: [itensLoteMedicamento.nfCodigo],
		references: [nota.nfCodigo],
		relationName: "itensLoteMedicamento_nfCodigo_nota_nfCodigo"
	}),
	produto_proCodigo: one(produto, {
		fields: [itensLoteMedicamento.proCodigo],
		references: [produto.proCodigo],
		relationName: "itensLoteMedicamento_proCodigo_produto_proCodigo"
	}),
	produto_proCodigo: one(produto, {
		fields: [itensLoteMedicamento.proCodigo],
		references: [produto.proCodigo],
		relationName: "itensLoteMedicamento_proCodigo_produto_proCodigo"
	}),
}));

export const etiquetaRoloRelations = relations(etiquetaRolo, ({one}) => ({
	fornecedor: one(fornecedor, {
		fields: [etiquetaRolo.forCodigo],
		references: [fornecedor.forCodigo]
	}),
}));

export const projetosDisponibilidadeClienteRelations = relations(projetosDisponibilidadeCliente, ({one}) => ({
	cliente: one(clientes, {
		fields: [projetosDisponibilidadeCliente.cliCodigo],
		references: [clientes.cliCodigo]
	}),
	projeto: one(projetos, {
		fields: [projetosDisponibilidadeCliente.prjCodigo],
		references: [projetos.prjCodigo]
	}),
}));

export const whatsappProtocolosArquivosRelations = relations(whatsappProtocolosArquivos, ({one}) => ({
	whatsappProtocolo: one(whatsappProtocolos, {
		fields: [whatsappProtocolosArquivos.wapProtocolo],
		references: [whatsappProtocolos.wapProtocolo]
	}),
}));

export const remessaRetornoNfeRelations = relations(remessaRetornoNfe, ({one}) => ({
	compra: one(compra, {
		fields: [remessaRetornoNfe.cmpCodigo],
		references: [compra.cmpCodigo]
	}),
	nota: one(nota, {
		fields: [remessaRetornoNfe.nfCodigo],
		references: [nota.nfCodigo]
	}),
	produto: one(produto, {
		fields: [remessaRetornoNfe.proCodigo],
		references: [produto.proCodigo]
	}),
}));

export const projetoTipoUsuarioRelations = relations(projetoTipoUsuario, ({one}) => ({
	projetoTipo: one(projetoTipo, {
		fields: [projetoTipoUsuario.pjtCodigo],
		references: [projetoTipo.pjtCodigo]
	}),
	usuario: one(usuario, {
		fields: [projetoTipoUsuario.usuCodigo],
		references: [usuario.usuCodigo]
	}),
}));

export const dadosIndivPagamentosExternosRelations = relations(dadosIndivPagamentosExternos, ({one}) => ({
	contasReceber: one(contasReceber, {
		fields: [dadosIndivPagamentosExternos.crCodigo],
		references: [contasReceber.crCodigo]
	}),
	dadosPagamentosExterno: one(dadosPagamentosExternos, {
		fields: [dadosIndivPagamentosExternos.dpeCodigo],
		references: [dadosPagamentosExternos.dpeCodigo]
	}),
}));

export const pedidosGeradosAutomaticamentoRelations = relations(pedidosGeradosAutomaticamento, ({one}) => ({
	venda_venCodPedidoAjuste: one(vendas, {
		fields: [pedidosGeradosAutomaticamento.venCodPedidoAjuste],
		references: [vendas.venCodPedido],
		relationName: "pedidosGeradosAutomaticamento_venCodPedidoAjuste_vendas_venCodPedido"
	}),
	venda_venCodPedidoDev: one(vendas, {
		fields: [pedidosGeradosAutomaticamento.venCodPedidoDev],
		references: [vendas.venCodPedido],
		relationName: "pedidosGeradosAutomaticamento_venCodPedidoDev_vendas_venCodPedido"
	}),
	venda_venCodPedidoOrigem: one(vendas, {
		fields: [pedidosGeradosAutomaticamento.venCodPedidoOrigem],
		references: [vendas.venCodPedido],
		relationName: "pedidosGeradosAutomaticamento_venCodPedidoOrigem_vendas_venCodPedido"
	}),
}));

export const configuracaoAuxiliarRelations = relations(configuracaoAuxiliar, ({one}) => ({
	usuario_usuCodigo: one(usuario, {
		fields: [configuracaoAuxiliar.usuCodigo],
		references: [usuario.usuCodigo],
		relationName: "configuracaoAuxiliar_usuCodigo_usuario_usuCodigo"
	}),
	usuario_usuCodigo: one(usuario, {
		fields: [configuracaoAuxiliar.usuCodigo],
		references: [usuario.usuCodigo],
		relationName: "configuracaoAuxiliar_usuCodigo_usuario_usuCodigo"
	}),
}));

export const fornecedorXmlRelations = relations(fornecedorXml, ({one}) => ({
	fornecedor: one(fornecedor, {
		fields: [fornecedorXml.forCodigo],
		references: [fornecedor.forCodigo]
	}),
	produto: one(produto, {
		fields: [fornecedorXml.proCodigo],
		references: [produto.proCodigo]
	}),
}));

export const colunasVisaoRelatorioRelations = relations(colunasVisaoRelatorio, ({one}) => ({
	visaoRelatorio: one(visaoRelatorio, {
		fields: [colunasVisaoRelatorio.vsrCodigo],
		references: [visaoRelatorio.vsrCodigo]
	}),
}));

export const moduloRelations = relations(modulo, ({many}) => ({
	menus_moCodigo: many(menus, {
		relationName: "menus_moCodigo_modulo_moCodigo"
	}),
	menus_moCodigo: many(menus, {
		relationName: "menus_moCodigo_modulo_moCodigo"
	}),
}));

export const spedf0205Relations = relations(spedf0205, ({one}) => ({
	spedf0000: one(spedf0000, {
		fields: [spedf0205.sf0000Codigo],
		references: [spedf0000.sf0000Codigo]
	}),
}));

export const fornecedorCotacaoCompraRelations = relations(fornecedorCotacaoCompra, ({one, many}) => ({
	pedidoCotacaos: many(pedidoCotacao),
	cotacaoCompra: one(cotacaoCompra, {
		fields: [fornecedorCotacaoCompra.cotCodigo],
		references: [cotacaoCompra.cotCodigo]
	}),
	fornecedor: one(fornecedor, {
		fields: [fornecedorCotacaoCompra.forCodigo],
		references: [fornecedor.forCodigo]
	}),
}));

export const ytbEmpresaRelations = relations(ytbEmpresa, ({one}) => ({
	empresa: one(empresa, {
		fields: [ytbEmpresa.empCodigo],
		references: [empresa.empCodigo]
	}),
	ytb: one(ytb, {
		fields: [ytbEmpresa.ytbCodigo],
		references: [ytb.ytbCodigo]
	}),
}));

export const ytbRelations = relations(ytb, ({many}) => ({
	ytbEmpresas: many(ytbEmpresa),
}));

export const carregamentoProntaEntregaRelations = relations(carregamentoProntaEntrega, ({one}) => ({
	carregamento: one(carregamento, {
		fields: [carregamentoProntaEntrega.carCodigo],
		references: [carregamento.carCodigo]
	}),
	estoqueLocai: one(estoqueLocais, {
		fields: [carregamentoProntaEntrega.elcCodigo],
		references: [estoqueLocais.elcCodigo]
	}),
	produto: one(produto, {
		fields: [carregamentoProntaEntrega.proCodigo],
		references: [produto.proCodigo]
	}),
}));

export const spedf0190Relations = relations(spedf0190, ({one}) => ({
	spedf0000: one(spedf0000, {
		fields: [spedf0190.sf0000Codigo],
		references: [spedf0000.sf0000Codigo]
	}),
}));

export const mdfCiotRelations = relations(mdfCiot, ({one}) => ({
	mdfe: one(mdfe, {
		fields: [mdfCiot.mdfCodigo],
		references: [mdfe.mdfCodigo]
	}),
}));

export const retornoClassificacoesIntFiscalRelations = relations(retornoClassificacoesIntFiscal, ({one}) => ({
	classificacaoFiscal: one(classificacaoFiscal, {
		fields: [retornoClassificacoesIntFiscal.clCodigo],
		references: [classificacaoFiscal.clCodigo]
	}),
}));

export const seguroCteRelations = relations(seguroCte, ({one}) => ({
	cte: one(cte, {
		fields: [seguroCte.cteCodigo],
		references: [cte.cteCodigo]
	}),
	fornecedor: one(fornecedor, {
		fields: [seguroCte.forCodigo],
		references: [fornecedor.forCodigo]
	}),
}));

export const permissaoBiRelations = relations(permissaoBi, ({one}) => ({
	usuario: one(usuario, {
		fields: [permissaoBi.usuCodigo],
		references: [usuario.usuCodigo]
	}),
	visaoBi: one(visaoBi, {
		fields: [permissaoBi.viCodigo],
		references: [visaoBi.viCodigo]
	}),
}));