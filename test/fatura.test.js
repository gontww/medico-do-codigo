const { test } = require("node:test");
const assert = require("node:assert/strict");
const { gerarFatura } = require("../src/fatura");

const pedido = {
  cliente: { nome: "Ana", cpf: "123.456.789-00" },
  itens: [
    { nome: "Teclado", preco: 150, qtd: 2 },
    { nome: "Mouse", preco: 80, qtd: 1 },
  ],
};

test("fatura sem cupom", () => {
  assert.equal(
    gerarFatura(pedido),
    [
      "===== FATURA =====",
      "Cliente: Ana",
      "Documento: 123.456.789-00",
      "------------------",
      "Teclado x2 = R$ 300.00",
      "Mouse x1 = R$ 80.00",
      "------------------",
      "Subtotal: R$ 380.00",
      "Total: R$ 380.00",
      "==================",
    ].join("\n")
  );
});

test("fatura com cupom percentual", () => {
  const texto = gerarFatura({ ...pedido, cupom: { tipo: "PERCENTUAL", valor: 10 } });
  assert.match(texto, /Desconto: R\$ 38\.00/);
  assert.match(texto, /Total: R\$ 342\.00/);
});

test("fatura com cupom fixo maior que o subtotal zera o total", () => {
  const texto = gerarFatura({ ...pedido, cupom: { tipo: "FIXO", valor: 1000 } });
  assert.match(texto, /Desconto: R\$ 380\.00/);
  assert.match(texto, /Total: R\$ 0\.00/);
});
