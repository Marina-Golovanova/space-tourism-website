import React from "react";
import cn from "classnames";
import { MENU_ITEMS_ALL } from "../../../CONSTANTS";

import styles from "./styles.module.scss";

import { NavLink } from "react-router-dom";

export const Navigation: React.FC = () => {
  return (
    <nav className={styles.navigation}>
      <ul>
        {MENU_ITEMS_ALL.map((menuItem, idx) => (
          <NavLink
            to={`/${menuItem}`}
            key={idx}
            className={({ isActive }) => cn({ [styles.active]: isActive })}
          >
            <li>
              <span>
                <b>0{idx}</b>
                {menuItem}
              </span>
            </li>
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};
