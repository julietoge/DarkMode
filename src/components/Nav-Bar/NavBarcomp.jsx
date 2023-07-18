import React from 'react'
import './NavBarcomp.css'

const NavBarComp = ({pages, href}) => {
  return (
    <a href={href} className='haspac'>{pages}</a>
  )
}

export default NavBarComp;
