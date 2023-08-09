import api from "./axios";

interface APIResponse<T> {
  statusCode: number;
  errorCode: number;
  message: string;
  result: T;
  timestamp: Date;
}

interface APIPostRequest {
  title: string;
  color: string;
  day: string;
  isDone: boolean;
}

const getTodos = async <T>(): Promise<APIResponse<T>> => {
  const response = await api.get<APIResponse<T>>("/todos");
  return response.data;
};

const postTodo = async <T>(req: APIPostRequest): Promise<APIResponse<T>> => {
  const response = await api.post<APIResponse<T>>("/todos", req);
  return response.data;
};

export { getTodos, postTodo };
