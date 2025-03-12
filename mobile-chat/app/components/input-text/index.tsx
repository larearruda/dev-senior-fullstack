import { useState } from "react";
import { TextBox, TextBoxLabel, TextView } from "./input-text.styles";

interface InputButtonProps {
  value: string;
  onChangeInputText: (text: string) => void;
  placeholder?: string;
  label?: string;
}

export default function InputText({
  value,
  placeholder,
  label,
  onChangeInputText,
}: InputButtonProps) {
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
}
