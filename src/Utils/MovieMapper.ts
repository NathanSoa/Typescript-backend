import { Movie } from "../Domain/Movie";

type MovieDB = {
    id: string,
    title: string,
    year: string,
    synopsis: string,
    genres: genre[]
}

type genre = {
    GenreName: string
}

export class MovieMapper {
    static toDomain(rawData: MovieDB){
        const id = rawData.id
        const title = rawData.title
        const year = rawData.year
        const synopsis = rawData.synopsis
        const genres: string[] = Array.from(rawData.genres.map(each => each.GenreName))

        return new Movie({title, year, synopsis, genres}, id)
    }

    static parseDatabaseArray(movies: MovieDB[]): Movie[]{
        return movies.map(eachMovie => MovieMapper.toDomain(eachMovie))
    }
}