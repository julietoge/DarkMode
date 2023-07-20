import Stopwatch from '../../images/Screenshot_OCR.jpg'
import Portfolio from '../../images/Capture-portfolio.PNG'
import ocr from '../../images/Screenshot_Stopwatch.jpg'

const ProjectsData = [
  {
    id: 1,
    image: ocr,
    title: "SwiftLexi OCR",
    description: "A project showcasing Optical Character Recognition technology.",
    tools: "HTML, CSS, ReactJS, Third Party Libraries: Tesseractjs",
    views: "https://swiftlexi-ocr.netlify.app/",
  },
  {
    id: 2,
    image: Portfolio,
    title: "My Portfolio",
    description: "A professional project demonstrating advanced skills.",
    tools: "HTML, CSS, ReactJS",
    views: "https://ogechi-juliet-uhegbu.netlify.app/",
  },
  {
    id: 3,
    image: Stopwatch,
    title: "TempoKeeper",
    description: "A simple stopwatch application built using JavaScript.",
    tools: "HTML, CSS, JavaScript",
    views: "https://tempokeeper.netlify.app/",
  },
];
export default ProjectsData;
