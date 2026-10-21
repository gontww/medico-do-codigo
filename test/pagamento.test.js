const { test } = require("node:test");
const assert = require("node:assert/strict");
const { processarPagamento, processarEstorno, processarAssinatura } = require("../src/pagamento");

const novoUsuario = () => ({ ativo: true, limite: 500 });

test("pagamento aprovado desconta o limite", () => {
  const u = novoUsuario();
  assert.deepEqual(processarPagamento(u, 200, "PIX"), { status: "APROVADO", valor: 200, metodo: "PIX" });
  assert.equal(u.limite, 300);
});

test("pagamento valida entradas na ordem certa", () => {
  assert.throws(() => processarPagamento(null, 10, "PIX"), /Usuario nao existe/);
  assert.throws(() => processarPagamento({ ativo: false, limite: 500 }, 10, "PIX"), /Usuario inativo/);
  assert.throws(() => processarPagamento(novoUsuario(), 0, "PIX"), /Valor invalido/);
  assert.throws(() => processarPagamento(novoUsuario(), 10, "CHEQUE"), /Metodo invalido/);
  assert.throws(() => processarPagamento(novoUsuario(), 999, "PIX"), /Limite insuficiente/);
});

test("estorno devolve o limite", () => {
  const u = novoUsuario();
  assert.equal(processarEstorno(u, 100, "CARTAO").status, "ESTORNADO");
  assert.equal(u.limite, 600);
  assert.throws(() => processarEstorno(u, -1, "CARTAO"), /Valor invalido/);
});

test("assinatura marca o usuario como assinante", () => {
  const u = novoUsuario();
  assert.equal(processarAssinatura(u, 30, "BOLETO").status, "ASSINADO");
  assert.equal(u.assinante, true);
  assert.throws(() => processarAssinatura({ ativo: false }, 30, "BOLETO"), /Usuario inativo/);
});
