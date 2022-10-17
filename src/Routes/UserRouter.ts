import { Router } from "express"
import { AuthenticateUserController } from "../Controller/AuthenticateUserController"

const userRouter = Router()

const authenticateUserController: AuthenticateUserController = new AuthenticateUserController()

userRouter
    .route("/user")
    .post(authenticateUserController.handle)

export { userRouter }