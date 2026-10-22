package loja;

import java.util.List;

public class Pagamento {

    private static final List<String> METODOS = List.of("PIX", "CARTAO", "BOLETO");

    public ResultadoPagamento processarPagamento(Usuario usuario, double valor, String metodo) {
        if (usuario != null) {
            if (usuario.isAtivo()) {
                if (valor > 0) {
                    if (METODOS.contains(metodo)) {
                        if (usuario.getLimite() >= valor) {
                            usuario.setLimite(usuario.getLimite() - valor);
                            return new ResultadoPagamento("APROVADO", valor, metodo);
                        } else {
                            throw new IllegalStateException("Limite insuficiente");
                        }
                    } else {
                        throw new IllegalArgumentException("Metodo invalido");
                    }
                } else {
                    throw new IllegalArgumentException("Valor invalido");
                }
            } else {
                throw new IllegalStateException("Usuario inativo");
            }
        } else {
            throw new IllegalArgumentException("Usuario nao existe");
        }
    }

    public ResultadoPagamento processarEstorno(Usuario usuario, double valor, String metodo) {
        if (usuario == null) {
            throw new IllegalArgumentException("Usuario nao existe");
        }
        if (!usuario.isAtivo()) {
            throw new IllegalStateException("Usuario inativo");
        }
        if (valor <= 0) {
            throw new IllegalArgumentException("Valor invalido");
        }
        if (!METODOS.contains(metodo)) {
            throw new IllegalArgumentException("Metodo invalido");
        }
        usuario.setLimite(usuario.getLimite() + valor);
        return new ResultadoPagamento("ESTORNADO", valor, metodo);
    }

    public ResultadoPagamento processarAssinatura(Usuario usuario, double valorMensal, String metodo) {
        if (usuario == null) {
            throw new IllegalArgumentException("Usuario nao existe");
        }
        if (!usuario.isAtivo()) {
            throw new IllegalStateException("Usuario inativo");
        }
        if (valorMensal <= 0) {
            throw new IllegalArgumentException("Valor invalido");
        }
        if (!METODOS.contains(metodo)) {
            throw new IllegalArgumentException("Metodo invalido");
        }
        usuario.setAssinante(true);
        return new ResultadoPagamento("ASSINADO", valorMensal, metodo);
    }
}
