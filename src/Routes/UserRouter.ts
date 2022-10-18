import { Router } from "express"
import { AuthenticateUserController } from "../Controller/AuthenticateUserController"
import { RegisterUserController } from "../Controller/RegisterUserController"
import { errorHandler } from "../Middleware/errorHandler"

const userRouter = Router()

const authenticateUserController: AuthenticateUserController = new AuthenticateUserController()
const registerUserController: RegisterUserController = new RegisterUserController()

userRouter.use(errorHandler)

userRouter
    .route("/auth")
    .post(authenticateUserController.handle)

userRouter
    .post("/user", registerUserController.handle)

export { userRouter }