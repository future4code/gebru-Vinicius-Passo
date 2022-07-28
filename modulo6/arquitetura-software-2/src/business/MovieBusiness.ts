import { MovieDatabase } from "../data/MovieDatabase";
import {v4 as generateId} from "uuid";


export class MovieBusiness {
    public create = async(input: any): Promise<void> => {
        const {title, description, duration_in_minutes, year_of_release} = input;
        if(
            !title|| 
            !description ||
            !duration_in_minutes ||
            !year_of_release) 
            {
            throw new Error("verifique se todos campos estão preenchidos!")
        }
        const id = generateId()
    
        const movieDatabase = new MovieDatabase()
        await movieDatabase.createMovieDatabase({ 
            id,
            title,
            description,
            duration_in_minutes,
            year_of_release
        })
    }
}