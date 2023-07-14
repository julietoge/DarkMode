import React from 'react';
import './Project-comp.css'

const ProjectComp = ({ title, description, imageUrl, webUrl }) => {
  return (
    <div className="project">
      <h2>{title}</h2>
      <img src={imageUrl} alt={title} />
      <p>{description}</p>
      <a href={webUrl} target="_blank" rel="noopener noreferrer"> View it here</a>
    </div>
  );
};

export default ProjectComp;