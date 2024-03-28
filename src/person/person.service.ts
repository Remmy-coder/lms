import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { Person } from './entities/person.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/abstract/abstract.service';

@Injectable()
export class PersonService extends AbstractService<Person> {
  constructor(
    @InjectRepository(Person) private personRepository: Repository<Person>,
  ) {
    super(personRepository);
  }
  async createPerson(createPersonDto: CreatePersonDto): Promise<Person> {
    return this.create(Object.assign(new Person(), createPersonDto));
  }

  async getAllPerson(): Promise<Person[]> {
    return await this.findAll();
  }

  async getPerson(id: string) {
    return await this.findById(id);
  }

  async updatePerson(id: string, updatePersonDto: UpdatePersonDto) {
    return await this.update(id, updatePersonDto);
  }

  remove(id: number) {
    return `This action removes a #${id} person`;
  }
}
