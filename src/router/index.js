import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Layout from "../components/Layout/Layout";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/contato"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route
          path="/sobre"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
