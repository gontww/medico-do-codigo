package loja;

import java.util.List;

public class Cliente {
    private final String nome;
    private final int anosDeCadastro;
    private final List<Compra> historico;

    public Cliente(String nome, int anosDeCadastro, List<Compra> historico) {
        this.nome = nome;
        this.anosDeCadastro = anosDeCadastro;
        this.historico = historico;
    }

    public String getNome() { return nome; }
    public int getAnosDeCadastro() { return anosDeCadastro; }
    public List<Compra> getHistorico() { return historico; }
}
