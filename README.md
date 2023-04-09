# Estudo com Graphql

## Objetivos
 * Conhecimento da ferramenta e seus conceitos e diferençãs do REST
    * Conhecimento de como utilizar o Graphql com Typescript
    * Conhecimento de como utilizar o Graphql com Nodejs
    * Conhecimento de como utilizar o Graphql com Reactjs

## Ferramentas utilizadas
    * Nodejs
    * Typescript
    * Graphql
    * Reactjs

## Pacotes Instalados:

    npm i type-graphql graphql apollo-server class-validator reflect-metadata

    npm i typescript @types/node ts-node-dev -D

### imports importantes:

    import { ApolloServer } from 'apollo-server';
    import { buildSchema } from 'type-graphql';
    import 'reflect-metadata';

### Alterações no tsconfig.json:

    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "strictPropertyInitialization": true

Instruções para rodar o projeto (para rodar o projeto em modo de desenvolvimento):

Instalar pacotes:

    npm install
Iniciar o projeto:

    npm run dev

Conceitos do Graphql:

    query: Busca de dados
    mutation: Alteração de dados

