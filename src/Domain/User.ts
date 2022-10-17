import { v4 as uuid } from 'uuid'
import { Password } from './Password'

type userProperties = {
    email: string, 
    password: Password
}

export class User {

    private id: string
    private email: string
    private password: Password

    constructor(props: userProperties, id?: string){
        this.id = id || uuid()
        this.email = props.email
        this.password = props.password
    }

    getID(){
        return this.id
    }

    getEmail(){
        return this.email
    }

    getPassword(){
        return this.password
    }
}