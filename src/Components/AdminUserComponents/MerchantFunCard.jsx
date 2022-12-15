import React from "react";
import styled from "styled-components";

const MerchantFunCard = () => {
  return (
    <MerchantFunCardComp>
      <MerchantCard>
        <h3>Merchant Functions</h3>
        <div className="diamond-shape"></div>
        <div>
          <h4>Dashboard</h4>
          <p>Merchant Overview</p>
          <p>Upgrade Merchant Plan</p>
          <h4>My Shops</h4>
          <p>Manage Deals</p>
          <p>Manage Food Menu</p>
          <p>Manage Shop Branches</p>
          <p>Update Shop Profile</p>
          <p>Create New Shop</p>
          <h4>Coupons & Transactions</h4>
          <p>Print Coupon List</p>
          <p>Check/Redeem Coupons</p>
          <p>Generate Transaction Report</p>
        </div>
        <div></div>
      </MerchantCard>
    </MerchantFunCardComp>
  );
};

export default MerchantFunCard;

const MerchantFunCardComp = styled.div`
  border: 0px solid black;
  margin-bottom: 1rem;
`;

const MerchantCard = styled.div`
  position: relative;
  border: 1px solid black;
  border-radius: 15px 15px 0 0;
  width: 80%;
  margin: auto;
  .diamond-shape {
    background-color: red;
    width: 15px;
    height: 15px;
    margin: auto;
    transform: rotate(45deg);
    position: absolute;
    right: 48%;
    top: 1.3rem;
    border: 0;
  }
  .diamond-shape + div {
    padding: 10px;
  }
  h3 {
    border-radius: 15px 15px 0 0;
    text-align: center;
    font-size: 15px;
    margin: 0;
    padding: 5px 0;
    background-color: red;
    color: white;
  }
  h4 {
    margin-bottom: 0;
  }
  h4:first-child {
    margin-top: 0px;
  }
  p {
    margin: 0;
    font-size: 0.9rem;
  }
`;
