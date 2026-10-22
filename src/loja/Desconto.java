package loja;

public class Desconto {

    public double calcularDesconto(Cliente cliente, double valorCompra) {
        double totalGasto = 0;
        for (Compra compra : cliente.getHistorico()) {
            totalGasto += compra.valor();
        }
        boolean ehVip = totalGasto > 5000 && cliente.getHistorico().size() >= 10;

        if (ehVip) {
            return valorCompra * 0.2;
        }
        if (cliente.getAnosDeCadastro() > 3) {
            return valorCompra * 0.1;
        }
        if (valorCompra > 300) {
            return valorCompra * 0.05;
        }
        return 0;
    }

    public int maxParcelas(Cliente cliente, double valorCompra) {
        double totalGasto = 0;
        for (Compra compra : cliente.getHistorico()) {
            totalGasto += compra.valor();
        }
        boolean ehVip = totalGasto > 5000 && cliente.getHistorico().size() >= 10;

        if (valorCompra < 100) {
            return 1;
        }
        if (ehVip) {
            return 12;
        }
        if (totalGasto > 1000 || cliente.getAnosDeCadastro() > 1) {
            return Math.min(6, (int) (valorCompra / 100));
        }
        return 2;
    }
}
