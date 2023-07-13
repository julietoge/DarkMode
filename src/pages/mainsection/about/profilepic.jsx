import React from 'react'
import AboutPic from '../../../images/profile-pic-house-removebg.png'
import './profilepic.css'

const ProfilePic = () => {
  return (
    <div className='ProfilePic'>
        <img src={AboutPic} alt="ProfilePic" />
    </div>
  )
}

export default ProfilePic;