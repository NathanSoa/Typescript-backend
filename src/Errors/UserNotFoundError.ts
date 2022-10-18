/** 
 * Error that is thrown when user tries to authenticate with an inexistent email
*/
export class UserNotFoundError extends Error {

    constructor(email: string){
        super(`There's no user registered with ${email}`)
        this.name = "UserNotFoundError"
    }
}