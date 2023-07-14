import React from 'react'
import './projects.css'
import Title from '../../../components/mainsection/titleComp'
import OcrProject from '../Projects/ocr/ocr-project'
import StopWatchProject from '../Projects/stopWatch/stop-watch-project'
import PortfolioProject from '../Projects/portfolio/portfolio-project'

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