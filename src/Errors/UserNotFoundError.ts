export class UserNotFoundError extends Error {

    constructor(email: string){
        super(`There's no user registered with ${email}`)
        this.name = "UserNotFoundError"
    }
}