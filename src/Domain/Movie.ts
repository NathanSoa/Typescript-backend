import { v4 as uuid } from 'uuid'

type movieProperties = {
    title: string,
    genres: string[],
    year: string,
    synopsis: string,
}

export class Movie {

    private id: string
    private properties: movieProperties

    constructor(props: movieProperties, id?: string){
        this.id = id || uuid()
        this.properties = props
    }

    getTitle(){
        return this.properties.title
    }

    getId(){
        return this.id
    }
}