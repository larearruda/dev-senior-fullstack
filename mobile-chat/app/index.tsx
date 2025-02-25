import { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "./pages/signin";
import { Provider, useDispatch } from "react-redux";
import { login } from "./store/auth";
import { store } from "./store/store";
import HomeScreen from "./pages/home-screen";
import CreateTicket from "./pages/create-ticket";
import { Booking } from "./model/Booking";
import Chat from "./pages/chat";

// Definindo os tipos de rotas
export type StackParamList = {
  Home: undefined;
  SignIn: undefined;
  CreateTicket: { booking: Booking };
  Chat: { booking: Booking };
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
        <Stack.Screen
          name="CreateTicket"
          component={CreateTicket}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
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
