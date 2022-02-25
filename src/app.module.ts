import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { BlogModule } from './blog/blog.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeORMConfiguration } from './config/typeorm.config';



@Module({
  imports: [UserModule, BlogModule, TypeOrmModule.forRoot(TypeORMConfiguration)],
  
  
  controllers: [],
  providers: [],
})
export class AppModule {}
