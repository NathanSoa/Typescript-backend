import { sign } from "jsonwebtoken"
import { prisma } from "../../Database/prisma"
import { Password } from "../../Domain/Password"

type userCredentials = {
    email: string,
    password: string
}

export async function authenticate({email, password}: userCredentials): Promise<string | null> {

    const passwordObject = Password.create({password: password})
    const user = await prisma.user.findUniqueOrThrow({where: { email: email }})

    const passwordMatches = await passwordObject.compare(user.password)

    if(passwordMatches){
        return sign({id: user.id, email: user.email}, "QRNsyqvEm01Ir7qh4psea8UNqApsJD")
    }

    return null
}