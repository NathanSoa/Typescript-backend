import { Password } from "../Domain/Password"
import { User } from "../Domain/User"

type UserDB = {
    id: string,
    email: string, 
    password: string
}

export class UserMapper {

    static toDomain(rawData: UserDB): User {
        const id = rawData.id
        const email = rawData.email
        const password = Password.create({password: rawData.password, hashed: true})

        return new User({email, password}, id)
    }
}