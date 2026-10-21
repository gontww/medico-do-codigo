const { test } = require("node:test");
const assert = require("node:assert/strict");
const { relatorioPorCategoria, relatorioPorVendedor, relatorioPorMes } = require("../src/relatorios");

const vendas = [
  { produto: "Notebook", categoria: "Info", vendedor: "Carla", mes: 1, preco: 3000, qtd: 1, status: "OK" },
  { produto: "Mouse", categoria: "Info", vendedor: "Davi", mes: 1, preco: 49.9, qtd: 2, status: "OK" },
  { produto: "Cadeira", categoria: "Moveis", vendedor: "Carla", mes: 2, preco: 800, qtd: 1, status: "OK" },
  { produto: "Mesa", categoria: "Moveis", vendedor: "Carla", mes: 2, preco: 1200, qtd: 1, status: "CANCELADA" },
];

test("por categoria", () => {
  assert.equal(relatorioPorCategoria(vendas, "Info"), "Notebook: R$ 3000,00\nMouse: R$ 99,80\nTOTAL: R$ 3099,80");
});

test("por vendedor ignora canceladas", () => {
  assert.equal(relatorioPorVendedor(vendas, "Carla"), "Notebook: R$ 3000,00\nCadeira: R$ 800,00\nTOTAL: R$ 3800,00");
});

test("por mes", () => {
  assert.equal(relatorioPorMes(vendas, 2), "Cadeira: R$ 800,00\nTOTAL: R$ 800,00");
});
