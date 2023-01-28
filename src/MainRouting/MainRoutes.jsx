/** @format */

import React from "react";
import { Route, Routes } from "react-router-dom";
import { Mobilepage } from "../Pages_0381/Mobilepage";
import { MainKindMoments } from "../M/MainKindMoments";
import HomePage from "../Pages_0381/HomePage";
import { HelpPage } from "../Pages_0381/HelpPage";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/MainKindMoments" element={<MainKindMoments />} />
        <Route path="/Mobile" element={<Mobilepage />} />
        <Route path="/helppage" element={<HelpPage />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
