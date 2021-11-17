import React from "react";
import { Link } from "react-router-dom";
import { PATH_NAMES } from "../../../CONSTANTS";

import styles from "./styles.module.scss";

export const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <div className={styles.content}>
        <div className={styles.subtitle}>SO, YOU WANT TO TRAVEL TO</div>
        <h1>SPACE</h1>
        <div className={styles.definition}>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </div>
      </div>

      <Link to={PATH_NAMES.destination}>
        <div className={styles.link}>Explore</div>
      </Link>
    </div>
  );
};
