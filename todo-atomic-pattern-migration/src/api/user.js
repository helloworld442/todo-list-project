import api from "./axios";

const signUpUser = async (req) => {
  const response = await api.post("/api/user/v1/signup", req);
  return response.data;
};

const signInUser = async (req) => {
  const response = await api.post("/api/user/v1/login", req);
  return response.data;
};

const getRefreshToken = async () => {
  const response = await api.get("/api/user/v1/refresh");
  return response.data;
};

export { signInUser, signUpUser, getRefreshToken };
