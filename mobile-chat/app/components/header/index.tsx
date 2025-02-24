import { Text, View } from "react-native";
import styles from "./header.styles";

export type HeaderProps = {
  headerTitle: string;
};

export default function Header({ headerTitle }: HeaderProps) {
  return (
    <View style={styles.homeHeaderBlock}>
      <Text style={styles.homeHeaderTitle}>{headerTitle}</Text>
    </View>
  );
}
