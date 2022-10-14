import { Movie } from '../../../Domain/Movie'
import { IMovieRepository } from "../../../Repository/Movie/IMovieRepository"

export async function saveMovie(movie: Movie, movieRepository: IMovieRepository): Promise<void> {
     
    if(await existsMovieWithSameTitle()){
        return
    }  
    
    movieRepository.save(movie)     


    async function existsMovieWithSameTitle() {
        return (await movieRepository.findAll()).filter(eachMovie => eachMovie.getTitle() === movie.getTitle()).length > 0
    }
}