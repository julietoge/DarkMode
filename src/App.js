import React from 'react'
import './App.css'
import Header from './pages/header/header'
import Mainsection from './pages/mainsection/mainsection'
import Footer from './pages/footer/footer'


const App = () => {
  return (
    <div className='App'>
      <Header />
      <Mainsection />
      <Footer />
    </div>
  )
}

export default App;