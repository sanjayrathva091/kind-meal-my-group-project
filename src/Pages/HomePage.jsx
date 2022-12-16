// Author -> Preeti Raj
import React from 'react'
import Slider from '../Components/Slider/Slider'
import Footer from '../Components/Footer/Footer'
import HeroCards from '../Components/HeroCards/HeroCards'
import banner from '../Assets/Images/banner.png'
import media from '../Assets/Images/mediafeature.png'
import './HomePage.css'
const HomePage = () => {
  return (
    <div>
      <Slider/>
      <HeroCards />
      <div className='white'>
      <h1 className='featureON'>Feature On</h1>
      <img src={media} alt="p" className='media'/>
      <img src={banner} alt="p" className='banner'/>
      </div>
      <Footer />
    </div>
  )
}

export default HomePage
