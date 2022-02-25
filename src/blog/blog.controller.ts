import { Body, Controller, Get, Post } from '@nestjs/common';
import { BlogService } from './blog/blog.service';
import { CreateBlogDTO } from './blog/dto/create.blog.dto';


@Controller('blog')
export class BlogController {

    constructor(private blogService: BlogService){}

@Post()
createBlog(
@Body()
createBlogDTO:CreateBlogDTO){

this.blogService.createBlog(createBlogDTO)

}

}


// @Get()
//  getblog(){

// }


// updateblog(){

// }

// deleteblog(){

// }



