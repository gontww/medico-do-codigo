[Refatoração] `switch` por tipo de frete repetido em 3 funções
labels: refatoracao,switch-statements

## 🩺 Sintoma
Em `src/frete.js`, as funções `calcularFrete`, `prazoEntregaDias` e `descricaoFrete` fazem o mesmo `switch (tipo)`. Para adicionar um novo tipo de frete (ex.: `MOTOBOY`) é preciso alterar as três, o que viola o Open/Closed Principle.

## 💊 Tratamento sugerido
**Substituir condicional por polimorfismo / Strategy**: cada tipo de frete vira uma estratégia (objeto ou classe) com `valor`, `prazo` e `descricao`. As funções públicas só procuram a estratégia e delegam.

> Bônus: depois de refatorar, adicionar o `MOTOBOY` deve exigir mexer em **um** lugar só. (Façam isso em um commit separado!)

**Arquivo:** `src/frete.js` · **Testes:** `test/frete.test.js`

---

### 🕵️ Desafio extra
Este arquivo tem **pelo menos mais um code smell** além do descrito acima. Encontrem, digam o nome dele no PR e corrijam também.

### ✅ Critérios de aceite
- [ ] `npm test` continua passando (comportamento externo intacto!)
- [ ] Commits pequenos, um passo de refatoração por commit
- [ ] PR aberto com `Closes #<número desta issue>` e o template preenchido
- [ ] Nenhuma feature nova misturada com a refatoração
