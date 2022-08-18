import express from "express";
import { PostBusiness } from "../business/PostBusiness";
import { PostController } from "../controller/PostController";
import { PostDatabase } from "../data/PostDatabase";


export const postRouter = express.Router()

const postDatabase = new PostDatabase()
const postBusiness = new PostBusiness(postDatabase)
const postController = new PostController(postBusiness)

postRouter.get("/type/:type", (req, res) => postController.getPostTypeController(req, res))
postRouter.get("/:id", (req, res) => postController.getPostController(req, res))
postRouter.post("/create",(req, res) => postController.createPostControler(req, res))