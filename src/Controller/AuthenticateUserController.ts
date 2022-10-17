import { Request, Response } from "express"
import { authenticate } from "../useCases/User/authenticateUser"

export class AuthenticateUserController {

    async handle(request: Request, response: Response): Promise<Response> {

        const token = await authenticate({email: request.body.email, password: request.body.password})

        if(!token){
            return response.status(401).json({"reason": "Invalid password"})
        }

        return response.status(200).json({
            "token": token, 
            "user": {
                "email": request.body.email
            }
        })
    }
}