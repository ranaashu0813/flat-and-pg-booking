import React from 'react'
import Footer from '../footer/down_part'
import Navbar from '../Header/Navbar'
import Boxes from './Boxes'
import Carasoul from './Carasoul'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Carasoul/>
      <Boxes/>
      <Footer/>
    </div>
  )
}

export default Home
