import React from 'react'
import './skillsLogo.css'


const SkillsLogo = ({logo, logo_alt, skillName, subtitle}) => {
  return (
    <div className='skillsLogo'>
        <img src={logo} alt={logo_alt} />
        <div>{skillName}</div>
    </div>
  )
}

export default SkillsLogo;