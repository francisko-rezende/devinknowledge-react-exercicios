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

  const tips =
    filter === null
      ? allTips
      : allTips.filter((tip) => tip.title.includes(filter));

  return (
    <appContext.Provider value={{ createTip, filterTips, tips }}>
      {children}
    </appContext.Provider>
  );
};

AppContext.propTypes = {
  children: PropTypes.node,
};

{
  titulo: "";
  categoria: "";
  linguagem: "";
  descricao: "";
  video: "";
}
