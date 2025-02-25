import React, { useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { StackParamList } from "../..";
import { useDispatch } from "react-redux";
import { login } from "@/app/store/auth";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import styles from "./signin.styles";
import InputButton from "@/app/components/input-button";

type SignInProps = {
  navigation: StackNavigationProp<StackParamList, "SignIn">;
};

export default function SignIn({ navigation }: SignInProps) {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = () => {
    // Alert.alert("fazer login");
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
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
              style={styles.inputLogin}
              onChangeText={onChangeEmail}
              value={email}
              placeholder="Email or username"
            />
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              style={styles.inputLogin}
              onChangeText={onChangePassword}
              value={password}
              placeholder="Password"
            />
            <InputButton
              buttonLabel="Acessar"
              onPress={handleSubmit}
              color="primary"
            />
            <InputButton buttonLabel="Continuar com Google" color="default" />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
