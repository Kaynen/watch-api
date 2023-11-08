import { Prisma } from '@prisma/client'
import { CreateBranchDto } from 'src/branch/dto/create-branch.dto'
import { ResponseBranchDto } from 'src/branch/dto/response-branch.dto'

export class Branch {
  constructor(data: Prisma.branchCreateInput) {
    this.id = data.id
    this.name = data.name
  }

  static createFromDto(dto: CreateBranchDto): Branch {
    return new Branch({
      name: dto.name
    })
  }

  static updateFromDto(
    branch: ResponseBranchDto,
    dto: CreateBranchDto
  ): ResponseBranchDto {
    branch.name = dto.name || branch.name
    return branch
  }

  toDto(): ResponseBranchDto {
    return {
      id: this.id,
      name: this.name
    }
  }

  id: number | bigint
  name: string
}
