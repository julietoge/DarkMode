import React from "react";
import Translate3d from "./theGlobe";
import "./introduction.css";

const Introduction = () => {
  return (
    <div className="introduction-conntainer">
      <div className="intro-text">
        <h2>Hello!</h2>
        <h1>I'm Ogechi</h1>
        <h4>I'm a passionate Frontend Developer/Engineer</h4>
        <p>
          I specialize in creating visually appealing and interactive web
          experiences that combine functionality with user-centric with a strong
          commitment. I have a deep love for technology and a genuine curiosity
          for exploring the latest trends and advancements in frontend
          development.
        </p>
      </div>
      <div className="Translate3d-img">
        <Translate3d />
      </div>
    </div>
  );
};

export default Introduction;
