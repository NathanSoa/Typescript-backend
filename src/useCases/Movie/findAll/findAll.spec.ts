import { Movie } from '../../../Domain/Movie'
import { mockMovieRepository } from '../../../Mock/MockMovieRepository'
import { findAll } from './findAll'
import { createMockMovie } from '../../../Mock/MockMovie'

describe('Find all use case', () => {
   it('should return all movies', async () => {
    const testMovie: Movie = createMockMovie()
  
        mockMovieRepository.save(testMovie)
  
        await expect(findAll(mockMovieRepository)).resolves.toHaveLength(1)
   })
})