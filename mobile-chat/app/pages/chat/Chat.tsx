import React from "react";
import { StackParamList } from "@/app";
import Header from "@/app/components/header/Header";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  Button,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ConversationBox, MessageReceived, MessageSent } from "./chat.styles";
import { useEffect, useState } from "react";
import {
  ChatMessage,
  disconnectSocket,
  joinRoom,
  listenForMessages,
  sendMessage,
} from "@/app/services/socket-service";
import InputText from "@/app/components/input-text/InputText";
import InputButton from "@/app/components/input-button/InputButton";

export type ChatProps = {
  navigation: StackNavigationProp<StackParamList, "Chat">;
};

const Chat: React.FC<ChatProps> = ({ navigation }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  const [conversations, setConversation] = useState<ChatMessage[]>([]);

  useEffect(() => {
    joinRoom("room-1");

    listenForMessages((msg) => {
      console.log("nova mensagem recebida na conversa", msg);
      var chatMsg = JSON.parse(msg);
      // setMessages((prev) => [...prev, msg]);
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
    <SafeAreaProvider>
      <SafeAreaView>
        <Header headerTitle="Falar com atendente" />
        <ScrollView>
          {conversations.map((msg, index) => (
            <>
              {msg.origin === "MOBILE" && (
                <MessageSent key={index}>
                  <Text key={index}>{msg.message}</Text>
                </MessageSent>
              )}
              {msg.origin === "BROWSER" && (
                <MessageReceived key={index}>
                  <Text key={index}>{msg.message}</Text>
                </MessageReceived>
              )}
            </>
          ))}
          <View>
            <InputText
              onChangeInputText={setMessage}
              value={message}
              placeholder="Digite sua mensagem"
            />
            {/* <Button title="Enviar" onPress={handleSend} /> */}
            <InputButton
              buttonLabel="Enviar"
              color="primary"
              onPress={handleSend}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Chat;
