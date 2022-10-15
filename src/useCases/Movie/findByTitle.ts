import { Movie } from "@prisma/client"
import {prisma} from "../../Database/prisma"

export async function findByTitle (title: string): Promise<Movie | null>{
    const movie = (await prisma.movie.findUnique({
        where: {
            title: title
        }
    }))

    if(!movie){
        return null
    }
    
    return movie  
}