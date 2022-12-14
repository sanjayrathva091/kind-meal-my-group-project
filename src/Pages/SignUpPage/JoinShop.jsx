import React from "react";
import CustomSignUpForm from "../Components/SignUpComponents/CustomSignUpForm";
import FoodLoverSignUpLogo from "../Components/SignUpComponents/FoodLoverSignUpLogo";
import ShopOwnerSignUpLogo from "../Components/SignUpComponents/ShopOwnerSignUpLogo";
import WhyKindMealInfo from "../Components/SignUpComponents/WhyKindMealInfo";
import styled from "styled-components";
import sty from "./JoinShop.module.css";

const JoinShop = () => {
  return (
    <JoinShopWrapper>
      <div>
        <FoodLoverSignUpLogo />
        <ShopOwnerSignUpLogo />
        <WhyKindMealInfo />
      </div>
      <div>
        <div className={sty.JoinShopDesc}>
          <h1>
            Restaurant / Shop Owner? <span>Sign Up</span> Now.
          </h1>
          <p>
            Improve your business, build brand loyalty, and save precious animal
            lives! Join KindMeal now to enjoy the following features:
          </p>
          <ul>
            <li>Effectively reach over 200,000 consumers</li>
            <li>
              Feature your shop across premium partner platforms & media
              channels
            </li>
            <li>Offer coupons & deals to attract new customers</li>
            <li>Showcase your delicious meat-free meals</li>
            <li>Interact with our community of food lovers</li>
            <li>
              Get your exclusive Shop Page —{" "}
              <span>https://KindMeal.my/YourShopName</span>
            </li>
          </ul>
          <p>
            To support our welfare causes, we offer simple, affordable Premium
            Plans on a monthly subscription basis, starting from RM 99 only. No
            deal commissions, no hidden fees. Premium Plan details are available
            upon signing up.
          </p>
          <h2>Personal Profile</h2>
          <p>
            First, we setup your personal profile, then proceed to configure
            your shop promotions.
          </p>
        </div>
        <CustomSignUpForm SubmitBtnText="Set Up My Shops & Deals" />
      </div>
    </JoinShopWrapper>
  );
};

export default JoinShop;

const JoinShopWrapper = styled.div`
  border: 0px solid black;
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 20px;
  margin-bottom: 4rem;
  margin-left: 8rem;
  margin-right: 8rem;
`;

// const JoinSideBar = styled.div``;
