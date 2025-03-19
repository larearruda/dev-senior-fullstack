# Anotações - solução

### Configuração completa
- Node LTS
- Install yarn `npm install --global yarn`

### Frontend React - front-atendimento

[Frontend Atendimento ao Usuário](./front-atendimento/README.md)

```shell
yarn create react-app front-atendimento --template typescript
cd front-atendimento
yarn start
```

### Backend Nest.js back-api

[Backend API & Websocket](./back-api/README.md)

```shell
nest new back-api
```

### Mobile React Native mobile-chat

[Mobile Chat](./mobile-chat/README.md)

```shell
npm install -g expo-cli
npx create-expo-app mobile-chat
cd mobile-chat
npx expo start
```

### Configuração Github

Para erro de autorizaçao do Github do tipo:

```shell
git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.
```

Adicionar novamente a chave ssh para resolver

```shell
ssh-add ~/.ssh/larissa.arruda94
git config user.email "larissa.arruda94@gmail.com"

```

## Ideias conceituais do projeto

- Atendimento para Turismo e Hotéis (Exemplo: Booking, Airbnb, CVC, Decolar)

  - Viajantes (usuário do aplicativo) podem abrir chamados sobre reservas, cancelamentos e problemas com hospedagens.
  - Atendentes (usuário do gerenciador) cancelamentos e problemas com hospedagens.
  - Pesquisa de satisfação após o atendimento e sugestões personalizadas de destinos.

- Mobile
  - Eu como usuário do aplicativo desejo abrir um chamado;
  - Eu como usuário do aplicativo desejo conversar através de um chat com um usuário do gerenciador;
  - Eu como usuário do aplicativo desejo pontuar meu atendimento do chamado que foi encerrado (pesquisa de satisfação);
- Atendimento
  - Eu como usuário do gerenciador desejo realizar login;
  - Eu como usuário do gerenciador desejo receber atualizações, em tempo real, de chamados solicitados por usuários do aplicativo;
  - Eu como usuário do gerenciador desejo conversar através de um chat com usuários do aplicativo;
  - Eu como usuário do gerenciador desejo finalizar um atendimento;

Dados Pessoais:

- Nome completo, E-mail, Telefone, Número da reserva (se aplicável)

Detalhes do Chamado

- Tipo de solicitação (exemplo: Reclamação, Dúvida, Solicitação Especial)
- Categoria do problema (exemplo: Check-in, Wi-Fi, Limpeza, Alimentação, Cobrança, Cancelamento)
- Descrição do problema ou solicitação
- Data e hora do ocorrido

Localização

- Nome do hotel
- Cidade/país
- Número do quarto (se aplicável)

Anexos (Opcional)

- Fotos ou documentos relacionados ao chamado (exemplo: comprovante de pagamento, foto de um problema no quarto)

Preferência de Contato

- Como deseja ser respondido (E-mail, Telefone, WhatsApp)

## tabelas

- [x] ticket
- [x] booking
- [x] customer
- [ ] hotel
