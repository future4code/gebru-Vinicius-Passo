import { app } from "./app";
import { getAllUsers } from "./endpoints/getAllRecipes";

app.get("/users", getAllUsers)
app.get("users/:id", )