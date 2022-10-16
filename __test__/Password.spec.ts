import { Password } from "../src/Domain/Password"
import bcrypt from "bcryptjs"

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

   it('should be able to compare the password value with it value after being hashed', async () => {
    const password = Password.create({password: "ThisIsMySuperSecurePassword"})
    const passwordHashed = await password.getHashed()

    expect(password.compare(passwordHashed)).toBeTruthy()
   })

   it('should be able to compare hashed values', async () => {
    const hashedPassword = await bcrypt.hash("ThisIsMySuperSecurePassword", 8)
    const password = Password.create({password: hashedPassword, hashed: true})
    const hashedValue = await password.getHashed()

    expect(password.compare(hashedPassword)).toBeTruthy()
    expect(password.compare(hashedValue)).toBeTruthy()
   })
})