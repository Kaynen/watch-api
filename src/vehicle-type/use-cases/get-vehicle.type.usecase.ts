import { Injectable, NotFoundException } from '@nestjs/common'
import { VehicleType } from 'src/vehicle-type/entities/vehicle-type.entity'
import { VehicleTypeService } from 'src/vehicle-type/vehicle-type.service'
import { ResponseVehicleTypeDto } from 'src/vehicle-type/dto/response-vehicle-type.dto'

@Injectable()
export class GetVehicleTypeUseCase {
  constructor(private readonly vehicleTypeService: VehicleTypeService) {}

  async execute(id: number | bigint): Promise<ResponseVehicleTypeDto> {
    const dataVehicleType = await this.vehicleTypeService.findOne(id)
    if (!dataVehicleType) {
      throw new NotFoundException('Vehicle type not found')
    }
    const response = new VehicleType(dataVehicleType)
    return response.toDto()
  }
}
