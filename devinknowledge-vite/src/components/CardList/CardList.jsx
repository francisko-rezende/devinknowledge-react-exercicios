import React from "react";
import styles from "./CardList.module.css";
import PropTypes from "prop-types";

export const CardList = ({ children }) => {
  return <div className={styles.cardList}>{children}</div>;
};

CardList.propTypes = {
  children: PropTypes.node,
};
