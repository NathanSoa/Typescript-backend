import { Movie } from '../../../../Domain/Movie'
import { IMovieRepository } from '../../../../Repository/Movie/IMovieRepository'
import { MockMovieRepository } from '../../../../Mock/MockMovieRepository'
import { MovieService } from '../../movieService'

describe('Find by title use case', () => {
   it('should return the correct movie if user inputs valid title', async () => {
    const testMovie: Movie = new Movie({
        title: 'Test Movie',
        genres: [
            'Action',
            'Adventure'
        ],
        year: '2022',
        synopsis: "lorem ipsum dolor amet"
      })
  
        const movieRepository: IMovieRepository = new MockMovieRepository()
        const movieService: MovieService = new MovieService(movieRepository)
        await movieService.saveMovie(testMovie)
  
        await expect(movieService.findByTitle('Test Movie')).resolves.toMatchObject(testMovie)
   })

   it('should throw an error if no movie was found', async () => {
    const testMovie: Movie = new Movie({
        title: 'Test Movie',
        genres: [
            'Action',
            'Adventure'
        ],
        year: '2022',
        synopsis: "lorem ipsum dolor amet"
      })
  
        const movieRepository: IMovieRepository = new MockMovieRepository()
        const movieService: MovieService = new MovieService(movieRepository)
        await movieService.saveMovie(testMovie)
  
        await expect(movieService.findByTitle('There is no movie here')).rejects.toThrow()
   })
})