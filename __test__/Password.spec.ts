import { Password } from "../src/Domain/Password"

describe('Password value object', () => {
   it('should create a new Password if valid Inputs', () => {
      const password = Password.create({password: "ThisIsMySuperSecurePassword"})

      expect(password).toBeTruthy()
   })

   it('should throw an Error if invalid length password is used', () => {

    
        expect(Password.hasValidLength("a")).toBeFalsy()
        expect(Password.hasValidLength("")).toBeFalsy()
        expect(() => { Password.create({password: "a"}) }).toThrowError()
        expect(() => { Password.create({password: ""}) }).toThrowError()
   })

   it('should hash the password value', async () => {
    const plainTextPassword = "ThisIsMySuperSecurePassword"
    const password = Password.create({password: plainTextPassword})

    await expect(password.getHashed()).resolves.not.toBe(plainTextPassword)
   })
})