import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: true }) // Permitir requisições de outras origens
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  handleConnection(client: Socket) {
    console.log(`Cliente conectado: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Cliente desconectado: ${client.id}`);
  }

  @SubscribeMessage('sendMessage')
  handleMessage(client: Socket, payload: { message: string; room: string }) {
    // console.log('client', client);
    console.log('payload', payload);
    console.log(
      `Mensagem recebida na sala ${payload.room}: ${payload.message}`,
    );
    this.server.to(payload.room).emit('receiveMessage', payload.message);
  }

  @SubscribeMessage('joinRoom')
  async handleJoinRoom(client: Socket, room: string) {
    await client.join(room);
    client.emit('joinedRoom', room);
  }
}
