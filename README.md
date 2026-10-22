# 🩺 O Médico do Código

Dinâmica prática da apresentação **Refatoração de Código**.

Este repositório é o "paciente": um pedaço de sistema de loja virtual que **funciona**, mas está cheio de code smells. Cada grupo vai pegar uma issue, diagnosticar e operar.

> "Um processo de alteração em um sistema de software para melhorar sua estrutura interna sem mudar seu comportamento externo." (Martin Fowler)

## 🎯 Quiz: Diagnóstico Relâmpago

Quiz rápido para identificar os smells, em grupo: **https://www.gont.com.br/quiz-medico-do-codigo/**

## Como participar

Não precisa instalar nada nem criar conta. Tudo roda no navegador.

1. **Peguem uma issue** na aba *Issues* e avisem o facilitador qual o grupo pegou, para ninguém repetir.
2. **Abram o projeto no StackBlitz** (veja abaixo).
3. **Rodem os testes antes de mexer em qualquer coisa** com `npm test`.
4. **Refatorem em passos pequenos**, rodando `npm test` a cada passo.
5. **Apresentem para a turma** direto da tela do StackBlitz.

## Editando pelo navegador com o StackBlitz

O StackBlitz é um VS Code que roda no navegador, com terminal e Node.js já prontos. **Não precisa de login.**

[![Abrir no StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/gontww/medico-do-codigo)

1. Cliquem no botão acima ou abram **https://stackblitz.com/github/gontww/medico-do-codigo**.
2. Esperem alguns segundos enquanto o projeto carrega.
3. Os arquivos ficam na barra lateral esquerda, em `src/`. Abram o arquivo da issue de vocês e editem normalmente.
4. No **terminal** na parte de baixo da tela, rodem:
   ```bash
   npm test
   ```
   Os testes devem continuar passando a cada passo da refatoração.

> ⚠️ **Não fechem nem recarreguem a aba.** Sem login, o trabalho fica só nela. Para guardar uma cópia, usem o menu do projeto e baixem em ZIP (**Download project**).

### Opcional: enviar como Pull Request

Quem quiser deixar a solução registrada pode fazer depois, com a própria conta do GitHub: fork, commit e Pull Request usando o template. O GitHub roda os testes sozinho e mostra ✅ ou ❌ no PR.

## Regras do jogo

- 🟢 Os testes são a rede de segurança: **eles devem continuar passando**. Se precisarem alterar um teste, justifiquem na apresentação.
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
