package loja;

public class Frete {

    public double calcularFrete(String tipo, double peso, double distanciaKm) {
        double resultado;
        switch (tipo) {
            case "SEDEX": {
                double valorPeso = peso * 1.5;
                double valorDistancia = distanciaKm * 0.05;
                double taxaFixa = 10;
                resultado = valorPeso + valorDistancia + taxaFixa;
                break;
            }
            case "PAC": {
                double valorPeso = peso * 0.8;
                double valorDistancia = distanciaKm * 0.02;
                double taxaFixa = 5;
                resultado = valorPeso + valorDistancia + taxaFixa;
                break;
            }
            case "TRANSPORTADORA": {
                double valorPeso = peso * 2.0;
                resultado = valorPeso;
                break;
            }
            default:
                throw new IllegalArgumentException("Tipo invalido");
        }
        double valorCalculado = resultado;
        double valorArredondado = Math.round(valorCalculado * 100) / 100.0;
        double retorno = valorArredondado;
        return retorno;
    }

    public int prazoEntregaDias(String tipo, double distanciaKm) {
        int prazo;
        switch (tipo) {
            case "SEDEX":
                prazo = 1 + (int) Math.ceil(distanciaKm / 1000);
                break;
            case "PAC":
                prazo = 5 + (int) Math.ceil(distanciaKm / 500);
                break;
            case "TRANSPORTADORA":
                prazo = 3 + (int) Math.ceil(distanciaKm / 800);
                break;
            default:
                throw new IllegalArgumentException("Tipo invalido");
        }
        int prazoFinal = prazo;
        return prazoFinal;
    }

    public String descricaoFrete(String tipo) {
        switch (tipo) {
            case "SEDEX":
                return "Sedex (expresso)";
            case "PAC":
                return "PAC (economico)";
            case "TRANSPORTADORA":
                return "Transportadora (cargas pesadas)";
            default:
                throw new IllegalArgumentException("Tipo invalido");
        }
    }
}
