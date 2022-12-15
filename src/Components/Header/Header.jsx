import React, { useState } from "react";
import styled from "styled-components";
import { FaLink, FaFacebook, FaTwitter } from "react-icons/fa";
import NavBar from "./NavBar";
import { NavLink } from "react-router-dom";
import { auth } from "../../firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { logout } from "../../Redux/AuthReducer/authAction";

const Header = () => {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return (
    <HeaderWrapper>
      <HeaderSection>
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
            <button onClick={() => logout(auth)}>Log Out</button>
          </div>
        )}
      </HeaderSection>
      <NavBar />
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  border: 1px solid black;
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
`;
