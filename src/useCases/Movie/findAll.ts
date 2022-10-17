import { Movie } from "../../Domain/Movie"
import { prisma } from "../../Database/prisma"
import { MovieMapper } from "../../Utils/MovieMapper"

type paginationParams = {
    page: any,
    size: any
}

/**
* Function that will return all movies retrived from database, by default, it will order data by year
* @param {any} page - index of currently page that should be showed
* @param {any} size - represent how many objects should be showed by page
* @return {Promise<Movie[]>} - return a Promise object containing an array of all data
*/
export async function findAll({page = 0, size = 5}: paginationParams): Promise<Movie[]> {

    const parsedPage: number = parseValue(page)
    const parsedSize: number = parseValue(size)
    const initialValue: number = parsedPage * parsedSize

    const movies = await prisma.movie.findMany({
        take: parsedSize,
        skip: initialValue,
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
}

/**
* Function that parse values coming from query string
* @param {any} value - receives any value
* @return the int value of entry param, if its impossible to get any int value, it will return 0
*/
function parseValue(value: any): number {
    return (isNaN(parseInt(value))) ? 0 : parseInt(value)
}