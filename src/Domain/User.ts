import { v4 as uuid } from 'uuid'
import { Password } from './Password'

/**
* Type containing the must have for any user object
*/
type userProperties = {
    email: string, 
    password: Password
}

/**
* Class that represent the User on this application. this class
* @constructor
* @param {userProperties} props - Object that have all values of any user 
* @param {string} id - unique identifier, if there is no id on instatiation, it will generate one using uuid
*/
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