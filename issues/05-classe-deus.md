[Refatoração] `LojaManager` é uma Classe Deus
labels: refatoracao,classe-deus

## 🩺 Sintoma
A classe `LojaManager` em `src/LojaManager.js` cuida de produtos, estoque, clientes, validação de e-mail, pedidos, envio de e-mail e relatórios. Qualquer mudança em qualquer parte do sistema passa por ela.

## 💊 Tratamento sugerido
**Extrair classes** por responsabilidade (ex.: `CatalogoProdutos`, `CadastroClientes`, `ServicoPedidos`, `Notificador`, `Relatorios`). `LojaManager` pode continuar existindo como fachada fina que delega, para não quebrar quem já usa a API.

**Arquivo:** `src/LojaManager.js` (podem criar novos arquivos) · **Testes:** `test/LojaManager.test.js`

---

### 🕵️ Desafio extra
Este arquivo tem **pelo menos mais um code smell** além do descrito acima. Encontrem, digam o nome dele no PR e corrijam também.

### ✅ Critérios de aceite
- [ ] `npm test` continua passando (comportamento externo intacto!)
- [ ] Commits pequenos, um passo de refatoração por commit
- [ ] PR aberto com `Closes #<número desta issue>` e o template preenchido
- [ ] Nenhuma feature nova misturada com a refatoração
