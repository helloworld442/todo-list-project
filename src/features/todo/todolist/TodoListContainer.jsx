import { useQuery } from "react-query";
import { getTodos } from "../../../api/todo";
import MockTodoItem from "./TodoListSkeleton";
import TodoList from "./TodoListComponent";

const TodoListContainer = () => {
  const { isLoading, isError, data } = useQuery("todos", getTodos, {
    retry: 1,
    staleTime: 5 * 1000,
    cacheTime: 60 * 1000,
  });

  if (isLoading)
    return (
      <TodoList>
        <TodoList.Title />
        <TodoList.Toggle />
        <MockTodoItem />
      </TodoList>
    );

  if (isError)
    return (
      <TodoList>
        <TodoList.Title />
        <TodoList.Toggle />
        <MockTodoItem />
      </TodoList>
    );

  return (
    <TodoList>
      <TodoList.Title />
      <TodoList.Toggle />
      <TodoList.Menu>
        {data.map((item) => (
          <TodoList.Item key={item.id} item={item} />
        ))}
      </TodoList.Menu>
    </TodoList>
  );
};

export { TodoListContainer };
