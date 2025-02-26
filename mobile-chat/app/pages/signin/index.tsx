import React, { useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { Alert, Text, View } from "react-native";
import { StackParamList } from "../..";
import { useDispatch } from "react-redux";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import styles from "./signin.styles";
import InputButton from "@/app/components/input-button";
import InputText from "@/app/components/input-text";
import { login } from "@/app/store/auth";

type SignInProps = {
  navigation: StackNavigationProp<StackParamList, "SignIn">;
};

export default function SignIn({ navigation }: SignInProps) {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(login(), {
      id: 1,
      uuid: "65f1e9ad-ab0c-4c3f-9e3d-99e27ecce7c5",
      username: email,
    });
    navigation.navigate("Home");
  };

  return (
    // SafeAreaProvider = exibe a tela abaixo da barra de notificaçao dos celulares
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeAreaBackground}>
        <View style={styles.loginView}>
          <View style={styles.loginBox}>
            <Text style={styles.loginTitleHeader}>Login</Text>

            <InputText
              value={email}
              onChangeInputText={onChangeEmail}
              placeholder="E-mail ou nome de usuário"
            />
            <InputText
              value={password}
              onChangeInputText={onChangePassword}
              placeholder="Senha"
            />
            <InputButton
              buttonLabel="Acessar"
              onPress={handleSubmit}
              color="primary"
            />
            <InputButton buttonLabel="Continuar com Google" color="primary" />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
