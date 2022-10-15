import { prisma } from "./Database/prisma";
import { Movie } from "./Domain/Movie";

const a = async () => {

    const c = await prisma.movie.findUnique({where: {title: "Test Movie"}})
    console.log(c)

    if(c === null){
        return
    }

    const movie = new Movie({
        title: "Test Movie",
        genres: [
            "Action",
            "Adventure"
        ],
        year: "2022",
        synopsis: "lorem ipsum dolor amet"
    })

    await prisma.movie.create({
        data: {
            id: movie.getId(),
            synopsis: movie.getSynopsis(),
            title: movie.getTitle(),
            year: movie.getYear()
        }
    })

    console.log()
} 

a()