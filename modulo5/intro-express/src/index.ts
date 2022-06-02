import express from "express";
import cors from "cors";
import { Request, Response } from "express";
import { dataUsers } from "./data";
import { posts } from "./data";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  try {
    res.status(200).send("Hellor from express");
  } catch (error) {
    res.status(400).end("Error ao encontrar url");
  }
}); // endpoint para dizer um hellor from express

app.get("/usuarios", (req: Request, res: Response) => {
  const listaDeUsuario = dataUsers;
  const todosUsuario = listaDeUsuario.map((usuarios) => {
    return usuarios;
  });
  const usuarios = todosUsuario.flat(1);

  res.status(200).send(usuarios);
}); // endpoint para pegar todos os usuário

app.get("/posts", (req: Request, res: Response) => {
  try {
    const listaDePost = posts;
    const todosPost = listaDePost.map((post) => {
      return post;
    });
    const resulPost = todosPost.flat(1);
    res.status(200).send(resulPost);
  } catch (error) {
    res.status(400).end("Error ao encontrar posts");
  }
});

app.get("/pessoa", (req: Request, res: Response) => {
  try {
    const listaDePost = dataUsers;
    const pessoaId: number = Number(req.query.id);
    let pessoaEs: {}[] = [];
    for (let pessoa of listaDePost) {
      if (pessoa.id === pessoaId) {
        pessoaEs.push(pessoa.name);
      }
    }
    res.status(200).send(pessoaEs);
  } catch (error) {
    res.status(400).end("Error ao encontrar pessoa");
  }
});

app.delete("/posts/:id", (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const allPosts = posts
      .map((item) => {
        return item;
      })
      .flat(1);

    allPosts.forEach((postsEx) => {
      if (postsEx.id === id) {
        return {};
      }
      return postsEx;
    });
    res.status(200).send("post deletado");
  } catch (error) {
    res.status(400).end("Erro ao encontrar id do post");
  }
});

app.listen(3003, () => {
  console.log("Servidor online");
});
