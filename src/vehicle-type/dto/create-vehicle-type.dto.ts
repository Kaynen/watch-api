import { IsDefined, IsNotEmpty, IsString, MaxLength } from 'class-validator'

export class CreateVehicleTypeDto {
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @MaxLength(255)
  name: string
}
