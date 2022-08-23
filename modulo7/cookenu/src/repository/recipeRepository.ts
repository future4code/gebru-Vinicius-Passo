import { IRecipe } from "../model/recipe";

export interface IRecipeRepository {
   insertRecipe (recipe: IRecipe): Promise<void>
}