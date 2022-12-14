import React from "react";
import CustomSignUpForm from "../../Components/SignUpComponents/CustomSignUpForm";
import FoodLoverSignUpLogo from "../../Components/SignUpComponents/FoodLoverSignUpLogo";
import ShopOwnerSignUpLogo from "../../Components/SignUpComponents/ShopOwnerSignUpLogo";
import WhyKindMealInfo from "../../Components/SignUpComponents/WhyKindMealInfo";
import styled from "./JoinFoodLover.module.css";

const JoinFoodLover = () => {
  return (
    <div className={styled.JoinFoodLover}>
      <div className={styled.JoinSidebar}>
        <FoodLoverSignUpLogo />
        <ShopOwnerSignUpLogo />
        <WhyKindMealInfo />
      </div>
      <div>
        <div className={styled.FoodLoverDesc}>
          <h1>
            Food Lover? Sign Up Now or <span>Login With Facebook</span>
          </h1>
          <p>
            Discover tasty meat-free meals and dine instantly — no coupon
            payment, booking or printing is required.
          </p>
          <p>
            KindMeal is a fun, exciting and cool new way for you to show your
            compassion towards animals. We collaborate with kind restaurants and
            cafes across the nation to bring you delicious meat-free foods that
            will not only help save precious animal lives, but improve your
            health and save your money at the same time!
          </p>
        </div>
        <CustomSignUpForm SubmitBtnText="Join Now" />
      </div>
    </div>
  );
};

export default JoinFoodLover;
