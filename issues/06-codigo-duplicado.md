[Refatoração] Código duplicado nos relatórios de vendas
labels: refatoracao,codigo-duplicado

## 🩺 Sintoma
Em `src/relatorios.js`, `relatorioPorCategoria`, `relatorioPorVendedor` e `relatorioPorMes` são praticamente cópias uma da outra: o loop, o filtro de canceladas, o cálculo de valor e a formatação de moeda. Só muda o critério de filtro. Um bug na formatação teria que ser corrigido em três lugares.

## 💊 Tratamento sugerido
**Extract Method + Extrair parâmetro**: criar uma função genérica que recebe o critério de filtro (ex.: uma função `(venda) => boolean`) e extrair a formatação de moeda para um helper. As três funções públicas viram uma linha cada.

**Arquivo:** `src/relatorios.js` · **Testes:** `test/relatorios.test.js`

---

### 🕵️ Desafio extra
Este arquivo tem **pelo menos mais um code smell** além do descrito acima. Encontrem, digam o nome dele no PR e corrijam também.

### ✅ Critérios de aceite
- [ ] `npm test` continua passando (comportamento externo intacto!)
- [ ] Commits pequenos, um passo de refatoração por commit
- [ ] PR aberto com `Closes #<número desta issue>` e o template preenchido
- [ ] Nenhuma feature nova misturada com a refatoração
