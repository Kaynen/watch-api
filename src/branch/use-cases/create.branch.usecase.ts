import { Injectable } from '@nestjs/common'
import { BranchService } from 'src/branch/branch.service'
import { CreateBranchDto } from 'src/branch/dto/create-branch.dto'
import { Branch } from 'src/branch/entities/branch.entity'

@Injectable()
export class CreateBranchUseCase {
  constructor(private readonly branchService: BranchService) {}

  async execute(input: CreateBranchDto): Promise<Branch | null> {
    const branch = new Branch(input.name)
    const newBranch = await this.branchService.create(branch)
    return newBranch
  }
}
