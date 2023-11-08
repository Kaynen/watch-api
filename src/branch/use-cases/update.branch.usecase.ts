import { Injectable } from '@nestjs/common'
import { BranchService } from 'src/branch/branch.service'
import { Branch } from 'src/branch/entities/branch.entity'
import { UpdateBranchDto } from 'src/branch/dto/update-branch.dto'
import { ResponseBranchDto } from 'src/branch/dto/response-branch.dto'
import { GetBranchUseCase } from 'src/branch/use-cases/get-branch.usecase'

@Injectable()
export class UpdateBranchUseCase {
  constructor(
    private readonly branchService: BranchService,
    private readonly getBranchUseCase: GetBranchUseCase
  ) {}

  async execute(
    id: number | bigint,
    input: UpdateBranchDto
  ): Promise<ResponseBranchDto | null> {
    const branch = await this.getBranchUseCase.execute(id)
    const updateBranch = Branch.updateFromDto(branch, input)
    return await this.branchService.update(id, updateBranch)
  }
}
