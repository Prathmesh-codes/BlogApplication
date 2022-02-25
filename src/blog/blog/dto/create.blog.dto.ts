import { IsNotEmpty } from "class-validator";

export class CreateBlogDTO{

    @IsNotEmpty()
    title:string;

    @IsNotEmpty()
    description:string;

    
    tags:string;
}