import express, { Request, Response } from "express";
import cors from "cors";
import { v4 as generateId } from "uuid";
import { produtos } from "./data";

const app = express();
app.use(express.json());
app.use(cors());

const erros = {
  GENERICO_NOT_FOUND: {
    status: 400,
    message: "método ou caminho inválidos, JSON inválido…",
  },
  NAME_NOT_FOUND: { status: 401, message: "name ou price está faltando!" },
  PRICE_NOT_FOUND: {
    status: 422,
    message: "O valor inserido não pode ser igual a zera ou menor",
  },
  PRICE2_NOT_FOUND: {
    status: 422,
    message: "O valor inserido deve ser do tipo number",
  },
  SOME_ERROR: { status: 500, message: "Algo deu errado" },
};

const errosDel = {
  DELETE_NOT_FOUND: { status: 404, message: "Produto não encontrado!" },
};

app.get("/test", (req: Request, res: Response) => {
  res.send("Api está funcionando certinho!");
});

app.post("/criar/produto", (req: Request, res: Response) => {
  try {
    const name: string = req.body.name;
    const price: number = req.body.price;

    if (!name || !price) throw new Error(erros.NAME_NOT_FOUND.message);

    if (typeof name !== typeof "string" || typeof price !== typeof 1)
      throw new Error(erros.GENERICO_NOT_FOUND.message);

    if (price <= 0) throw new Error(erros.PRICE_NOT_FOUND.message);

    produtos.push({
      id: generateId(),
      name,
      price,
    });

    res.status(201).send("Produto criado com sucesso!");
  } catch (error: any) {
    switch (error.message) {
      case erros.GENERICO_NOT_FOUND.message:
        res
          .status(erros.GENERICO_NOT_FOUND.status)
          .send(erros.GENERICO_NOT_FOUND.message);
        break;

      case erros.NAME_NOT_FOUND.message:
        res
          .status(erros.NAME_NOT_FOUND.status)
          .send(erros.NAME_NOT_FOUND.message);
        break;
      case erros.PRICE_NOT_FOUND.message:
        res
          .status(erros.PRICE_NOT_FOUND.status)
          .send(erros.PRICE_NOT_FOUND.message);
      default:
        res.status(erros.SOME_ERROR.status).send(erros.SOME_ERROR.message);
    }
  }
});

app.get("/produtos", (req: Request, res: Response) => {
  res.send(produtos);
});

app.put("/produto/:idProduto/edit", (req: Request, res: Response) => {
  try {
    const idProduto = req.params.idProduto;
    const price: number = req.body.price;

    const idEncontrado = produtos.findIndex((i) => i.id === idProduto);

    if (price <= 0) throw new Error(erros.PRICE_NOT_FOUND.message);

    if (typeof price !== typeof 1)
      throw new Error(erros.PRICE2_NOT_FOUND.message);

    if (idEncontrado) throw new Error(errosDel.DELETE_NOT_FOUND.message);

    produtos
      .filter((produ) => produ.id === idProduto)
      .map((produc) => {
        produc.price = price;
      });

    res.send("editado com sucesso");
  } catch (error: any) {
    switch (error.message) {
      case erros.PRICE_NOT_FOUND.message:
        res
          .status(erros.PRICE_NOT_FOUND.status)
          .send(erros.PRICE_NOT_FOUND.message);
        break;
      case erros.PRICE2_NOT_FOUND.message:
        res
          .status(erros.PRICE2_NOT_FOUND.status)
          .send(erros.PRICE2_NOT_FOUND.message);
        break;
      case errosDel.DELETE_NOT_FOUND.message:
        res
          .status(errosDel.DELETE_NOT_FOUND.status)
          .send(errosDel.DELETE_NOT_FOUND.message);
        break;
      default:
        res.status(erros.SOME_ERROR.status).send(erros.SOME_ERROR.message);
    }
  }
});

app.delete("/protudos/:idProduto/delete", (req: Request, res: Response) => {
  try {
    const id = req.params.idProduto;
    const idEncontrado = produtos.findIndex((i) => i.id === id);

    if (idEncontrado) throw new Error(errosDel.DELETE_NOT_FOUND.message);

    if (idEncontrado > -1) {
      produtos.splice(idEncontrado, 1);
    }

    res.send("Produto removido");
  } catch (error: any) {
    switch (error.message) {
      case errosDel.DELETE_NOT_FOUND.message:
        res
          .status(errosDel.DELETE_NOT_FOUND.status)
          .send(errosDel.DELETE_NOT_FOUND.message);
        break;
      default:
        res.status(erros.SOME_ERROR.status).send(erros.SOME_ERROR.message);
    }
  }
});

app.listen(3003, () => {
  console.log("Servidor rodando na porta 3003");
});
