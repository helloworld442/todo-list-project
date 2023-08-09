import styled, { css } from "styled-components";

interface InputBoxProps {
  type?: string;
  name?: string;
  value?: string;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputBox = ({ type, name, value, error, onChange }: InputBoxProps) => {
  return (
    <InputBoxStyle>
      <InputLabel>ID</InputLabel>
      <InputStyle type={type} name={name} value={value} error={error} onChange={onChange} />
      <InputErrorText>{error}</InputErrorText>
    </InputBoxStyle>
  );
};

const InputBoxStyle = styled.div`
  width: 100%;
  height: 80px;
`;

const InputStyle = styled.input<InputBoxProps>`
  width: 100%;
  height: 50px;
  padding: 12px;
  margin: 6px 0;
  box-sizing: border-box;
  border: 2px solid #aaa;
  border-radius: 8px;
  outline: none;
  font-size: 1rem;
  font-weight: bold;
  color: #333;

  ${(props) =>
    props.error &&
    css`
      border: 2px solid red;
      border-radius: 8px;
      box-sizing: border-box;
    `}
`;

const InputLabel = styled.label`
  font-size: 1rem;
  font-weight: bold;
  color: #aaa;
`;

const InputErrorText = styled.span`
  font-size: 0.8rem;
  font-weight: 550;
  color: red;
`;

export default InputBox;
