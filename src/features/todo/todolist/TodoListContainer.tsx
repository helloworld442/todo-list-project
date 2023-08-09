import TodoListComponent from "./TodoListComponent";

const TodoListContainer = () => {
  return (
    <TodoListComponent>
      <TodoListComponent.Title />
      <TodoListComponent.Toggle />
      <TodoListComponent.Menu>
        <TodoListComponent.Item />
      </TodoListComponent.Menu>
    </TodoListComponent>
  );
};

export { TodoListContainer };
