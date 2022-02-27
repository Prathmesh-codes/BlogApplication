import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogController } from './blog.controller';
import { BlogRepository } from './blog/blog.repository';
import { BlogService } from './blog/blog.service';

@Module({

  imports:[
TypeOrmModule.forFeature([BlogRepository])],
  controllers: [BlogController],
  providers: [BlogService],
})
export class BlogModule {}
