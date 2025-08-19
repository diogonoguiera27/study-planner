import { Home } from "@/pages/Home";
import { Login } from "@/pages/Login";



import NoMatch from "@/pages/NoMatch";
import { Route, Routes } from "react-router-dom";

export const Rotas: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />

    <Route path="*" element={<NoMatch />} />
  </Routes>
);
