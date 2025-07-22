import React, { useState } from "react";
import { Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useDispatch } from "react-redux";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import InputButton from "@/components/input-button/InputButton";
import InputText from "@/components/input-text/InputText";
import { login } from "@/src/store/auth";
import InputCheckbox from "@/components/input-checkbox/InputCheckbox";
import { StackParamList } from "..";
import { Container, LoginBox, LoginTitleHeader, SafeAreaBackground } from "@/src/pages/signin/signin.styles";

type SignInProps = {
  navigation: StackNavigationProp<StackParamList, "SignIn">;
};

const SignIn: React.FC<SignInProps> = ({ navigation }: SignInProps) => {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(login(), {
      id: 1,
      uuid: "65f1e9ad-ab0c-4c3f-9e3d-99e27ecce7c5",
      username: email,
    });
    navigation.navigate("Home");
  };

  // return (
  //   // SafeAreaProvider = exibe a tela abaixo da barra de notificaçao dos celulares
  //   <SafeAreaProvider>
  //     <SafeAreaBackground>
  //       <Container>
  //         <LoginBox>
  //           <LoginTitleHeader>Login</LoginTitleHeader>
  //           <InputText
  //             value={email}
  //             onChangeInputText={onChangeEmail}
  //             placeholder="E-mail ou nome de usuário"
  //           />
  //           <InputText
  //             value={password}
  //             onChangeInputText={onChangePassword}
  //             placeholder="Senha"
  //           />
  //           <InputButton
  //             buttonLabel="Acessar"
  //             onPress={handleSubmit}
  //             color="primary"
  //           />
  //           <InputCheckbox
  //             checked={rememberMe}
  //             onChange={() => setRememberMe(!rememberMe)}
  //             label="Lembrar de mim"
  //           />
  //           <InputButton buttonLabel="Acessar com Google" color="default" />
  //         </LoginBox>
  //       </Container>
  //     </SafeAreaBackground>
  //   </SafeAreaProvider>
  // );
  return <></>
};

export default SignIn;
