import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";
import * as crypto from 'crypto-js'
@Entity('user')
@Unique(['username'])
export class USerEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username:string

    @Column()
    password:string

    async validatePassword(password:string){
      const encrypted=`${crypto.MD5(password)}`  
      return encrypted == this.password;
    }
}