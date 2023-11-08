import { Injectable } from '@nestjs/common'
import { BranchService } from 'src/branch/branch.service'
import { Branch } from 'src/branch/entities/branch.entity'
import { CreateBranchDto } from 'src/branch/dto/create-branch.dto'
import { ResponseBranchDto } from 'src/branch/dto/response-branch.dto'

@Injectable()
export class CreateBranchUseCase {
  constructor(private readonly branchService: BranchService) {}

  async execute(input: CreateBranchDto): Promise<ResponseBranchDto | null> {
    const branch = Branch.createFromDto(input)
    return await this.branchService.create(branch)
  }
}
