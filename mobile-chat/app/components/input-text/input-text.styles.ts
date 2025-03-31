import styled from "styled-components/native";
import { DefaultAppFonts, DefaultAppTheme } from "../../theme/fonts";

export const TextView = styled.View``;

export const TextBox = styled.TextInput`
  height: 40px;
  margin: 2px;
  border-width: 1px;
  border-radius: 5px;
  padding: 10px;
  font-size: ${DefaultAppFonts.body.p.base};
  border-color: ${DefaultAppTheme.border_light_gray};
  background-color: ${DefaultAppTheme.bg_white};
`;

export const TextBoxLabel = styled.Text`
  padding: 2px;
  font-size: ${DefaultAppFonts.body.p.base};
  /* margin-top: 20px; */
`;
