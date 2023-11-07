import { PartialType } from '@nestjs/mapped-types'
import { CreateBranchDto } from './create-branch.dto'
import { IsDefined, IsNotEmpty, IsString, MaxLength } from 'class-validator'

export class UpdateBranchDto extends PartialType(CreateBranchDto) {
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @MaxLength(255)
  name: string
}
