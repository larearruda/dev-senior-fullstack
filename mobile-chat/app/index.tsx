import { useState } from "react";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import SignIn from "./signin";
import HomeScreen, { HomeScreenProps } from "./homescreen";
import { User } from "./model/user";

// Definindo os tipos de rotas
export type StackParamList = {
  Home: undefined;
  SignIn: undefined;
};

const Stack = createStackNavigator();

export default function Index({ navigation }: HomeScreenProps) {
  const [userLogged, setUserLogged] = useState<User>();
  const [text, setText] = useState("");

  return (
    // <NavigationContainer>
    <Stack.Navigator>
      {userLogged && (
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      )}
      {!userLogged && (
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
    // </NavigationContainer>
  );
}
