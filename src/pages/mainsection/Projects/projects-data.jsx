import React from 'react';
import ProjectComp from '../../../components/mainsection/Project-comp';
import Title from '../../../components/mainsection/titleComp';
import './projects.css'


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
    description: 'Tempokeeper stopwatch is a web-based application that allows users to measure elapsed time accurately. The stopwatch provides accurate timekeeping functionality, allowing users to measure elapsed time precisely. It also includes a digital clock displaying the current time for reference. Users can start, stop, and reset the stopwatch as needed to track different activities or events.',
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
