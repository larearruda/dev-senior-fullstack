import { DefaultAppFonts } from "@/app/theme/fonts";
import styled from "styled-components/native";

export const SafeAreaBackground = styled.SafeAreaView``;

export const Container = styled.View`
  justify-content: center;
  height: 100%;
`;

export const LoginBox = styled.View`
  background-color: #fff;
  border-width: 1px;
  border-color: #dbd8d8;
  border-radius: 10px;
  margin: 10px;
`;

export const LoginTitleHeader = styled.Text`
  font-size: ${DefaultAppFonts.title.h3.base};
  align-items: center;
  padding: 10px;
`;
