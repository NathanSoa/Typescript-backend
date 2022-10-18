import { sign } from "jsonwebtoken"
import { prisma } from "../../Database/prisma"
import bcrypt from 'bcryptjs'
import { UserMapper } from "../../Utils/UserMapper"
import { secret } from "../../Config/secret"
import { UserNotFoundError } from "../../Errors/UserNotFoundError"

type userCredentials = {
    email: string,
    password: string
}

export async function authenticate({email, password}: userCredentials): Promise<string | null> {

    const userDB = await prisma.user.findUnique({where: { email: email }})

    if(!userDB){
        throw new UserNotFoundError(email);
    }
    
    const user = UserMapper.toDomain(userDB)
    const passwordMatches = await bcrypt.compare(password, userDB.password)

    if(passwordMatches){
        return sign({id: user.getID(), email: user.getEmail()}, secret, { expiresIn: "1h" })
    }

    return null
}