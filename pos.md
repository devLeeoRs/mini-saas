# 🧩 Mobile POS — Estrutura de Código (React + Node)

## 🎯 Objetivo

Definir a estrutura de código para implementação do Mobile POS baseado nas telas desenhadas no Pencil.

---

# 📁 FRONTEND (React)

## 📦 Organização

```
/src
  /modules
    /pos
      /pages
        PosMobile
          index.tsx
      /components
        Header.tsx
        ClientBar.tsx
        ProductList.tsx
        ProductCard.tsx
        CodeInput.tsx
        SearchModal.tsx
        PaymentScreen.tsx
        PaymentSplit.tsx
        EditItemModal.tsx
      /hooks
        usePOS.ts
      /types
        pos.types.ts
      /services
        pos.service.ts
```

---

## 🧠 HOOK PRINCIPAL (usePOS)

Responsável por toda lógica:

* Controle do carrinho
* Adição de produtos
* Soma de quantidade
* Remoção
* Aplicação de desconto
* Controle de pagamento (split)

### Exemplo estrutura:

```ts
function usePOS() {
  const [items, setItems] = useState([])
  const [cliente, setCliente] = useState(null)
  const [payments, setPayments] = useState([])

  function addItem(product) {}
  function removeItem(codigo) {}
  function updateQuantity(codigo, qtd) {}
  function applyDiscount(codigo, value) {}

  function addPayment(payment) {}

  return {
    items,
    cliente,
    payments,
    addItem,
    removeItem,
    updateQuantity,
    applyDiscount,
    addPayment
  }
}
```

---

## 🧾 TIPAGENS

### Item

```ts
{
  codigo: string
  descricao: string
  quantidade: number
  precoUnitario: number
  precoTotal: number
  desconto?: number
}
```

### Venda

```ts
{
  cliente?: {
    cpf: string
  }
  items: Item[]
  total: number
  payments: Payment[]
}
```

### Payment

```ts
{
  tipo: 'pix' | 'debito' | 'credito' | 'crediario'
  valor: number
  nsu?: string
  parcelas?: number
}
```

---

## 🔗 SERVICES

Responsável por comunicação com backend:

```ts
getProductByCode(code)
searchProducts(description)
createSale(data)
```

---

# 🖥️ BACKEND (Node.js)

## 📦 Organização

```
/src
  /modules
    /pos
      pos.controller.ts
      pos.service.ts
      pos.routes.ts
      pos.repository.ts
      pos.types.ts
```

---

## 📌 ROTAS

### Produtos

```
GET /produtos/codigo/:codigo
GET /produtos/search?desc=
```

### Venda

```
POST /vendas
```

---

## 🧠 SERVICE

Responsável por:

* Validar itens
* Calcular total
* Validar pagamentos
* Salvar venda

---

## 💾 ESTRUTURA VENDA

```json
{
  "cliente": { "cpf": "00000000000" },
  "items": [],
  "total": 0,
  "payments": []
}
```

---

## ⚠️ VALIDAÇÕES BACKEND

* Venda deve ter pelo menos 1 item
* Total pagamentos = total venda
* NSU obrigatório (débito/crédito)
* Cliente obrigatório (crediário)

---

# 🔄 FLUXO COMPLETO

1. Front busca produto (código)
2. Adiciona no carrinho (usePOS)
3. Atualiza estado local
4. Usuário finaliza venda
5. Front envia para backend
6. Backend valida
7. Backend salva

---

# 🚀 BOAS PRÁTICAS

* Não salvar estado de venda no backend até finalizar
* Manter tudo no frontend até pagamento
* Evitar re-render pesado
* Usar memo nos itens

---

# ✅ RESULTADO

Estrutura pronta para:

* Alta performance
* Escalabilidade
* Fácil manutenção
* Implementação rápida baseada no design

---

## 🔥 PRÓXIMO PASSO

Implementar:

1. Hook `usePOS`
2. Tela `PosMobile`
3. Integração com API


## LAYOUT 

1. Utilize o MCP do pencil para buscar o layout correto das telas 
