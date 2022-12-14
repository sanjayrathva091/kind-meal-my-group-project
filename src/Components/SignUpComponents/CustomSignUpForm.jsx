import React from "react";
import CustomButton from "./CustomButton";
import styled from "./CustomSignUpForm.module.css";

const CustomSignUpForm = ({ SubmitBtnText }) => {
  return (
    <div className={styled.customSignUpForm}>
      <form>
        <div>
          <p>Your Name</p>
          <div className={`${styled.InputBox}`}>
            <div>
              <label htmlFor="">First Name</label>
              <input type="text" name="First_Name" />
            </div>
            <div>
              <label htmlFor="">Last Name</label>
              <input type="text" name="Last_Name" />
            </div>
          </div>
        </div>
        <div>
          <p>Email</p>
          <div className={styled.InputBox}>
            <label htmlFor="">
              Your email must be correct to receive activation email
            </label>
            <input type="email" name="email" />
          </div>
        </div>
        <div>
          <p>Re-Enter Email</p>
          <div className={styled.InputBox}>
            <input type="email" name="reEnterEmail" />
          </div>
        </div>
        <div>
          <p>Password</p>
          <div className={styled.InputBox}>
            <input type="password" name="password" />
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
            <input type="text" />
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
          />
        </div>
      </form>
    </div>
  );
};

export default CustomSignUpForm;
