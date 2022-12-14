import React from "react";
import styled from "styled-components";

const WhyKindMealInfo = () => {
  return (
    <BoxWrapper>
      <WhyWrapper>
        <h2>Why KindMeal?</h2>
        <ul>
          <li>Exclusive meat-free deals</li>
          <li>Share yummy food moments</li>
          <li>Meet friendly food lovers</li>
          <li>Discover cool restaurants</li>
          <li>Email updates on tasty deals</li>
          <li>Instant coupons & dining</li>
          <li>No upfront payment, booking or printing</li>
        </ul>
        <p>{`More about KindMeal >`}</p>
      </WhyWrapper>
    </BoxWrapper>
  );
};

export default WhyKindMealInfo;

const BoxWrapper = styled.div`
  padding: 1.5rem 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;

const WhyWrapper = styled.div`
  border: 1px solid #888888;
  border-radius: 25px;
  width: 210px;
  padding: 2rem 1rem;

  h2 {
    font-weight: 400;
    color: #444444;
    font-size: 1.4rem;
    margin: 0;
    text-align: center;
  }

  ul {
    text-align: left;
    font-weight: 500;
    font-size: 14px;
    color: #888888;
    margin: 0;
    padding-left: 0.9rem;
  }
`;
