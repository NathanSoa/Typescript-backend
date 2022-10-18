import { Request, Response, NextFunction } from "express"
import { EmailAlreadyInUseError } from "../Errors/EmailAlreadyInUseError"
import { InvalidLengthPasswordError } from "../Errors/InvalidLengthPasswordError"
import { UserNotFoundError } from "../Errors/UserNotFoundError"

export function errorHandler(err: Error, request: Request, response: Response, next: NextFunction) {

    if(err instanceof InvalidLengthPasswordError){
        response.status(400).json({
            reason: err.message
        })
    } 
    else if (err instanceof UserNotFoundError){
        response.status(404).json({
            reason: err.message
        })
    }
    else if (err instanceof EmailAlreadyInUseError) {
        response.status(400).json({
            reason: err.message
        })
    }
    else {
        response.status(500).json({
            reason: "Unexpected server error!"
        })
    }

    next()
}