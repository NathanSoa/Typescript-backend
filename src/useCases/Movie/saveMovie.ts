import { Movie } from "../../Domain/Movie"
import { prisma } from "../../Database/prisma"

export async function saveMovie(movie: Movie): Promise<void> { 

    const genres = movie.getGenres()

    if((await prisma.movie.findUnique({where: {title: movie.getTitle()}})) !== null){
        return
    }

    await prisma.movie.create({
        data: {
            id: movie.getId(),
            synopsis: movie.getSynopsis(),
            title: movie.getTitle(),
            year: movie.getYear()
        }
    })


    genres.forEach(async eachGenre => {
        await prisma.genre.upsert({
            where: {
                name: eachGenre
            },
            update:{},
            create: {
                name: eachGenre
            }
        })

        await prisma.moviesGenres.create({
            data: {
                MovieID: movie.getId(),
                GenreName: eachGenre
            }
        })
    })    
}