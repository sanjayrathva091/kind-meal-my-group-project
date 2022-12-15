import React from "react";
import styled from "styled-components";

const MemberFunCard = () => {
  return (
    <MemberFunCardComp>
      <MemberCard>
        <h3>Member Functions</h3>
        <div className="diamond-shape"></div>
        <div>
          <div>
            <p>Manage My Coupons</p>
            <p>Manage My Recipes</p>
          </div>
          <div>
            <p>My KindMeal Profile</p>
            <p>Update Profile</p>
            <p>Account Settings</p>
          </div>
          <div>
            <p>Logout</p>
          </div>
        </div>
      </MemberCard>
    </MemberFunCardComp>
  );
};

export default MemberFunCard;

const MemberFunCardComp = styled.div`
  border: 0px solid black;
  margin: 1.5rem 0;
`;

const MemberCard = styled.div`
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
  > div > div {
    margin: 1rem 0;
  }
  p {
    font-size: 15px;
    margin: 0;
  }
`;
