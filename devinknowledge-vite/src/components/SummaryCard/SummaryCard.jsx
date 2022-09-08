import React from "react";
import styles from "./SummaryCard.module.css";
import PropTypes from "prop-types";

export const SummaryCard = ({ title, count }) => {
  return (
    <div className={styles.summaryContainer__card}>
      <span className="title">{title}</span>
      <span className="value">{count}</span>
    </div>
  );
};

SummaryCard.propTypes = {
  title: PropTypes.string,
  count: PropTypes.number,
};
