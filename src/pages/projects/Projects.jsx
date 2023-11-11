import React from "react";
import AuthLayout from "../../components/authLayout/auth";
import ProjectsData from "./projectsData";

const Projects = () => {
  return (
    <AuthLayout>
      My Projects
      <div className="my-projects">
        {ProjectsData.map((project) => (
          <div key={project.id} className="projects">
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <div>{project.description}</div>
              <div>Tools: {project.tools}</div>
              <a
                href={project.views}
                className="View"
                target="_blank"
                rel="noopener noreferrer"
              >
                View
              </a>
            </div>
          </div>
        ))}
      </div>
    </AuthLayout>
  );
};

export default Projects;
