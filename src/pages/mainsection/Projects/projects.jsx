import React from "react";
import Title from "../../../components/mainsection/titleComp";
import "./projects.css";
import ProjectsData from "../../../components/ProjectsData/projectsData";



const Projects = () => {
  return (
    <div className="my-projects-wrapper">
      <Title title={"My Projects"} />
      <div className="my-projects">
        {ProjectsData.map((project, id) => (
          <div key={id} className="projects">
            <img src={`../../../images/${project.image}`} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <div>{project.description}</div>
              <div>Tools: {project.tools}</div>
              <div className="View">
                <a
                  href={project.views}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
