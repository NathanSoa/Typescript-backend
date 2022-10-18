import { Movie } from "../src/Domain/Movie"
import supertest from "supertest"
import { createMockMovie } from "./Mock/MockMovie"
import { app } from "../src/app"

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