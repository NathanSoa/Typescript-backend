import { IMovieRepository } from "../../../Repository/Movie/IMovieRepository";
import { Movie } from "../../../Domain/Movie";

export async function findByTitle (title: string, movieRepository: IMovieRepository): Promise<Movie | null>{
    const movie = (await movieRepository.findByTitle(title))

    if(!movie){
        return null
    }
    
    return movie  
}