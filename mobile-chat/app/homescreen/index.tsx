import { StackNavigationProp } from "@react-navigation/stack";
import { View, Button, StyleSheet, Text } from "react-native";
import { StackParamList } from "..";

// Definição do tipo para as propriedades de navegação
export type HomeScreenProps = {
  navigation: StackNavigationProp<StackParamList, "Home">;
};

export default function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>🏠 Tela Inicial</Text>
      <Button
        title="Abrir Outra Tela"
        onPress={() => navigation.navigate("SignIn")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});
