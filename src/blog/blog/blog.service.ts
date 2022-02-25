import { Injectable, NotFoundException } from '@nestjs/common';
import { Blog } from './blog.model';
import { CreateBlogDTO } from './dto/create.blog.dto';
import * as uuid from 'uuid'
import { takeLast } from 'rxjs';

@Injectable()
export class BlogService {

//Store all the blogs

private blogs: Blog[]=[];


//Create a new blog
createBlog(createBlogDTO: CreateBlogDTO){

const newId=uuid.v1();

const blog: Blog={
  
  id: newId,
  title: createBlogDTO.title,
  description: createBlogDTO.description,
  tags: createBlogDTO.tags


}

//

this.blogs.push(blog);
return this.blogs;
}

getBlog(){

return this.blogs

}

updateblog(id:string, title:string){
  const blog=this.blogs.find((blog)=>{
      return blog.id==id;
  });

  if(!blog){
      throw new NotFoundException('Blog not found');
  }

  blog.title=title
  return blog;
}

deleteblog(id:string){
  //delete the task with the id

  const blog=this.blogs.find((blog)=>{
      return blog.id==id;
  });

  if(!blog){
      throw new NotFoundException('Blog not found');
  }

  this.blogs=this.blogs.filter(task=>task.id!=id);

  
  return this.blogs;


}



}
