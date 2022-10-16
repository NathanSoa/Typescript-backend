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
/**
* Class that convert movie object incoming from database
*/
export class MovieMapper {
    /**
    * Main method of MovieMapper class. This should be used to convert a unique object coming from database
    * @param {MovieDB} rawData - object that have all data retrieved from database
    * @return {Movie} - returns a new domain Movie instantiation containing all data passed
    */
    static toDomain(rawData: MovieDB){
        const id = rawData.id
        const title = rawData.title
        const year = rawData.year
        const synopsis = rawData.synopsis
        const genres: string[] = Array.from(rawData.genres.map(each => each.GenreName))

        return new Movie({title, year, synopsis, genres}, id)
    }

    /**
    * This method will convert an array of database movie object to an array with new domain movie object
    * @param {MovieDB[]} rawMoviesData - array of objects that have all data retrieved from database
    * @return {Movie[]} - returns a new array with domain Movie instantiation containing all data passed
    */
    static parseDatabaseArray(rawMoviesData: MovieDB[]): Movie[]{
        return rawMoviesData.map(eachMovie => MovieMapper.toDomain(eachMovie))
    }
}