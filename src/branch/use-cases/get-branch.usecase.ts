import { Injectable } from '@nestjs/common'
import { BranchService } from 'src/branch/branch.service'
import { Branch } from 'src/branch/entities/branch.entity'
import { ResponseBranchDto } from 'src/branch/dto/response-branch.dto'

@Injectable()
export class GetBranchUseCase {
  constructor(private readonly branchService: BranchService) {}

  async execute(id: number | bigint): Promise<ResponseBranchDto> {
    const dataBranch = await this.branchService.findOne(id)
    const response = new Branch(dataBranch)
    return response.toDto()
  }
}
