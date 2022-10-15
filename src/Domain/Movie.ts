import { v4 as uuid } from "uuid"

type movieProperties = {
    title: string,
    genres: string[],
    year: string,
    synopsis: string,
}

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