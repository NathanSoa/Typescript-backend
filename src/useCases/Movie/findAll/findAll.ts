import { Movie } from "../../../Domain/Movie"
import { IMovieRepository } from "../../../Repository/Movie/IMovieRepository"

export async function findAll(movieRepository: IMovieRepository): Promise<Movie[]> {
     
    return movieRepository.findAll()
}