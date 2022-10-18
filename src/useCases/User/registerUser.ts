import { prisma } from "../../Database/prisma"
import { User } from "../../Domain/User"
import { EmailAlreadyInUseError } from "../../Errors/EmailAlreadyInUseError"


export async function registerUser(user: User): Promise<void> {

    const existUser = await prisma.user.findUnique({where: { email: user.getEmail() }})

    if(existUser){
        throw new EmailAlreadyInUseError(user.getEmail())
    }

    const password = await user.getPassword().getHashed()

    await prisma.user.create({
        data: {
            email: user.getEmail(),
            id: user.getID(),
            password: password
        }
    })
}