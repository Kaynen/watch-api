import { Injectable } from '@nestjs/common'
import {
  Pagination,
  PaginationOptionsInterface
} from 'src/core/PaginationHelper'
import { User } from 'src/user/entities/user.entity'
import { PrismaService } from 'src/prisma/prisma.service'
import { UpdateUserDto } from 'src/user/dto/update-user.dto'
import { CreateUserDto } from 'src/user/dto/create-user.dto'
import { ResponseUserDto } from 'src/user/dto/response-user.dto'

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}
  create(createUserDto: CreateUserDto) {
    return this.prismaService.user.create({ data: createUserDto })
  }

  async findAll(pagination: PaginationOptionsInterface) {
    const totalItems = await this.prismaService.user.count()
    const total = Math.ceil(totalItems / pagination.limit)
    const items = await this.prismaService.user.findMany({
      where: {
        deleted_at: null
      },
      skip: pagination.offset,
      take: pagination.limit
    })

    const dto = items.map((item) => {
      const response = new User(item)
      return response.toDto()
    })

    return new Pagination<ResponseUserDto>({
      results: dto,
      total,
      options: pagination
    })
  }

  findOne(id: number | bigint) {
    return this.prismaService.user.findUnique({
      where: {
        id: id,
        deleted_at: null
      }
    })
  }

  update(id: number | bigint, updateUserDto: UpdateUserDto) {
    return this.prismaService.user.update({
      where: { id: id },
      data: updateUserDto
    })
  }

  softDelete(id: number | bigint) {
    return this.prismaService.user.update({
      where: { id: id },
      data: {
        deleted_at: new Date()
      }
    })
  }

  remove(id: number | bigint) {
    return this.prismaService.user.delete({
      where: { id: id }
    })
  }
}
