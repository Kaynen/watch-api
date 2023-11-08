import { Injectable } from '@nestjs/common'
import { CreateVehicleTypeDto } from 'src/vehicle-type/dto/create-vehicle-type.dto'
import { ResponseVehicleTypeDto } from 'src/vehicle-type/dto/response-vehicle-type.dto'
import { VehicleType } from 'src/vehicle-type/entities/vehicle-type.entity'
import { VehicleTypeService } from 'src/vehicle-type/vehicle-type.service'

@Injectable()
export class CreateVehicleTypeUseCase {
  constructor(private readonly vehicleTypeService: VehicleTypeService) {}

  async execute(
    input: CreateVehicleTypeDto
  ): Promise<ResponseVehicleTypeDto | null> {
    const vehicleType = VehicleType.createFromDto(input)
    return await this.vehicleTypeService.create(vehicleType)
  }
}
