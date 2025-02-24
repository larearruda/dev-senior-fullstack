import { StackParamList } from "@/app";
import Header from "@/app/components/header";
import { StackNavigationProp } from "@react-navigation/stack";
import { Text, View } from "react-native";
import { RefreshControl, ScrollView } from "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import styles from "./create-ticket.styles";

export type CreateTicketProps = {
  navigation: StackNavigationProp<StackParamList, "CreateTicket">;
};

export default function CreateTicket({ navigation }: CreateTicketProps) {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.container}>
          <Header headerTitle="Abrir ticket" />
          {/* <Text> form </Text> */}
        </View>
        {/* <ScrollView
        // contentContainerStyle={styles.scrollView}
        >
        </ScrollView> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
