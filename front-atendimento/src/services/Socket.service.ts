import { io } from "socket.io-client";

const socket = io("http://192.168.15.19:8080");

export const joinRoom = (room: string) => {
  socket.emit("joinRoom", room);
};

export const sendMessage = (room: string, message: string) => {
  console.log("frontend", { room, message });
  socket.emit("sendMessage", { room, message });
};

export const listenForMessages = (callback: (message: string) => void) => {
  socket.on("receiveMessage", callback);
};

export const disconnectSocket = () => {
  socket.disconnect();
};
