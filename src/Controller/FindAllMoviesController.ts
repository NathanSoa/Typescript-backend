import { Request, Response } from 'express'
import { mockMovieRepository } from '../Mock/MockMovieRepository'
import { findAll } from '../useCases/Movie/findAll/findAll'

export class FindAllMoviesController {

    async handle(request: Request, response: Response): Promise<Response> {
        const movies = await findAll(mockMovieRepository)
        return response.status(200).json(movies)
    }
}