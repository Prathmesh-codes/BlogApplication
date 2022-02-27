import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NOTFOUND } from 'dns';
import { AuthCredsDTO } from './dto/auth.cred.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {


constructor(

@InjectRepository(UserRepository)
private userRepository:UserRepository,


){}


    async signup(authCredsDTO:AuthCredsDTO){

return this.userRepository.signup(authCredsDTO);
    }
   
    async signin(authCredsDTO:AuthCredsDTO){
   
       const result= await this.userRepository.signin(authCredsDTO);

       if(!result){
           throw new NotFoundException('User not found');
       }

       return {username: authCredsDTO.username};
   }




}

