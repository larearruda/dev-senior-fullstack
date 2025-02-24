import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  safeAreaBackground: {
    backgroundColor: "#dbd8d8",
  },
  loginView: {
    justifyContent: "center",
    backgroundColor: "#dbd8d8",
    height: "100%",
  },
  loginBox: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#dbd8d8",
    borderRadius: 5,
    margin: 10,
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
    // boxShadow: "3px 3px #dbd8d8",
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

export default styles;
