import { Body, Controller, Get, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { SignatureKind } from 'typescript';
import { AuthCredsDTO } from './dto/auth.cred.dto';
import { GetUser } from './get.user.decorator';
import { USerEntity } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(
private userservice:UserService

    ){}

@Get('/profile')
@UseGuards(AuthGuard())
  getprofile(@GetUser() user:USerEntity){

return user;
}  


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
