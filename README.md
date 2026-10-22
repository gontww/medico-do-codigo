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

## Editando pelo navegador (sem instalar nada)

O GitHub tem um VS Code que roda direto no navegador. Precisa só estar logado na sua conta do GitHub.

### Opção 1: github.dev (editar e commitar)

1. Na página deste repositório, aperte a tecla **`.`** (ponto). Também dá para trocar `github.com` por `github.dev` na barra de endereço.
2. O VS Code abre no navegador. Os arquivos ficam na barra lateral esquerda, em `src/`.
3. Editem o código normalmente.
4. Para salvar, abram a aba **Source Control** (ícone de ramificação na barra lateral ou `Ctrl+Shift+G`), escrevam a mensagem e cliquem em **Commit & Push**.
5. Como vocês não têm permissão de escrita aqui, o editor vai oferecer **criar um fork**. Aceitem: o commit vai para o fork de vocês.
6. Voltem ao fork no GitHub e cliquem em **Contribute → Open pull request**.

> ⚠️ O github.dev **não tem terminal**, então não dá para rodar `npm test` nele. Mas não tem problema: ao abrir o Pull Request, o GitHub roda os testes sozinho e mostra ✅ ou ❌ no PR. Se quiserem rodar antes, usem a opção 2.

### Opção 2: Codespaces (editor + terminal para rodar os testes)

1. Se ainda não têm um fork, cliquem em **Fork** no topo desta página. Depois, no fork de vocês, cliquem em **Code → Codespaces → Create codespace on main**.
2. Em ~1 minuto abre um VS Code completo no navegador, com terminal e Node.js já instalados.
3. No terminal (`Ctrl+'`), rodem:
   ```bash
   npm test
   ```
4. Commitem pela aba **Source Control**, igual à opção 1.

> Contas pessoais do GitHub têm horas gratuitas de Codespaces por mês, o que sobra para a dinâmica. Ao terminar, apaguem o codespace em [github.com/codespaces](https://github.com/codespaces).

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
