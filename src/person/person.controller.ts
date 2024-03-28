import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { SETTINGS } from 'src/utils/create-person.dto.utils';

@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Post()
  create(@Body(SETTINGS.VALIDATION_PIPE) createPersonDto: CreatePersonDto) {
    return this.personService.createPerson(createPersonDto);
  }

  @Get()
  findAll() {
    return this.personService.getAllPerson();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personService.getPerson(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body(SETTINGS.VALIDATION_PIPE) updatePersonDto: UpdatePersonDto,
  ) {
    return this.personService.updatePerson(id, updatePersonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personService.remove(+id);
  }
}
