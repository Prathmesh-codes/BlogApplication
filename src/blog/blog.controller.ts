import { Body, Controller,Delete,Get,Param,Patch,Post, Query, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { title } from 'process';
import { stringify } from 'querystring';
import { GetUser } from 'src/user/get.user.decorator';
import { USerEntity } from 'src/user/user.entity';
import { getEnabledCategories } from 'trace_events';
import { BlogService } from './blog/blog.service';
import { CreateBlogDTO } from './blog/dto/create.blog.dto';
import { SearchBlogDTO } from './blog/dto/search.blog.dto';


@Controller('blog')
@UseGuards(AuthGuard())
export class BlogController {

    constructor(private blogService: BlogService){}

@Post()
@UsePipes(ValidationPipe)
createBlog(
@GetUser() user:USerEntity,
@Body()
createBlogDTO:CreateBlogDTO){

return this.blogService.createBlog(createBlogDTO, user);

}

@Get()
getBlog(
    @GetUser() user:USerEntity,
    @Query() searchBlogDTO:SearchBlogDTO){
    return this.blogService.getBlog(searchBlogDTO,user);
}



@Delete('/:id')
public deleteblog(
    @GetUser() user:USerEntity,
    @Param('id')id:string){

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










