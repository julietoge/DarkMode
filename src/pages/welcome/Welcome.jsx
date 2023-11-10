import React from 'react'
import Auth from '../../components/authLayout/auth'


const Welcome = () => {
  return (
    <Auth>
      <div className='waving'>
      Hello
    </div>
      Welcome
      I'm Ogechi
      I'm a Frontend Developer
      <div className="intro-description">
        <p>
        I specialize in creating visually appealing and interactive web
        experiences that combine functionality with user-centric with a strong
        commitment. I have a deep love for technology and a genuine curiosity
        for exploring the latest trends and advancements in frontend
        development.
        </p>
      </div>
    </Auth>
  )
}

export default Welcome