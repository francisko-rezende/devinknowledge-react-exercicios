import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { createContext } from "react";

const appContext = createContext();

export const useAppContext = () => {
  const context = useContext(appContext);
  return context;
};

export const AppContext = ({ children }) => {
  const [allTips, setAllTips] = useState([]);
  const [filter, setFilter] = useState(null);

  const createTip = (newTip) => {
    setAllTips((previousTips) => [...previousTips, newTip]);
  };

  const filterTips = (query) => {
    setFilter(query ? query : null);
  };

  const sortByCategory = () => {
    const categories = Array.from(new Set(allTips.map((tip) => tip.categoria)));
    return categories.map((catName) => {
      const count = allTips.filter((tip) => tip.categoria == catName).length;
      return { title: catName, count: count };
    });
  };

  const deleteTip = (titulo) =>
    setAllTips((previousTips) =>
      previousTips.filter((previousTip) => previousTip.titulo !== titulo)
    );

  const tips =
    filter === null
      ? allTips
      : allTips.filter((tip) => tip.titulo.includes(filter));

  const categoriesList = sortByCategory(tips);

  return (
    <appContext.Provider
      value={{ createTip, filterTips, tips, categoriesList, deleteTip }}
    >
      {children}
    </appContext.Provider>
  );
};

AppContext.propTypes = {
  children: PropTypes.node,
};

// {
//   titulo: "";
//   categoria: "";
//   linguagem: "";
//   descricao: "";
//   video: "";
// }
