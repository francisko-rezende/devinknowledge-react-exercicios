import React from "react";
import { useAppContext } from "../../contexts/AppContext";
import styles from "./Filter.module.css";

export const Filter = () => {
  const { filterTips } = useAppContext();

  const handleOnEnterFilter = (e) => {
    filterTips(e.target.previousSibling.value);
  };
  const handleOnClearFilter = () => {
    filterTips(null);
  };
  return (
    <div className={styles.filterContainer}>
      <input
        placeholder="Busque por uma dica..."
        type="text"
        className="inputField"
      />
      <button
        onClick={(e) => handleOnEnterFilter(e)}
        className={styles.searchButton}
      >
        Buscar
      </button>
      <button onClick={handleOnClearFilter} className={styles.searchButton}>
        Limpar
      </button>
    </div>
  );
};
