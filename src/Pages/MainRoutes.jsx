import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import HelpPage from "./HelpPage";
import Error from "./Error";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/help" element={<HelpPage />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default MainRoutes;