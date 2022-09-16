import React from "react";
import { useAppContext } from "../../contexts/AppContext";
import { Button } from "../Button";
import { CardList } from "../CardList";
import { Filter } from "../Filter";
import { Summary } from "../Summary/Summary";
import { TipCard } from "../TipCard";
import styles from "./MainContent.module.css";

export const MainContent = () => {
  const { tips } = useAppContext();

  return (
    <main className={styles.mainContainer}>
      <Summary />
      <Filter />
      <CardList>
        {tips.map(({ titulo, categoria, linguagem, descricao, video }) => (
          <TipCard
            titulo={titulo}
            descricao={descricao}
            categoria={categoria}
            linguagem={linguagem}
            video={video}
          />
        ))}
      </CardList>
    </main>
  );
};
