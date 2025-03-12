import { DefaultAppTheme } from "@/app/components/theme/globals";
import styled from "styled-components/native";

export const ContainerView = styled.View`
  height: 100%;
`;

export const FormView = styled.View`
  flex: 1;
  padding: 10px;
  margin: 12px;
  border-width: 1px;
  border-radius: 10px;
  border-color: ${DefaultAppTheme.border_light_gray};
  background-color: ${DefaultAppTheme.bg_white};
`;

export const FormItem = styled.View`
  margin-bottom: 10px;
`;
