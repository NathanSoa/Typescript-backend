import supertest from "supertest"
import { app } from "../src/app"

describe('Authentication user controller', () => {
   it('should return token if valid user', async () => {
    
    const response = await supertest(app).post("/user")
                                .send({
                                    "email": "nathan@gmail.com",
                                    "password": "myPassword"
                                })

    expect(response.body.token).toBeTruthy()
    expect(response.statusCode).toBe(200)
    expect(response.body.user.email).toBe("nathan@gmail.com")
   })

   it('should return code 401 if invalid password', async () => {
        const response = await supertest(app).post("/user")
                                    .send({
                                        "email": "nathan@gmail.com",
                                        "password": "wrongPassword"
                                    })

        expect(response.body.token).toBeFalsy()
        expect(response.statusCode).toBe(401)
        expect(response.body.reason).toBe("Invalid password")
   })
})  