import { findAll } from "../src/useCases/Movie/findAll"
import { generateTestData, truncateAllTestData } from "../prisma/prismaTestFunctions"

describe("Find all use case", () => {

   beforeAll(async () => {
      await generateTestData()
   })

   afterEach(async () => {
      await truncateAllTestData()
   })

   it("should return all movies", async () => {

      await expect(findAll()).resolves.toHaveLength(2)
   })
})