import { styled } from "styled-components";
import { TodoWriteLabel } from "../atom/Label/TodoWriteLabel";
import { TodoWriteInput } from "../atom/Input/TodoWriteInput";
import { TodoWriteErrorText } from "../atom/Text/TodoWriteText";

const TodoWriteField = ({ type, name, value, error, onChange }) => {
  return (
    <TodoWriteFieldStyle>
      <TodoWriteLabel>{name}</TodoWriteLabel>
      <TodoWriteInput type={type} name={name} value={value} error={error} onChange={onChange} />
      <TodoWriteErrorText>{error}</TodoWriteErrorText>
    </TodoWriteFieldStyle>
  );
};

const TodoWriteFieldStyle = styled.div`
  width: 100%;
  height: 80px;
  padding-bottom: 24px;
`;

export default TodoWriteField;
