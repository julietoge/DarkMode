import React from 'react'
import HeaderComp from './headerLinksComp';
import './links.css'

const Links = () => {
  return (
         <div className='haspac-wrapper'>
        <HeaderComp pages={"Home"} />
    <HeaderComp pages={"About"} />
    <HeaderComp pages={"Skills & Tools"} />
    <HeaderComp pages={"Projects"} />
    <HeaderComp pages={"Articles"} />
    <HeaderComp pages={"Contact"} />
    </div>
  )
}

export default Links;