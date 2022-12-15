import React from "react";

import CustomButton from "./CustomButton";
import styled from "./CustomSignUpForm.module.css";

const CustomSignUpForm = ({
  SubmitBtnText,
  handleInputChange,
  handleJoinSubmit,
}) => {
  return (
    <div className={styled.customSignUpForm}>
      <form onSubmit={handleJoinSubmit}>
        <div>
          <p>Your Name</p>
          <div className={`${styled.InputBox}`}>
            <div>
              <label htmlFor="">First Name</label>
              <input
                className="user"
                type="text"
                name="First_Name"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="">Last Name</label>
              <input
                className="user"
                type="text"
                name="Last_Name"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div>
          <p>Email</p>
          <div className={styled.InputBox}>
            <label htmlFor="">
              Your email must be correct to receive activation email
            </label>
            <input
              className="user"
              type="email"
              name="email"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div>
          <p>Re-Enter Email</p>
          <div className={styled.InputBox}>
            <input
              className="user"
              type="email"
              name="reEnterEmail"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div>
          <p>Password</p>
          <div className={styled.InputBox}>
            <input
              className="user"
              type="password"
              name="password"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div>
          <p>Username</p>
          <div className={`${styled.UserName}`}>
            <label htmlFor="">
              Choose a cool username for your Personal Profile page, comments &
              reviews
            </label>
            <p>http://KindMeal.my/Username</p>
            <input type="text" name="username" onChange={handleInputChange} />
          </div>
        </div>
        <div>
          <p>BirthDate</p>
          <div className={styled.InputBox}>
            <label htmlFor="">Only your age will be publicly visible</label>
            <div className={styled.birthdate}>
              <select name="Month" id="">
                <option value="">Month</option>
              </select>
              <select name="Day" id="">
                <option value="">Day</option>
              </select>
              <select name="Year" id="">
                <option value="">Year</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <p>Country</p>
          <div className={styled.InputBox}>
            <select name="Country" id="">
              <option value="Malaysia">Malaysia</option>
            </select>
          </div>
        </div>
        <div>
          <p>State</p>
          <div className={styled.InputBox}>
            <select name="State" id="">
              <option value="">Select State</option>
            </select>
          </div>
        </div>
        <div>
          <p>Gender</p>
          <div className={styled.InputBox}>
            <div>
              <input type="radio" name="Gender" value="Male" />
              Male
            </div>
            <div>
              <input type="radio" name="Gender" value="Female" />
              Female
            </div>
          </div>
        </div>
        <div>
          <p>Profile Photo</p>
          <div className={styled.InputBox}>
            <button className={styled.uploadBtn}>Select Photo</button>
            <input type="file" name="ProfilePhoto" hidden />
          </div>
        </div>
        <div className={styled.agreeCheckBox}>
          <input type="checkbox" />
          <label htmlFor="">I agree to KindMeal.my's Terms & Conditions</label>
        </div>
        <div className={styled.submitBtn}>
          <CustomButton
            BtnText={SubmitBtnText}
            colorScheme="bgred"
            textColor="white"
            width="md"
            fontSize="medium"
            variant="roundedCorner"
            Type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default CustomSignUpForm;
