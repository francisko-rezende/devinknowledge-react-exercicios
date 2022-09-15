import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../Button";
import styles from "./SideBar.module.css";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  titulo: z
    .string()
    .min(8, "O título precisa ter mais de 8 caracteres")
    .max(64, "O título precisa ter menos de 64 caracteres"),
  categoria: z.enum(["front-end", "back-end", "full-stack"], {
    errorMap: (issue, _ctx) => {
      switch (issue.code) {
        case "invalid_type":
          return { message: "Escolha uma das categorias." };
        case "invalid_enum_value":
          return { message: "Escolha uma das categorias." };
        default:
          return { message: "Tudo certo" };
      }
    },
  }),
  linguagem: z
    .string({ required_error: "Campo obrigatório" })
    .min(4, "A linguagem precisa ter mais de 4 caracteres")
    .max(16, "A linguagem precisa ter menos de 16 caracteres"),
  descricao: z
    .string()
    .min(32, 'A descrição precisa ter mais de 8 caracteres"')
    .max(512, "O título precisa ter menos de 64 caracteres"),
  video: z.string().url("Url inválida").or(z.literal("")),
});

const handleCreateTip = (data) => console.log(data);

export const SideBar = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(formSchema) });

  return (
    <aside className={styles.sidebarContainer}>
      <div className={styles.sidebarContainer__logo}>
        <h1>DEVInKnowledge</h1>
        <span>Learn, Code and Save</span>
      </div>
      <form onSubmit={handleSubmit(handleCreateTip)}>
        <div className={styles.inputGroup}>
          <label htmlFor="titulo">Titulo</label>
          <input
            type="text"
            placeholder="digite um título..."
            id="titulo"
            {...register("titulo")}
          />
          {errors.titulo && <p>{errors.titulo.message}</p>}
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="categoria">Categoria</label>
          <select
            name="categoria"
            id="categoria"
            placeholder="escolha uma categoria..."
            {...register("categoria")}
          >
            <option value="">selecione uma categoria...</option>
            <option value="front-end">Front end</option>
            <option value="back-end">Back end</option>
            <option value="full-stack">Full stack</option>
          </select>
          {errors.categoria && <p>{errors.categoria.message}</p>}
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="linguagem">Linguagem / Skill</label>
          <input
            type="text"
            id="linguagem"
            placeholder="digite uma linguagem..."
            {...register("linguagem")}
          />
          {errors.linguagem && <p>{errors.linguagem.message}</p>}
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="descricao">Descrição</label>
          <textarea
            type="text"
            id="descricao"
            placeholder="digite uma descrição..."
            rows="5"
            {...register("descricao")}
          ></textarea>
          {errors.descricao && <p>{errors.descricao.message}</p>}
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="video">Vídeo do Youtube (opcional)</label>
          <input
            type="text"
            id="video"
            placeholder="digite uma url do YouTube..."
            {...register("video")}
          />
          {errors.video && <p>{errors.video.message}</p>}
        </div>

        <div className={styles.btnGroup}>
          <Button type="submit" variant="secondary">
            salvar
          </Button>
          <Button type="reset" variant="primary" onClick={() => reset()}>
            limpar
          </Button>
        </div>
      </form>
    </aside>
  );
};
