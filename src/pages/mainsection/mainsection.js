import React from "react";
import "./mainsection.css";
import Introduction from "./introduction/introduction";
import About from "./about/about";
import SkillsTools from "./skillsTools/skillsTools";
import Projects from "./Projects/projects";
import Contact from "./contact/contact";

const Mainsection = () => {
  return (
    <div className="Mainsection-wrapper">
        <Introduction className="introduction" />
        <div className="mainsection">
          <About className="about" />
          <SkillsTools className="skills-tools" />
          <Projects className="projects" />
          <Contact className="contact" />
      </div>
    </div>
  );
};

export default Mainsection;
