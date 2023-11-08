import { Injectable } from '@nestjs/common'
import {
  Pagination,
  PaginationOptionsInterface
} from 'src/core/PaginationHelper'
import { VehicleTypeService } from 'src/vehicle-type/vehicle-type.service'
import { ResponseVehicleTypeDto } from 'src/vehicle-type/dto/response-vehicle-type.dto'

@Injectable()
export class GetAllVehicleTypeUseCase {
  constructor(private readonly branchService: VehicleTypeService) {}

  async execute(
    pagination: PaginationOptionsInterface
  ): Promise<Pagination<ResponseVehicleTypeDto>> {
    return await this.branchService.findAll(pagination)
  }
}
