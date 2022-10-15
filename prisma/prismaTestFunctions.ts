import { Prisma, PrismaClient } from "@prisma/client";
import { v4 as uuid } from "uuid";

const prisma = new PrismaClient({errorFormat: "pretty"})

async function loadMovies() {
    const movieInputs: Prisma.MovieCreateManyInput[] = [
        {
            id: uuid(),
            title: "Avatar",
            year: "2009",
            synopsis: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        },
        {
            id: uuid(),
            title: "Gladiator",
            year: "2000",
            synopsis: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery."
        }
    ]

    await prisma.movie.createMany({
        data: movieInputs
    })
}

async function loadGenres() {
    const genreInputs: Prisma.GenreCreateManyInput[] = [
        {
            name: "Action"
        },
        {
            name: "Adventure"
        },
        {
            name: "Fantasy"
        },
        {
            name: "Drama"
        }
    ]

    await prisma.genre.createMany({
        data: genreInputs
    })
}

async function loadMoviesGenresRelation() {
    const avatarMovie = await prisma.movie.findUniqueOrThrow({
        where: {
            title: "Avatar"
        }
    })

    const gladiatorMovie = await prisma.movie.findUniqueOrThrow({
        where: {
            title: "Gladiator"
        }
    })

    const actionGenre = await prisma.genre.findUniqueOrThrow({
        where: {
            name: "Action"
        }
    })

    const adventureGenre = await prisma.genre.findUniqueOrThrow({
        where: {
            name: "Adventure"
        }
    })

    const fantasyGenre = await prisma.genre.findUniqueOrThrow({
        where: {
            name: "Fantasy"
        }
    })

    const dramaGenre = await prisma.genre.findUniqueOrThrow({
        where: {
            name: "Drama"
        }
    })

    const movieGenreInputs: Prisma.MoviesGenresCreateManyInput[] = [
        {
            MovieID: avatarMovie.id,
            GenreName: actionGenre.name
        },
        {
            MovieID: avatarMovie.id,
            GenreName: adventureGenre.name
        },
        {
            MovieID: avatarMovie.id,
            GenreName: fantasyGenre.name
        },
        {
            MovieID: gladiatorMovie.id,
            GenreName: actionGenre.name
        },
        {
            MovieID: gladiatorMovie.id,
            GenreName: adventureGenre.name
        },
        {
            MovieID: gladiatorMovie.id,
            GenreName: dramaGenre.name
        }
    ]

    await prisma.moviesGenres.createMany({
        data: movieGenreInputs
    })
}

async function generateTestData() {
    await loadMovies()
    await loadGenres()
    await loadMoviesGenresRelation()
}

async function truncateAllTestData() {
    const deleteMovieGenres = prisma.moviesGenres.deleteMany()
    const deleteMovies = prisma.movie.deleteMany()
    const deleteGenres = prisma.genre.deleteMany()

    await prisma.$transaction([deleteMovieGenres, deleteMovies, deleteGenres])
}

export { generateTestData, truncateAllTestData }

// main().then(async () => {
//     await prisma.$disconnect()
// })
// .catch(async (err) => {
//     console.log(err)
//     await prisma.$disconnect()
// })