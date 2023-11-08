import { IsDefined, IsNotEmpty, IsString, MaxLength } from 'class-validator'

export class CreateOriginDto {
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @MaxLength(255)
  name: string
}
