import React from 'react';
import ProjectComp from '../../../components/mainsection/Project-comp';
import Title from '../../../components/mainsection/titleComp';
import './projects.css'
import '../../../images/message-logo.png'


const projectsData = [
  {
    title: 'SwiftLexi OCR',
    imageUrl: 'https://ogechi-juliet-uhegbu.netlify.app/',
    description: 'This is the description of SwiftLexi OCR',
    webUrl: 'https://swiftlexi-ocr.netlify.app/',
  },
  {
    title: 'My Portfolio',
    imageUrl: 'path/to/project2.png',
    description: 'This is the description of My Portfolio',
    webUrl: 'https://ogechi-juliet-uhegbu.netlify.app/',
  },
  {
    title: 'StopWatch',
    imageUrl: '../../../images/message-logo.png',
    description: 'This is the description of StopWatch',
    webUrl: 'https://stirring-stopwatch.netlify.app/',
  },
  // Add more projects here
];

const Projects = () => {
    return (
      <div className="my-projects-wrapper">
       <Title title={"My Projects"} />
       <div className="my-projects">
        {projectsData.map((project, index) => (
          <div className="projects">
            <ProjectComp
            key={index}
            title={project.title}
            imageUrl={project.imageUrl}
            description={project.description}
            webUrl={project.webUrl}
          />
          </div>
          
        ))}
        </div>
      </div>
    );
  };
  
  export default Projects;