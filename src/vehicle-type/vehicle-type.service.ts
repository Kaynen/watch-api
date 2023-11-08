import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateVehicleTypeDto } from './dto/create-vehicle-type.dto'
import { UpdateVehicleTypeDto } from './dto/update-vehicle-type.dto'
import {
  Pagination,
  PaginationOptionsInterface
} from 'src/core/PaginationHelper'
import { VehicleType } from 'src/vehicle-type/entities/vehicle-type.entity'
import { ResponseVehicleTypeDto } from 'src/vehicle-type/dto/response-vehicle-type.dto'

@Injectable()
export class VehicleTypeService {
  constructor(private prismaService: PrismaService) {}
  create(createVehicleTypeDto: CreateVehicleTypeDto) {
    return this.prismaService.vehicle_type.create({
      data: createVehicleTypeDto
    })
  }

  async findAll(pagination: PaginationOptionsInterface) {
    const totalItems = await this.prismaService.vehicle_type.count()
    const total = Math.ceil(totalItems / pagination.limit)
    const items = await this.prismaService.vehicle_type.findMany({
      where: {
        deleted_at: null
      },
      skip: pagination.offset,
      take: pagination.limit
    })

    const dto = items.map((item) => {
      const response = new VehicleType(item)
      return response.toDto()
    })

    return new Pagination<ResponseVehicleTypeDto>({
      results: dto,
      total,
      options: pagination
    })
  }

  findOne(id: number | bigint) {
    return this.prismaService.vehicle_type.findUnique({
      where: {
        id: id,
        deleted_at: null
      }
    })
  }

  update(id: number | bigint, updateVehicleTypeDto: UpdateVehicleTypeDto) {
    return this.prismaService.vehicle_type.update({
      where: { id: id },
      data: updateVehicleTypeDto
    })
  }

  softDelete(id: number | bigint) {
    return this.prismaService.vehicle_type.update({
      where: { id: id },
      data: {
        deleted_at: new Date()
      }
    })
  }

  remove(id: number) {
    return this.prismaService.vehicle_type.delete({
      where: { id: id }
    })
  }
}
