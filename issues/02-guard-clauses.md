[Refatoração] Aninhamento profundo em `processarPagamento`
labels: refatoracao,arrow-anti-pattern

## 🩺 Sintoma
A função `processarPagamento` em `src/pagamento.js` tem 5 níveis de `if` aninhados (arrow anti-pattern). O caminho feliz fica escondido no meio, e cada `else` está longe do `if` que ele trata.

## 💊 Tratamento sugerido
**Cláusulas de guarda**: inverter as condições e sair cedo (`throw`) para que o fluxo fique linear. Atenção: **a ordem das validações e as mensagens de erro não podem mudar**, porque os testes verificam isso.

**Arquivo:** `src/pagamento.js` · **Testes:** `test/pagamento.test.js`

---

### 🕵️ Desafio extra
Este arquivo tem **pelo menos mais um code smell** além do descrito acima. Encontrem, digam o nome dele no PR e corrijam também.

### ✅ Critérios de aceite
- [ ] `npm test` continua passando (comportamento externo intacto!)
- [ ] Commits pequenos, um passo de refatoração por commit
- [ ] PR aberto com `Closes #<número desta issue>` e o template preenchido
- [ ] Nenhuma feature nova misturada com a refatoração
