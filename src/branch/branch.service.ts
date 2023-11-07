import {
  Pagination,
  PaginationOptionsInterface
} from 'src/core/PaginationHelper'
import { Injectable } from '@nestjs/common'
import { CreateBranchDto } from './dto/create-branch.dto'
import { UpdateBranchDto } from './dto/update-branch.dto'
import { PrismaService } from 'src/prisma/prisma.service'
import { Branch } from 'src/branch/entities/branch.entity'
import { ResponseBranchDto } from 'src/branch/dto/response-branch.dto'

@Injectable()
export class BranchService {
  constructor(private prismaService: PrismaService) {}
  create(createBranchDto: CreateBranchDto) {
    return this.prismaService.branch.create({ data: createBranchDto })
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
      const response = new Branch(item)
      return response.toDto()
    })

    return new Pagination<ResponseBranchDto>({
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

  update(id: number | bigint, updateBranchDto: UpdateBranchDto) {
    return this.prismaService.branch.update({
      where: { id: id },
      data: updateBranchDto
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
