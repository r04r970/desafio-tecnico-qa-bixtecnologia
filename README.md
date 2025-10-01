# Desafio de Automação de QA – Mini E-commerce

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)](https://nodejs.org/)
[![Playwright](https://img.shields.io/badge/Playwright-1.50.0-blue?logo=playwright)](https://playwright.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.1-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Testes E2E](https://img.shields.io/badge/Testes%20E2E-aprovados-brightgreen)](https://github.com/bixtecnologia/desafio-tecnico-qa)
[![Testes API](https://img.shields.io/badge/Testes%20API-aprovados-brightgreen)](https://github.com/bixtecnologia/desafio-tecnico-qa)

---

## Candidato: Rodrigo Barbosa

---

## 🎯 Objetivo

Automatizar testes para um **Mini E-commerce**, demonstrando:

* Fluxos completos de ponta a ponta (E2E)
* Validações de APIs
* Pipeline de testes sustentável e escalável

O projeto original está disponível em: [desafio-tecnico-qa-bixtecnologia](https://github.com/bixtecnologia/desafio-tecnico-qa)

---

## 🛠 Ferramentas e Tecnologias

* **Playwright** – automação E2E
* **TypeScript** – scripts de teste
* **Node.js** – ambiente de execução
* **MailSlurp** – testes de e-mail 2FA
* **Git/GitHub** – controle de versão
* **Loom** – gravação da execução dos testes

---

## 🔹 Funcionalidades Automatizadas

**Autenticação de Usuário**

* Login, logout e 2FA (verificação por e-mail)

**Gestão de Produtos e Carrinho**

* Listagem de produtos, adicionar/remover do carrinho
* Aplicar cupons e verificar cálculos de subtotal/total

**Checkout e Pedidos**

* Fluxo completo de finalização de pedido
* Confirmação de pedido e validação de e-mail

**Validações de API**

* Endpoints de usuário, produtos e pedidos
* Estrutura de resposta e códigos de status

---

## 📁 Estrutura do Projeto

```
desafio-tecnico-qa-bixtecnologia/
│
├─ tests/
│  ├─ e2e/          # Testes de ponta a ponta (UI)
│  ├─ api/          # Testes de API
│  └─ utils/        # Funções auxiliares
│
├─ pages/           # Page Object Model
├─ evidence/        # Capturas de tela e logs
├─ package.json
├─ tsconfig.json
└─ README.md
```

---

## 🚀 Como Executar

1. **Clonar o repositório**

```bash
git clone https://github.com/r04r970/desafio-tecnico-qa-bixtecnologia.git
cd desafio-tecnico-qa-bixtecnologia/playwright
```

2. **Instalar dependências**

```bash
npm install
```

3. **Executar testes E2E**

```bash
npx playwright test tests/e2e --headed --debug
```

4. **Executar testes de API**

```bash
npx playwright test tests/api --headed --debug
```

> Os testes E2E são executados primeiro, seguidos pelos testes de API.

---

## 📹 Evidências

O vídeo da execução dos testes foi gravado em inglês utilizando **Loom**:
[Assistir demonstração]([https://drive.google.com/drive/folders/1TfiNOnvAEAX_Roy4OTFGb87I01QAGIOH?usp=sharing](https://drive.google.com/drive/folders/1TfiNOnvAEAX_Roy4OTFGb87I01QAGIOH))

Capturas de tela e logs estão incluídos na pasta `evidence/`.

---

## ✅ Destaques

* Padrão Page Object Model para testes manuteníveis
* Testes de API e UI independentes para execução rápida em CI/CD
* Tratamento robusto de erros e validações
* Cobertura completa dos fluxos críticos

