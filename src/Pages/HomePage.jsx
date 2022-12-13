// Author -> Preeti Raj
import React from 'react'
import Carousel from '../Components/Carousel/Carousel'
import Footer from '../Components/Footer/Footer'
import HeroCards from '../Components/HeroCards/HeroCards'
import Navbar from '../Components/Navbar/Navbar'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <HeroCards />
      <Footer />
    </div>
  )
}

export default HomePage
