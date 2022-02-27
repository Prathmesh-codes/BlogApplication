//Configuration for db 

import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const TypeORMConfiguration: TypeOrmModuleOptions={
    username: "root",
    password: 'root',
    port: 3306,
    host: 'localhost',
    type:'mysql',
    database:'blogapp',
    entities:[__dirname+'/../**/*.entity.{ts,js}'],
    
    synchronize:false,
};