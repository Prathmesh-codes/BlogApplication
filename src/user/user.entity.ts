import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity('user')
@Unique(['username'])
export class USerEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username:string

    @Column()
    password:string
}