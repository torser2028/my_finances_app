import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "../components/Dashboard";
import Login from "../components/User/Login";
import Register from "../components/User/Register";

const RoutesComponent = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>
);

export default RoutesComponent;
