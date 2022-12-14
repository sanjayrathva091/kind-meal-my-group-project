import React from "react";
import styled from "styled-components";

const ShopOwnerSignUpLogo = () => {
  return (
    <BoxWrapper>
      <SOWrapper>
        <img
          src="https://www.kindmeal.my/images/join_shop.png"
          alt="joinShop"
        />
        <p>Restaurant Sign Up</p>
      </SOWrapper>
    </BoxWrapper>
  );
};

export default ShopOwnerSignUpLogo;

const BoxWrapper = styled.div`
  padding: 0.5rem 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;

const SOWrapper = styled.div`
  border: 1px solid #cecece;
  border-radius: 25px;
  width: 210px;
  padding: 2rem 1rem;
  img {
    width: 140px;
  }
  &:hover {
    background-color: #f0f0f0;
    border: 1px solid #888888;
  }
  &:active {
    box-shadow: 0 0 0.5rem 0px #1f51ff;
  }
`;
