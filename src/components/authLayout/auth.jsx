import React from "react";
import { useTheme } from "../context/ThemeContext";
import Footer from "../footer/footer";
import Header from "../header/Header";
import "./auth.css";

const AuthLayout = ({ children }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className={`layout-wrapper ${isDarkMode ? "dark" : "light"}`}>
      <header>
        <div className="header-content">
          <Header />
          <button className="btn" onClick={toggleTheme}>
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </header>

      <main>
        <div className="children">{children}</div>
      </main>

      <footer>
        <div className="footer-content">
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default AuthLayout;
