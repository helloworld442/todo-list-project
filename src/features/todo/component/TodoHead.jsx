import "./TodoHead.scss";

const TodoHead = () => {
  return (
    <div className="todohead-col">
      <h3 className="todohead-title small">Friday,May 11</h3>
      <h4 className="todohead-title large">To-Do List</h4>
      <ul className="todohead-date-list">
        <li className="todohead-date-item"></li>
      </ul>
    </div>
  );
};

export { TodoHead };
