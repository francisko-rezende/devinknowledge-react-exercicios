import React from "react";
import { useAppContext } from "../../contexts/AppContext";
import { Button } from "../Button";
import { CardList } from "../CardList";
import { Filter } from "../Filter";
import { Summary } from "../Summary/Summary";
import { TipCard } from "../TipCard";
import styles from "./MainContent.module.css";

export const MainContent = () => {
  const result = useAppContext();
  console.log(result);

  return (
    <main className={styles.mainContainer}>
      <Summary />
      <Filter />
      <CardList>
        <TipCard
          titulo="Título da dica"
          descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sunt harum et velit, eveniet molestiae
            est repellat dicta hic aspernatur officiis beatae aliquid itaque sit aut nulla error culpa ratione?"
          categoria="Back End"
          linguagem="Javascript"
          video="#"
        />
      </CardList>
    </main>
  );
};
