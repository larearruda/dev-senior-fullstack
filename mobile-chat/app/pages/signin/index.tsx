import React, { useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { StackParamList } from "../..";
import Icon from "@react-native-vector-icons/fontawesome";
import { useDispatch } from "react-redux";
import { login } from "@/app/store/auth";

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
    <View style={styles.loginView}>
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
      {/* <Button
        title="Log in"
        onPress={() => Alert.alert("Simple Button pressed")}
      /> */}
      <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
        <Text style={styles.loginBtnLabel}>Log in </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginWithGoogleBtn}>
        <Text style={styles.loginWithGoogleBtnLabel}>Continue with Google</Text>
        {/* <FontAwesomeIcon icon={faGoogle} /> */}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  loginView: {
    justifyContent: "center",
    backgroundColor: "#fff",
    height: "100%",
  },
  loginTitleHeader: {
    fontSize: 40,
    alignItems: "center",
    padding: 10,
  },
  inputLabel: {
    padding: 10,
  },
  inputLogin: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#dbd8d8",
    borderRadius: 5,
  },
  loginBtn: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: "#4F4F4F",
    backgroundColor: "#4F4F4F",
    alignItems: "center",
  },
  loginBtnLabel: {
    color: "#FFF",
  },
  loginWithGoogleBtn: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: "#4F4F4F",
    alignItems: "center",
  },
  loginWithGoogleBtnLabel: {
    color: "#4F4F4F",
  },
});
