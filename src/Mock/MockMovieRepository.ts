import { IMovieRepository } from "../Database/Movie/IMovieRepository"
import { Movie } from "../Domain/Movie"

class MockMovieRepository implements IMovieRepository {

    private movies: Movie[] = []

    async save(movie: Movie): Promise<void> {
        this.movies.push(movie)
    }

    async findAll(): Promise<Movie[]> {
        return this.movies 
    }
    
    async findByTitle(title: string): Promise<Movie | undefined> {
        const movie = this.movies.find(movie => movie.getTitle() === title)
        return movie
    }
}

const mockMovieRepository: IMovieRepository = new MockMovieRepository()

export { mockMovieRepository }