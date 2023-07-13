import React from "react";
import "./skillsTools.css";
import Title from "../../../components/mainsection/titleComp";
import SkillsLogo from "../../../components/mainsection/skillsLogo";

const SkillsTools = () => {
  return (
    <div className="skills-Tools-wrapper">
      <Title title={"Skills & Tools"} className="skillscomp" />
      <div className="skills-Tools-content">
        <div className="technologies">
          <SkillsLogo logo={".kk"} logo_alt={"html-logo"} skillName={"HTML5"} />
          <SkillsLogo logo={"kkk"} logo_alt={"css-logo"} skillName={"CSS3"} />
          <SkillsLogo
            logo={"ll"}
            logo_alt={"js-logo"}
            skillName={"JavaScript"}
          />
          <SkillsLogo
            logo={"kkk"}
            logo_alt={"react-logo"}
            skillName={"ReactJS"}
          />
          <SkillsLogo
            logo={"kkk"}
            logo_alt={"Vscode-logo"}
            skillName={"Visual Studio"}
          />
          <SkillsLogo logo={"kkk"} logo_alt={"git-logo"} skillName={"Git"} />
          <SkillsLogo
            logo={"kkk"}
            logo_alt={"github-logo"}
            skillName={"GitHub"}
          />
        </div>

        <div className="external-libraries">
        <SkillsLogo
            subtitle={"External libraries:"}
          />
          <SkillsLogo
            logo={"kkk"}
            logo_alt={"materialui-logo"}
            skillName={"Material UI"}
          />
          <SkillsLogo
            logo={"kkk"}
            logo_alt={"tailwind-logo"}
            skillName={"Tailwind"}
          />
          <SkillsLogo
            logo={"kkk"}
            logo_alt={"bootstrap-logo"}
            skillName={"React-BootStrap"}
          />
        </div>

        <div className="Softskills">
        <SkillsLogo
            subtitle={"Soft Skills:"}
          />
          <div>
           <span>Problem solving</span><span>Problem solving</span>           <span>Problem solving</span><span>Problem solving</span><span>Problem solving</span> Problem solving
          </div>

        </div>
        <div className="current-work">
        <SkillsLogo
            subtitle={"Currently working on:"}
          />
          <div className="current-work-content">
            Improving my skills in, and understanding of vannnllia JavaScript and React. Also, external libraries: Material UI, Tailwind, and React-BootSrap and having fun with #100DaysOfCode building & animating via CSS. <a href="https://www.linkedin.com/in/ogechi-juliet-uhegbu" target="_blank" rel="noopener noreferrer">Follow my Journery Here</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsTools;
