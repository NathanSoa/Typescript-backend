import { Router } from "express";

const movieRouter = Router()

movieRouter.route('/movies')
    .get((request, response) => {
        response.send('GET request to /movies')
    })
    .post((request, response) => {
        response.send("POST request to /movies")
    })

movieRouter.route('/movies/:movieId')
    .get((request, response) => {
        response.send(`GET request for movie ${request.params.movieId}`)
    })
    .delete((request, response) => {
        response.send(`DELETE request for movie ${request.params.movieId}`)
    })
    .put((request, response) => {
        response.send(`PUT request for movie ${request.params.movieId}`)
    })

export { movieRouter }