import bcrypt from 'bcryptjs'

type passwordProperties = {
    password: string,
    hashed?: boolean
}

export class Password {
    private password: string
    private hashed: boolean

    private constructor(props: passwordProperties){
        this.hashed = props.hashed || false
        this.password = props.password
    }

    static create({ password, hashed = false}: passwordProperties) {        
        if(Password.hasInvalidLength(password)){
            throw new Error("Password has Invalid length")
        }

        return new Password({ password, hashed })
    }

    public async compare(plainPassword: string): Promise<boolean> {

        if (this.hashed) {
            const hashedPassword = this.password

            return await bcrypt.compare(plainPassword, hashedPassword)
        }

        return this.password === plainPassword
    }

    public async getHashed(): Promise<string> {
        if (this.hashed) {
          return this.password
        }
    
        return await bcrypt.hash(this.password, 8)
    }

    static hasInvalidLength(password: string): boolean {
        return !this.hasValidLength(password)
    }

    static hasValidLength(password: string): boolean {
        return (password.trim().length > 8) && (password.trim().length < 255)
    }
}