import React from "react";
import "./mainsection.css";
import Introduction from "./introduction/introduction";
import About from "./about/about";
import SkillsTools from "./skillsTools/skillsTools";
import Projects from "./Projects/projects-data";
import Contact from "./contact/contact";

const Mainsection = () => {
  return (
    <div className="Mainsection-wrapper">
      <Introduction />
      <About />
      <SkillsTools />
      <Projects />
      <Contact />
    </div>
  );
};

export default Mainsection;
