import { useState } from "react";
import { TextBox, TextBoxLabel, TextView } from "./input-text.styles";

interface InputButtonProps {
  value: string;
  onChangeInputText: (text: string) => void;
  placeholder?: string;
  label?: string;
}

const InputText: React.FC<InputButtonProps> = ({
  value,
  placeholder,
  label,
  onChangeInputText,
}: InputButtonProps) => {
  const [textValue, setTextValue] = useState("");
  return (
    <TextView>
      {label && <TextBoxLabel>{label} </TextBoxLabel>}
      <TextBox
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeInputText}
      />
    </TextView>
  );
};

export default InputText;
