import { Request, Response } from "express"
import { Password } from "../Domain/Password"
import { User } from "../Domain/User"
import { registerUser } from "../useCases/User/registerUser"

export class RegisterUserController {

    async handle(request: Request, response: Response): Promise<Response> {

        if(Object.keys(request.body).length === 0){
            return response.status(400).json({
                reason: "No user was provided!"
            })
        }

        const { email = null, password = null } = request.body
        const filtered = {email, password}

        if(Object.values(filtered).find(property => property === null) === null){
            return response.status(400).json({
                reason: "Invalid object was provided!"
            })
        }

        const passwordObject = Password.create({password: password})

        const user: User = new User({
            email: filtered.email,
            password: passwordObject
        })

        await registerUser(user)

        return response.status(201).json({
            reason: "Succesfuly saved!"
        })
    }
}