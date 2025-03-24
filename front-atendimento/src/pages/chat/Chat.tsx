import React, { useEffect, useState } from "react";
import {
  ChatMessage,
  // disconnectSocket,
  joinRoom,
  listenForMessages,
  sendMessage,
} from "../../services/Socket.service";
import { Box, Button, TextField } from "@mui/material";
import NavBar from "../../components/nav-bar/NavBar";

export default function Chat() {
  const [message, setMessage] = useState("");
  const [conversations, setConversation] = useState<ChatMessage[]>([]);
  const isLiveChatEnabled =  useState(false);


  useEffect(() => {

    if(isLiveChatEnabled){

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
    }
  }, []);

  const handleSend = () => {
    sendMessage("room-1", message);
    setMessage("");
  };

  return (
    <React.Fragment>
      <Box>
        <div>Teste </div>
        {/* nao tá exibindo o navbar, sei lá pq */}
        {/* <NavBar />  */}
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
      </Box>
    </React.Fragment>
  );
}
