import { createMockMovie } from "./Mock/MockMovie"
import { Movie } from "../src/Domain/Movie"
import supertest from "supertest"
import { saveMovie } from "../src/useCases/Movie/saveMovie"
import { app } from "../src/app"

describe("Find by title controller", () => {
    it("should return a movie if valid title is provided", async () => {
       const testMovie: Movie = createMockMovie()
 
       saveMovie(testMovie)
       const response = await supertest(app)
                               .get(`/movies/${testMovie.getTitle()}`)
 
       expect(response.statusCode).toBe(200)
       expect(response.body).toBeTruthy()
       expect(response.body).toHaveProperty("id")
    })
 
    it("should return code 400 if invalid title is provided", async () => {
       const testMovie: Movie = createMockMovie()
 
       saveMovie(testMovie)
       const response = await supertest(app)
                               .get(`/movies/InvalidNameHere`)
 
       expect(response.statusCode).toBe(400)
    })
 })