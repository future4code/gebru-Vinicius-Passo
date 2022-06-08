import express from "express";
import cors from "cors";
import { Request, Response } from "express";
import { afazeres } from "./users";

const app = express();
app.use(express.json());
app.use(cors());

//  imprime uma mensagem!
app.get("/ping", (req: Request, res: Response) => {
  res.send("Pong! 🏓");
});


// 4- Retorna todas tarefas Concluída
app.get("/tarefas/concluida", (req: Request, res: Response) => {
  try {
    const tarefas = afazeres;
    const tarefasConcluida = tarefas
      .filter((item) => {
        return item.completed === true;
      })
      .map((concluida) => {
        return concluida;
      });

    res.status(200).send(tarefasConcluida);
  } catch (error) {
    console.log("Erro");
  }
});

// 5- Cria tarefa
app.post("/tarefas/criar", (req: Request, res: Response) => {
  try {
    const tarefas = afazeres;
    const { userId, id, title, completed } = req.body;

    const newTarefas = {
      userId,
      id,
      title,
      completed,
    };
    tarefas.push(newTarefas);
    res.status(201).send("tarefa adicionada");
  } catch (error) {
    console.log("Erro");
  }
});

// 6- Edita tarefa espera um id
app.put("/tarefa/editar/:id", (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    afazeres
      .filter((item) => item.id === id)
      .map((tarefa) => {
        if (tarefa.completed === true) {
          tarefa.completed = false;
        } else {
          tarefa.completed = true;
        }
      });

    res.send("Tarefa alterada!");
  } catch (Error: any) {
    res.end(Error.message);
  }
});

// 7- Deleta afazer pelo o seu id
app.delete("/afazer/:id/deletar", (req: Request, res: Response) => {
  try {
    const idAfazeres = Number(req.params.id);

    const index = afazeres.findIndex((i) => i.id === idAfazeres);
    if (index > -1) {
      afazeres.splice(index, 1);
    }

    res.status(200).send("Tarefa deletada");
  } catch (Error: any) {
    res.end(Error.message);
  }
});

// 8 Retorna todos afazeres de um afazer espicifico
app.get("/afazer/:id/users", (req: Request, res: Response) => {
  try {
    const idAfazer = Number(req.params.id);
    const tarefas = afazeres;
    const tarefasConcluida = tarefas
      .filter((item) => {
        return item.id === idAfazer;
      })
      .map((fazerId) => {
        return fazerId;
      });
    if (!idAfazer)
      throw new Error("Id não foi passado, ou está de forma incorreta!");

    if (tarefasConcluida.length === 0) throw new Error("Tarefa não encontrada");

    res.status(200).send(tarefasConcluida);
  } catch (Error: any) {
    res.end(Error.message);
  }
});

app.listen(3003, () => {
  console.log("Servidor online");
});
