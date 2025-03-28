import React from "react";
import { Pressable, Text, View } from "react-native";
import { Container } from "./input-checkbox.styles";

interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
  label?: string;
}

const InputCheckbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  label,
}) => {
  return (
    <Container>
      <Pressable onPress={onChange}>
        <View>{checked && <Text>✔</Text>}</View>
        {label && <Text>{label}</Text>}
      </Pressable>
    </Container>
  );
};

export default InputCheckbox;
