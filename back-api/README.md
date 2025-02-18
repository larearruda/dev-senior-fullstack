# Backend API Central de Atendimento
## Description
Projeto backend de uma central de atendimento de hotel


## Project setup

```bash
$ yarn install
```
## API
## 📌 Endpoints da API

### 🎫 Tickets
| Método  | Rota                 | Descrição                                      |
|---------|----------------------|----------------------------------------------|
| GET     | `/tickets`           | Obtém todos os tickets                      |
| GET     | `/tickets/:id`       | Obtém um ticket específico pelo ID          |
| GET     | `/tickets?status=aberto` | Filtra tickets por status                  |
| POST    | `/tickets`           | Cria um novo ticket                         |
| PUT     | `/tickets/:id`       | Atualiza um ticket pelo ID                  |
| DELETE  | `/tickets/:id`       | Remove um ticket pelo ID                    |

### 🏨 Reservas
| Método  | Rota                 | Descrição                                      |
|---------|----------------------|----------------------------------------------|
| GET     | `/bookings`      | Obtém todas as reservas                     |
| GET     | `/bookings/:id`  | Obtém uma reserva específica pelo ID        |
| POST    | `/bookings`      | Cria uma nova reserva                       |
| PUT     | `/bookings/:id`  | Atualiza uma reserva pelo ID                |
| DELETE  | `/bookings/:id`  | Remove uma reserva pelo ID                  |

### 🧑‍💼 Usuários
| Método  | Rota                 | Descrição                                      |
|---------|----------------------|----------------------------------------------|
| GET     | `/users`             | Obtém todos os usuários                     |
| GET     | `/users/:id`         | Obtém um usuário específico pelo ID         |
| POST    | `/users`             | Cria um novo usuário                        |
| PUT     | `/users/:id`         | Atualiza um usuário pelo ID                 |
| DELETE  | `/users/:id`         | Remove um usuário pelo ID                   |

---




## Banco de dados
SQLite

```shell
# acessar o banco 
sqlite3 database.sqlite
# se vir a mensagem abaixo, deu certo
SQLite version 3.43.2 2023-10-10 13:08:14
Enter ".help" for usage hints.
sqlite>


# Lista todas as tabelas  
.tables   

# Mostra a estrutura da tabela  
.schema nome_da_tabela

# Visualiza os registros  
SELECT * FROM nome_da_tabela;
``` 

## Conceitos NestJs

```shell
# criar novo modulo 
nest g mo

# criar novo controler 
nest g co

# criar novo service
nest g s

# criar um novo resource
nest g resource

```

### DTO - Data Transfer Object 
DTO (Data Transfer Object) é um objeto usado para transferir dados entre diferentes camadas de uma aplicação. No NestJS, ele é utilizado principalmente para validar e estruturar os dados recebidos em um endpoint antes que sejam processados.
🎯 Por que usar DTOs?

✅ Validação de dados → Impede que dados inválidos cheguem ao serviço.

✅ Segurança → Evita que o usuário envie informações inesperadas.

✅ Facilidade de manutenção → Define claramente o formato dos dados esperados.

✅ Redução de código repetitivo → Centraliza a lógica de estruturação dos dados.

## Compile and run the project

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Run tests

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ yarn install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
