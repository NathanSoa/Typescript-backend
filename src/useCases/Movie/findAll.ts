import { Movie } from "../../Domain/Movie"
import { prisma } from "../../Database/prisma"
import { MovieMapper } from "../../Utils/MovieMapper"

export async function findAll(page: any = 0, size: any = 5): Promise<Movie[]> {

    const parsedPage: number = parseValue(page)
    const parsedSize: number = parseValue(size)

    const movies = await prisma.movie.findMany({
        take: parsedSize,
        skip: parsedPage * parsedSize,
        orderBy: {
            year: "asc"
        },
        include: {
            genres: {
                select: {
                    GenreName: true
                }
            }
        }
    })

    return MovieMapper.parseDatabaseArray(movies)

    function parseValue(value: any): number{
        return (isNaN(parseInt(value))) ? 0 : parseInt(value)
    }
}