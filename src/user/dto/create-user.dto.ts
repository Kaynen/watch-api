import {
  IsDefined,
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength
} from 'class-validator'

export class CreateUserDto {
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @MaxLength(255)
  name: string

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @IsEmail()
  @MaxLength(255)
  email: string

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @MaxLength(255)
  password: string

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @MaxLength(255)
  phone: string

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @MaxLength(255)
  document_number: string
}
