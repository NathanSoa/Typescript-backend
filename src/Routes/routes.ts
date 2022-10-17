import { movieRouter } from "./MovieRouter"
import { userRouter } from "./UserRouter"
import { Router } from "express"

const router = Router()

router.use(userRouter)
router.use(movieRouter)

export { router }
