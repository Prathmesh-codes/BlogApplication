import { takeLast } from "rxjs";
import { USerEntity } from "src/user/user.entity";
import { EntityRepository, Repository } from "typeorm";
import { BlogEntity } from "./blog.entity";
import { CreateBlogDTO } from "./dto/create.blog.dto";
import { SearchBlogDTO } from "./dto/search.blog.dto";

@EntityRepository(BlogEntity)
export class BlogRepository extends Repository<BlogEntity>{

async createblog(createBlogDTO:CreateBlogDTO,user:USerEntity ){

const blog=new BlogEntity();
blog.title=createBlogDTO.title;
blog.description=createBlogDTO.description;
blog.tags=createBlogDTO.tags;
blog.user=user;

await blog.save();

delete blog.user;

return blog;

}

async getblog(searchBlogDto:SearchBlogDTO,user:USerEntity)
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



query.andWhere(`blog.userId=:userId`,{userId:user.id})

return await query.getMany();


// const blogs=await this.find();
// return blogs;

}

}