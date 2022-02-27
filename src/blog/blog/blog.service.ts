import { Injectable, NotFoundException } from '@nestjs/common';
import { Blog } from './blog.model';
import { CreateBlogDTO } from './dto/create.blog.dto';
import * as uuid from 'uuid'
import { takeLast } from 'rxjs';
import { BlogRepository } from './blog.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { SearchBlogDTO } from './dto/search.blog.dto';

@Injectable()
export class BlogService {

constructor(
  @InjectRepository(BlogRepository)
  private blogrepository:BlogRepository
){}

//Create a new blog
async createBlog(createBlogDTO: CreateBlogDTO){

return this.blogrepository.createblog(createBlogDTO);

}




async getBlog(searchBlogDTO:SearchBlogDTO){

return this.blogrepository.getblog(searchBlogDTO);
}



async getBlogById(id:string)
{
  const blog=await this.blogrepository.findOne(id);

  if(!blog){
throw new NotFoundException('Blog Not Found')
  }

  return blog;
}



async updateblog(id:string, title:string){

  const blog=await this.getBlogById(id);
  
  blog.title=title;

  await blog.save();

  return blog;

}

async deleteblog(id:string){

 const result= await this.blogrepository.delete(id);

 if(result.affected==0)
{
  throw new NotFoundException('No blog found')
}

  
return result;
}



}
