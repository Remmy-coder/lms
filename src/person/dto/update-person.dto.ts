import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonDto } from './create-person.dto';
import { IsDateString, IsEmail, IsString } from 'class-validator';

export class UpdatePersonDto extends PartialType(CreatePersonDto) {
  id: string;

  @IsString()
  lastname: string;

  @IsString()
  firstname: string;

  @IsDateString()
  dateOfBirth: Date;

  @IsEmail()
  email: string;

  @IsString()
  dialcode: string;

  @IsString()
  phoneNumber: string;

  @IsString()
  address: string;

  @IsString()
  taxIdentifier: string;

  constructor(
    lastname: string,
    firstname: string,
    dateOfBirth: Date,
    email: string,
    dialcode: string,
    phoneNumber: string,
    address: string,
    taxIdentifier: string,
    id?: string,
  ) {
    super();
    this.lastname = lastname;
    this.firstname = firstname;
    this.dateOfBirth = dateOfBirth;
    this.email = email;
    this.dialcode = dialcode;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.taxIdentifier = taxIdentifier;
    this.id = id;
  }
}
