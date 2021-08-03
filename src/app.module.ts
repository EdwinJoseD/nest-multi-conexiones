import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

const defaultOptions:  TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'EDWIN',
  password: '1065850026',
  database: 'prueba1',
  synchronize: true,
  entities: ['dist/**/*.entity{.ts,.js}'],
};

@Module({
  imports: [

    TypeOrmModule.forRoot({
      ...defaultOptions,
    name:'CACC',
    database: 'prueba1',
    
  }),
  TypeOrmModule.forRoot({
    ...defaultOptions,
    name:'MC',
    database: 'prueba2'
  }),
  UserModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
