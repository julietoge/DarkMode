import React from 'react'
import Logo from '../logo/logo';
import NavBar from '../nav-bar/NavBar';
import "./Header.css"

const Header = () => {
  return (
    <div className='Header'>
        <Logo className="logo" />
        <NavBar className="nav-bar" />
    </div>
  )
}

export default Header;