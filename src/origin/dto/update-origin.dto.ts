import { PartialType } from '@nestjs/mapped-types'
import { CreateOriginDto } from './create-origin.dto'
import { IsDefined, IsNotEmpty, IsString, MaxLength } from 'class-validator'

export class UpdateOriginDto extends PartialType(CreateOriginDto) {
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @MaxLength(255)
  name: string
}
