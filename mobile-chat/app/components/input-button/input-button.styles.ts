import styled from "styled-components/native";
import { DefaultAppFonts } from "../../theme/fonts";
import { spacing } from "@/app/theme/helpers";
import { ColorOptions, DefaultAppTheme } from "@/app/theme/colors";

export interface InputButtonColorProps {
  color: ColorOptions;
}

export const Button = styled.TouchableOpacity<InputButtonColorProps>`
  padding-vertical: ${spacing(1)}px;
  padding-horizontal: ${spacing(2)}px;
  min-height: ${spacing(4)}px; /* evita cortar o texto */
  margin: ${spacing(1.5)}px;
  border-width: 1px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
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
      case "dark":
        return DefaultAppTheme.button_dark;
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
      case "dark":
        return DefaultAppTheme.button_dark;
    }
  }};
`;

export const ButtonLabel = styled.Text`
  font-size: ${DefaultAppFonts.body.p.base};
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
      case "dark":
        return DefaultAppTheme.button_dark_label;
    }
  }};
`;
