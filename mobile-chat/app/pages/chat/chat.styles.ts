import styled from "styled-components/native";
import { DefaultAppTheme } from "@/app/theme/globals";

export const ConversationBox = styled.View`
  flex: 2;
  padding: 10px;
  margin: 12px;
  border-width: 1px;
  border-radius: 10px;
  border-color: ${DefaultAppTheme.border_light_gray};
  background-color: ${DefaultAppTheme.bg_white};
`;

export const MessageReceived = styled.View`
  width: 80%;
  padding: 10px;
  margin: 12px;
  border-width: 1px;
  border-radius: 10px;
  border-color: ${DefaultAppTheme.border_medium_gray};
  background-color: ${DefaultAppTheme.bg_white};
  align-self: flex-start;
`;

export const MessageSent = styled.View`
  width: 80%;
  padding: 10px;
  margin: 12px;
  border-width: 1px;
  border-radius: 10px;
  border-color: ${DefaultAppTheme.border_medium_gray};
  background-color: ${DefaultAppTheme.bg_light_gray};
  align-self: flex-end;
`;

export const TextBox = styled.TextInput`
  height: 40px;
  margin: 12px;
  border-width: 1px;
  padding: 10px;
  border-color: ${DefaultAppTheme.border_light_gray};
  border-radius: 5px;
  background-color: ${DefaultAppTheme.bg_white};
`;
