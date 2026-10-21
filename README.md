# 🩺 O Médico do Código

Dinâmica prática da apresentação **Refatoração de Código**.

Este repositório é o "paciente": um pedaço de sistema de loja virtual que **funciona**, mas está cheio de code smells. Cada grupo vai pegar uma issue, diagnosticar e operar.

> "Um processo de alteração em um sistema de software para melhorar sua estrutura interna sem mudar seu comportamento externo." (Martin Fowler)

## Como participar

1. **Escolham uma issue** na aba *Issues* e comentem `Grupo X pegou esta` para ninguém repetir.
2. **Façam um fork** (ou criem uma branch `grupo-x/issue-N`, se tiverem acesso).
3. **Rodem os testes antes de mexer em qualquer coisa:**
   ```bash
   npm test
   ```
   Precisa só de Node.js 18+. Não há dependências para instalar.
4. **Refatorem em passos pequenos**, rodando `npm test` e fazendo commit a cada passo verde.
5. **Abram um Pull Request** usando o template e apresentem para a turma.

## Regras do jogo

- 🟢 Os testes são a rede de segurança: **eles devem continuar passando**. Se precisarem alterar um teste, justifiquem no PR.
- 🕵️ Cada issue descreve **um** smell. Mas cada arquivo esconde **pelo menos mais um**, que não foi especificado. Encontrem!
- 🚫 Não misturem feature nova com refatoração.
- 🧹 Regra do escoteiro: deixem o código melhor do que encontraram.

## Estrutura

| Arquivo | Issue |
|---|---|
| `src/fatura.js` | Método longo |
| `src/pagamento.js` | Aninhamento profundo |
| `src/desconto.js` + `src/cliente.js` | Números mágicos |
| `src/frete.js` | Switch repetido |
| `src/LojaManager.js` | Classe Deus |
| `src/relatorios.js` | Código duplicado |
