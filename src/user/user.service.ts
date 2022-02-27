import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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
   
        return this.userRepository.signin(authCredsDTO);
   }




}

