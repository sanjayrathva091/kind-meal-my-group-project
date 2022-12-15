import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const FoodLoverSignUpLogo = () => {
  return (
    <BoxWrapper>
      <NavLink style={{ textDecoration: "none" }} to="/signup/joinfoodlover">
        <FLWrapper>
          <img
            src="https://www.kindmeal.my/images/join_normal.png"
            alt="joinFL"
          />
          <p>Food Lover Sign Up</p>
        </FLWrapper>
      </NavLink>
    </BoxWrapper>
  );
};

export default FoodLoverSignUpLogo;

const BoxWrapper = styled.div`
  padding: 1.5rem 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;

const FLWrapper = styled.div`
  border: 1px solid #cecece;

  border-radius: 25px;
  width: 210px;
  padding: 2rem 1rem;
  img {
    width: 170px;
  }
  &:hover {
    background-color: #f0f0f0;
    border: 1px solid #888888;
  }
  &:active {
    box-shadow: 0 0 0.5rem 0px #1f51ff;
  }
`;
