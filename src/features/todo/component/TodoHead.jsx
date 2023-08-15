import "./TodoHead.scss";

const TodoHead = () => {
  return (
    <div className="todohead-col">
      <h3 className="todohead-title small">Friday,May 11</h3>
      <h4 className="todohead-title large">To-Do List</h4>
      <ul className="todohead-date-list">
        <li className="todohead-date-item">
          <span className="date-day">6</span>
          <span className="date-num">5</span>
        </li>
      </ul>
    </div>
  );
};

export { TodoHead };
