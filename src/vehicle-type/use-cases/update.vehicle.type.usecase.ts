import { Injectable, NotFoundException } from '@nestjs/common'
import { ResponseVehicleTypeDto } from 'src/vehicle-type/dto/response-vehicle-type.dto'
import { UpdateVehicleTypeDto } from 'src/vehicle-type/dto/update-vehicle-type.dto'
import { VehicleType } from 'src/vehicle-type/entities/vehicle-type.entity'
import { GetVehicleTypeUseCase } from 'src/vehicle-type/use-cases/get-vehicle.type.usecase'
import { VehicleTypeService } from 'src/vehicle-type/vehicle-type.service'

@Injectable()
export class UpdateVehicleTypeUseCase {
  constructor(
    private readonly branchService: VehicleTypeService,
    private readonly getVehicleTypeUseCase: GetVehicleTypeUseCase
  ) {}

  async execute(
    id: number | bigint,
    input: UpdateVehicleTypeDto
  ): Promise<ResponseVehicleTypeDto | null> {
    const branch = await this.getVehicleTypeUseCase.execute(id)
    if (!branch) {
      throw new NotFoundException('VehicleType not found')
    }
    const updateVehicleType = VehicleType.updateFromDto(branch, input)
    return await this.branchService.update(id, updateVehicleType)
  }
}
