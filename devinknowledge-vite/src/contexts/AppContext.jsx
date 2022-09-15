import React, { useContext } from "react";
import PropTypes from "prop-types";
import { createContext } from "react";

const appContext = createContext();

export const useAppContext = () => {
  const context = useContext(appContext);
  return context;
};

export const AppContext = ({ children }) => {
  return (
    <appContext.Provider value={"conectado"}>{children}</appContext.Provider>
  );
};

AppContext.propTypes = {
  children: PropTypes.node,
};
