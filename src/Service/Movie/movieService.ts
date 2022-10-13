import { saveMovie } from "./useCases/saveMovie/saveMovie"
import { IMovieRepository } from "../../Repository/Movie/IMovieRepository"
import { Movie } from "../../Domain/Movie"
import { findByTitle } from "./useCases/findByTitle/findByTitle"

export class MovieService {

    private saveMovieUseCase: saveMovie
    private findByTitleUseCase: findByTitle
    private movieRepository: IMovieRepository

    constructor(movieRepository: IMovieRepository){
        this.saveMovieUseCase = new saveMovie()
        this.findByTitleUseCase = new findByTitle()
        this.movieRepository = movieRepository
    }

    async saveMovie(movie: Movie): Promise<void>{
        this.saveMovieUseCase.execute(movie, this.movieRepository)
    }

    async findAll(): Promise<Array<Movie>>{
        return this.movieRepository.findAll()
    }

    async findByTitle(title: string): Promise<Movie>{
        return this.findByTitleUseCase.execute(title, this.movieRepository)
    }
}