import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/welcome/Welcome";
import Contact from "./pages/contact/Contact";
import Projects from "./pages/projects/Projects";
import About from "./pages/about/About";
import { DarkModeProvider } from "./components/context/DarkModeContext";

const App = () => {
  return (
    <DarkModeProvider>
      <Routes className="App">
        <Route path="/" element={<Welcome />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </DarkModeProvider>
  );
};

export default App;
