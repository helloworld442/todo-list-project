import { useQuery } from "react-query";
import TodoList from "../components/todo/todolist/TodoList";
import { getTodos } from "../api/todo";

const TodoListContainer = () => {
  const { isLoading, isError, data } = useQuery("todos", getTodos, {
    retry: 1,
    staleTime: 5 * 1000,
    cacheTime: 60 * 1000,
  });

  if (isLoading) return <div>로딩 중입니다 ...</div>;

  if (isError) return <div>에러 입니다 ...</div>;

  return <TodoList todos={data.data} />;
};

export default TodoListContainer;
