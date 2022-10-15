import { findByTitle } from "./findByTitle"
import { generateTestData, truncateAllTestData } from "../../../../prisma/prismaTestFunctions"

describe("Find by title use case", () => {

    beforeEach(async () => {
        await generateTestData()
    })

    afterEach(async () => {
        await truncateAllTestData()
    })

    it("should return the correct movie if user inputs valid title", async () => {
        const movie = (await findByTitle("Avatar"))

        expect(movie).toBeTruthy()
        expect(movie?.title).toBeTruthy()
        expect(movie?.title).toBe("Avatar")
        expect(movie?.synopsis).toBeTruthy()
        expect(movie?.year).toBeTruthy()
        expect(movie?.year).toBe("2009")
        expect(movie?.id).toBeTruthy()
    })

    it("should return nulll if no movie was found", async () => {

        await expect(findByTitle("There is no valid movie with this title")).resolves.toBeFalsy()
    })
})