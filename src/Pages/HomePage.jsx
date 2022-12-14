// Author -> Preeti Raj
import React from 'react'
import Slider from '../Components/Slider/Slider'
import Footer from '../Components/Footer/Footer'
import HeroCards from '../Components/HeroCards/HeroCards'
import Navbar from '../Components/Navbar/Navbar'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Slider/>
      <HeroCards />
      <Footer />
    </div>
  )
}

export default HomePage
