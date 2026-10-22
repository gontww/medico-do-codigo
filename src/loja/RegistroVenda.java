package loja;

public record RegistroVenda(String produto, String categoria, String vendedor, int mes,
                            double preco, int qtd, String status) {
}
