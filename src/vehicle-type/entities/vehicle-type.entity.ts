import { Prisma } from '@prisma/client'
import { CreateVehicleTypeDto } from 'src/vehicle-type/dto/create-vehicle-type.dto'
import { ResponseVehicleTypeDto } from 'src/vehicle-type/dto/response-vehicle-type.dto'

export class VehicleType {
  constructor(data: Prisma.VehicleTypeCreateInput) {
    this.id = data.id
    this.name = data.name
  }

  static createFromDto(dto: CreateVehicleTypeDto): VehicleType {
    return new VehicleType({
      name: dto.name
    })
  }

  static updateFromDto(
    branch: ResponseVehicleTypeDto,
    dto: CreateVehicleTypeDto
  ): ResponseVehicleTypeDto {
    branch.name = dto.name || branch.name
    return branch
  }

  toDto(): ResponseVehicleTypeDto {
    return {
      id: this.id,
      name: this.name
    }
  }

  id: number | bigint
  name: string
}
