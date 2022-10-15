import { Movie } from "../src/Domain/Movie"
import { prisma } from "../src/Database/prisma"
import { saveMovie } from "../src/useCases/Movie/saveMovie"
import { createMockMovie } from "./Mock/MockMovie"

describe("Add movie use case", () => {

   afterEach(async () => {
      const deleteMovieGenres = prisma.moviesGenres.deleteMany()
      const deleteMovies = prisma.movie.deleteMany()
      const deleteGenres = prisma.genre.deleteMany()

      prisma.$transaction([deleteMovieGenres, deleteMovies, deleteGenres])
   })

   afterAll(async () => {
      await prisma.$disconnect()
   })

   it("should save a new movie", async () => {
      const testMovie: Movie = createMockMovie()
      await saveMovie(testMovie)

      await expect(prisma.movie.findUnique({where: { title: testMovie.getTitle()}})).resolves.toBeTruthy()
   })

   it("should not save movies with duplicated title", async () => {

      const movie = createMockMovie()
      await saveMovie(movie)

      await expect(saveMovie(movie)).resolves.toBeFalsy()
   })
})
