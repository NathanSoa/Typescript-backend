export class EmailAlreadyInUseError extends Error {

    constructor(email: string){
        super(`An user already uses the email ${email}`)
        this.name = "EmailAlreadyInUseError"
    }
}