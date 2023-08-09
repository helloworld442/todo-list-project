import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Write from "../pages/Write";
import Chart from "../pages/Chart";
import Login from "../pages/Login";
import Register from "../pages/Register";

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
