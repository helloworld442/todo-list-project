import { useState } from "react";
import {
  TodoListCol,
  TodoListItemCheckBox,
  TodoListItemIcon,
  TodoListItemStyle,
  TodoListItemText,
  TodoListMenuStyle,
  TodoListTitleBox,
  TodoListTitleText,
  TodoListToggleIcon,
  TodoListToggleItem,
  TodoListToggleMenu,
} from "./TodoListStyle";

const TodoList = ({ children }) => {
  return <TodoListCol>{children}</TodoListCol>;
};

const TodoListTitle = () => {
  return (
    <TodoListTitleBox>
      <TodoListTitleText size="small">Friday,May 11</TodoListTitleText>
      <TodoListTitleText size="large">To-Do List</TodoListTitleText>
    </TodoListTitleBox>
  );
};

const TodoListToggle = () => {
  const dates = ["S", "M", "T", "W", "T", "F", "S"];
  const [active, setActive] = useState(0);

  const onToggleItem = (idx) => setActive(idx);

  return (
    <TodoListToggleMenu>
      {dates.map((date, idx) => (
        <TodoListToggleItem key={idx} onClick={() => onToggleItem(idx)}>
          <span className="day-date">{date}</span>
          <span className="day-num">{idx + 6}</span>
          {idx === active && <TodoListToggleIcon />}
        </TodoListToggleItem>
      ))}
    </TodoListToggleMenu>
  );
};

const TodoListMenu = ({ children }) => {
  return <TodoListMenuStyle>{children}</TodoListMenuStyle>;
};

const TodoListItem = ({ item }) => {
  const [active, setActive] = useState(false);

  const onToggleCheckBox = () => setActive(!active);

  return (
    <TodoListItemStyle>
      <TodoListItemIcon color={item.color} />
      <TodoListItemText active={active}>{item.title}</TodoListItemText>
      <TodoListItemCheckBox onClick={onToggleCheckBox} />
    </TodoListItemStyle>
  );
};

TodoList.Title = TodoListTitle;
TodoList.Toggle = TodoListToggle;
TodoList.Menu = TodoListMenu;
TodoList.Item = TodoListItem;

export default TodoList;
