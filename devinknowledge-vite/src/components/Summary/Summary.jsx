import React from "react";
import { useAppContext } from "../../contexts/AppContext";
import { SummaryCard } from "../SummaryCard";
import styles from "./Summary.module.css";

export const Summary = () => {
  const { categoriesList } = useAppContext();

  return (
    <div className={styles.summaryContainer}>
      {categoriesList.map(({ title, count }) => (
        <SummaryCard title={title} count={count} />
      ))}
    </div>
  );
};
