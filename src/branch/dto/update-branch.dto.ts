import { PartialType } from '@nestjs/mapped-types'
import { CreateBranchDto } from './create-branch.dto'
import { IsOptional, IsString } from 'class-validator'

export class UpdateBranchDto extends PartialType(CreateBranchDto) {
  @IsString()
  @IsOptional()
  name: string
}
