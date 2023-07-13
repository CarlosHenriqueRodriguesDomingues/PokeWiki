import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/sobre" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
