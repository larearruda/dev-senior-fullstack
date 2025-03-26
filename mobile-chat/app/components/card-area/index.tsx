import React from "react";
import { Text } from "react-native";
import { CardAreaView } from "./card-area.styles";

const CardArea: React.FC = ({ children }: React.PropsWithChildren) => {
  return (
    <CardAreaView>
      <Text>{children} </Text>
    </CardAreaView>
  );
};

export default CardArea;
