[Refatoração] Método longo em `gerarFatura`
labels: refatoracao,metodo-longo

## 🩺 Sintoma
O arquivo `src/fatura.js` tem a função `gerarFatura`, que faz tudo sozinha: monta o cabeçalho, lista os itens, calcula o subtotal, aplica o cupom e monta o rodapé. Os comentários `// itens`, `// cupom` e `// rodape` indicam que existem vários métodos escondidos lá dentro.

## 💊 Tratamento sugerido
**Extract Method**: quebrar `gerarFatura` em funções pequenas e coesas (ex.: `montarCabecalho`, `calcularSubtotal`, `calcularDesconto`, `montarRodape`). Ao final, `gerarFatura` deve ler como um índice.

**Arquivo:** `src/fatura.js` · **Testes:** `test/fatura.test.js`

---

### 🕵️ Desafio extra
Este arquivo tem **pelo menos mais um code smell** além do descrito acima. Encontrem, digam o nome dele no PR e corrijam também.

### ✅ Critérios de aceite
- [ ] `npm test` continua passando (comportamento externo intacto!)
- [ ] Commits pequenos, um passo de refatoração por commit
- [ ] PR aberto com `Closes #<número desta issue>` e o template preenchido
- [ ] Nenhuma feature nova misturada com a refatoração
