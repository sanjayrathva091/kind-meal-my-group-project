import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import HelpPage from "./HelpPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/help" element={<HelpPage />} />
    </Routes>
  );
};

export default MainRoutes;