import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Write from "../pages/Write";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Chart from "../pages/Chart";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/write" element={<Write />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
