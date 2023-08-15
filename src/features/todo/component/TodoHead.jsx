import "./TodoHead.scss";
import { useState } from "react";

const TodoHead = () => {
  const dates = [
    { id: 0, day: "S", num: 6 },
    { id: 1, day: "M", num: 7 },
    { id: 2, day: "T", num: 8 },
    { id: 3, day: "W", num: 9 },
    { id: 4, day: "T", num: 10 },
    { id: 5, day: "F", num: 11 },
    { id: 6, day: "S", num: 12 },
  ];
  const [isOpen, setIsOpen] = useState(0);

  const onClickItem = (index) => setIsOpen(index);

  return (
    <div className="todohead-col">
      <h3 className="todohead-title small">Friday,May 11</h3>
      <h4 className="todohead-title large">To-Do List</h4>
      <ul className="todohead-date-list">
        {dates.map((date) => (
          <li key={date.id} className="todohead-date-item" onClick={() => onClickItem(date.id)}>
            <span className="date-day">{date.day}</span>
            <span className="date-num">{date.num}</span>
            {date.id === isOpen ? <span className="date-icon"></span> : null}
          </li>
        ))}
      </ul>
    </div>
  );
};

export { TodoHead };
