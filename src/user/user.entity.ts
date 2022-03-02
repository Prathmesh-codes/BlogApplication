import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import * as crypto from 'crypto-js'
import { BlogEntity } from "src/blog/blog/blog.entity";
@Entity('user')
@Unique(['username'])
export class USerEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username:string

    @Column()
    password:string


    @OneToMany(type=> BlogEntity, blog=>blog.user, {eager:true})
    blogs: BlogEntity[];
    async validatePassword(password:string){
      const encrypted=`${crypto.MD5(password)}`  
      return encrypted == this.password;
    }
}