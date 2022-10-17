import { Request, Response, NextFunction } from "express"
import { secret } from "../Config/secret"
import jwt from "jsonwebtoken"

export function authMiddleware(request: Request, response: Response, next: NextFunction) {

    const token = request.headers.authorization

    if(!token){
        response.status(401).json({
            reason: "You're not authenticated!"
        })

        return
    }

    try {
        const decoded = jwt.verify(token, secret)

    } catch (err){
        response.status(401).json({
            reason: "Invalid token!"
        })
    }

    next()
}