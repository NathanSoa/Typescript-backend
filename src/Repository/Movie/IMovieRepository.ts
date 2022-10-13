import { Movie } from '../../Domain/Movie'

export interface IMovieRepository {

    save(movie: Movie): Promise<void>
    findAll(): Promise<Array<Movie>>
    findByTitle(title: string): Promise<Movie | undefined>
}