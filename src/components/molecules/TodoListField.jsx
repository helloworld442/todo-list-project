import { styled } from "styled-components";
import { useState } from "react";
import { TodoListIconText, TodoListTitleText } from "../atom/Text/TodoListText";
import { TodoListCheckBox } from "../atom/Input/TodoListInput";

const TodoListField = ({ title, color }) => {
  const [active, setActive] = useState(false);

  const onClickCheckBox = () => setActive(!active);

  return (
    <TodoListItemStyle>
      <TodoListIconText color={color} />
      <TodoListTitleText $active={active}>{title}</TodoListTitleText>
      <TodoListCheckBox onClick={onClickCheckBox} />
    </TodoListItemStyle>
  );
};

const TodoListItemStyle = styled.li`
  position: relative;
  width: 100%;
  height: 50px;
  padding-bottom: 24px;
`;

export default TodoListField;
