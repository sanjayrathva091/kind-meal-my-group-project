import React from 'react'
import './Navbar.css'
import Login from '../../Pages_0381/Login'
import Logout from '../../Pages_0381/Logout'

const Navbar = () => {
  return (
    <div>
     <header class="header">
  <nav class="navbar">
    <input type="checkbox" id="nav" class="hidden" />
    <label for="nav" class="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
     </label>
    <div class="wrapper">
      <div class="menu">
        <div class="menu-item"><a href="/">Home</a></div>
        <div class="menu-item"><a href="#">Meal Deals</a></div>
        <div class="menu-item"><a href="/MainKindMoments">KindMoments</a></div>
        <div class="menu-item"><a href="/"><Login/></a></div>
        <div class="menu-item"><a href="/"><Logout/></a></div>
        <div class="menu-item"><a href="#">Articles</a></div>
        <div class="menu-item"><a href="/Mobile">Mobile App</a></div>
        <div class="menu-item"><a href="/helppage">Help</a></div>
      </div>
    </div>
  </nav>
</header>
    </div>
  )
}

export default Navbar
