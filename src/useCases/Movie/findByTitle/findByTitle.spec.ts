import { Movie } from '../../../Domain/Movie'
import { mockMovieRepository } from '../../../Mock/MockMovieRepository'
import { findByTitle } from './findByTitle'
import { createMockMovie } from '../../../Mock/MockMovie'

describe('Find by title use case', () => {
   it('should return the correct movie if user inputs valid title', async () => {
    const testMovie: Movie = createMockMovie()
  
        await mockMovieRepository.save(testMovie)
  
        await expect(findByTitle('Test Movie', mockMovieRepository)).resolves.toMatchObject(testMovie)
   })

   it('should return nulll if no movie was found', async () => {
    const testMovie: Movie = createMockMovie()
  
        await mockMovieRepository.save(testMovie)
  
        await expect(findByTitle('There is no valid movie with this title', mockMovieRepository)).resolves.toBeFalsy()
   })
})