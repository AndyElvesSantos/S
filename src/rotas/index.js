import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../paginas/Home";
import Sabores from "../paginas/Sabores";
import Sobre from "../paginas/Sobre";

const Rotas = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route path="/sabores" element={<Sabores />}></Route>
      <Route path="/sobre" element={<Sobre />}></Route>
    </Routes>
  </BrowserRouter>
);
export default Rotas;
