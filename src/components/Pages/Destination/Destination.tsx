import React from "react";
import { IDestination } from "../../../types";
import { Navigation } from "./Navigation/Navigation";

import styles from "./styles.module.scss";

type IDestinationProps = {
  data: IDestination[] | undefined;
};

export const Destination: React.FC<IDestinationProps> = ({ data }) => {
  const menuItems = data?.map((el) => el.name.toLowerCase()) || [];

  const [activeItem, setActiveItem] =
    React.useState<typeof menuItems[number]>("moon");

  const activeList = data?.find(
    (item) => item.name.toLowerCase() === activeItem
  );
  console.log(activeList);

  return (
    <div className={styles.destination}>
      <h1 className={styles.header}>
        <span>01</span>Pick your destination
      </h1>

      <div className={styles.content}>
        <Navigation
          items={menuItems}
          activeItem={activeItem}
          onClick={(item) => setActiveItem(item)}
        />
        <div className={styles.title}>{activeList?.name}</div>
        <div className={styles.description}>{activeList?.description}</div>
        <div className={styles.additional}>
          <div className={styles.metrics}>
            <h2 className={styles.metricTitle}>adg.distance</h2>
            <div className={styles.data}>{activeList?.distance}</div>
          </div>
          <div className={styles.metrics}>
            <h2 className={styles.metricTitle}>Est. travel time</h2>
            <div className={styles.data}>{activeList?.travel}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
