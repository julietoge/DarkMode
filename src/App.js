import React from "react";
import "./App.css";
import Header from "./pages/header/header";
import Mainsection from "./pages/mainsection/mainsection";
import Footer from "./pages/footer/footer";
import { Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <div className="App">
      <Header className="header" />
      <Mainsection className="mainSection" />
      <Footer className="footer" />

    </div>
  );
};

export default App;
