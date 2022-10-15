import { Request, Response } from "express"
import { findAll } from "../useCases/Movie/findAll"

export class FindAllMoviesController {

    async handle(request: Request, response: Response): Promise<Response> {
        const movies = await findAll()
        return response.status(200).json(movies)
    }
}