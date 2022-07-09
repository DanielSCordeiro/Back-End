Back End criado com NodeJS + MongoDB com as funções criar, ler, editar e deletar tarefas no banco de dados.

## Instalando as dependências

Ao clonar o projeto para sua máquina, rode o npm ou yarn para instalar as dependências utilizadas no projeto.

```bash
npm install
```

## Rodando o projeto
- Crie o arquivo .env com a variável do banco de dados. (fornecida via e-mail)
- Inicie o projeto com yarn start e certifique que ele estará sendo executado na porta 3001

```bash
yarn start
```

Para auxiliar na criação do sistema, foi utlizado o Postman.
(https://www.postman.com/)


## Rotas para execução
- create
http://localhost:3001/tarefas
method: POST

- read
http://localhost:3001/tarefas
method: GET

- update
http://localhost:3001/tarefas/:id
method: PATCH
(deverá ser informado o ID da tarefa)

- delete
http://localhost:3001/tarefas/:id
method: DELETE
(deverá ser informado o ID da tarefa)
