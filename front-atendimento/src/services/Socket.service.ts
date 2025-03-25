import { io } from "socket.io-client";

const ENABLE_SOCKET_IO = process.env.ENABLE_SOCKET_IO === "true";
const SOCKET_URL = process.env.SOCKET_URL;


let socket: any;

if (ENABLE_SOCKET_IO) {
  socket = io(SOCKET_URL);
  console.log("✅ Socket.IO habilitado.");
} else {
  console.warn("⚠️ Socket.IO está desabilitado por configuração.");
}

export interface ChatMessage {
  id: number;
  message: string;
  origin: string;
  datesent: string;
}

export const joinRoom = (room: string) => {
  if (!ENABLE_SOCKET_IO) return;
  
  console.log("central de atendimento - iniciando conexao em: ", room);
  socket.emit("joinRoom", room);
};

export const sendMessage = (room: string, message: string) => {
  if (!ENABLE_SOCKET_IO) return;

  const newMessageFromApp: ChatMessage = {
    id: Math.random(),
    datesent: new Date().toDateString(),
    origin: "BROWSER",
    message: message,
  };

  message = JSON.stringify(newMessageFromApp);
  console.log("Enviando mensagem do frontend", message);
  socket.emit("sendMessage", { room, message });
};

export const listenForMessages = (callback: (message: string) => void) => {
  if (!ENABLE_SOCKET_IO) return;

  socket.on("receiveMessage", callback);
};

export const disconnectSocket = () => {
  if (!ENABLE_SOCKET_IO) return;

  socket.disconnect();
};
