import React from "react";
import { Button } from "../Button";
import styles from "./SideBar.module.css";

export const SideBar = () => {
  return (
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
          <Button type="submit" variant="secondary">
            salvar
          </Button>
          <Button type="reset" variant="primary">
            limpar
          </Button>
        </div>
      </form>
    </aside>
  );
};
