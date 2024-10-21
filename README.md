# Task Manager

## Descrição

O **Task Manager** é uma aplicação web que permite aos usuários criar, visualizar, editar e deletar tarefas. A aplicação é composta por uma API RESTful, implementada em **Node.js**, e uma interface frontend desenvolvida com **Next.js**. Os dados são persistidos em um banco de dados relacional, **MySQL**.

## Funcionalidades

### Backend

- **Autenticação de usuários** com **JWT**.
- **CRUD de tarefas** (criar, listar, editar, excluir) para usuários autenticados.
- Validações de dados, como verificação de títulos duplicados e formatação de e-mail.
- Apenas o usuário autenticado pode acessar suas próprias tarefas.

### Frontend

- **Formulário de login**.
- **Tela de gerenciamento de tarefas** que permite adicionar, editar e excluir tarefas.
- Mensagens de erro e sucesso em ações do usuário.
- Autenticação persistente via **Local Storage** ou **Cookies**.
- Uso de **Ant Design** para uma interface moderna e responsiva.

## Tecnologias Utilizadas

### Backend

- **Node.js**
- **Express.js**: Framework para construção da API.
- **JWT (JSON Web Token)**: Para autenticação e proteção das rotas.
- **Prisma**: ORM para interagir com o banco de dados relacional.
- **bcrypt**: Para criptografar senhas.
- **MySQL**: Banco de dados relacional.

### Frontend

- **Next.js**: Framework React para construção da interface.
- **Ant Design**: Framework de UI para o design da aplicação.
- **Fetch**: Para fazer as requisições HTTP ao backend.

## Pré-requisitos

Para rodar o projeto localmente, você precisará ter instalado:

- **Node.js** (v16 ou superior)
- **MySQL**
- **npm** como gerenciador de pacotes.

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/robsonbucci/task-management
   cd task-management
   ```

2. Instale as dependências do backend:

   ```bash
   npm install
   ```

3. Configure o banco de dados no arquivo `.env`. Exemplo para MySQL:

   ```bash
   DATABASE_URL="mysql://usuario:senha@localhost:3306/taskmanager"
   JWT_SECRET="seu_segredo_jwt"
   ```

4. Execute as migrações para criar as tabelas:

   ```bash
   npx prisma migrate dev
   ```

5. Inicie o servidor:

   ```bash
   npm run dev
   ```

   O backend será executado em [http://localhost:3000](http://localhost:3000).

## Endpoints da API

### Autenticação

- `POST /users`: Cria um novo usuário.
- `POST /login`: Autentica um usuário e retorna um token JWT.

### Tarefas (requer token JWT)

- `GET /tasks`: Lista todas as tarefas do usuário autenticado.
- `POST /tasks`: Cria uma nova tarefa.
- `PUT /tasks/:id`: Atualiza uma tarefa existente.
- `DELETE /tasks/:id`: Exclui uma tarefa.

### Exemplo de Requisição

Autenticação:

```bash
POST /login
{
  "email": "usuario@exemplo.com",
  "password": "senha"
}
```

Resposta:

```json
{
  "token": "seu-token-jwt"
}
```

Criar uma tarefa (usando token JWT no header):

```bash
POST /tasks
{
  "title": "Nova tarefa",
  "description": "Descrição da tarefa"
}
```

## Validações

- **E-mail**: Deve ser um e-mail válido.
- **Senha**: Deve ter no mínimo 6 caracteres.
- **Títulos duplicados**: Não é permitido títulos duplicados para o mesmo usuário.

## Design e Interface

- Utilizamos **Ant Design** para estilizar a aplicação, garantindo uma experiência moderna e responsiva.
- Ícones de ação como **editar**, **excluir** e **marcar como concluído** foram adicionados para facilitar a interação.

## Tratamento de Erros

- Mensagens de erro amigáveis são exibidas para o usuário em caso de falhas, como:
  - Erro de autenticação.
  - Falha ao criar ou atualizar uma tarefa.

## Como Rodar o Projeto

1. Clone o repositório.
2. Configure o banco de dados e as variáveis de ambiente.
3. Execute o backend e frontend em suas respectivas portas.
4. Abra o navegador e acesse o frontend em [http://localhost:3000](http://localhost:3000).
