import React from "react";
import { MainContent } from "../../components/MainContent/MainContent";
import { SideBar } from "../../components/Sidebar/SideBar";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div className={styles.rootContainer}>
      <SideBar />
      <MainContent />
    </div>
  );
};
