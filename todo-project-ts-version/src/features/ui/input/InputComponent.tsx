import { memo } from "react";
import { InputBoxStyle, InputErrorText, InputLabel, InputStyle } from "./InputStyle";
import { InputBoxProps } from "./InputInterface";

const InputBox = memo(({ type, name, value, error, onChange }: InputBoxProps) => {
  return (
    <InputBoxStyle>
      <InputLabel>{name}</InputLabel>
      <InputStyle type={type} name={name} value={value} error={error} onChange={onChange} />
      <InputErrorText>{error}</InputErrorText>
    </InputBoxStyle>
  );
});

export { InputBox };
