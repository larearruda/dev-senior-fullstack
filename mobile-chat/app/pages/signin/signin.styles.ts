import { StyleSheet } from "react-native";

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

export default styles;
