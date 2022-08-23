import { CustomError, UserNotFound } from "../error/CustomError";
import { IRecipe, IRecipeDTO } from "../model/recipe";
import { IRecipeRepository } from "../repository/recipeRepository";
import { Authenticator } from "../services/Authenticator";
import DataRecipe from "../services/DataRecipe";
import { IdGenerator } from "../services/IdGenerator";


export class RecipeBusiness {
    constructor(
        private recipeDatabase: IRecipeRepository,
        private authenticator: Authenticator
        ) {}

     async insertRecipeBusiness (token: string, input: IRecipeDTO): Promise<void> {
        try {
            const { title, description } = input;
            if(!token) {
                throw new CustomError("É necessário passar o token no header authorization!", 401)
            }

            if(!title || !description) {
                throw new CustomError("É necessário preencher o campo 'title' e 'description'", 400)
            }

            const user = this.authenticator.getTokenData(token)

            if(!user) {
                throw new UserNotFound()
            }

            const id = IdGenerator()
            const authorId = user.id
            const date = DataRecipe.currentTime()

            const recipe: IRecipe = {
                id,
                title,
                description,
                authorId,
                date
            }

            await this.recipeDatabase.insertRecipe(recipe)

        } catch (error: any) {
            throw new CustomError(error.message, 400)
        }
     }
}