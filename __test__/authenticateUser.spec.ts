import { authenticate } from "../src/useCases/User/authenticateUser";
import { prisma } from "../src/Database/prisma"
import { Password } from "../src/Domain/Password";
import { User } from "../src/Domain/User";

describe('Authenticate function', () => {

   beforeAll(async () => {
      const password = Password.create({password: "myPassword"})
      const user = new User({email: "nathan@gmail.com", name: "nathan", password: password})
      const hashedPassword = await user.getPassword().getHashed()

        await prisma.user.create({
            data: {
                email: user.getEmail(),
                password: hashedPassword,
                id: user.getID()
            }
        })
   })

   it('should authenticate valid user', async () => {

    const userDB = await prisma.user.findUniqueOrThrow({where: { email: "nathan@gmail.com"}})
    
    await expect(authenticate({email: userDB.email, password: userDB.password})).resolves.toBeTruthy()
   })

   it('should not authenticate user with invalid password', async () => {
      
    const userDB = await prisma.user.findUniqueOrThrow({where: { email: "nathan@gmail.com"}})
    const invalidPassword = "ThisIsInvalid"

    await expect(authenticate({email: userDB.email, password: invalidPassword})).resolves.toBeFalsy()
   })
})  