
export class InvalidLengthPasswordError extends Error {
    
    constructor(message: string){
        super(message)
        this.name = "InvalidLengthPassword"
    }
}