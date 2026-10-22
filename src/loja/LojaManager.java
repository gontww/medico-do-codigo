package loja;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class LojaManager {

    static class Produto {
        String nome;
        double preco;
        int estoque;

        Produto(String nome, double preco, int estoque) {
            this.nome = nome;
            this.preco = preco;
            this.estoque = estoque;
        }
    }

    static class Contato {
        String nome;
        String email;

        Contato(String nome, String email) {
            this.nome = nome;
            this.email = email;
        }
    }

    static class Venda {
        long id;
        LocalDate data;
        String emailCliente;
        String produto;
        int qtd;
        double total;
    }

    private final List<Produto> produtos = new ArrayList<>();
    private final List<Contato> clientes = new ArrayList<>();
    private final List<Venda> pedidos = new ArrayList<>();
    private final List<String> emailsEnviados = new ArrayList<>();

    // ---------- produtos ----------
    public void cadastrarProduto(String nome, double preco, int estoque) {
        if (nome == null || nome.isBlank() || preco <= 0 || estoque < 0) {
            throw new IllegalArgumentException("Produto invalido");
        }
        produtos.add(new Produto(nome, preco, estoque));
    }

    public Produto buscarProduto(String nome) {
        for (Produto p : produtos) {
            if (p.nome.equals(nome)) {
                return p;
            }
        }
        return null;
    }

    public void repor(String nome, int qtd) {
        Produto produto = buscarProduto(nome);
        produto.estoque += qtd;
    }

    // ---------- clientes ----------
    public void cadastrarCliente(String nome, String email) {
        if (!validarEmail(email)) {
            throw new IllegalArgumentException("Email invalido");
        }
        clientes.add(new Contato(nome, email));
        enviarEmail(email, "Bem-vindo!", "Ola " + nome + ", obrigado pelo cadastro.");
    }

    public Contato buscarCliente(String email) {
        for (Contato c : clientes) {
            if (c.email.equals(email)) {
                return c;
            }
        }
        return null;
    }

    public boolean validarEmail(String email) {
        return email != null && email.matches("^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$");
    }

    // ---------- pedidos ----------
    public Venda criarPedido(String emailCliente, String nomeProduto, int qtd) {
        Contato cliente = buscarCliente(emailCliente);
        if (cliente == null) throw new IllegalArgumentException("Cliente nao encontrado");
        Produto produto = buscarProduto(nomeProduto);
        if (produto == null) throw new IllegalArgumentException("Produto nao encontrado");
        if (produto.estoque < qtd) throw new IllegalStateException("Estoque insuficiente");

        produto.estoque -= qtd;
        Venda pedido = new Venda();
        pedido.id = System.currentTimeMillis();
        pedido.data = LocalDate.now();
        pedido.emailCliente = cliente.email;
        pedido.produto = produto.nome;
        pedido.qtd = qtd;
        pedido.total = produto.preco * qtd;
        pedidos.add(pedido);

        enviarEmail(cliente.email, "Pedido confirmado",
                "Seu pedido de " + qtd + "x " + produto.nome + " foi confirmado em " + pedido.data + ".");
        return pedido;
    }

    // ---------- notificacoes ----------
    public void enviarEmail(String para, String assunto, String corpo) {
        // TODO: integrar com servidor SMTP de verdade
        System.out.println("[EMAIL] para=" + para + " assunto=" + assunto);
        emailsEnviados.add(para + "|" + assunto + "|" + corpo);
    }

    // ---------- relatorios ----------
    public double faturamentoTotal() {
        double total = 0;
        for (Venda p : pedidos) {
            total += p.total;
        }
        return total;
    }

    public String exportarPedidosCsv() {
        StringBuilder csv = new StringBuilder("cliente;produto;qtd;total");
        for (Venda p : pedidos) {
            csv.append("\n")
               .append(p.emailCliente).append(";")
               .append(p.produto).append(";")
               .append(p.qtd).append(";")
               .append(String.format("%.2f", p.total));
        }
        return csv.toString();
    }
}
