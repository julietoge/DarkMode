import React from "react";
import "./skillsTools.css";
import Title from "../../../components/mainsection/titleComp";
import SkillsLogo from "../../../components/mainsection/skillsLogo";
import html from "../../../images/html-logo.png";
import css from "../../../images/css-logo.png";
import JavaScript from "../../../images/JavaScript-logo.png";
import react from "../../../images/react-logo.png";
import Vs from "../../../images/Vs-logo.png";
import git from "../../../images/git-logo.png";
import ResponsiveWebDesign from "../../../images/Respo-Design-logo.png";
import github from "../../../images/github-logo.png";
import MaterialUI from "../../../images/Material-UI-logo.png";
import Tailwind from "../../../images/Tailwind-logo.png";
import ReactBootstrap from "../../../images/React-bootstrap-logo.png";

const SkillsTools = () => {
  return (
    <div className="skills-Tools-wrapper">
      <Title title={"Skills & Tools"} className="skillscomp" />
      <div className="skills-Tools-content">
        <div className="technologies">
          <SkillsLogo logo={html} logo_alt={"html-logo"} skillName={"HTML5"} />
          <SkillsLogo logo={css} logo_alt={"css-logo"} skillName={"CSS3"} />
          <SkillsLogo
            logo={JavaScript}
            logo_alt={"js-logo"}
            skillName={"JavaScript"}
          />
          <SkillsLogo
            logo={react}
            logo_alt={"react-logo"}
            skillName={"ReactJS"}
          />
          <SkillsLogo
            logo={Vs}
            logo_alt={"Vscode-logo"}
            skillName={"Visual Studio"}
          />
          <SkillsLogo
            logo={ResponsiveWebDesign}
            logo_alt={"Respo.-Design-logo"}
            skillName={"Responsive Web Design"}
          />
          <SkillsLogo logo={git} logo_alt={"git-logo"} skillName={"Git"} />
          <SkillsLogo
            logo={github}
            logo_alt={"github-logo"}
            skillName={"GitHub"}
          />
        </div>

        <div className="external-libraries-wrapper">
          <h2>External libraries:</h2>
          <div className="external-libraries">
            <SkillsLogo
              logo={MaterialUI}
              logo_alt={"materialui-logo"}
              skillName={"Material UI"}
            />
            <SkillsLogo
              logo={Tailwind}
              logo_alt={"tailwind-logo"}
              skillName={"Tailwind"}
            />
            <SkillsLogo
              logo={ReactBootstrap}
              logo_alt={"bootstrap-logo"}
              skillName={"React-BootStrap"}
            />
          </div>
        </div>

        <div className="Softskills-wrapper">
          <h2>Soft Skills:</h2>
          <div className="Softskills">
            Effective communication & Time management | Project management |
            Critical Thinking | Research | Leadership | Accountability |
            Punctuality | Conflict Resolution | Creativity | Problem Solving |
            Team work management
          </div>
        </div>
        <div className="current-work">
          <h2>Currently working on:</h2>
          <div className="current-work-content">
            Improving my skills in, and understanding of{" "}
            <strong>vannnllia JavaScript</strong>
            and <strong>React</strong>. Also, external libraries:{" "}
            <strong>React-BootSrap</strong>, <strong>Material UI</strong>,{" "}
            <strong>Tailwind</strong>,and and having fun with{" "}
            <strong>#100DaysOfCode</strong> building & animating via{" "}
            <strong>CSS</strong> .{" "}
            <a
              href="https://www.linkedin.com/in/ogechi-juliet-uhegbu"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow my Journery Here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsTools;
