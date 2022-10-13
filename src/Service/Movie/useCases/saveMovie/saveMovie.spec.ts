import { Movie } from '../../../../Domain/Movie'
import { IMovieRepository } from '../../../../Repository/Movie/IMovieRepository'
import { MockMovieRepository } from '../../../../Mock/MockMovieRepository'
import { MovieService } from '../../movieService'

describe('Add movie use case', () => {

   it('should save a new movie', async () => {
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

      await expect(movieService.findAll()).resolves.toHaveLength(1)
   })

   it('should not save movies with duplicated title', async () => {
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
      await movieService.saveMovie(testMovie)

      await expect(movieService.findAll()).resolves.toHaveLength(1)
   })
})
