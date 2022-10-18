import { Password } from "../Domain/Password"
import { User } from "../Domain/User"

type UserDB = {
    id: string,
    email: string, 
    password: string
}

/**
* Class that convert user object incoming from database
*/
export class UserMapper {

    /**
    * Main method of UserMapper class. This should be used to convert a unique object coming from database
    * @param {UserDB} rawData - object that have all data retrieved from database
    * @return {User} - returns a new domain User instance containing all data 
    */
    static toDomain(rawData: UserDB): User {
        const id = rawData.id
        const email = rawData.email
        const password = Password.create({password: rawData.password, hashed: true})

        return new User({email, password}, id)
    }
}