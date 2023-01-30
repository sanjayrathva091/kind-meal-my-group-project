import React from 'react'
import './Navbar.css'
import { useAuth0 } from "@auth0/auth0-react";
const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
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
        <div class="menu-item"><a href="/mealdeals">Meal Deals</a></div>
        <div class="menu-item"><a href="/MainKindMoments">KindMoments</a></div>
        <div class="menu-item"><a href="#">Recipes</a></div>
        <div class="menu-item"><a href="#">Directory</a></div>
        <div class="menu-item"><a href="/helppage">Help</a></div>
        <div class="menu-item"><a href="/Mobile">Mobile App</a></div>
        {isAuthenticated && 
            <div class="menu-item"><a>{user.name}</a></div>
         } 
          {isAuthenticated ? (
           
              <button class="active" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>LOGOUT</button>
         
          ) : (
            
              <button class="active" onClick={() => loginWithRedirect()}>LOGIN</button>
             
          )}
      </div>
    </div>
  </nav>
</header>
    </div>
  )
}

export default Navbar