import TodoList from "./TodoListComponent";

const TodoListContainer = () => {
  return (
    <TodoList>
      <TodoList.Title />
      <TodoList.Toggle />
      <TodoList.Menu>
        <TodoList.Item />
      </TodoList.Menu>
    </TodoList>
  );
};

export { TodoListContainer };
