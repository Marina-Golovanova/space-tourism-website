import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Home } from "../Pages/Home/Home";
import { CommonBackground } from "../shared/CommonBackground/CommonBackground";
import { PATH_NAMES } from "../../CONSTANTS";

export const App: React.FC = () => {
  return (
    <Router>
      <CommonBackground>
        <Routes>
          <Route path={PATH_NAMES.home} element={<Home />} />
          <Route path={PATH_NAMES.destination} element={<Home />} />
          <Route path="*" element={<Navigate to={PATH_NAMES.home} />} />
        </Routes>
      </CommonBackground>
    </Router>
  );
};
