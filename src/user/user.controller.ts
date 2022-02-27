import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { SignatureKind } from 'typescript';
import { AuthCredsDTO } from './dto/auth.cred.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(
private userservice:UserService

    ){}


@Post('/signup')
@UsePipes(ValidationPipe)
signup(
    @Body() authCredsDTO:AuthCredsDTO)
{

return this.userservice.signup(authCredsDTO);
}

@Post('/signin')
@UsePipes(ValidationPipe)
signin(
    @Body() authCredsDTO:AuthCredsDTO){
return this.userservice.signin(authCredsDTO);

}




















}
