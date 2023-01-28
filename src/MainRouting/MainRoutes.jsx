/** @format */

import React from "react";
import { Route, Routes } from "react-router-dom";
import { Mobilepage } from "../Pages_0381/Mobilepage";
import { MainKindMoments } from "../M/MainKindMoments";
import HomePage from "../Pages_0381/HomePage";
import { HelpPage } from "../Pages_0381/HelpPage";
import Login from "../Pages_0381/Login";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/MainKindMoments" element={<MainKindMoments />} />
        <Route path="/Mobile" element={<Mobilepage />} />
        <Route path="/helppage" element={<HelpPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
