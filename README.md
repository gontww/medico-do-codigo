# 🩺 O Médico do Código

Dinâmica prática da apresentação **Refatoração de Código**.

Este repositório é o "paciente": um pedaço de sistema de loja virtual que **funciona**, mas está cheio de code smells. Cada grupo vai pegar uma issue, diagnosticar e operar.

> "Um processo de alteração em um sistema de software para melhorar sua estrutura interna sem mudar seu comportamento externo." (Martin Fowler)

## 🎯 Quiz: Diagnóstico Relâmpago

Quiz rápido para identificar os smells, em grupo: **https://www.gont.com.br/quiz-medico-do-codigo/**

## Como participar

Não precisa instalar nada nem criar conta.

1. **Peguem uma issue** na aba *Issues* e avisem o facilitador qual o grupo pegou, para ninguém repetir.
2. **Abram o arquivo da issue** na pasta [`src/loja`](src/loja) aqui no GitHub e leiam o código com calma.
3. **Diagnostiquem:** quais smells vocês encontram? Qual técnica de refatoração resolve cada um?
4. **Refatorem** o trecho, no papel, no editor ou na IDE que preferirem.
5. **Apresentem para a turma** o antes e o depois.

### Abrindo no computador (opcional)

Usem **Code → Download ZIP** nesta página e abram a pasta no IntelliJ, Eclipse ou VS Code. O código é Java 17 puro, sem dependências. Para compilar pelo terminal:

```bash
javac -d out src/loja/*.java
```

## Regras do jogo

- 🕵️ Cada issue descreve **um** smell. Mas cada arquivo esconde **pelo menos mais um**, que não foi especificado. Encontrem!
- 🔒 Refatorar não muda o comportamento: o código deve continuar fazendo exatamente a mesma coisa.
- 🚫 Não misturem feature nova com refatoração.
- 🧹 Regra do escoteiro: deixem o código melhor do que encontraram.

## Estrutura

| Arquivo | Issue |
|---|---|
| `src/loja/Fatura.java` | Método longo |
| `src/loja/Pagamento.java` | Aninhamento profundo |
| `src/loja/Desconto.java` + `src/loja/Cliente.java` | Números mágicos |
| `src/loja/Frete.java` | Switch repetido |
| `src/loja/LojaManager.java` | Classe Deus |
| `src/loja/Relatorios.java` | Código duplicado |

As demais classes (`Pedido`, `Item`, `Cupom`, `Usuario`, `Compra`, `RegistroVenda`...) são só os dados usados pelos arquivos acima.
