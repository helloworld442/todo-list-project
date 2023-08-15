import "./TodoList.scss";

const TodoList = () => {
  return (
    <ul className="todolist">
      <TodoItem />
    </ul>
  );
};

const TodoItem = () => {
  return (
    <li className="todoitem">
      <span className="todoitem-icon"></span>
      <span className="todoitem-text">asdf</span>
      <input className="todoitem-checkbox" type="checkbox" />
    </li>
  );
};

export { TodoList };
