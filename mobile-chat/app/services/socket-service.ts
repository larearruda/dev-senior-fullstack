import { io } from "socket.io-client";

const socket = io("http://192.168.15.19:8080"); // Substituir pelo IP do backend, se estiver em rede local

export interface ChatMessage {
  id: number;
  message: string;
  origin: string;
  datesent: string;
}

export const joinRoom = (room: string) => {
  console.log("mobile - iniciando conexao em: ", room);
  socket.emit("joinRoom", room);
};

export const sendMessage = (room: string, message: string) => {
  var newMessageFromApp: ChatMessage = {
    id: Math.random(),
    datesent: new Date().toDateString(),
    origin: "MOBILE",
    message: message,
  };
  message = JSON.stringify(newMessageFromApp);
  console.log("Enviando mensagem do aplicativo", message);
  socket.emit("sendMessage", { room, message });
};

export const listenForMessages = (callback: (message: string) => void) => {
  socket.on("receiveMessage", callback);
};

export const disconnectSocket = () => {
  socket.disconnect();
};
