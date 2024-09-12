# API-TS

![Status do Projeto](https://img.shields.io/badge/Status-Em%20Andamento-yellow)

Esse projeto é uma API desenvolvida em Typescript, NodeJS e SQLite. Com a API é possível criar diversas roles que vão ter algum usuário vinculado a elas.

# Primeiros passos

Para começar clone o repositório utilizando:

`git clone https://github.com/nicolasmarcari/API-TS.git`

Instale as dependências do projeto:

`npm install`

renomeie o arquivo ".env.example" para ".env" e execute o comando a seguir para montar a estrutura do banco de dados

`npm run typeorm -- -d .\src\shared\typeorm\index.ts migration:run`

A aplicação contém um usuário admin por padrão, para que seja possível gerar o token e fazer as requisições:

`npm run seed:admin`

Após isso basta iniciar a aplicação com o seguinte comando:

`npm run dev`

# Documentação

A API possui uma documentação referente às requisições e parametros, para consulta-la digite em seu navegador o seguinte endereço com a aplicação rodando
http://localhost:3000/docs/

# Tecnologias usadas

* NodeJS
* Typescript
* TypeORM
* Express
* SQLite
* JWT
* Tsyringe
* Celebrate
* DotEnv
* BCryptJS

# Sobre

Esse projeto foi feito com o intuito de aprender mais sobre NodeJS, TypeScript e Rest utilizando algumas tecnologias.
