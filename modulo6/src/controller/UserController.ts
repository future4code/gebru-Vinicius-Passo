import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {
  async getUserController(req: Request, res: Response) {
    try {
      const users = await new UserBusiness().getUsersBusiness();

      res.send(users).status(200);
    } catch (error: any) {
      res.send({ message: error.message }).status(error.status);
    }
  }

  createUser = async (req: Request, res: Response) => {
    try {
      const input: any = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      };
      const userBusiness = new UserBusiness();
      await userBusiness.createUser(input);

      res
        .status(201)
        .send({ message: `usuário ${req.body.name}, criado com sucesso!` });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  deleteUserController = async(req: Request, res: Response) => {
    try {
        const input = {id: req.params.id}
        await new UserBusiness().deleteUserBusiness(input)

        res.status(200).send({message: "usuário deletado com sucesso!"})
        
    } catch (error: any) {
        res.status(400).send({ error: error.message });
    }
  }
}
