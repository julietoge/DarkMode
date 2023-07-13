import React from 'react'
import './header.css'
import Links from '../../components/header/links'

const Header = () => {
    return (
        <header>
            <div className='header-content'>
                <div className='logo'>
                    <h1>OGE</h1>
                </div>
                    <Links />
                </div>

        </header>
    )
}

export default Header;