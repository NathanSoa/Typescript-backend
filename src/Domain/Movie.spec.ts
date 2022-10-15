import { Movie } from "./Movie"
import { createMockMovie } from "../Mock/MockMovie"

describe("Movie Entity", () => {
   
    it("should generate an id when created if no id is provided", async () => {
        const testMovie: Movie = createMockMovie()
    
        expect(testMovie.getId()).toBeTruthy()
    })

       it("should use the provided id if provided", async () => {
        const testId: string = "custom id for test"
        const testMovie: Movie = new Movie({
            title: "Test Movie",
            genres: [
                "Action",
                "Adventure"
            ],
            year: "2022",
            synopsis: "lorem ipsum dolor amet"
          }, testId)
    
          expect(testMovie.getId()).toBe(testId)
       })
})