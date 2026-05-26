# 📋 Gerenciador de Clientes

Esta é uma aplicação web desenvolvida em **React com Vite** para gerenciar o cadastro de clientes e serviços. O projeto consome uma API REST simulada utilizando o **JSON Server**, permitindo a listagem e a inserção de dados dinamicamente.

## ✨ Funcionalidades

*   **Listagem de Clientes:** Exibe todos os clientes cadastrados buscando dados da API (`GET`).
*   **Cadastro de Clientes:** Formulário para adicionar novos leads (`POST`), com atualização em tempo real da interface.
*   **Campos de Registro:** Nome da Empresa/Cliente, E-mail de Contato e Serviço de Interesse.
*   **Interface Moderna:** Estilização desenvolvida com o novo **Tailwind CSS v4**, focada em usabilidade e organização visual.

## 🛠️ Tecnologias Utilizadas

*   **[React](https://react.dev/)** + **[Vite](https://vitejs.dev/)**
*   **[Tailwind CSS v4](https://tailwindcss.com/)** (Estilização da Interface)
*   **[JSON Server](https://github.com/typicode/json-server)** (Simulação de API Fake local)
*   **JavaScript (ES6+)** (Uso de Hooks: `useState`, `useEffect` e `Fetch API`)

## 🚀 Como executar o projeto localmente

Para que a aplicação funcione corretamente, é necessário rodar o servidor da API (JSON Server) e o servidor da aplicação (Vite) de forma simultânea. Siga os passos abaixo:

### 1. Pré-requisitos
Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

### 2. Instalação
Clone este repositório e instale as dependências:

```bash
git clone https://github.com/asapnyell/cadastro-clientes.git
cd cadastro-clientes
npm install

### 3. Rodando a API (JSON Server)
Abra um terminal no VS Code, na raiz do projeto, e inicie o banco de dados fake:

```bash
npx json-server --watch db.json --port 3000

O servidor estará rodando em: http://localhost:3000/clientes

### 4. Rodando o Front-end (React + Vite)
Abra um novo terminal (mantendo o anterior aberto) e rode o servidor de desenvolvimento:

npm run dev

Acesse a aplicação no navegador através do link gerado no terminal (geralmente http://localhost:5173)


