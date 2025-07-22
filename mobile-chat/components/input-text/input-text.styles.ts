import styled from "styled-components/native";
import { DefaultAppFonts } from "../../src/theme/fonts";
import { spacing } from "@/src/theme/helpers";
import { DefaultAppTheme } from "@/src/theme/colors";

export const TextView = styled.View``;

export const TextBox = styled.TextInput`
  border-width: 1px;
  border-radius: 5px;
  padding-vertical: ${spacing(1)}px;
  padding-horizontal: ${spacing(2)}px;
  min-height: ${spacing(4)}px; /* evita cortar o texto */
  margin: ${spacing(1.5)}px;
  font-size: ${DefaultAppFonts.body.p.base};
  border-color: ${DefaultAppTheme.border_light_gray};
  background-color: ${DefaultAppTheme.bg_white};
`;

export const TextBoxLabel = styled.Text`
  font-size: ${DefaultAppFonts.body.p.base};
`;
