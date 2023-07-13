import React from 'react'

const SkillsLogo = ({logo, logo_alt, skillName, subtitle}) => {
  return (
    <div className='skillsLogo'>
        <img src={logo} alt={logo_alt} />
        <div>{skillName}</div>
        <h2>{subtitle}</h2>
    </div>
  )
}

export default SkillsLogo;