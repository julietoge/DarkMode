import React from 'react'
import { Link } from 'react-router-dom'
import Auth from '../../components/authLayout/auth'
import "./Welcome.css"


const Welcome = () => {
  return (
    <Auth>
      <div className="welcome">
        <div>
        <p>HEY, I'M UHEGBU, OGECHI JULIET</p>
        <p>BUT YOU CAN CALL ME OGE</p>
        <p>I'm a Front-end Web Developer</p>
        </div>
     <div>
      <Link to='/projects'>(arrow-right)see my Projects</Link>
      <Link to='/about'>(arrow-right)More about me</Link>
     </div>
     
    
      
        {/* <p>
        I specialize in creating visually appealing and interactive web
        experiences that combine functionality with user-centric with a strong
        commitment. I have a deep love for technology and a genuine curiosity
        for exploring the latest trends and advancements in frontend
        development.
        </p> */}
      </div>
    </Auth>
  )
}

export default Welcome