import { v4 as uuid } from "uuid"

/**
 * Type that represent the object of properties that any movie must have
 */
type movieProperties = {
    title: string,
    genres: string[],
    year: string,
    synopsis: string,
}

/**
* Actual class that represent a movie in this application
* @constructor
* @param {movieProperties} props - Object that have all values of any movie 
* @param {string} id - unique identifier, if there is no id on instatiation, it will generate one using uuid
*/
export class Movie {

    private id: string
    private title: string
    private genres: string[]
    private year: string
    private synopsis: string

    constructor(props: movieProperties, id?: string){
        const { title, genres, year, synopsis } = props

        this.id = id || uuid()
        this.title = title
        this.genres = genres
        this.year = year
        this.synopsis = synopsis
        
    }

    getTitle(){
        return this.title
    }

    getId(){
        return this.id
    }
    
    getGenres(){
        return this.genres
    }

    getYear(){
        return this.year
    }

    getSynopsis(){
        return this.synopsis
    }
}