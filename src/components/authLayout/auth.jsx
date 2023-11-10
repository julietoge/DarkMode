import React from 'react'
import Footer from '../footer/footer'
import Header from '../header/Header'

const Auth = ({children}) => {
  return (
    <div className='auth'>
        <Header/>
        <div className='children'>{children}</div>
        <Footer/>
    </div>
  )
}

export default Auth