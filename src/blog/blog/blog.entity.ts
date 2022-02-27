import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


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

}