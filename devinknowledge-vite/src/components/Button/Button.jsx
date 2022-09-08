import React from "react";
import styles from "./Button.module.css";

export const Button = ({ children, variant, ...props }) => {
  return (
    <button
      className={`${styles.btn} ${
        variant === "primary" ? styles.primary : styles.secondary
      }`}
      {...props}
    >
      {children}
    </button>
  );
};
