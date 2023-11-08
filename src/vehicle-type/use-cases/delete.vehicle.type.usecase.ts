import { Injectable, NotFoundException } from '@nestjs/common'
import { VehicleTypeService } from 'src/vehicle-type/vehicle-type.service'
import { ResponseVehicleTypeDto } from 'src/vehicle-type/dto/response-vehicle-type.dto'
import { GetVehicleTypeUseCase } from 'src/vehicle-type/use-cases/get-vehicle.type.usecase'

@Injectable()
export class DeleteVehicleTypeUseCase {
  constructor(
    private readonly vehicleTypeService: VehicleTypeService,
    private readonly getVehicleTypeUseCase: GetVehicleTypeUseCase
  ) {}

  async execute(id: number | bigint): Promise<ResponseVehicleTypeDto | null> {
    const vehicleType = await this.getVehicleTypeUseCase.execute(id)
    if (!vehicleType) {
      throw new NotFoundException('VehicleType not found')
    }
    return await this.vehicleTypeService.softDelete(id)
  }
}
