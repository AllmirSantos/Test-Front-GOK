import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SeachRepo from "./pages/seachRepo";
import Users from "./pages/users";
import Perfil from "./pages/perfil";
import React from "react";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SeachRepo />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/Perfil" element={<Perfil />} />
      </Routes>
    </Router>
  );
}

export default App;
