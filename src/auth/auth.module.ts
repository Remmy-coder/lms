import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PersonService } from 'src/person/person.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from 'src/person/entities/person.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Person])],
  controllers: [AuthController],
  providers: [AuthService, PersonService],
})
export class AuthModule {}
