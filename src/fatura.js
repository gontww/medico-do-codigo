// Gera o texto da fatura de um pedido.
function gerarFatura(p) {
  let linhas = [];
  let t = 0;
  let d = 0;

  linhas.push("===== FATURA =====");
  linhas.push("Cliente: " + p.cliente.nome);
  linhas.push("Documento: " + p.cliente.cpf);
  linhas.push("------------------");

  // itens
  for (let i = 0; i < p.itens.length; i++) {
    let x = p.itens[i];
    let s = x.preco * x.qtd;
    linhas.push(x.nome + " x" + x.qtd + " = R$ " + s.toFixed(2));
    t += s;
  }

  // cupom
  if (p.cupom) {
    if (p.cupom.tipo === "PERCENTUAL") {
      d = t * (p.cupom.valor / 100);
    } else {
      d = p.cupom.valor;
    }
    if (d > t) {
      d = t;
    }
  }

  // rodape
  linhas.push("------------------");
  linhas.push("Subtotal: R$ " + t.toFixed(2));
  if (d > 0) {
    linhas.push("Desconto: R$ " + d.toFixed(2));
  }
  let tf = t - d;
  linhas.push("Total: R$ " + tf.toFixed(2));
  linhas.push("==================");

  return linhas.join("\n");
}

module.exports = { gerarFatura };
