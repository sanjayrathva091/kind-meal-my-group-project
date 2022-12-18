import React from "react";
import { Route, Routes } from "react-router-dom";
import JoinFoodLover from "./SignUpPage/JoinFoodLover";
import SignUp from "./SignUpPage/SignUp";
import JoinShop from "./SignUpPage/JoinShop";
import AdminPage from "./AdminPage/AdminPage";
import Login from "./LoginPage/Login";
import DirectoryPage from "./DirectoryPage/DirectoryPage";
import ReqAuth from "../Components/ReqAuth/ReqAuth";

const MainRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ReqAuth>
            <h1>Home</h1>
          </ReqAuth>
        }
      />
      <Route
        path="/mealdeals"
        element={
          <ReqAuth>
            <h1>Meal Deals</h1>
          </ReqAuth>
        }
      />
      <Route path="/kindmoments" element={<h1>Kind Moments</h1>} />
      <Route path="/recipes" element={<h1>Recipes</h1>} />
      <Route path="/directory" element={<DirectoryPage />} />
      <Route path="/articles" element={<h1>Articles</h1>} />
      <Route path="/mobile-app" element={<h1>Mobile App</h1>} />
      <Route path="/help" element={<h1>Help</h1>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signup/joinfoodlover" element={<JoinFoodLover />} />
      <Route path="/signup/joinshop" element={<JoinShop />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
};

export default MainRoutes;
