import React from "react";
import NavBar from "../../components/Nav-Bar/NavBar";
import "./footer.css";
import CopyWrite from "./copywrite/copywrite";

const Footer = () => {
  return (
    <div className="footer-container">
        <NavBar className="nav-bar" />
        <CopyWrite />
    </div>
  );
};

export default Footer;
