const { test } = require("node:test");
const assert = require("node:assert/strict");
const { Cliente } = require("../src/cliente");
const { calcularDesconto, maxParcelas } = require("../src/desconto");

const compras = (qtd, valor) => ({ compras: Array.from({ length: qtd }, () => ({ valor })) });

const vip = new Cliente("Vip", 1, compras(10, 600));
const antigo = new Cliente("Antigo", 5, compras(2, 100));
const novo = new Cliente("Novo", 0, compras(0, 0));

test("desconto VIP", () => assert.equal(calcularDesconto(vip, 1000), 200));
test("desconto cliente antigo", () => assert.equal(calcularDesconto(antigo, 1000), 100));
test("desconto compra grande", () => assert.equal(calcularDesconto(novo, 400), 20));
test("sem desconto", () => assert.equal(calcularDesconto(novo, 100), 0));

test("parcelas", () => {
  assert.equal(maxParcelas(vip, 50), 1);
  assert.equal(maxParcelas(vip, 1000), 12);
  assert.equal(maxParcelas(antigo, 1000), 6);
  assert.equal(maxParcelas(antigo, 250), 2);
  assert.equal(maxParcelas(novo, 1000), 2);
});
