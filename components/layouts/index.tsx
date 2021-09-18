import React from "react";
import Footer from "../Footer";
import Header from "../Header";

interface Layout {
  children: any;
}
const Layout: React.FC<Layout> = ({ children }) => {
  return (
    <>
      <div className="app-root">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
