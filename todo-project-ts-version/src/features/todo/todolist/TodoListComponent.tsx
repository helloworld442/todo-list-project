import { useState } from "react";
import { TodoListProps } from "./TodoListInterface";
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

const TodoListComponent = ({ children }: TodoListProps) => {
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

  const onToggleItem = (idx: number) => setActive(idx);

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

const TodoListMenu = ({ children }: TodoListProps) => {
  return <TodoListMenuStyle>{children}</TodoListMenuStyle>;
};

const TodoListItem = () => {
  const [active, setActive] = useState(false);

  const onToggleCheckBox = () => setActive(!active);

  return (
    <TodoListItemStyle>
      <TodoListItemIcon color="tomato" />
      <TodoListItemText active={active}>Todo</TodoListItemText>
      <TodoListItemCheckBox onClick={onToggleCheckBox} />
    </TodoListItemStyle>
  );
};

TodoListComponent.Title = TodoListTitle;
TodoListComponent.Toggle = TodoListToggle;
TodoListComponent.Menu = TodoListMenu;
TodoListComponent.Item = TodoListItem;

export default TodoListComponent;
