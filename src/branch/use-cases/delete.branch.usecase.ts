import { Injectable } from '@nestjs/common'
import { BranchService } from 'src/branch/branch.service'
import { ResponseBranchDto } from 'src/branch/dto/response-branch.dto'
import { GetBranchUseCase } from 'src/branch/use-cases/get-branch.usecase'

@Injectable()
export class DeleteBranchUseCase {
  constructor(
    private readonly branchService: BranchService,
    private readonly getBranchUseCase: GetBranchUseCase
  ) {}

  async execute(id: number | bigint): Promise<ResponseBranchDto | null> {
    await this.getBranchUseCase.execute(id)
    return await this.branchService.softDelete(id)
  }
}
