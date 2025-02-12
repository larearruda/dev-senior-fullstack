# Anotações - solução
### Frontend React - front-atendimento 
[Frontend Atendimento ao Usuário](./front-atendimento/README.md)
```shell
npx create-react-app front-atendimento
cd front-atendimento
npm start
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
## Ideias conceituais do projeto
- Atendimento para Turismo e Hotéis (Exemplo: Booking, Airbnb, CVC, Decolar)
  - Viajantes (usuário do aplicativo) podem abrir chamados sobre reservas, cancelamentos e problemas com hospedagens.
  - Atendentes (usuário do gerenciador)  cancelamentos e problemas com hospedagens.
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