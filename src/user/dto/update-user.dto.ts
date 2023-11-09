import { PartialType } from '@nestjs/mapped-types'
import { CreateUserDto } from './create-user.dto'
import { IsOptional, IsString, MaxLength } from 'class-validator'

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString()
  @MaxLength(255)
  name: string

  @IsOptional()
  @MaxLength(255)
  email: string

  @IsOptional()
  @MaxLength(255)
  password?: string

  @IsOptional()
  @MaxLength(255)
  phone: string

  @IsOptional()
  @MaxLength(255)
  document_number: string
}
