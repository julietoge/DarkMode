import React from "react";
import Footer from "../footer/footer";
import Header from "../header/Header";
import "./auth.css";

const Auth = ({ children }) => {
  return (
    <div className="auth">
      <div className="header-wrapper">
        <div className="header">
          <Header />
        </div>
      </div>

      <div className="children-wrapper">
        <div className="children">{children}</div>
      </div>
      <div className="footer-wrapper">
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Auth;
