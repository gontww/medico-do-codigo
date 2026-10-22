package loja;

import java.util.List;

public record Pedido(String nomeCliente, String cpfCliente, List<Item> itens, Cupom cupom) {
}
