import React from 'react'
import './projects.css'
import Title from '../../../components/mainsection/titleComp'
import OcrProject from './ocr-project'
import StopWatchProject from './stop-watch-project'
import PortfolioProject from './portfolio-project'

const Projects = () => {
  return (
    <div className='my-projects-wrapper'>
        <Title title={"My Projects"} />
        <div className="projects">
            <OcrProject />
            <StopWatchProject />
            <PortfolioProject />
        </div>
    </div>
  )
}

export default Projects;