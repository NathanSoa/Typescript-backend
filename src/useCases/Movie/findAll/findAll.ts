import { Movie } from "@prisma/client"
import {prisma} from "../../../Database/prisma"

export async function findAll(): Promise<Movie[]> {
    

    return (await prisma.movie.findMany({
        include: {
            genres: {
                select: {
                    GenreName: true
                }
            }
        }
    }))
}