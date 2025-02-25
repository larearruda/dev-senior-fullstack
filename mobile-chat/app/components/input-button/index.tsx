import { ColorOptions } from "../theme/globals";
import { Button, ButtonLabel } from "./input-button.styles";

interface InputButtonProps {
  buttonLabel: string;
  color: ColorOptions;
  onPress?: () => any;
}
export default function InputButton({
  buttonLabel,
  onPress,
  color,
}: InputButtonProps) {
  return (
    <Button color={color} onPress={onPress}>
      <ButtonLabel color={color}> {buttonLabel} </ButtonLabel>
    </Button>
  );
}
