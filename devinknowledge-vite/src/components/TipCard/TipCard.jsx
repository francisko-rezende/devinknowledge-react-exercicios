import React from "react";
import { Button } from "../Button";
import styles from "./TipCard.module.css";
import PropTypes from "prop-types";

export const TipCard = ({ titulo, descricao, categoria, linguagem, video }) => {
  return (
    <div className={styles.tipcardContainer}>
      <h2 className={styles.title}>{titulo}</h2>
      <div className={styles.metadata}>
        <div>
          Linguagem: <span className={styles.metaValue}>{linguagem}</span>
        </div>
        <div>
          Categoria: <span className={styles.metaValue}>{categoria}</span>
        </div>
      </div>
      <div className={styles.content}>{descricao}</div>
      <div className={`${styles.btnGroup} ${styles.alignLeft}`}>
        <Button type="submit" variant="primary">
          editar
        </Button>

        {video && (
          <Button type="submit" variant="secondary">
            <a
              style={{ color: "inherit", textDecoration: "none" }}
              href={video}
            >
              Youtube
            </a>
          </Button>
        )}

        <Button type="submit" variant="secondary">
          Apagar
        </Button>
      </div>
    </div>
  );
};

TipCard.propTypes = {
  titulo: PropTypes.string,
  descricao: PropTypes.number,
  categoria: PropTypes.string,
  linguagem: PropTypes.string,
  video: PropTypes.string,
};
