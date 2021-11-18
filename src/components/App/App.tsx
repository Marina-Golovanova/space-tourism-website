import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Home } from "../Pages/Home/Home";
import { Destination } from "../Pages/Destination/Destination";
import { CommonBackground } from "../shared/CommonBackground/CommonBackground";
import { PATH_NAMES } from "../../CONSTANTS";
import { getData } from "../../api";
import { IData } from "../../types";

export const App: React.FC = () => {
  const [data, setData] = React.useState<IData | null>(null);

  React.useEffect(() => {
    getData().then((res) => setData(res));
  }, []);

  return (
    <Router>
      <CommonBackground>
        <Routes>
          <Route path={PATH_NAMES.home} element={<Home />} />
          <Route
            path={PATH_NAMES.destination}
            element={<Destination data={data?.destinations} />}
          />
          <Route path="*" element={<Navigate to={PATH_NAMES.home} />} />
        </Routes>
      </CommonBackground>
    </Router>
  );
};
