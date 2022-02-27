import { EntityRepository, Repository } from "typeorm";
import { BlogEntity } from "./blog.entity";
import { CreateBlogDTO } from "./dto/create.blog.dto";
import { SearchBlogDTO } from "./dto/search.blog.dto";

@EntityRepository(BlogEntity)
export class BlogRepository extends Repository<BlogEntity>{

async createblog(createBlogDTO:CreateBlogDTO){

const blog=new BlogEntity();
blog.title=createBlogDTO.title;
blog.description=createBlogDTO.description;
blog.tags=createBlogDTO.tags;

await blog.save();

return blog;

}

async getblog(searchBlogDto:SearchBlogDTO)
{
const {search}=searchBlogDto;

const query=this.createQueryBuilder('blog');

if(search)
{


    query.andWhere(`(blog.title LIKE:search) OR (blog.description LIKE:search)`,
    {

        search:`%${search}%` },
        );
}
return await query.getMany();


// const blogs=await this.find();
// return blogs;

}

}