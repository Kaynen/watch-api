import { Injectable } from '@nestjs/common'
import { BranchService } from 'src/branch/branch.service'
import { ResponseBranchDto } from 'src/branch/dto/response-branch.dto'
import {
  Pagination,
  PaginationOptionsInterface
} from 'src/core/PaginationHelper'

@Injectable()
export class GetAllBranchUseCase {
  constructor(private readonly branchService: BranchService) {}

  async execute(
    pagination: PaginationOptionsInterface
  ): Promise<Pagination<ResponseBranchDto>> {
    return await this.branchService.findAll(pagination)
  }
}
