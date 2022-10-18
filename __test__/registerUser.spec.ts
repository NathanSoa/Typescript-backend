import { User } from "../src/Domain/User"
import { Password } from "../src/Domain/Password"
import { prisma } from "../src/Database/prisma"
import { registerUser } from "../src/useCases/User/registerUser"

describe('register user use case', () => {

    afterEach(async () => {
        prisma.user.delete({
            where: {
                email: "validAndUnique@example.com"
            }
        })
    })
   it('should register a valid user', async () => {
      const password: Password = Password.create({password: "SuperSecurePassword"})
      const user: User = new User({
        email: "validAndUnique@example.com",
        password: password
      })

      await registerUser(user)

      const userDB = await prisma.user.findUnique({ where: { email: user.getEmail() }})

      expect(userDB).toBeTruthy()
      expect(userDB?.email).toBe(user.getEmail())
   })

   it('should throw an error if user tries to use an email that was already registered', async () => {
    const password: Password = Password.create({password: "SuperSecurePassword"})
      const user: User = new User({
        email: "notUnique@example.com",
        password: password
      })

      await registerUser(user)
      await expect(registerUser(user)).rejects.toThrow()
   })
})  