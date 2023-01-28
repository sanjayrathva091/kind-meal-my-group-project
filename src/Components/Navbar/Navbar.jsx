/** @format */

import React from "react";
import "./Navbar.css";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  return (
    <div>
      <nav>
        <input type="checkbox" id="check" />
        <label for="check" class="checkbtn">
          <i class="fas fa-bars"></i>
        </label>
        <label class="logo">
          <img
            src="https://www.kindmeal.my/images/logo-kindmeal.png"
            alt="logo"
          />
        </label>
        <ul>
          <li>
            <a class="active" href="/">
              Home
            </a>
          </li>
          <li>
            <a href="/MealDeals">Meal Deals</a>
          </li>
          <li>
            <a href="/MainKindMoments">KindMoments</a>
          </li>
          <li>
            <a href="/Mobile">Mobile App</a>
          </li>
          <li>
            <a href="/helppage">Help</a>
          </li>
          {isAuthenticated && <p>{user.name}</p>}

          {isAuthenticated ? (
            <li>
              <button class="active" onClick={() => logout({ returnTo: window.location.origin })}>LOGOUT</button>
            </li>
          ) : (
            <li>
              <button class="active" onClick={() => loginWithRedirect()}>LOGIN</button>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
