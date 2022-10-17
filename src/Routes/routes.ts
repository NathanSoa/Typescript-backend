import { movieRouter } from "./MovieRouter"
import { userRouter } from "./UserRouter"
import { Router } from "express"

const router = Router()

router.use(movieRouter)
router.use(userRouter)

export { router }
