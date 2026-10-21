// Relatorios de vendas usados pelo time comercial.

function relatorioPorCategoria(vendas, categoria, incluirCanceladas) {
  const linhas = [];
  let total = 0;
  for (const v of vendas) {
    if (v.categoria === categoria && v.status !== "CANCELADA") {
      const valor = v.preco * v.qtd;
      total += valor;
      linhas.push(v.produto + ": R$ " + valor.toFixed(2).replace(".", ","));
    }
  }
  linhas.push("TOTAL: R$ " + total.toFixed(2).replace(".", ","));
  return linhas.join("\n");
}

function relatorioPorVendedor(vendas, vendedor) {
  const linhas = [];
  let total = 0;
  for (const v of vendas) {
    if (v.vendedor === vendedor && v.status !== "CANCELADA") {
      const valor = v.preco * v.qtd;
      total += valor;
      linhas.push(v.produto + ": R$ " + valor.toFixed(2).replace(".", ","));
    }
  }
  linhas.push("TOTAL: R$ " + total.toFixed(2).replace(".", ","));
  return linhas.join("\n");
}

function relatorioPorMes(vendas, mes) {
  const linhas = [];
  let total = 0;
  for (const v of vendas) {
    if (v.mes === mes && v.status !== "CANCELADA") {
      const valor = v.preco * v.qtd;
      total += valor;
      linhas.push(v.produto + ": R$ " + valor.toFixed(2).replace(".", ","));
    }
  }
  linhas.push("TOTAL: R$ " + total.toFixed(2).replace(".", ","));
  return linhas.join("\n");
}

// versao antiga, nao apagar
// function relatorioGeral(vendas) {
//   let total = 0;
//   for (const v of vendas) total += v.preco * v.qtd;
//   return "TOTAL GERAL: " + total;
// }

function calcularComissao(vendas, vendedor) {
  let total = 0;
  for (const v of vendas) {
    if (v.vendedor === vendedor) total += v.preco * v.qtd;
  }
  return total * 0.03;
}

module.exports = { relatorioPorCategoria, relatorioPorVendedor, relatorioPorMes };
