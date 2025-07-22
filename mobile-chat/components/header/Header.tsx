import React from "react";
import { Text, View } from "react-native";
import styles from "./header.styles";

export type HeaderProps = {
  headerTitle: string;
};

const Header: React.FC<HeaderProps> = ({ headerTitle }) => {
  return (
    <View style={styles.homeHeaderBlock}>
      <Text style={styles.homeHeaderTitle}>{headerTitle}</Text>
    </View>
  );
};
export default Header;
