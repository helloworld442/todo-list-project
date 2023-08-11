import { styled } from "styled-components";
import { useState } from "react";
import { TodoDateIcomText, TodoDateLabelText, TodoDateValueText } from "../atom/Text/TodoDateText";

const TodoDateField = ({ label, value }) => {
  const [active, setActive] = useState(false);

  const onToggleItem = () => setActive(!active);

  return (
    <TodoDateItemStyle onClick={onToggleItem}>
      <TodoDateLabelText>{label}</TodoDateLabelText>
      <TodoDateValueText>{value}</TodoDateValueText>
      {active && <TodoDateIcomText />}
    </TodoDateItemStyle>
  );
};

const TodoDateItemStyle = styled.li`
  position: relative;
  width: 24px;
  height: 100%;
  text-align: center;
  cursor: pointer;
`;

export default TodoDateField;
