[Refatoração] Números mágicos nas regras de desconto
labels: refatoracao,numeros-magicos

## 🩺 Sintoma
Em `src/desconto.js`, as funções `calcularDesconto` e `maxParcelas` estão cheias de números sem explicação: `5000`, `10`, `0.2`, `3`, `0.1`, `300`, `0.05`, `100`, `12`, `6`... Quem chega no código não sabe o que é regra de negócio e o que é arbitrário, e mudar uma regra exige caçar o número em vários lugares.

## 💊 Tratamento sugerido
**Substituir números mágicos por constantes nomeadas** que expliquem a regra (ex.: `GASTO_MINIMO_VIP`, `TAXA_DESCONTO_VIP`).

**Arquivos:** `src/desconto.js` (e `src/cliente.js`, se fizer sentido) · **Testes:** `test/desconto.test.js`

---

### 🕵️ Desafio extra
Este arquivo tem **pelo menos mais um code smell** além do descrito acima. Encontrem, digam o nome dele no PR e corrijam também.

### ✅ Critérios de aceite
- [ ] `npm test` continua passando (comportamento externo intacto!)
- [ ] Commits pequenos, um passo de refatoração por commit
- [ ] PR aberto com `Closes #<número desta issue>` e o template preenchido
- [ ] Nenhuma feature nova misturada com a refatoração
