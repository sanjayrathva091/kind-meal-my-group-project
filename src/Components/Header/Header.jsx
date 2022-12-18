import React, { useState } from "react";
import styled from "styled-components";
import { FaLink, FaFacebook, FaTwitter } from "react-icons/fa";
import NavBar from "./NavBar";
import { Link, NavLink } from "react-router-dom";
import { auth } from "../../firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { logout } from "../../Redux/AuthReducer/authAction";
import { useDispatch } from "react-redux";

import {
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Header = () => {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return (
    <HeaderWrapper>
      <HeaderSection>
        <div className="hamburger-menu">
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon fontSize={30} />}
              variant="outline"
            />
            <MenuList>
              <Link to="/">
                <MenuItem fontSize={20}>Home</MenuItem>
              </Link>
              <Link to="/mealdeals">
                <MenuItem fontSize={20}>Meal Deals</MenuItem>
              </Link>
              <Link to="/kindmoments">
                <MenuItem fontSize={20}>Kind Moments</MenuItem>
              </Link>
              <Link to="/recipes">
                <MenuItem fontSize={20}>Recipes</MenuItem>
              </Link>
              <Link to="/directory">
                <MenuItem fontSize={20}>Directory</MenuItem>
              </Link>
              <Link to="/articles">
                <MenuItem fontSize={20}>Articles</MenuItem>
              </Link>
              <Link to="/mobile-app">
                <MenuItem fontSize={20}>Mobile Apps</MenuItem>
              </Link>
              <Link to="/help">
                <MenuItem fontSize={20}>Help</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </div>
        <div className="KindMealLogo">
          <img
            src="https://www.kindmeal.my/images/logo-kindmeal.png"
            alt="logo"
          />
        </div>
        <div className="social-media">
          <span className="link">
            {<FaLink size={30} fontVariant={"outline"} />}
          </span>
          <span className="facebook">{<FaFacebook size={30} />}</span>
          <span className="twitter">{<FaTwitter size={30} />}</span>
        </div>
        <div className="LoginBox">
          {user === null ? (
            <div className="silog">
              <NavLink to="/login">
                <button>Login</button>
              </NavLink>
              <NavLink to="/signup">
                <button>Sign Up</button>
              </NavLink>
            </div>
          ) : (
            <div className="silog">
              <span>{user.email}</span>
              <button onClick={() => dispatch(logout(auth))}>Log Out</button>
            </div>
          )}
        </div>
      </HeaderSection>
      <NavBar />
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  border: 1px solid black;
  .hamburger-menu {
    display: none;
  }
  @media screen and (max-width: 1024px) {
    .hamburger-menu {
      display: inline-block;
    }
    .hamburger-menu > button {
      padding: 0.1rem 0.1rem;
    }
    .hamburger-menu button {
      background-color: white;
    }
  }
`;

const HeaderSection = styled.div`
  border: 0px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 8rem;
  .social-media {
    border: 0px solid black;
    display: flex;
    gap: 20px;
  }
  .silog button {
    border: 0;
    background-color: white;
    font-size: 1rem;
  }
  @media screen and (max-width: 1024px) {
    .LoginBox {
      display: none;
    }
    .social-media {
      display: none;
    }
  }
`;
