import { Request, Response } from "express"
import { findByTitle } from "../useCases/Movie/findByTitle"

export class FindByTitleController {

    async handle(request: Request, response: Response): Promise<Response> {
        const movie = await findByTitle(request.body)

        if(!movie){
            return response.status(400).json(JSON.stringify(`Cannot found movie with title ${request.body}`))
        }
        
        return response.status(200).json(movie)
    }
}