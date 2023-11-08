import { Prisma } from '@prisma/client'
import { CreateOriginDto } from 'src/origin/dto/create-origin.dto'
import { ResponseOriginDto } from 'src/origin/dto/response-origin.dto'

export class Origin {
  constructor(data: Prisma.originCreateInput) {
    this.id = data.id
    this.name = data.name
  }

  static createFromDto(dto: CreateOriginDto): Origin {
    return new Origin({
      name: dto.name
    })
  }

  static updateFromDto(
    branch: ResponseOriginDto,
    dto: CreateOriginDto
  ): ResponseOriginDto {
    branch.name = dto.name || branch.name
    return branch
  }

  toDto(): ResponseOriginDto {
    return {
      id: this.id,
      name: this.name
    }
  }

  id: number | bigint
  name: string
}
