import React, { useState } from "react";
import { initialUserState } from "../../Redux/AuthReducer/AuthReducer";
import CustomSignUpForm from "../../Components/SignUpComponents/CustomSignUpForm";
import FoodLoverSignUpLogo from "../../Components/SignUpComponents/FoodLoverSignUpLogo";
import ShopOwnerSignUpLogo from "../../Components/SignUpComponents/ShopOwnerSignUpLogo";
import WhyKindMealInfo from "../../Components/SignUpComponents/WhyKindMealInfo";
import styled from "./JoinFoodLover.module.css";
import { auth } from "../../firebase-config";

import { register } from "../../Redux/AuthReducer/authAction";
import { useDispatch } from "react-redux";

const JoinFoodLover = () => {
  const [user, setUser] = useState(initialUserState);
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const cls = event.target.className;
    if (cls === "user") {
      setUser((prev) => ({
        ...prev,
        user: { ...prev.user, [name]: value },
      }));
    }
  };

  const handleJoinSubmit = (event) => {
    event.preventDefault();

    const { email, password } = user.user;
    dispatch(register(auth, email, password, user));
  };

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
        <CustomSignUpForm
          SubmitBtnText="Join Now"
          handleInputChange={handleInputChange}
          handleJoinSubmit={handleJoinSubmit}
        />
      </div>
    </div>
  );
};

export default JoinFoodLover;
