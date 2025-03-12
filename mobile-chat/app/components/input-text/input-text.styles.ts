import styled from "styled-components/native";
import { DefaultAppTheme } from "../theme/globals";

export const TextView = styled.View``;

export const TextBox = styled.TextInput`
  height: 40px;
  margin: 2px;
  border-width: 1px;
  padding: 10px;
  border-color: ${DefaultAppTheme.border_light_gray};
  border-radius: 5px;
  background-color: ${DefaultAppTheme.bg_white};
`;

export const TextBoxLabel = styled.Text`
  padding: 2px;
  /* margin-top: 20px; */
`;
