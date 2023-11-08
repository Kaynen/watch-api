import {
  Pagination,
  PaginationOptionsInterface
} from 'src/core/PaginationHelper'
import { Injectable } from '@nestjs/common'
import { CreateOriginDto } from './dto/create-origin.dto'
import { UpdateOriginDto } from './dto/update-origin.dto'
import { PrismaService } from 'src/prisma/prisma.service'
import { Origin } from 'src/origin/entities/origin.entity'
import { ResponseOriginDto } from 'src/origin/dto/response-origin.dto'

@Injectable()
export class OriginService {
  constructor(private prismaService: PrismaService) {}
  create(createOriginDto: CreateOriginDto) {
    return this.prismaService.branch.create({ data: createOriginDto })
  }

  async findAll(pagination: PaginationOptionsInterface) {
    const totalItems = await this.prismaService.branch.count()
    const total = Math.ceil(totalItems / pagination.limit)
    const items = await this.prismaService.branch.findMany({
      where: {
        deleted_at: null
      },
      skip: pagination.offset,
      take: pagination.limit
    })

    const dto = items.map((item) => {
      const response = new Origin(item)
      return response.toDto()
    })

    return new Pagination<ResponseOriginDto>({
      results: dto,
      total,
      options: pagination
    })
  }

  findOne(id: number | bigint) {
    return this.prismaService.branch.findUnique({
      where: {
        id: id,
        deleted_at: null
      }
    })
  }

  update(id: number | bigint, updateOriginDto: UpdateOriginDto) {
    return this.prismaService.branch.update({
      where: { id: id },
      data: updateOriginDto
    })
  }

  softDelete(id: number | bigint) {
    return this.prismaService.branch.update({
      where: { id: id },
      data: {
        deleted_at: new Date()
      }
    })
  }

  remove(id: number | bigint) {
    return this.prismaService.branch.delete({
      where: { id: id }
    })
  }
}
