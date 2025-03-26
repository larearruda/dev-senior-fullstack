import React from "react";
import { Text } from "react-native";
import { CardAreaView } from "./card-area.styles";

type CardAreaProps = {
  children: React.ReactNode;
};

const CardArea: React.FC<CardAreaProps> = ({ children }) => {
  return (
    <CardAreaView>
      <Text>{children} </Text>
    </CardAreaView>
  );
};

export default CardArea;
