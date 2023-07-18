import React from "react";
import "./header.css";
import NavBar from "../../components/Nav-Bar/NavBar";
import Logo from "../../components/header-logo/logo";

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <div className="Logo">
          <Logo />
        </div>
        <div className="Logo">
          <NavBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
