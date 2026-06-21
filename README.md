# ![GitHub repo size](https://img.shields.io/github/repo-size/Domisnnet/Financial-Educator-React?style=for-the-badge)
# ![GitHub stars](https://img.shields.io/github/stars/Domisnnet/Financial-Educator-React?style=for-the-badge)
# ![GitHub last commit](https://img.shields.io/github/last-commit/Domisnnet/Financial-Educator-React?style=for-the-badge)

<h2 id="sobre-o-projeto">1. Financial Educator - Plataforma Inteligente de Educação Financeira 💰📈</h2>

![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-brightgreen?style=flat-square)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square\&logo=react\&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square\&logo=firebase\&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)

<!-- Inserir logo do projeto -->

<!-- ![Financial Educator](src/assets/logo/logo.svg) -->

O **Financial Educator** é uma plataforma moderna desenvolvida para auxiliar usuários no gerenciamento financeiro pessoal, oferecendo uma experiência intuitiva para acompanhamento de receitas, despesas, investimentos, patrimônio e evolução financeira.

Construída com **React 19**, arquitetura baseada em componentes reutilizáveis e integrada ao ecossistema **Firebase**, a aplicação foi projetada para oferecer desempenho, escalabilidade e uma experiência fluida em dispositivos Desktop, Tablet e Mobile.

Mais do que um simples controle financeiro, o projeto busca aplicar boas práticas de arquitetura Front-end, componentização, gerenciamento de estado, persistência de dados em nuvem e uma interface moderna focada na experiência do usuário.

A arquitetura foi planejada para facilitar futuras expansões, permitindo a inclusão de novos módulos como planejamento financeiro, metas, inteligência artificial, educação financeira, relatórios avançados e integração com APIs externas.

---

# 📚 Tabela de Conteúdo

