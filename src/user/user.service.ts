import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { NOTFOUND } from 'dns';
import { AuthCredsDTO } from './dto/auth.cred.dto';
import { JwtPayload } from './jwt.payload';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {


constructor(

@InjectRepository(UserRepository)
private userRepository:UserRepository,

private jwtService: JwtService,


){}


    async signup(authCredsDTO:AuthCredsDTO){

return this.userRepository.signup(authCredsDTO);
    }
   
    async signin(authCredsDTO:AuthCredsDTO){
   
       const user= await this.userRepository.signin(authCredsDTO);

       if(!user){
           throw new NotFoundException('User not found');
       }



       //create a JWT token
       const payload: JwtPayload={ username: authCredsDTO.username,
        id: user.id,

       };

       const token= await this.jwtService.sign(payload);
       return {token:token};
   }




}

