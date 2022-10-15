import { Movie } from "../src/Domain/Movie"
import { prisma } from "../src/Database/prisma"
import { saveMovie } from "../src/useCases/Movie/saveMovie"
import { createMockMovie } from "./Mock/MockMovie"
import { truncateAllTestData } from "../prisma/prismaTestFunctions"

describe("Add movie use case", () => {

   afterEach(async () => {
      truncateAllTestData()
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
