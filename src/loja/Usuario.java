package loja;

public class Usuario {
    private final String nome;
    private boolean ativo;
    private double limite;
    private boolean assinante;

    public Usuario(String nome, boolean ativo, double limite) {
        this.nome = nome;
        this.ativo = ativo;
        this.limite = limite;
    }

    public String getNome() { return nome; }
    public boolean isAtivo() { return ativo; }
    public double getLimite() { return limite; }
    public void setLimite(double limite) { this.limite = limite; }
    public boolean isAssinante() { return assinante; }
    public void setAssinante(boolean assinante) { this.assinante = assinante; }
}
