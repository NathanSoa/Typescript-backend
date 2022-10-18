import { Request, Response, NextFunction } from "express"
import { InvalidLengthPasswordError } from "../Errors/InvalidLengthPasswordError"

export function errorHandler(err: Error, request: Request, response: Response, next: NextFunction) {

    if(err instanceof InvalidLengthPasswordError){
        response.status(400).json({
            reason: "Password have invalid length!"
        })
    } else {
        response.status(500).json({
            reason: "Unexpected server error!"
        })
    }

    next()
}