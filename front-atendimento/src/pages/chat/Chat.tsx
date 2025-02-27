import React, { useEffect, useState } from "react";
import {
  ChatMessage,
  // disconnectSocket,
  joinRoom,
  listenForMessages,
  sendMessage,
} from "../../services/Socket.service";
import { Button, TextField } from "@mui/material";

export default function Chat() {
  const [message, setMessage] = useState("");
  const [conversations, setConversation] = useState<ChatMessage[]>([]);

  useEffect(() => {
    // console.log("entrando na sala");
    joinRoom("room-1");

    listenForMessages((msg) => {
      console.log("nova mensagem recebida na conversa", msg);
      var chatMsg = JSON.parse(msg);
      setConversation((prev) => [...prev, chatMsg]);
    });

    // return () => {
    //   disconnectSocket();
    // };
  }, []);

  const handleSend = () => {
    sendMessage("room-1", message);
    setMessage("");
  };

  return (
    <div>
      {conversations.map((msg, index) => (
        <div key={index}>{msg.message}</div>
      ))}

      <TextField
        label="Digite sua mensagem"
        fullWidth
        margin="normal"
        required
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ marginTop: 2 }}
        onClick={handleSend}
      >
        Enviar
      </Button>
    </div>
  );
}
