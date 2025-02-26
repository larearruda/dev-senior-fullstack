import { useState } from "react";
import { TextBox, TextBoxLabel, TextView } from "./input-text.styles";

interface InputButtonProps {
  value: string;
  onChangeInputText: (text: string) => void;
  placeholder?: string;
  hasLabelOverIt?: boolean;
  labelOverIt?: string;
}

export default function InputText({
  value,
  placeholder,
  hasLabelOverIt = false,
  labelOverIt,
  onChangeInputText,
}: InputButtonProps) {
  const [textValue, setTextValue] = useState("");
  return (
    <TextView>
      {hasLabelOverIt && <TextBoxLabel>{labelOverIt} </TextBoxLabel>}
      <TextBox
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeInputText}
      />
    </TextView>
  );
}
