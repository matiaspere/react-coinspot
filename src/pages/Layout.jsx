import React from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import "../styles/Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <div className="Layout__header">
        <Header />
      </div>
      <div className="Layout__side">
        <SideBar />
      </div>
      <div className="Layout__main">{children}</div>
      {/* <div className="Layout__footer">
        <Footer />
      </div> */}
    </div>
  );
};

export default Layout;
