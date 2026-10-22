package loja;

import java.util.ArrayList;
import java.util.List;

// Relatorios de vendas usados pelo time comercial.
public class Relatorios {

    public String relatorioPorCategoria(List<RegistroVenda> vendas, String categoria, boolean incluirCanceladas) {
        List<String> linhas = new ArrayList<>();
        double total = 0;
        for (RegistroVenda v : vendas) {
            if (v.categoria().equals(categoria) && !v.status().equals("CANCELADA")) {
                double valor = v.preco() * v.qtd();
                total += valor;
                linhas.add(v.produto() + ": R$ " + String.format("%.2f", valor).replace(".", ","));
            }
        }
        linhas.add("TOTAL: R$ " + String.format("%.2f", total).replace(".", ","));
        return String.join("\n", linhas);
    }

    public String relatorioPorVendedor(List<RegistroVenda> vendas, String vendedor) {
        List<String> linhas = new ArrayList<>();
        double total = 0;
        for (RegistroVenda v : vendas) {
            if (v.vendedor().equals(vendedor) && !v.status().equals("CANCELADA")) {
                double valor = v.preco() * v.qtd();
                total += valor;
                linhas.add(v.produto() + ": R$ " + String.format("%.2f", valor).replace(".", ","));
            }
        }
        linhas.add("TOTAL: R$ " + String.format("%.2f", total).replace(".", ","));
        return String.join("\n", linhas);
    }

    public String relatorioPorMes(List<RegistroVenda> vendas, int mes) {
        List<String> linhas = new ArrayList<>();
        double total = 0;
        for (RegistroVenda v : vendas) {
            if (v.mes() == mes && !v.status().equals("CANCELADA")) {
                double valor = v.preco() * v.qtd();
                total += valor;
                linhas.add(v.produto() + ": R$ " + String.format("%.2f", valor).replace(".", ","));
            }
        }
        linhas.add("TOTAL: R$ " + String.format("%.2f", total).replace(".", ","));
        return String.join("\n", linhas);
    }

    // versao antiga, nao apagar
    // public String relatorioGeral(List<RegistroVenda> vendas) {
    //     double total = 0;
    //     for (RegistroVenda v : vendas) total += v.preco() * v.qtd();
    //     return "TOTAL GERAL: " + total;
    // }

    private double calcularComissao(List<RegistroVenda> vendas, String vendedor) {
        double total = 0;
        for (RegistroVenda v : vendas) {
            if (v.vendedor().equals(vendedor)) total += v.preco() * v.qtd();
        }
        return total * 0.03;
    }
}
