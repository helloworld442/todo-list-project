import { useState } from "react";
import "./TodoList.scss";
import classNames from "classnames";

const TodoList = () => {
  return (
    <ul className="todolist">
      <TodoItem />
    </ul>
  );
};

const TodoItem = () => {
  const [active, setActive] = useState(false);

  const onToggleCheckBox = () => setActive(!active);

  return (
    <li className="todoitem">
      <span className="todoitem-icon"></span>
      <span className={classNames("todoitem-text", { active })}>asdf</span>
      <input className="todoitem-checkbox" type="checkbox" onClick={onToggleCheckBox} />
    </li>
  );
};

export { TodoList };
