import { USerEntity } from "src/user/user.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity('Blog')
export class BlogEntity extends BaseEntity{
   
   @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title:string;

    @Column()
    description:string;

    @Column()
    tags: string;

    @ManyToOne(type => USerEntity,user=>user.blogs, {eager:false})
    user: USerEntity;

    @Column()
    userId:number;
}