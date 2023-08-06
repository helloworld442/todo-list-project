import { useState } from "react";
import {
  StTodoItem,
  StTodoList,
  TodoItemCheckBox,
  TodoItemIcon,
  TodoItemText,
} from "./todolist.style";

const colorDict = {
  BLUE: "#8fb0c6",
  RED: "#BE5A5A",
  GREEN: "#388E3C",
  PURPLE: "#8D508D",
};

const TodoList = ({ todos }) => {
  return (
    <StTodoList>
      {todos.map((todo) => (
        <TodoItem key={todo.id} title={todo.title} color={todo.color} />
      ))}
    </StTodoList>
  );
};

const TodoItem = ({ title, color }) => {
  const [active, setActive] = useState(false);

  const onClickCheckBox = () => setActive(!active);

  return (
    <StTodoItem>
      <TodoItemIcon color={colorDict[color]} />
      <TodoItemText $active={active}>{title}</TodoItemText>
      <TodoItemCheckBox onClick={onClickCheckBox} />
    </StTodoItem>
  );
};

export default TodoList;
