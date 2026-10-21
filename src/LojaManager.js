class LojaManager {
  constructor() {
    this.produtos = [];
    this.clientes = [];
    this.pedidos = [];
    this.emailsEnviados = [];
  }

  // ---------- produtos ----------
  cadastrarProduto(nome, preco, estoque) {
    if (!nome || preco <= 0 || estoque < 0) {
      throw new Error("Produto invalido");
    }
    this.produtos.push({ nome, preco, estoque });
  }

  buscarProduto(nome) {
    return this.produtos.find((p) => p.nome === nome);
  }

  repor(nome, qtd) {
    const produto = this.buscarProduto(nome);
    produto.estoque += qtd;
  }

  // ---------- clientes ----------
  cadastrarCliente(nome, email) {
    if (!this.validarEmail(email)) {
      throw new Error("Email invalido");
    }
    this.clientes.push({ nome, email });
    this.enviarEmail(email, "Bem-vindo!", "Ola " + nome + ", obrigado pelo cadastro.");
  }

  buscarCliente(email) {
    return this.clientes.find((c) => c.email === email);
  }

  validarEmail(email) {
    return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
  }

  // ---------- pedidos ----------
  criarPedido(emailCliente, nomeProduto, qtd) {
    const cliente = this.buscarCliente(emailCliente);
    if (!cliente) throw new Error("Cliente nao encontrado");
    const produto = this.buscarProduto(nomeProduto);
    if (!produto) throw new Error("Produto nao encontrado");
    if (produto.estoque < qtd) throw new Error("Estoque insuficiente");

    produto.estoque -= qtd;
    const pedido = {
      id: Date.now(),
      data: new Date().toISOString().slice(0, 10),
      cliente: cliente.email,
      produto: produto.nome,
      qtd,
      total: produto.preco * qtd,
    };
    this.pedidos.push(pedido);

    this.enviarEmail(
      cliente.email,
      "Pedido confirmado",
      "Seu pedido de " + qtd + "x " + produto.nome + " foi confirmado em " + pedido.data + "."
    );
    return pedido;
  }

  // ---------- notificacoes ----------
  enviarEmail(para, assunto, corpo) {
    // TODO: integrar com servidor SMTP de verdade
    console.log("[EMAIL] para=" + para + " assunto=" + assunto);
    this.emailsEnviados.push({ para, assunto, corpo });
  }

  // ---------- relatorios ----------
  faturamentoTotal() {
    return this.pedidos.reduce((acc, p) => acc + p.total, 0);
  }

  exportarPedidosCsv() {
    const linhas = ["cliente;produto;qtd;total"];
    for (const p of this.pedidos) {
      linhas.push([p.cliente, p.produto, p.qtd, p.total.toFixed(2)].join(";"));
    }
    return linhas.join("\n");
  }
}

module.exports = { LojaManager };
