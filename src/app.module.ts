import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSourceOption } from './ormconfig';
import { PersonModule } from './person/person.module';
import { AuthModule } from './auth/auth.module';
import { AbstractService } from './common/abstract/abstract.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(AppDataSourceOption),
    PersonModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
