import express from "express";
import { LikePostBusiness } from "../business/LikePostBusiness";
import { LikePostController } from "../controller/LikePostController";
import { LikePostDatabase } from "../data/LikePostDatabase";

export const likeRouter = express.Router()

const likePostDatabase = new LikePostDatabase();
const likePostBusiness = new LikePostBusiness(likePostDatabase);
const likePostController = new LikePostController(likePostBusiness) 

likeRouter.post("/:authorId", (req, res) => likePostController.likeController(req, res))
likeRouter.delete("/delete/:id", (req, res) => likePostController.desLike(req, res))