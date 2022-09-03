import PropTypes from "prop-types";
import React from "react";
import { useAppContext } from "../context/app-context";
import { CardList } from "./CardList";
import { Filter } from "./Filter";
import { Summary } from "./Summary";
import { TipCard } from "./TipCard";

const umaDica = {
  titulo: "Uma dica",
  descricao:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, tempore sequi dolorem reprehenderit quaerat accusamus quas excepturi officia natus, reiciendis architecto. Dolorum quaerat veritatis officia delectus suscipit error. Itaque quos ratione placeat deserunt corrupti voluptate dolorum mollitia optio, atque voluptas praesentium inventore asperiores fugiat omnis ab architecto ut laudantium commodi.",
  categoria: "front-end",
  linguagem: "css (flexbox)",
  video: "https://www.youtube.com/watch?v=3elGSZSWTbM",
};

export const MainContent = ({}) => {
  const result = useAppContext();
  console.log(result);

  return (
    <main className="main-container">
      <Summary />
      <Filter />
      <CardList>
        <TipCard tip={umaDica} />
        <TipCard tip={umaDica} />
        <TipCard tip={umaDica} />
        <TipCard tip={umaDica} />
        <TipCard tip={umaDica} />
        <TipCard tip={umaDica} />
      </CardList>
    </main>
  );
};

MainContent.propTypes = {};
