import React from 'react'
import Waving from '../../images/hello1.png'
import './helloEmoji.css'

const HelloEmoji = () => {
  return (
    <div className='waving'>
        <img src={Waving} alt="" />
    </div>
  )
}

export default HelloEmoji;