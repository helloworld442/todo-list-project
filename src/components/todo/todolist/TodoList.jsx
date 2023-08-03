import { useState } from "react";
import {
  StTodoItem,
  StTodoList,
  TodoItemCheckBox,
  TodoItemIcon,
  TodoItemText,
} from "./style";

const TodoList = () => {
  return (
    <StTodoList>
      <TodoItem />
    </StTodoList>
  );
};

const TodoItem = () => {
  const [active, setActive] = useState(false);

  const onClickCheckBox = () => setActive(!active);

  return (
    <StTodoItem>
      <TodoItemIcon />
      <TodoItemText $active={active}>todo</TodoItemText>
      <TodoItemCheckBox onClick={onClickCheckBox} />
    </StTodoItem>
  );
};

export default TodoList;
