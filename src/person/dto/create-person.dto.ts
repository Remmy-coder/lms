import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  Matches,
} from 'class-validator';
import { REGEX, MESSAGES } from '../../utils/create-person.dto.utils';

export class CreatePersonDto {
  id: string;

  @IsString()
  @IsNotEmpty()
  lastname: string;

  @IsString()
  @IsNotEmpty()
  firstname: string;

  @IsDateString()
  @IsNotEmpty()
  dateOfBirth: Date;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  dialcode: string;

  @IsString()
  @IsNotEmpty()
  phoneNumber: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  @Length(8, 24)
  @Matches(REGEX.PASSWORD_RULE, { message: MESSAGES.PASSWORD_RULE_MESSAGE })
  password: string;

  @IsString()
  @IsNotEmpty()
  taxIdentifier: string;

  constructor(
    lastname: string,
    firstname: string,
    dateOfBirth: Date,
    email: string,
    dialcode: string,
    phoneNumber: string,
    address: string,
    password: string,
    taxIdentifier: string,
    id?: string,
  ) {
    this.lastname = lastname;
    this.firstname = firstname;
    this.dateOfBirth = dateOfBirth;
    this.email = email;
    this.dialcode = dialcode;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.password = password;
    this.taxIdentifier = taxIdentifier;
    this.id = id;
  }
}
