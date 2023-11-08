import { PartialType } from '@nestjs/mapped-types'
import { CreateVehicleTypeDto } from './create-vehicle-type.dto'
import { IsDefined, IsNotEmpty, IsString, MaxLength } from 'class-validator'

export class UpdateVehicleTypeDto extends PartialType(CreateVehicleTypeDto) {
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @MaxLength(255)
  name: string
}
