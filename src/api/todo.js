import api from "./axios";

const getTodos = async () => {
  const response = await api.get("/todos");
  return response;
};

const postTodo = async (req) => {
  const response = await api.post("/todos", req);
  return response;
};

export { getTodos, postTodo };
