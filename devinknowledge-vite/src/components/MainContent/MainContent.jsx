import React from "react";
import { Button } from "../Button";
import { CardList } from "../CardList";
import { Filter } from "../Filter";
import { Summary } from "../Summary/Summary";
import styles from "./MainContent.module.css";

export const MainContent = () => {
  return (
    <main className={styles.mainContainer}>
      <Summary />
      <Filter />
      <CardList />
    </main>
  );
};
