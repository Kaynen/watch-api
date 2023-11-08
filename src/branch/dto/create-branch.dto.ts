import { IsDefined, IsNotEmpty, IsString, MaxLength } from 'class-validator'

export class CreateBranchDto {
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @MaxLength(255)
  name: string
}
