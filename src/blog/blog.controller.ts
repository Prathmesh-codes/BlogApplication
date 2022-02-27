import { Body, Controller,Delete,Get,Param,Patch,Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { title } from 'process';
import { stringify } from 'querystring';
import { getEnabledCategories } from 'trace_events';
import { BlogService } from './blog/blog.service';
import { CreateBlogDTO } from './blog/dto/create.blog.dto';
import { SearchBlogDTO } from './blog/dto/search.blog.dto';


@Controller('blog')
export class BlogController {

    constructor(private blogService: BlogService){}

@Post()
@UsePipes(ValidationPipe)
createBlog(
@Body()
createBlogDTO:CreateBlogDTO){

return this.blogService.createBlog(createBlogDTO);

}

@Get()
getBlog(searchBlogDTO:SearchBlogDTO){
    return this.blogService.getBlog(searchBlogDTO);
}



@Delete('/:id')
public deleteblog(@Param('id')id:string){

    return this.blogService.deleteblog(id);
    



}

@Patch('/:id/title')
public updateblog(

    @Param('id') id:string,
    @Param('title')title:string)
    {

         return this.blogService.updateblog(id,title);

    }

}










