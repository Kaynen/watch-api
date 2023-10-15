import { Injectable } from '@nestjs/common'
import { CreateBranchDto } from './dto/create-branch.dto'
import { UpdateBranchDto } from './dto/update-branch.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class BranchService {
  constructor(private prismaService: PrismaService) {}
  create(createBranchDto: CreateBranchDto) {
    return this.prismaService.branch.create({ data: createBranchDto })
  }

  findAll() {
    return this.prismaService.branch.findMany()
  }

  findOne(id: number) {
    return this.prismaService.branch.findUnique({
      where: {
        id: id
      }
    })
  }

  update(id: number, updateBranchDto: UpdateBranchDto) {
    return this.prismaService.branch.update({
      where: { id: id },
      data: updateBranchDto
    })
  }

  remove(id: number) {
    return this.prismaService.branch.delete({
      where: { id: id }
    })
  }
}
