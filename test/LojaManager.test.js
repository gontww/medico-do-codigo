const { test } = require("node:test");
const assert = require("node:assert/strict");
const { LojaManager } = require("../src/LojaManager");

function lojaComDados() {
  const loja = new LojaManager();
  loja.cadastrarProduto("Caneca", 25, 10);
  loja.cadastrarCliente("Ana", "ana@email.com");
  return loja;
}

test("cadastro de cliente envia boas-vindas", () => {
  const loja = lojaComDados();
  assert.equal(loja.emailsEnviados[0].assunto, "Bem-vindo!");
  assert.throws(() => loja.cadastrarCliente("Bob", "email-invalido"), /Email invalido/);
});

test("criar pedido baixa estoque e confirma por email", () => {
  const loja = lojaComDados();
  const pedido = loja.criarPedido("ana@email.com", "Caneca", 3);
  assert.equal(pedido.total, 75);
  assert.equal(loja.buscarProduto("Caneca").estoque, 7);
  assert.equal(loja.emailsEnviados[1].assunto, "Pedido confirmado");
  assert.throws(() => loja.criarPedido("ana@email.com", "Caneca", 99), /Estoque insuficiente/);
});

test("relatorios", () => {
  const loja = lojaComDados();
  loja.criarPedido("ana@email.com", "Caneca", 2);
  assert.equal(loja.faturamentoTotal(), 50);
  assert.equal(loja.exportarPedidosCsv(), "cliente;produto;qtd;total\nana@email.com;Caneca;2;50.00");
});
