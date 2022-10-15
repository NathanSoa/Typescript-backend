import { findAll } from "../src/useCases/Movie/findAll"
import { prisma } from "../src/Database/prisma"

describe("Find all use case", () => {

   beforeAll(async () => {
      await prisma.movie.create({
         data: {
            id: '1234',
            title: 'new movie',
            synopsis: 'test movie',
            year: '2022'
         }
      })

      await prisma.movie.create({
         data: {
            id: '12345',
            title: 'new movie 2',
            synopsis: 'test movie 2',
            year: '2023'
         }
      })
   })

   afterAll(async () => {
      await prisma.movie.deleteMany()
      await prisma.$disconnect()
   })
   
   it("should return all movies", async () => {

      await expect(findAll()).resolves.toHaveLength(2)
   })
})