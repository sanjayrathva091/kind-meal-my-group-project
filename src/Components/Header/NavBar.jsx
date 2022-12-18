import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
  return (
    <NavBarWrapper>
      <NavBarSection>
        <ul>
          <li>
            <NavLink to="/">
              <button>Home</button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/mealdeals">
              <button>Meal Deals</button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/kindmoments">
              <button>Kind Moments</button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/recipes">
              <button>Recipes</button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/directory">
              <button>Directory</button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/articles">
              <button>Articles</button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/mobile-app">
              <button>Mobile App</button>
            </NavLink>
          </li>
          <li>
            <NavLink to="help">
              <button>Help</button>
            </NavLink>
          </li>
        </ul>
      </NavBarSection>
    </NavBarWrapper>
  );
};

export default NavBar;

const NavBarWrapper = styled.div`
  border: 0px solid black;
  background-color: #2bb673;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const NavBarSection = styled.nav`
  margin: 0 8rem;
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    justify-content: space-between;
  }
  button {
    font-size: 1.2rem;
    padding: 0.4rem 1rem;
    border: 0;
    color: white;
    background-color: #2bb673;
  }
`;
