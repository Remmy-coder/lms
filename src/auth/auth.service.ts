import { Injectable } from '@nestjs/common';
import { PersonService } from 'src/person/person.service';
import { SignInDto } from './dto/sign-in.dto';
import { Person } from 'src/person/entities/person.entity';

@Injectable()
export class AuthService {
  constructor(private readonly personService: PersonService) {}

  async signIn(signInDto: SignInDto): Promise<Required<Person>> {}
}
