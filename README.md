# Projeto Typescript

## Sumário

    Inserir aqui o sumário.

## Descrição

Inserir descrição aqui!

## Passos para a criação do projeto

1. Criar pasta:

    ---
        mkdir backTypescript
    ---

2. Entrar na pasta:

    ---
        cd backTypescript
    ---

3. Abrir o vscode na pasta:

    ---
        code .
    ---

4. Iniciar npm do projeto e configurar seu projeto:

    ---
        npm init
    ---

5. Definir typescript no projeto:

    ---
        npm install --save-dev typescript
    ---

6. Iniciar o arquivo de configuração do typescript para o projeto tscconfig.json:

    ---
        npx tsc --init
    ---

7. Instalar tipos do node:

    ---
        npm install --save-dev @types/node
    ---

8. Instalar ts-node(Opcional para desenvolvimento):

    ---
        npm install --save-dev ts-node
    ---

9. Iniciar projeto para testar e ver se está tudo funcionando:

    ---
        npm run dev
    ---

10. Crie sua dockerfile para o rodar a application node.
11. Agora, vamos instalar o prisma ORM:

    ---
        npm install @prisma/cli @prisma/client
    ---

12. Vamos configurar o prisma:

    ---
        npx prisma init
    ---

13. Crie suas tables e rode o comando abaixo para gerar as migrations:

    ---
        npx prisma migrate dev --name init
    ---

## Conclusões finais

    Inserir aqui a conclusão.
