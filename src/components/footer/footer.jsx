import React from "react";
import NavBar from "../nav-bar/NavBar";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
        <NavBar className="nav-bar" />
        <div className='copyright'>
        &copy;copyright, all right reserved. Designed and Built by UHEGBU, Ogechi Juliet
    </div>
    </div>
  );
};

export default Footer;
