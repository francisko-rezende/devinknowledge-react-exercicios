import React from "react";
import styles from "./Filter.module.css";

export const Filter = () => {
  const handleOnEnterFilter = () => {};
  const handleOnClearFilter = () => {};
  return (
    <div className={styles.filterContainer}>
      <input
        placeholder="Busque por uma dica..."
        type="text"
        className="inputField"
      />
      <button onClick={handleOnEnterFilter} className={styles.searchButton}>
        Buscar
      </button>
      <button onClick={handleOnClearFilter} className={styles.searchButton}>
        Limpar
      </button>
    </div>
  );
};
