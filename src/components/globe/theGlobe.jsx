import React from 'react'
import './theGlobe.css'
import Globe from '../../images/globe13.png'

const Translate3d = () => {
  return (
    <div className='globe-wrapper'>
        <img src={Globe} alt="globe" className='rotate-image' />
    </div>
  )
}

export default Translate3d;