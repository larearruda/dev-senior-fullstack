import { useEffect, useState } from "react";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import SignIn from "./pages/signin";
import HomeScreen from "./pages/homescreen";
import { Provider, useDispatch } from "react-redux";
import { login } from "./store/auth";
import {} from "react-redux";
import { store } from "./store/store";

// Definindo os tipos de rotas
export type StackParamList = {
  Home: undefined;
  SignIn: undefined;
};

const Stack = createStackNavigator();
function InnerApp() {
  const dispatch = useDispatch();

  // const [userLogged, setUserLogged] = useState<User>();

  const userLogged = {
    id: 1,
    username: "larearruda",
    uuid: "df2bd6c8-3020-4f9a-a14d-b12c5b5ec140",
  };
  useEffect(() => {
    dispatch(login(), userLogged);
  });

  return (
    // <NavigationContainer>
    <Provider store={store}>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </Provider>
    // </NavigationContainer>
  );
}
export default function Index() {
  return (
    <Provider store={store}>
      <InnerApp />
    </Provider>
  );
}
