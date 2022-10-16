import { findByTitle } from "../src/useCases/Movie/findByTitle"
import { prisma } from "../src/Database/prisma"

describe("Find by title use case", () => {

    beforeEach(async () => {
        await prisma.movie.create({
            data: {
               id: '1234',
               title: 'Avatar',
               synopsis: 'test movie',
               year: '2009'
            }
         })
    })

    afterEach(async () => {
        await prisma.movie.deleteMany()
    })

    afterAll(async () => {
        await prisma.$disconnect()
     })

    it("should return the correct movie if user inputs valid title", async () => {
        const movie = (await findByTitle("Avatar"))

        expect(movie).toBeTruthy()
        expect(movie?.getTitle()).toBeTruthy()
        expect(movie?.getTitle()).toBe("Avatar")
        expect(movie?.getSynopsis()).toBeTruthy()
        expect(movie?.getYear()).toBeTruthy()
        expect(movie?.getYear()).toBe("2009")
        expect(movie?.getId()).toBeTruthy()
    })

    it("should return nulll if no movie was found", async () => {

        await expect(findByTitle("There is no valid movie with this title")).resolves.toBeFalsy()
    })
})