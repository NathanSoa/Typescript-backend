import { Router } from "express";
import { FindAllMoviesController } from "../Controller/FindAllMoviesController";
import { FindByTitleController } from "../Controller/FindByTitleController";
import { SaveMovieController } from "../Controller/SaveMovieController";

const movieRouter = Router()

const findAllMoviesController: FindAllMoviesController = new FindAllMoviesController()
const saveMovieController: SaveMovieController = new SaveMovieController()
const findByTitleController: FindByTitleController = new FindByTitleController()

movieRouter
    .route("/movies")
    .get(findAllMoviesController.handle)
    .post(saveMovieController.handle)

movieRouter.route("/movies/:movieTitle")
    .get(findByTitleController.handle)

export { movieRouter }