import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "../components/Dashboard";
import Login from "../components/User/Login";
import Register from "../components/User/Register";
import Categories from "../components/Categories";
import Sources from "../components/Sources";

const RoutesComponent = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/sources" element={<Sources />} />
    </Routes>
  </BrowserRouter>
);

export default RoutesComponent;
