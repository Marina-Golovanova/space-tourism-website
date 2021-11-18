import React from "react";
import { Navigation } from "../Navigatoin/Navigation";

import styles from "./styles.module.scss";

export const CommonBackground: React.FC = (props) => {
  return (
    <div className={styles.layout}>
      <svg viewBox="0 0 48 48">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24 0C24 0 24 24 0 24C23.5776 24.1714 24 48 24 48C24 48 24 24 48 24C24 24 24 0 24 0Z"
          fill="#0B0D17"
        />
      </svg>

      <div className={styles.line}></div>

      <div className={styles.nav}>
        <Navigation />
      </div>

      {props.children}
    </div>
  );
};
