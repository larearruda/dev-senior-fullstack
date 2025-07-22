import React from "react";
import { Button, ButtonLabel } from "./input-button.styles";
import { ColorOptions } from "@/src/theme/colors";

interface InputButtonProps {
  buttonLabel: string;
  color: ColorOptions;
  onPress?: () => any;
}

const InputButton: React.FC<InputButtonProps> = ({
  buttonLabel,
  onPress,
  color,
}: InputButtonProps) => {
  return (
    <Button color={color} onPress={onPress}>
      <ButtonLabel color={color}> {buttonLabel} </ButtonLabel>
    </Button>
  );
};

export default InputButton;
