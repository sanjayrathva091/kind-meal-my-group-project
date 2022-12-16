import React from 'react'
import './Navbar.css'

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
        <div class="menu-item"><a href="#">Home</a></div>
        <div class="menu-item"><a href="#">Meal Deals</a></div>
        <div class="menu-item"><a href="#">KindMoments</a></div>
        <div class="menu-item"><a href="#">Recipes</a></div>
        <div class="menu-item"><a href="#">Directory</a></div>
        <div class="menu-item"><a href="#">Articles</a></div>
        <div class="menu-item"><a href="#">Mobile App</a></div>
        <div class="menu-item"><a href="#">Help</a></div>
      </div>
    </div>
  </nav>
</header>
    </div>
  )
}

export default Navbar
