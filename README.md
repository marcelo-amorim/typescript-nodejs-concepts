# typescript-nodejs-concepts
Conceitos do Node.js utilizando o TypeScript. Desafio da Bootcamp GoStack da Rocketseat

Esta aplicação tem o intuito de mostrar como fazer uso do TypeScript e suas funcionalidades na construção de uma API.

## :information_source: Sobre a API

Esta interface de transações financeiras possui apenas uma rota acessível por dois tipos de requisição:

- **`POST /transactions`**: A rota deve receber `title`, `value` e `type` dentro do corpo da requisição (em formato JSON), onde type pode ter o valor "income" para entradas de valor no saldo ou "outcome" para saídas de valor do saldo:

```
{
  "title": "Salário",
  "value": 3000,
  "type": "income"
}
```

- **`GET /transactions`**: Lista todos as transações com o balanço:
```
{
  "transactions": [
    {
      "id": "1cf5e9af-52aa-4d91-97e4-918d28d11e38",
      "title": "Salário",
      "value": 3000,
      "type": "income"
    },
    {
      "id": "7c35b765-1d2c-4098-acf5-af50f4f5f864",
      "title": "Bike muitcho louca",
      "value": 2999.99,
      "type": "outcome"
    }
  ],
  "balance": {
    "total": 0.01,
    "income": 3000,
    "outcome": 2999.99
  }
}
```


## Como rodar o projeto

Para rodar o projeto basta clona-lo em um diretório de sua preferência e em seguida, executar o comando `yarn` no seu terminal.
Após a instalação das dependências, você pode rodar a API com o comando shell`yarn dev:server`.
Todas as funcionalidades foram testadas, mas se quiser conferir o relatório de testes, execute o comando `yarn test` no terminal.

Você pode utilizar o **[Insomnia](https://insomnia.rest/download/)** ou **[Postman](https://www.postman.com/)** para fazer as chamadas na api.

:metal::metal:

