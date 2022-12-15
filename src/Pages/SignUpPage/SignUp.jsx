import React from "react";
import { NavLink } from "react-router-dom";
import styled from "./SignUp.module.css";

const SignUp = () => {
  return (
    <div className={styled.SignUpPageWrapper}>
      <div className={styled.SignUpPage}>
        <div className={styled.ImgBoxLogo}>
          <img
            src="https://www.kindmeal.my/images/logo-kindmeal.png"
            alt="logo"
          />
        </div>
        <h2>Join KindMeal For FREE Now</h2>
        <p>Please select the type of membership to proceed</p>
        <NavLink style={{ textDecoration: "none" }} to="/signup/joinfoodlover">
          <div className={styled.FoodLover}>
            <div className={styled.ImgBoxFL}>
              <img
                src="https://www.kindmeal.my/images/join_normal.png"
                alt="foodLoverLogo"
              />
            </div>
            <div>
              <h3>Food Lover</h3>
              <p>
                Join FREE to enjoy yummy deals, share reviews & meet our
                community of compassionate food lovers.
              </p>
            </div>
          </div>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/signup/joinshop">
          <div className={styled.ShopOwner}>
            <div className={styled.ImgBoxSO}>
              <img
                src="https://www.kindmeal.my/images/join_shop.png"
                alt="shopOwnerLogo"
              />
            </div>
            <div>
              <h3>Restaurant / Shop Owner</h3>
              <p>
                List your food outlet, create exciting vegetarian deals &
                showcase your delicious menu for FREE. Enjoy our yummy deals,
                share reviews & meet food lovers too.
              </p>
            </div>
          </div>
        </NavLink>
        <div className={styled._Btn_}>
          <p>Member Login</p>
          <p>Forgot password?</p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

/*

Author: Sanjay Rathva
Description: SignUp page for KindMealmy project

*/
