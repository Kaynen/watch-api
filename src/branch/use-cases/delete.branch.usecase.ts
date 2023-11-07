import { BranchService } from 'src/branch/branch.service'
import { Injectable, NotFoundException } from '@nestjs/common'
import { ResponseBranchDto } from 'src/branch/dto/response-branch.dto'
import { GetBranchUseCase } from 'src/branch/use-cases/get-branch.usecase'

@Injectable()
export class DeleteBranchUseCase {
  constructor(
    private readonly branchService: BranchService,
    private readonly getBranchUseCase: GetBranchUseCase
  ) {}

  async execute(id: number | bigint): Promise<ResponseBranchDto | null> {
    const branch = await this.getBranchUseCase.execute(id)
    if (!branch) {
      throw new NotFoundException('Branch not found')
    }
    return await this.branchService.softDelete(id)
  }
}
