import React from "react";
import { SummaryCard } from "../SummaryCard";
import styles from "./Summary.module.css";

export const Summary = () => {
  return (
    <div className={styles.summaryContainer}>
      <SummaryCard title="back-end" count={1} />
      <SummaryCard title="total" count={1} />
    </div>
  );
};
