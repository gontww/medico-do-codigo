const METODOS = ["PIX", "CARTAO", "BOLETO"];

function processarPagamento(usuario, valor, metodo) {
  if (usuario) {
    if (usuario.ativo) {
      if (valor > 0) {
        if (METODOS.includes(metodo)) {
          if (usuario.limite >= valor) {
            usuario.limite = usuario.limite - valor;
            return { status: "APROVADO", valor: valor, metodo: metodo };
          } else {
            throw new Error("Limite insuficiente");
          }
        } else {
          throw new Error("Metodo invalido");
        }
      } else {
        throw new Error("Valor invalido");
      }
    } else {
      throw new Error("Usuario inativo");
    }
  } else {
    throw new Error("Usuario nao existe");
  }
}

function processarEstorno(usuario, valor, metodo) {
  if (!usuario) {
    throw new Error("Usuario nao existe");
  }
  if (!usuario.ativo) {
    throw new Error("Usuario inativo");
  }
  if (valor <= 0) {
    throw new Error("Valor invalido");
  }
  if (!METODOS.includes(metodo)) {
    throw new Error("Metodo invalido");
  }
  usuario.limite = usuario.limite + valor;
  return { status: "ESTORNADO", valor: valor, metodo: metodo };
}

function processarAssinatura(usuario, valorMensal, metodo) {
  if (!usuario) {
    throw new Error("Usuario nao existe");
  }
  if (!usuario.ativo) {
    throw new Error("Usuario inativo");
  }
  if (valorMensal <= 0) {
    throw new Error("Valor invalido");
  }
  if (!METODOS.includes(metodo)) {
    throw new Error("Metodo invalido");
  }
  usuario.assinante = true;
  return { status: "ASSINADO", valor: valorMensal, metodo: metodo };
}

module.exports = { processarPagamento, processarEstorno, processarAssinatura };
