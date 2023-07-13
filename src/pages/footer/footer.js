import React from "react";
import SectionsLink from "./Link-to-sections/sectionslink";
import "./footer.css";
import CopyWrite from "./copywrite/copywrite";

const Footer = () => {
  return (
    <div className="footer-container">
      {/* <div className="footer-content"> */}
        <SectionsLink />
        <CopyWrite />
      {/* </div> */}
    </div>
  );
};

export default Footer;
