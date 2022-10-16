import { Movie } from "../../Domain/Movie"
import {prisma} from "../../Database/prisma"
import { MovieMapper } from "../../Utils/MovieMapper"

/**
* Function that will find a movie with title that matches the title provided.
* If there is no movie found this will return null
* @param {string} title - the movie title that should by found in database
* @return {Movie} - return a object of any movie that was found
*/
export async function findByTitle (title: string): Promise<Movie | null>{
    const movie = (await prisma.movie.findUnique({
        where: {
            title: title
        },
        include: {
            genres: {
                select: {
                    GenreName: true
                }
            }
        }
    }))

    if(!movie){
        return null
    }
    
    return MovieMapper.toDomain(movie)  
}