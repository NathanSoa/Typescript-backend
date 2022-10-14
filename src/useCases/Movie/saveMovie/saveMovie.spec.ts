import { Movie } from '../../../Domain/Movie'
import { IMovieRepository } from '../../../Repository/Movie/IMovieRepository'
import { mockMovieRepository } from '../../../Mock/MockMovieRepository'
import { saveMovie } from './saveMovie'
import { createMockMovie } from '../../../Mock/MockMovie'

describe('Add movie use case', () => {

   it('should save a new movie', async () => {
    const testMovie: Movie = createMockMovie()

      await saveMovie(testMovie, mockMovieRepository)

      await expect(mockMovieRepository.findAll()).resolves.toHaveLength(1)
   })

   it('should not save movies with duplicated title', async () => {
    const testMovie: Movie = createMockMovie()

      await saveMovie(testMovie, mockMovieRepository)
      await saveMovie(testMovie, mockMovieRepository)

      await expect(mockMovieRepository.findAll()).resolves.toHaveLength(1)
   })
})
