import supertest from "supertest"
import { app } from "../src/app"
import { Movie } from "../src/Domain/Movie"
import { saveMovie } from "../src/useCases/Movie/saveMovie"
import { createMockMovie } from "./Mock/MockMovie"

describe("Find all controller", () => {
   
   it("should return all movies", async () => {
        const response = await supertest(app)
                                .get("/movies")

        expect(response.statusCode).toBe(200)
        expect(response.body).toBeTruthy()
        expect(response.body).toHaveLength(0)    
   })
})

describe("Save movie controller", () => {
   it("should return code 200 when sent a valid movie", async () => {
      const testMovie: Movie = createMockMovie()

     const response = await supertest(app)
                              .post("/movies")
                              .send(testMovie)

     expect(response.statusCode).toBe(201)
   })

   it("should return code 400 if no movie was sent", async () => {
      const response = await supertest(app)
                                 .post("/movies")
      
      expect(response.statusCode).toBe(400)
   })

   it("should return code 400 if invalid object is sent", async () => {
   
      const response = await supertest(app)
                                 .post("/movies")
                                 .send({
                                    name: "Going insane with this",
                                    country: "Brazil",
                                    year: 2022
                                 })
      
      expect(response.statusCode).toBe(400)
   })
})

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
