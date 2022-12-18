import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ReqAuth = ({ children }) => {
  const Auth = useSelector((store) => store.AuthReducer.isAuth);
  const userType = useSelector((store) => store.AuthReducer.userType);
  const { pathname } = useLocation();

  return Auth ? (
    userType === "User" ? (
      children
    ) : (
      <Navigate to="/admin" replace={true} />
    )
  ) : (
    <Navigate to="/login" state={pathname} replace={true} />
  );
};

export default ReqAuth;
