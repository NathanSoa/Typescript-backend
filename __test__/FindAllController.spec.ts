import supertest from "supertest"
import { app } from "../src/app"

describe("Find all controller", () => {
   
   it("should return all movies", async () => {
        const response = await supertest(app)
                                .get("/movies")

        expect(response.statusCode).toBe(200)
        expect(response.body).toBeTruthy()
        expect(response.body).toHaveLength(0)    
   })
})