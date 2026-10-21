function calcularFrete(tipo, peso, distanciaKm) {
  let resultado;
  switch (tipo) {
    case "SEDEX": {
      const valorPeso = peso * 1.5;
      const valorDistancia = distanciaKm * 0.05;
      const taxaFixa = 10;
      resultado = valorPeso + valorDistancia + taxaFixa;
      break;
    }
    case "PAC": {
      const valorPeso = peso * 0.8;
      const valorDistancia = distanciaKm * 0.02;
      const taxaFixa = 5;
      resultado = valorPeso + valorDistancia + taxaFixa;
      break;
    }
    case "TRANSPORTADORA": {
      const valorPeso = peso * 2.0;
      resultado = valorPeso;
      break;
    }
    default:
      throw new Error("Tipo invalido");
  }
  const valorCalculado = resultado;
  const valorArredondado = Math.round(valorCalculado * 100) / 100;
  const retorno = valorArredondado;
  return retorno;
}

function prazoEntregaDias(tipo, distanciaKm) {
  let prazo;
  switch (tipo) {
    case "SEDEX":
      prazo = 1 + Math.ceil(distanciaKm / 1000);
      break;
    case "PAC":
      prazo = 5 + Math.ceil(distanciaKm / 500);
      break;
    case "TRANSPORTADORA":
      prazo = 3 + Math.ceil(distanciaKm / 800);
      break;
    default:
      throw new Error("Tipo invalido");
  }
  const prazoFinal = prazo;
  return prazoFinal;
}

function descricaoFrete(tipo) {
  switch (tipo) {
    case "SEDEX":
      return "Sedex (expresso)";
    case "PAC":
      return "PAC (economico)";
    case "TRANSPORTADORA":
      return "Transportadora (cargas pesadas)";
    default:
      throw new Error("Tipo invalido");
  }
}

module.exports = { calcularFrete, prazoEntregaDias, descricaoFrete };
