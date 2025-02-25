import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { DefaultAppTheme } from "../theme/globals";

const styles = StyleSheet.create({
  primary: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: "#4F4F4F",
    backgroundColor: "#4F4F4F",
    alignItems: "center",
  },
  primaryLabel: {
    color: "#FFF",
  },
});

export default styles;

interface InputButtonColorProps {
  color: "default" | "primary" | "warning" | "success" | "danger";
}

export const Button = styled.TouchableOpacity<InputButtonColorProps>`
  height: 40px;
  border-width: 1px;
  padding: 10px;
  margin: 12px;
  border-radius: 5px;
  align-items: center;
  border-color: ${(props: InputButtonColorProps) => {
    switch (props.color) {
      case "default":
        return DefaultAppTheme.button_default_label;
      case "primary":
        return DefaultAppTheme.button_primary;
      case "warning":
        return DefaultAppTheme.button_warning;
      case "success":
        return DefaultAppTheme.button_success;
      case "danger":
        return DefaultAppTheme.button_danger;
    }
  }};
  background-color: ${(props: InputButtonColorProps) => {
    switch (props.color) {
      case "default":
        return DefaultAppTheme.button_default;
      case "primary":
        return DefaultAppTheme.button_primary;
      case "warning":
        return DefaultAppTheme.button_warning;
      case "success":
        return DefaultAppTheme.button_success;
      case "danger":
        return DefaultAppTheme.button_danger;
    }
  }};
`;

export const ButtonLabel = styled.Text`
  color: ${(props: InputButtonColorProps) => {
    switch (props.color) {
      case "default":
        return DefaultAppTheme.button_default_label;
      case "primary":
        return DefaultAppTheme.button_primary_label;
      case "warning":
        return DefaultAppTheme.button_warning_label;
      case "success":
        return DefaultAppTheme.button_success_label;
      case "danger":
        return DefaultAppTheme.button_danger_label;
    }
  }};
`;
