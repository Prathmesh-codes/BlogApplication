import { IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class AuthCredsDTO{
    
    @IsNotEmpty()
    @MinLength(5)
    @MaxLength(10)
    username:string

    @IsNotEmpty()
    @MinLength(5)
    @MaxLength(10)
    password: string;
}