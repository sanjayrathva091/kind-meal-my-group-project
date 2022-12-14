import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <LoginPageWrapper>
      <LoginPage>
        <ImgBoxLogoWrapper>
          <img
            src="https://www.kindmeal.my/images/logo-kindmeal.png"
            alt="logo"
          />
        </ImgBoxLogoWrapper>
        <h2>Member Login</h2>
        <form>
          <div>
            <input type="email" />
          </div>
          <div>
            <input type="password" />
          </div>
          <div>
            <input type="radio" name="UserType" value="User" defaultChecked />{" "}
            User
            <input type="radio" name="UserType" value="Admin" /> Admin
          </div>
          <div>
            <button>Login</button>
          </div>
        </form>
        <ForgotPwd>
          <p>Forgot password?</p>
          <p>Not a member? Sign up FREE!</p>
        </ForgotPwd>
      </LoginPage>
    </LoginPageWrapper>
  );
};

export default Login;

const LoginPageWrapper = styled.div`
  padding: 1rem;
  box-sizing: border-box;
  display: grid;
  place-items: center;
`;

const LoginPage = styled.div`
  width: 42%;
  margin: auto;
  box-shadow: 0 0 0.5rem 0.1rem #afafaf;
  border-radius: 12px;
  padding: 1.2rem;
  box-sizing: border-box;

  > h2 {
    font-size: 22px;
    font-weight: 400;
    font-family: "Roboto", Arial;
    color: #666666;
  }

  > form {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 15px;
  }

  input[type="email"],
  input[type="password"] {
    width: 60%;
    padding: 0.6rem;
    border: 1px solid #cecece;
    border-radius: 4px;
    font-size: medium;
    font-family: "Roboto", Arial;
  }

  button {
    width: 45%;
    font-size: 1.5rem;
    font-family: "Roboto", Arial;
    background-color: #04be5a;
    color: #ffffff;
    font-weight: bold;
    padding: 8px 15px 8px 15px;
    border-radius: 6px;
  }

  button:hover {
    background-color: #06a14f;
  }
`;

const ImgBoxLogoWrapper = styled.div`
  border: 0;
  margin-bottom: 0;
  padding-bottom: 0;
`;

const ForgotPwd = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "Roboto", Arial;
  margin-top: 1.2rem;
`;
