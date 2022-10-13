import { IMovieRepository } from "../../../../Repository/Movie/IMovieRepository";
import { Movie } from "../../../../Domain/Movie";

export class findByTitle {

    async execute(title: string, movieRepository: IMovieRepository): Promise<Movie>{
        const movies = (await movieRepository.findAll())
        const movie = movies.find(element => element.getTitle() === title)

        if(!movie){
            throw new Error("Movie not found!")
        }
        
        return movie  
    }
}