package loja;

import java.util.ArrayList;
import java.util.List;

public class Fatura {

    // Gera o texto da fatura de um pedido.
    public String gerarFatura(Pedido p) {
        List<String> linhas = new ArrayList<>();
        double t = 0;
        double d = 0;

        linhas.add("===== FATURA =====");
        linhas.add("Cliente: " + p.nomeCliente());
        linhas.add("Documento: " + p.cpfCliente());
        linhas.add("------------------");

        // itens
        for (int i = 0; i < p.itens().size(); i++) {
            Item x = p.itens().get(i);
            double s = x.preco() * x.qtd();
            linhas.add(x.nome() + " x" + x.qtd() + " = R$ " + String.format("%.2f", s));
            t += s;
        }

        // cupom
        if (p.cupom() != null) {
            if (p.cupom().tipo().equals("PERCENTUAL")) {
                d = t * (p.cupom().valor() / 100);
            } else {
                d = p.cupom().valor();
            }
            if (d > t) {
                d = t;
            }
        }

        // rodape
        linhas.add("------------------");
        linhas.add("Subtotal: R$ " + String.format("%.2f", t));
        if (d > 0) {
            linhas.add("Desconto: R$ " + String.format("%.2f", d));
        }
        double tf = t - d;
        linhas.add("Total: R$ " + String.format("%.2f", tf));
        linhas.add("==================");

        return String.join("\n", linhas);
    }
}
