import { useState } from "react";
import { TextBox, TextBoxLabel, TextView } from "./input-text.styles";

interface InputButtonProps {
  onChangeInputText: () => any;
  placeholder?: string;
  hasLabelOverIt?: boolean;
  labelOverIt?: string;
}

export default function InputText({
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
        value={textValue}
        placeholder={placeholder}
        onChangeText={onChangeInputText}
      />
    </TextView>
  );
}
