import React from "react";
import { Text } from "react-native";
import { CardAreaView, Container } from "./card-area.styles";

type CardAreaProps = {
  children: React.ReactNode;
};

const CardArea: React.FC<CardAreaProps> = ({ children }) => {
  return (
    <Container>
      <CardAreaView>{children}</CardAreaView>
    </Container>
  );
};

export default CardArea;
