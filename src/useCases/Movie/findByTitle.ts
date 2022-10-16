import { Movie } from "../../Domain/Movie"
import {prisma} from "../../Database/prisma"
import { MovieMapper } from "../../Utils/MovieMapper"

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