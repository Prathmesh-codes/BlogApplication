import { Injectable } from '@nestjs/common';
import { Blog } from './blog.model';
import { CreateBlogDTO } from './dto/create.blog.dto';

@Injectable()
export class BlogService {

//Store all the blogs

private blogs: Blog[]=[];

//Create a new blog
createBlog(createBlogDTO: CreateBlogDTO){
    
const blog: Blog={
  
  id: '',
  title: createBlogDTO.title,
  description: createBlogDTO.description,
  tags: createBlogDTO.tags


}

//

this.blogs.push(blog);


}
}