|                                           💻 O Projeto                                          |                                          🛠️ Técnico                                          |                                      🤝 Comunidade                                     |
| :---------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------: |
|        [![1. Sobre](https://img.shields.io/badge/1%20-%20Sobre-4CAF50)](#sobre-o-projeto)       | [![5. Destaques](https://img.shields.io/badge/5%20-%20Destaques-607D8B)](#destaques-tecnicos) |    [![9. Código](https://img.shields.io/badge/9%20-%20Código-795548)](#codigo-fonte)   |
|    [![2. Techs](https://img.shields.io/badge/2%20-%20Techs-2196F3)](#tecnologias-utilizadas)    |      [![6. Deploy](https://img.shields.io/badge/6%20-%20Deploy-009688)](#fluxo-de-deploy)     |   [![10. Créditos](https://img.shields.io/badge/10%20-%20Créditos-607D8B)](#creditos)  |
|    [![3. Instalação](https://img.shields.io/badge/3%20-%20Instalação-FF9800)](#como-executar)   |  [![7. Contribuir](https://img.shields.io/badge/7%20-%20Contribuir-3F51B5)](#como-contribuir) |    [![11. Licença](https://img.shields.io/badge/11%20-%20Licença-E91E63)](#licenca)    |
| [![4. Recursos](https://img.shields.io/badge/4%20-%20Funcionalidades-9C27B0)](#funcionalidades) |               [![8. FAQ](https://img.shields.io/badge/8%20-%20FAQ-FFC107)](#faq)              | [![12. Autor](https://img.shields.io/badge/12%20-%20Perfil-212121)](#perfil-do-github) |

---

<h2 id="tecnologias-utilizadas">2. ⚙️ Tecnologias Utilizadas</h2>

| Camada             | Tecnologias                                                                                                       | Descrição                                                             |
| :----------------- | :---------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------- |
| **Framework**      | ![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square\&logo=react\&logoColor=white)             | Desenvolvimento SPA utilizando React moderno baseado em componentes.  |
| **Linguagem**      | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square\&logo=typescript\&logoColor=white) | Código totalmente tipado para maior segurança e produtividade.        |
| **Build Tool**     | ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square\&logo=vite\&logoColor=white)                   | Ambiente rápido de desenvolvimento e build otimizado.                 |
| **UI**             | Componentes Reutilizáveis                                                                                         | Interface modular orientada à reutilização e manutenção.              |
| **Estilização**    | CSS Moderno / Tailwind *(caso utilizado)*                                                                         | Layout responsivo e organizado utilizando boas práticas de Front-end. |
| **Backend**        | ![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square\&logo=firebase\&logoColor=black)       | Authentication, Firestore, Storage e Hosting.                         |
| **Banco de Dados** | Cloud Firestore                                                                                                   | Persistência de dados em tempo real.                                  |
| **Autenticação**   | Firebase Authentication                                                                                           | Controle de acesso seguro dos usuários.                               |
| **Hospedagem**     | Firebase Hosting                                                                                                  | Publicação rápida e integrada ao ecossistema Google.                  |
| **Versionamento**  | Git + GitHub                                                                                                      | Controle de versão distribuído e colaboração.                         |

---

<h2 id="como-executar">3. 🚀 Como Executar o Projeto</h2>

### Pré-requisitos

Antes de iniciar o projeto, certifique-se de possuir instalado:

* Node.js 20+
* npm ou yarn
* Git
* Firebase CLI (opcional para deploy)

---

### Clonando o Repositório

```bash
git clone https://github.com/Domisnnet/Financial-Educator-React.git
```

```bash
cd Financial-Educator-React
```

---

### Instalando as Dependências

```bash
npm install
```

ou

```bash
yarn
```

---

### Executando em Ambiente de Desenvolvimento

```bash
npm run dev
```

O Vite iniciará um servidor local.

Normalmente a aplicação estará disponível em:

```
http://localhost:5173
```

---

### Gerando Build de Produção

```bash
npm run build
```

---

### Pré-visualizando o Build

```bash
npm run preview
```

---

### Estrutura Básica do Projeto

```text
Financial-Educator-React/
│
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── services/
│   ├── contexts/
│   ├── firebase/
│   ├── utils/
│   └── App.tsx
│
├── package.json
├── vite.config.ts
└── README.md
```

---

A arquitetura foi organizada para facilitar manutenção, escalabilidade e reutilização de componentes, seguindo práticas modernas do ecossistema React.

---

**➡️ Continuação na Parte 2:** Funcionalidades, Destaques Técnicos, Arquitetura React, Firebase e Organização do Projeto.

<h2 id="funcionalidades">4. 🚀 Funcionalidades</h2>

A plataforma foi projetada para evoluir continuamente. Atualmente possui uma arquitetura preparada para suportar diversos módulos financeiros.

Funcionalidade	Descrição
💰 Controle Financeiro	Cadastro de receitas e despesas.
📊 Dashboard	Visualização resumida da situação financeira.
📈 Investimentos	Controle de carteira de investimentos.
🏦 Patrimônio	Acompanhamento da evolução patrimonial.
📅 Histórico Financeiro	Registro completo das movimentações.
🔐 Login Seguro	Autenticação utilizando Firebase Authentication.
☁️ Sincronização	Dados armazenados na nuvem via Firestore.
📱 Responsividade	Interface adaptável para Desktop, Tablet e Mobile.
🌙 Tema Escuro (planejado)	Alternância entre Dark e Light Mode.
🤖 Inteligência Artificial (planejado)	Recomendações financeiras inteligentes.
🎯 Metas Financeiras (planejado)	Definição e acompanhamento de objetivos.
📄 Relatórios (planejado)	Exportação de dados em PDF e Excel.
🔔 Notificações (planejado)	Alertas e lembretes financeiros.
<h2 id="destaques-tecnicos">5. 🛠️ Destaques Técnicos</h2>

O projeto foi desenvolvido utilizando práticas modernas do ecossistema React, visando escalabilidade, manutenção simplificada e reutilização de código.

✔ Arquitetura baseada em Componentes

Cada funcionalidade é isolada em componentes independentes, permitindo reutilização, baixo acoplamento e maior organização do projeto.

✔ Organização por Responsabilidade
components/
pages/
hooks/
contexts/
services/
firebase/
utils/
assets/

Cada diretório possui uma responsabilidade específica, facilitando manutenção e crescimento da aplicação.

✔ Tipagem com TypeScript

Todo o código utiliza TypeScript para proporcionar:

maior segurança durante o desenvolvimento;
melhor suporte da IDE;
prevenção de erros em tempo de compilação;
documentação implícita através das interfaces.
✔ Firebase

O ecossistema Firebase é utilizado para fornecer:

Authentication
Cloud Firestore
Storage
Hosting

permitindo uma infraestrutura totalmente em nuvem.

✔ React 19

O projeto utiliza recursos modernos do React, incluindo:

Componentes Funcionais
Hooks
Context API
Lazy Loading
Code Splitting
Gerenciamento de Estado
Componentização
✔ Performance

Boas práticas adotadas:

Componentes reutilizáveis
Organização modular
Renderização otimizada
Separação de responsabilidades
Estrutura preparada para crescimento
<h2 id="fluxo-de-deploy">6. 🚀 Fluxo de Deploy</h2>

O deploy da aplicação é realizado utilizando o Firebase Hosting.

Build
npm run build
Login no Firebase
firebase login
Inicializar Hosting
firebase init hosting
Deploy
firebase deploy

Após o deploy, a aplicação estará disponível através da URL fornecida pelo Firebase Hosting.

<h2 id="como-contribuir">7. 🤝 Como Contribuir</h2>

Contribuições são sempre bem-vindas.

Caso deseje colaborar com o projeto:

# Fork do projeto

# Clone

git clone https://github.com/SEU-USUARIO/Financial-Educator-React.git

# Criar uma branch

git checkout -b feature/nova-funcionalidade

# Commit

git commit -m "feat: adiciona nova funcionalidade"

# Push

git push origin feature/nova-funcionalidade

# Abrir Pull Request

---

<h2 id="faq">8. ❓ FAQ</h2>
O projeto é gratuito?

Sim. O projeto é open source.

Posso utilizar como base para estudos?

Sim. O objetivo é justamente servir como referência para desenvolvimento Front-end utilizando React e Firebase.

Existe versão Mobile?

A aplicação possui layout responsivo e funciona em dispositivos móveis.

O projeto utiliza Backend próprio?

Não.

Toda a infraestrutura é baseada no Firebase.

O projeto aceita contribuições?

Sim.

Issues, Pull Requests e sugestões são sempre bem-vindas.

---

# <h2 id="codigo-fonte">9. 💻 Código-Fonte</h2>

O código foi desenvolvido seguindo boas práticas de desenvolvimento Front-end, priorizando organização, reutilização de componentes, escalabilidade e facilidade de manutenção.

A arquitetura foi estruturada para separar responsabilidades entre componentes, páginas, serviços, hooks e contextos, permitindo que novas funcionalidades possam ser adicionadas sem impactar a estrutura existente.

---

## Estrutura do Projeto

```text
Financial-Educator-React/
│
├── public/
│
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

---

## Organização dos Diretórios

| Diretório       | Responsabilidade                                  |
| :-------------- | :------------------------------------------------ |
| **assets/**     | Imagens, ícones e arquivos estáticos.             |
| **components/** | Componentes reutilizáveis da aplicação.           |
| **contexts/**   | Gerenciamento de estado utilizando Context API.   |
| **firebase/**   | Configuração dos serviços do Firebase.            |
| **hooks/**      | Hooks customizados para reutilização de lógica.   |
| **pages/**      | Páginas principais da aplicação.                  |
| **services/**   | Comunicação com Firebase e futuras APIs externas. |
| **utils/**      | Funções auxiliares compartilhadas entre módulos.  |

---

A estrutura foi planejada para manter baixo acoplamento entre módulos, facilitando a manutenção e permitindo o crescimento contínuo da aplicação conforme novas funcionalidades forem sendo implementadas.

---

# <h2 id="creditos">10. 🙏 Créditos</h2>

Este projeto foi desenvolvido utilizando tecnologias modernas e ferramentas amplamente adotadas pela comunidade de desenvolvimento Web.

Agradecimentos especiais às comunidades responsáveis pela evolução contínua destas tecnologias:

* React
* TypeScript
* Vite
* Firebase
* Git
* GitHub

Sem essas ferramentas, o desenvolvimento de aplicações modernas, escaláveis e de alta qualidade seria muito mais complexo.

---

# <h2 id="licenca">11. 📄 Licença</h2>

Este projeto está distribuído sob a licença **MIT**.

Isso significa que o código pode ser utilizado, estudado, modificado e distribuído livremente, desde que sejam mantidos os créditos da licença original.

Para mais informações, consulte o arquivo:

```text
LICENSE
```

---

# <h2 id="perfil-do-github">12. 👨‍💻 Perfil do GitHub</h2>

Desenvolvido por **Domisnnet**.

Caso este projeto tenha sido útil para você, considere apoiar o desenvolvimento através das seguintes ações:

* ⭐ Deixar uma estrela no repositório;
* 🍴 Fazer um Fork do projeto;
* 🐛 Reportar Bugs através das Issues;
* 💡 Compartilhar sugestões de melhorias;
* 🚀 Contribuir com Pull Requests.

Toda contribuição é muito bem-vinda e ajuda a tornar este projeto cada vez melhor.

---

## 🌟 Considerações Finais

O **Financial Educator** foi desenvolvido com o objetivo de unir tecnologia, organização e educação financeira em uma única plataforma.

Além de servir como ferramenta para gerenciamento financeiro pessoal, o projeto também representa uma aplicação prática de conceitos modernos de desenvolvimento Front-end utilizando **React**, **TypeScript**, **Vite** e **Firebase**, seguindo princípios de componentização, reutilização de código e arquitetura escalável.

Novas funcionalidades continuarão sendo implementadas, tornando a plataforma cada vez mais completa para usuários e também uma excelente referência para estudos e evolução técnica.

---

<div align="center">

### 💰 Financial Educator

**Transformando educação financeira em tecnologia, organização e inteligência.**

Desenvolvido com ❤️ utilizando **React**, **TypeScript**, **Vite** e **Firebase**.

</div>