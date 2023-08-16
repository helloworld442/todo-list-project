import "./TodoList.scss";
import TodoItem from "./TodoItem";

const TodoList = () => {
  return (
    <ul className="todolist">
      <TodoItem />
    </ul>
  );
};

export { TodoList };
