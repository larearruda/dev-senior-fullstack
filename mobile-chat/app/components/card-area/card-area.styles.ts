import styled from "styled-components/native";
import { ColorOptions, DefaultAppTheme } from "@/app/theme/colors";

export interface CardAreaColorProps {
  color: ColorOptions;
}

export const Container = styled.View`
  height: "100%";
`;

export const CardAreaView = styled.View`
  flex: 1;
  padding: 10px;
  margin: 12px;
  border-width: 1px;
  border-radius: 10px;
  border-color: ${DefaultAppTheme.border_light_gray};
  background-color: ${DefaultAppTheme.bg_white};
`;

//
