import styled from "styled-components/native";
import { ColorOptions, DefaultAppTheme } from "@/app/theme/colors";
import { spacing } from "@/app/theme/helpers";

export interface CardAreaColorProps {
  color: ColorOptions;
}

export const Container = styled.View`
  height: "100%";
`;

export const CardAreaView = styled.View`
  flex: 1;
  border-width: 1px;
  border-radius: 10px;
  padding-vertical: ${spacing(1)}px;
  padding-horizontal: ${spacing(2)}px;
  min-height: ${spacing(4)}px; /* evita cortar o texto */
  margin: ${spacing(1.5)}px;
  border-color: ${DefaultAppTheme.border_light_gray};
  background-color: ${DefaultAppTheme.bg_white};
`;

//
