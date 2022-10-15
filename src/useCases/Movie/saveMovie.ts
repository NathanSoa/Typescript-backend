import { Movie } from "../../Domain/Movie"
import { prisma } from "../../Database/prisma"

export async function saveMovie(movie: Movie): Promise<void> { 

    const genres = movie.getGenres()

    if((await prisma.movie.findUnique({where: {title: movie.getTitle()}})) !== null){
        return
    }

    genres.map(async eachGenre => await prisma.genre.upsert({
        where: {
            name: eachGenre
        },
        update: {},
        create: {
            name: eachGenre
        }
    }))

    await prisma.movie.create({
        data: {
            id: movie.getId(),
            synopsis: movie.getSynopsis(),
            title: movie.getTitle(),
            year: movie.getYear(),
            genres: {
                connectOrCreate: movie.getGenres().map(eachGenre => {
                    return {
                        where: { MovieID_GenreName: { GenreName: eachGenre, MovieID: movie.getId()}},
                        create: { GenreName: eachGenre}
                    }
                }) 
            }
        }
    })
}