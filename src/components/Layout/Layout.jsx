import React from "react";
import Header from "../Header/Header";

function Layout({ children }) {
  return (
    <div style={{ width: "100vw" }}>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
