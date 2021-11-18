import React from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

type INavigationProps = {
  items: string[];
  activeItem: string;
  onClick: (item: string) => void;
};

export const Navigation: React.FC<INavigationProps> = ({
  items,
  activeItem,
  onClick,
}) => {
  return (
    <nav className={styles.nav}>
      <ul>
        {items.map((item) => (
          <li
            className={cn({ [styles.activeItem]: activeItem === item })}
            onClick={() => onClick(item)}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};
