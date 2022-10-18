/** 
 * Error that is thrown when user tries to use an invalid length password
*/
export class InvalidLengthPasswordError extends Error {
    
    constructor(message: string){
        super(message)
        this.name = "InvalidLengthPassword"
    }
}