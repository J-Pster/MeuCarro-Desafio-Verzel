# Loja de carros em React + Django 🚗

![Preview](https://i.imgur.com/GMiOXpG.png)

Essa aplicação foi feita para um desafio de emprego, onde eu deveria criar uma aplicação Full-Stack, um CRUD em DJango e um Front-End em React, esse desafio foi feito para a [Verzel](https://verzel.com.br/).

## Documentação da API
Para acessar a documentação da API em Django, use esse link do Postman!

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/22601468-4d25a8fc-3508-4602-ab83-b506fdd1e78b?action=collection%2Ffork&collection-url=entityId%3D22601468-4d25a8fc-3508-4602-ab83-b506fdd1e78b%26entityType%3Dcollection%26workspaceId%3De0e9f0a1-6591-4c86-957f-254086486f5b)

## Como rodar o projeto

A aplicação é **completamente dockerizada** para facilitar o desenvolvimento, então, siga os passos para rodar o projeto:

### Usando Docker

1. Clone o repositório
2. Entre na pasta do projeto
3. Rode o comando `npm run install:front` para instalar a dependências de Front-End (Esse passo é necessário para evitar um estranho erro relacionado ao React Scripts)
4. Rode o comando `npm run compose:up:dev` para subir o projeto

Pronto, agora a aplicação vai iniciar os 3 containers e tudo estará pronto dentro de 4 minutos da primeira vez, e cerca de 1 minuto nas próximas vezes.

Basta acessar o link [http://localhost:3000](http://localhost:3000) para acessar a aplicação de Front-End, ou [http://localhost:8000](http://localhost:8000) para acessar a API.

### Sem Docker

Para rodar essa aplicação sem docker seria necessário criar um .env no backend para que ele possa identificar os acessos ao banco de dados, e também seria necessário iniciar um banco de dados mysql.

Considerando que você já tenha o mysql instalado, e tenha criando um .env no backend, basta seguir os passos:

1. Clone o repositório
2. Entre na pasta do projeto
3. Entre no backend com `cd backend` e instale as dependências com `pip install -r requirements.txt` (Recomendo criar um ambiente virtual antes).
4. Entre no frontend com `cd frontend` e instale as dependências com `npm install`
5. Entre no backend com `cd backend` e rode as migrações com `python manage.py makemigrations` e `python manage.py migrate`
6. Rode o servidor com `python manage.py runserver`
7. Entre no frontend com `cd frontend` e rode o servidor com `npm start`

Basta acessar o link [http://localhost:3000](http://localhost:3000) para acessar a aplicação de Front-End, ou [http://localhost:8000](http://localhost:8000) para acessar a API.