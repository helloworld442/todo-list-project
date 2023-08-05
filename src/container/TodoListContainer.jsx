import { useQuery } from "react-query";
import TodoList from "../components/todo/todolist/TodoList";
import { getTodos } from "../api/todo";
import MockTodoItem from "../components/todo/todolist/Skeleton";

const TodoListContainer = () => {
  const { isLoading, isError, data } = useQuery("todos", getTodos, {
    retry: 1,
    staleTime: 5 * 1000,
    cacheTime: 60 * 1000,
  });

  if (isLoading) return <MockTodoItem />;

  if (isError) return <MockTodoItem />;

  return <TodoList todos={data.data} />;
};

export default TodoListContainer;
