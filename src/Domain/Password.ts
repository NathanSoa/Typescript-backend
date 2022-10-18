import bcrypt from 'bcryptjs'

/**
* Type containing the must have for any password object
*/
type passwordProperties = {
    password: string,
    hashed?: boolean
}

/**
* Class that represent the value object of any user password. It has a private constructor,
* new instances should be create be using the static method create().
* This class uses bcrypt to encrypt the string value.
* @constructor
* @param {passwordProperties} props - object that have all values for a password
*/
export class Password {
    private password: string
    private hashed: boolean

    private constructor(props: passwordProperties){
        this.hashed = props.hashed || false
        this.password = props.password
    }

    /**
    * method that return a new instance of password if it has valid length,
    * if invalid length password is sent, it will throw an InvalidLengthError.
    * @constructor
    * @param {passwordProperties} props - object that have all values for a password
    */
    static create({ password, hashed = false}: passwordProperties) {        
        if(Password.hasInvalidLength(password)){
            throw new Error("Password has Invalid length")
        }

        return new Password({ password, hashed })
    }

    /**
    * method that return the password hashed value if it is not hashed yet
    * @return {Promise<string>} - promise with password hashed value 
    */
    public async getHashed(): Promise<string> {
        if (this.hashed) {
          return this.password
        }
    
        return await bcrypt.hash(this.password, 8)
    }

    /**
    * method that return if a string value has not valid length to be used as password
    */
    static hasInvalidLength(password: string): boolean {
        return !this.hasValidLength(password)
    }

    /**
    * method that return if a string value has valid length to be used as password
    */
    static hasValidLength(password: string): boolean {
        return (password.trim().length > 8) && (password.trim().length < 255)
    }
}