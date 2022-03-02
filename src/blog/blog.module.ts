import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';
import { BlogController } from './blog.controller';
import { BlogRepository } from './blog/blog.repository';
import { BlogService } from './blog/blog.service';

@Module({

  imports:[
TypeOrmModule.forFeature([BlogRepository]), UserModule],
  controllers: [BlogController],
  providers: [BlogService],
})
export class BlogModule {}
