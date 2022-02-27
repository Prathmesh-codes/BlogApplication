import { EntityRepository, Repository } from "typeorm";
import { AuthCredsDTO } from "./dto/auth.cred.dto";
import { USerEntity } from "./user.entity";
import * as crypto from 'crypto-js'


@EntityRepository(USerEntity)
export class UserRepository extends Repository<USerEntity>{
 
 async signup(authCredsDTO:AuthCredsDTO){

    const user= new USerEntity()
    user.username=authCredsDTO.username;
    user.password= `${crypto.MD5(authCredsDTO.password)}`;

    await user.save();
 }

 async signin(authCredsDTO:AuthCredsDTO){


}



}