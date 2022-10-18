import { Router } from "express"
import { AuthenticateUserController } from "../Controller/AuthenticateUserController"
import { errorHandler } from "../Middleware/ErrorHandler"

const userRouter = Router()

const authenticateUserController: AuthenticateUserController = new AuthenticateUserController()

userRouter.use(errorHandler)

userRouter
    .route("/user")
    .post(authenticateUserController.handle)

export { userRouter }