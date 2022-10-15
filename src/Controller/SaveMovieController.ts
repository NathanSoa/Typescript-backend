import { Request, Response } from "express"
import { Movie } from "../Domain/Movie"
import { saveMovie } from "../useCases/Movie/saveMovie"

export class SaveMovieController {

    async handle(request: Request, response: Response): Promise<Response> {

        if(Object.keys(request.body).length === 0){
            return response.status(400).json(JSON.stringify("No movie was provided!"))
        }

        const { title = null, genres = null, year = null, synopsis = null} = request.body
        const filtered = {title, genres, year, synopsis}

        if(Object.values(filtered).find(property => property === null) === null){
            return response.status(400).json(JSON.stringify("Invalid object was provided!"))
        }

        await saveMovie(new Movie(filtered))
        return response.status(201).json(JSON.stringify("Succesfuly saved!"))
    }
}