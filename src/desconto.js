function calcularDesconto(cliente, valorCompra) {
  let totalGasto = 0;
  for (const compra of cliente.historico.compras) {
    totalGasto += compra.valor;
  }
  const ehVip = totalGasto > 5000 && cliente.historico.compras.length >= 10;

  if (ehVip) {
    return valorCompra * 0.2;
  }
  if (cliente.anosDeCadastro > 3) {
    return valorCompra * 0.1;
  }
  if (valorCompra > 300) {
    return valorCompra * 0.05;
  }
  return 0;
}

function maxParcelas(cliente, valorCompra) {
  let totalGasto = 0;
  for (const compra of cliente.historico.compras) {
    totalGasto += compra.valor;
  }
  const ehVip = totalGasto > 5000 && cliente.historico.compras.length >= 10;

  if (valorCompra < 100) {
    return 1;
  }
  if (ehVip) {
    return 12;
  }
  if (totalGasto > 1000 || cliente.anosDeCadastro > 1) {
    return Math.min(6, Math.floor(valorCompra / 100));
  }
  return 2;
}

module.exports = { calcularDesconto, maxParcelas };
