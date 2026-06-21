![GitHub repo size](https://img.shields.io/github/repo-size/Domisnnet/Financial-Educator-React?style=for-the-badge)![GitHub stars](https://img.shields.io/github/stars/Domisnnet/Financial-Educator-React?style=for-the-badge)![GitHub last commit](https://img.shields.io/github/last-commit/Domisnnet/Financial-Educator-React?style=for-the-badge)

<h2 id="sobre-o-projeto">1. Financial Educator - Plataforma Inteligente de Educação Financeira 💰📈</h2>

![Status do Deploy](https://img.shields.io/badge/Status-Em%20Desenvolvimento-brightgreen?style=flat-square)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black)
[![Licença MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://github.com/Domisnnet/Financial-Educator-React/blob/main/LICENSE)
![Plataforma](src/assets/images/financial.png)

O **Financial Educator** é uma plataforma moderna desenvolvida para auxiliar usuários no gerenciamento financeiro pessoal, oferecendo uma experiência intuitiva para acompanhamento de receitas, despesas, investimentos, patrimônio e evolução financeira.

Construída com **React 19**, arquitetura baseada em componentes reutilizáveis e integrada ao ecossistema **Firebase**, a aplicação foi projetada para oferecer desempenho, escalabilidade e uma experiência fluida em dispositivos Desktop, Tablet e Mobile.

---

## 📚 Tabela de Conteúdo

| 💻 O Projeto | 🛠️ Técnico | 🤝 Comunidade |
| :---: | :---: | :---: |
| [![1. Sobre](https://img.shields.io/badge/1%20-%20Sobre-4CAF50)](#sobre-o-projeto) | [![5. Destaques](https://img.shields.io/badge/5%20-%20Destaques-607D8B)](#destaques-tecnicos) | [![9. Código](https://img.shields.io/badge/9%20-%20Código-795548)](#codigo-fonte) |
| [![2. Techs](https://img.shields.io/badge/2%20-%20Techs-2196F3)](#tecnologias-utilizadas) | [![6. Deploy](https://img.shields.io/badge/6%20-%20Deploy-009688)](#fluxo-de-deploy) | [![10. Créditos](https://img.shields.io/badge/10%20-%20Créditos-607D8B)](#créditos) |
| [![3. Instalação](https://img.shields.io/badge/3%20-%20Instalação-FF9800)](#como-executar) | [![7. Contribuir](https://img.shields.io/badge/7%20-%20Contribuir-3F51B5)](#como-contribuir) | [![11. Licença](https://img.shields.io/badge/11%20-%20Licença-E91E63)](#licenca) |
| [![4. Recursos](https://img.shields.io/badge/4%20-%20Funcionalidades-9C27B0)](#funcionalidades) | [![8. FAQ](https://img.shields.io/badge/8%20-%20FAQ-FFC107)](#faq) | [![12. Autor](https://img.shields.io/badge/12%20-%20Perfil-212121)](#perfil-do-github) |

---

<h2 id="tecnologias-utilizadas">2. ⚙️ Tecnologias Utilizadas</h2>

| Camada | Tecnologias | Descrição |
| :--- | :--- | :--- |
| **Core** | ![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white) | Framework SPA moderno baseado em componentes funcionais. |
| **Linguagem** | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) | Código totalmente tipado para segurança e produtividade. |
| **Build Tool** | ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white) | Ambiente rápido de desenvolvimento e build otimizado. |
| **Backend/Host** | ![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black) | Authentication, Firestore, Storage e Hosting. |
| **CI/CD** | ![Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat-square&logo=github-actions&logoColor=white) | Automação de builds e deploys contínuos. |

---

<h2 id="como-executar">3. 🚀 Como Executar</h2>

### Pré-requisitos

- Node.js 20+
- npm ou yarn
- Git
- Firebase CLI (opcional para deploy)

### Clonando e Instalando

```bash
git clone https://github.com/Domisnnet/Financial-Educator-React.git
cd Financial-Educator-React
npm install
```

### Executando em Desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em: `http://localhost:5173`

### Build de Produção

```bash
npm run build
npm run preview
```

---

<h2 id="funcionalidades">4. 🧩 Funcionalidades Principais</h2>

| Funcionalidade | Descrição |
| :--- | :--- |
| 💰 **Controle Financeiro** | Cadastro de receitas e despesas com categorização. |
| 📊 **Dashboard** | Visualização resumida da situação financeira. |
| 📈 **Investimentos** | Controle de carteira de investimentos. |
| 🏦 **Patrimônio** | Acompanhamento da evolução patrimonial. |
| 📅 **Histórico** | Registro completo das movimentações. |
| 🔐 **Login Seguro** | Autenticação com Firebase Authentication. |
| ☁️ **Sincronização** | Dados na nuvem via Cloud Firestore. |
| 📱 **Responsividade** | Layout adaptativo Desktop/Tablet/Mobile. |

---

<h2 id="destaques-tecnicos">5. 💻 Destaques Técnicos</h2>

### ✔️ Arquitetura Baseada em Componentes

Cada funcionalidade está isolada em componentes independentes, permitindo reutilização, baixo acoplamento e maior organização.

### ✔️ Organização por Responsabilidade

```text
components/  pages/  hooks/  contexts/  services/  firebase/  utils/  assets/
```

Cada diretório possui responsabilidade específica, facilitando manutenção.

### ✔️ Tipagem com TypeScript

Todo o código utiliza TypeScript proporcionando:

- Maior segurança durante o desenvolvimento
- Melhor suporte da IDE
- Prevenção de erros em tempo de compilação
- Documentação implícita através de interfaces

### ✔️ Firebase Cloud

Infraestrutura totalmente em nuvem com:

- Authentication
- Cloud Firestore
- Storage
- Hosting

---

<h2 id="fluxo-de-deploy">6. 📦 Fluxo de Deploy</h2>

O deploy utiliza Firebase Hosting integrado ao GitHub.

```bash
npm run build
firebase login
firebase init hosting
firebase deploy
```

Após o deploy, a aplicação estará disponível na URL fornecida pelo Firebase Hosting.

---

<h2 id="como-contribuir">7. 🤝 Como Contribuir</h2>

Siga os passos abaixo para fortalecer este projeto:

| Fase | Ação | Link / Comando |
| :---: | :--- | :--- |
| **01** | **Fork** | [![Fork](https://img.shields.io/badge/-Fazer%20Fork-blue?style=flat-square&logo=github)](https://github.com/Domisnnet/Financial-Educator-React/fork) |
| **02** | **Branch** | `git checkout -b feature/nova-funcionalidade` |
| **03** | **Commit** | `git commit -m 'feat: add nova funcionalidade'` |
| **04** | **Push** | `git push origin feature/nova-funcionalidade` |
| **05** | **PR** | [![Abrir PR](https://img.shields.io/badge/-Abrir%20PR-green?style=flat-square&logo=git)](https://github.com/Domisnnet/Financial-Educator-React/compare) |

### 🐛 Encontrou um problema?

[![Issues Abertas](https://img.shields.io/github/issues/Domisnnet/Financial-Educator-React?style=flat-square&color=red&logo=github)](https://github.com/Domisnnet/Financial-Educator-React/issues)
[![Report Bug](https://img.shields.io/badge/Reportar-Erro-critical?style=flat-square&logo=github)](https://github.com/Domisnnet/Financial-Educator-React/issues/new)

---

<h2 id="faq">8. 🧠 Perguntas Frequentes</h2>

<details>
<summary><strong>O projeto é gratuito? ❓</strong></summary>
<p>✅ <strong>Resposta:</strong> Sim. O projeto é open source sob licença MIT.</p>
</details>

<details>
<summary><strong>Posso utilizar como base para estudos? ❓</strong></summary>
<p>✅ <strong>Resposta:</strong> Sim. O objetivo é servir como referência para desenvolvimento Front-end com React e Firebase.Só não se esqueça de dar os devidos Créditos</p>
</details>

<details>
<summary><strong>Existe versão Mobile? ❓</strong></summary>
<p>✅ <strong>Resposta:</strong> Sim. A aplicação possui layout responsivo para Desktop, Tablet e Mobile.</p>
</details>

<details>
<summary><strong>O projeto utiliza Backend próprio? ❓</strong></summary>
<p>❌ <strong>Resposta:</strong> Não. Toda infraestrutura baseia-se no Firebase.</p>
</details>

<details>
<summary><strong>O projeto aceita contribuições? ❓</strong></summary>
<p>✅ <strong>Resposta:</strong> Sim. Issues, Pull Requests e sugestões são sempre bem-vindas.</p>
</details>

---

<h2 id="codigo-fonte">9. 💻 Código Fonte</h2>

Explore a arquitetura React completa no repositório oficial:

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=fff)
[![Repositório](https://img.shields.io/badge/Repositório-Domisnnet%2FFinancial-Educator-React-61DAFB?style=for-the-badge&logo=github&labelColor=0d1117)](https://github.com/Domisnnet/Financial-Educator-React)

### Estrutura do Projeto

```text
Financial-Educator-React/
│
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── contexts/
│   ├── firebase/
│   ├── hooks/
│   ├── pages/
│   ├── services/
│   ├── utils/
│   ├── App.tsx
│   └── main.tsx
│
├── package.json
├── vite.config.ts
└── README.md
```

| Diretório | Responsabilidade |
| :--- | :--- |
| **assets/** | Imagens, ícones e arquivos estáticos. |
| **components/** | Componentes reutilizáveis. |
| **contexts/** | Gerenciamento com Context API. |
| **firebase/** | Configuração Firebase. |
| **hooks/** | Hooks customizados. |
| **pages/** | Páginas principais. |
| **services/** | Comunicação Firebase/APIs. |
| **utils/** | Funções auxiliares. |

---

<h2 id="créditos">10. 📝 Créditos & Reconhecimentos</h2>

| Atribuição | Responsável / Recurso | Descrição |
| :--- | :--- | :--- |
| **Full-Stack Dev** | **Domisnnet** | Design, Arquitetura React e Configuração DevOps. |
| **Infraestrutura** | **Google Firebase** | Provedor de Hosting e serviços cloud. |
| **Tecnologias** | **React/TypeScript/Vite** | Comunidades abertas pela evolução contínua. |

---

<h2 id="licenca">11. 📄 Licença</h2>

Este projeto está sob a [![Licença MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/Domisnnet/Financial-Educator-React/blob/main/LICENSE)

---

<h2 id="perfil-do-github">12. 👨‍💻 Perfil do GitHub / Considerações</h2>

## 🌟 Considerações Finais

O **Financial Educator** foi desenvolvido unindo tecnologia, organização e educação financeira em uma plataforma única.

Além de ser ferramenta para gerenciamento financeiro pessoal, representa aplicação prática de conceitos modernos com **React**, **TypeScript**, **Vite** e **Firebase**, seguindo princípios de componentização e arquitetura escalável.

Novas funcionalidades continuarão sendo implementadas.

---

<div align="center">
### 💰 Financial Educator

**Transformando educação financeira em tecnologia, organização e inteligência.**

Desenvolvido com ❤️ utilizando **React**, **TypeScript**, **Vite** e **Firebase**.
</div>

<a href="https://github.com/Domisnnet"> 
  <img src="src/assets/images/DomisDev.png" width="90" style="border-radius: 50%" alt="Domisnnet GitHub"> 
</a>