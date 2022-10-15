import { Movie } from "@prisma/client"
import { prisma } from "../../Database/prisma"

export async function findAll(page:any = 0, size:any = 5): Promise<Movie[]> {

    const parsedPage: number = parseValue(page)
    const parsedSize: number = parseValue(size)

    function parseValue(value: any): number{
        return (isNaN(parseInt(value))) ? 0 : parseInt(value)
    }

    return (await prisma.movie.findMany({
        take: parsedSize,
        skip: parsedPage * parsedSize,
        include: {
            genres: {
                select: {
                    GenreName: true
                }
            }
        }
    }))
}