class Cliente {
  constructor(nome, anosDeCadastro, historico) {
    this.nome = nome;
    this.anosDeCadastro = anosDeCadastro;
    this.historico = historico; // { compras: [{ valor }] }
  }
}

module.exports = { Cliente };
