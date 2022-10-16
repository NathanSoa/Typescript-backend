import { v4 as uuid } from 'uuid'
import { Password } from './Password'

type userProperties = {
    name: string,
    email: string, 
    password: Password
}

export class User {

    private id: string
    private name: string
    private email: string
    private password: Password

    constructor(props: userProperties, id?: string){
        this.id = id || uuid()
        this.name = props.name
        this.email = props.email
        this.password = props.password
    }

    getID(){
        return this.id
    }

    getName(){
        return this.name
    }

    getEmail(){
        return this.email
    }

    getPassword(){
        return this.password
    }
}