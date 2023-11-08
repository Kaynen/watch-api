import { BranchService } from 'src/branch/branch.service'
import { Branch } from 'src/branch/entities/branch.entity'
import { Injectable, NotFoundException } from '@nestjs/common'
import { ResponseBranchDto } from 'src/branch/dto/response-branch.dto'

@Injectable()
export class GetBranchUseCase {
  constructor(private readonly branchService: BranchService) {}

  async execute(id: number | bigint): Promise<ResponseBranchDto> {
    const dataBranch = await this.branchService.findOne(id)
    if (!dataBranch) {
      throw new NotFoundException('Branch type not found')
    }
    const response = new Branch(dataBranch)
    return response.toDto()
  }
}
