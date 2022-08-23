export interface IRecipe {
    id: string
    title: string,
    description: string,
    authorId: string
    date: Date
}
export interface IRecipeDTO {
    title: string,
    description: string,
}