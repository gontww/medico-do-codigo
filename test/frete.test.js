const { test } = require("node:test");
const assert = require("node:assert/strict");
const { calcularFrete, prazoEntregaDias, descricaoFrete } = require("../src/frete");

test("valor do frete", () => {
  assert.equal(calcularFrete("SEDEX", 2, 100), 18);
  assert.equal(calcularFrete("PAC", 2, 100), 8.6);
  assert.equal(calcularFrete("TRANSPORTADORA", 10, 100), 20);
  assert.throws(() => calcularFrete("DRONE", 1, 1), /Tipo invalido/);
});

test("prazo de entrega", () => {
  assert.equal(prazoEntregaDias("SEDEX", 1500), 3);
  assert.equal(prazoEntregaDias("PAC", 1500), 8);
  assert.equal(prazoEntregaDias("TRANSPORTADORA", 1500), 5);
  assert.throws(() => prazoEntregaDias("DRONE", 1), /Tipo invalido/);
});

test("descricao", () => {
  assert.equal(descricaoFrete("PAC"), "PAC (economico)");
  assert.throws(() => descricaoFrete("DRONE"), /Tipo invalido/);
});
