import React, { useEffect, useState } from "react";
import {
  disconnectSocket,
  joinRoom,
  listenForMessages,
  sendMessage,
} from "../../services/Socket.service";

export default function Chat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    joinRoom("room-1");

    listenForMessages((msg) => {
      console.log("chegou mensagem nova");
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      disconnectSocket();
    };
  }, []);

  const handleSend = () => {
    sendMessage("room-1", message);
    setMessage("");
  };

  return (
    <div>
      {messages.map((msg, index) => (
        <div key={index}>{msg}</div>
      ))}
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Digite sua mensagem"
      />
      <button onClick={handleSend}>Enviar</button>
    </div>
  );
}
