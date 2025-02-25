import { StackParamList } from "@/app";
import Header from "@/app/components/header";
import { StackNavigationProp } from "@react-navigation/stack";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import styles from "./chat.styles";

export type ChatProps = {
  navigation: StackNavigationProp<StackParamList, "Chat">;
};

export default function Chat({ navigation }: ChatProps) {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Header headerTitle="Falar com atendente" />
        <ScrollView>
          <View style={styles.conversationBox}>
            <Text>conversas </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
