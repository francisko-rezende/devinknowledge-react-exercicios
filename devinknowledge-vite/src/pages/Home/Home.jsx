import React from "react";
import styles from "./Home.module.css";

export const Home = () => {
  const handleOnEnterFilter = () => {};
  const handleOnClearFilter = () => {};

  return (
    <div className={styles.rootContainer}>
      <aside className={styles.sidebarContainer}>
        <div className={styles.sidebarContainer__logo}>
          <h1>DEVInKnowledge</h1>
          <span>Learn, Code and Save</span>
        </div>
        <form>
          <div className={styles.inputGroup}>
            <label htmlFor="titulo">Titulo</label>
            <input type="text" placeholder="digite um título..." id="titulo" />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="categoria">Categoria</label>
            <select
              name="categoria"
              id="categoria"
              placeholder="escolha uma categoria..."
            >
              <option value="">selecione uma categoria...</option>
              <option value="front-end">Front end</option>
              <option value="back-end">Back end</option>
              <option value="full-stack">Full stack</option>
            </select>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="linguagem">Linguagem / Skill</label>
            <input
              type="text"
              id="linguagem"
              placeholder="digite uma categoria..."
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="descricao">Descrição</label>
            <textarea
              type="text"
              id="descricao"
              placeholder="digite uma descrição..."
              rows="5"
            ></textarea>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="video">Vídeo do Youtube (opcional)</label>
            <input
              type="text"
              id="video"
              placeholder="digite uma url do YouTube..."
            />
          </div>

          <div className={styles.btnGroup}>
            <button
              className={`${styles.btn} ${styles.secondary}`}
              type="submit"
            >
              salvar
            </button>
            <button className={`${styles.btn} ${styles.primary}`} type="submit">
              limpar
            </button>
          </div>
        </form>
      </aside>

      <main className={styles.mainContainer}>
        <div className={styles.summaryContainer}>
          <div className={styles.summaryContainer__card}>
            <span className="title">back-end</span>
            <span className="value">1</span>
          </div>
          <div className={styles.summaryContainer__card}>
            <span className="title">total</span>
            <span className="value">1</span>
          </div>
        </div>

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

        <div className={styles.cardList}>
          <div className={styles.tipcardContainer}>
            <h2 className={styles.title}>Título da dica</h2>
            <div className={styles.metadata}>
              <div>
                Linguagem: <span className={styles.metaValue}>JavaScript</span>
              </div>
              <div>
                Categoria: <span className={styles.metaValue}>Back End</span>
              </div>
            </div>
            <div className={styles.content}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis sunt harum et velit, eveniet molestiae est repellat
              dicta hic aspernatur officiis beatae aliquid itaque sit aut nulla
              error culpa ratione?
            </div>
            <div className={`${styles.btnGroup} ${styles.alignLeft}`}>
              <button
                className={`${styles.btn} ${styles.primary}`}
                type="submit"
              >
                editar
              </button>
              <button
                className={`${styles.btn} ${styles.secondary}`}
                type="submit"
              >
                YouTube
              </button>
              <button
                className={`${styles.btn} ${styles.secondary}`}
                type="submit"
              >
                apagar
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
