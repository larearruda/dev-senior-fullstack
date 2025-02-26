import { StackParamList } from "@/app";
import Header from "@/app/components/header";
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
import styles from "./chat.styles";
import { useEffect, useState } from "react";
import {
  disconnectSocket,
  joinRoom,
  listenForMessages,
  sendMessage,
} from "@/app/services/socket-service";

export type ChatProps = {
  navigation: StackNavigationProp<StackParamList, "Chat">;
};

export default function Chat({ navigation }: ChatProps) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    joinRoom("room-1");

    listenForMessages((msg) => {
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
    <SafeAreaProvider>
      <SafeAreaView>
        <Header headerTitle="Falar com atendente" />
        <ScrollView>
          <View style={styles.conversationBox}>
            <Text>conversas </Text>
          </View>
          <View>
            {messages.map((msg, index) => (
              <Text key={index}>{msg}</Text>
            ))}
            <TextInput
              value={message}
              onChangeText={setMessage}
              placeholder="Digite sua mensagem"
            />
            <Button title="Enviar" onPress={handleSend} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
