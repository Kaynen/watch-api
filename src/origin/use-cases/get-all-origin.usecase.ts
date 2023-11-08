import {
  Pagination,
  PaginationOptionsInterface
} from 'src/core/PaginationHelper'

import { Injectable } from '@nestjs/common'
import { OriginService } from 'src/origin/origin.service'
import { ResponseOriginDto } from 'src/origin/dto/response-origin.dto'

@Injectable()
export class GetAllOriginUseCase {
  constructor(private readonly originService: OriginService) {}

  async execute(
    pagination: PaginationOptionsInterface
  ): Promise<Pagination<ResponseOriginDto>> {
    return await this.originService.findAll(pagination)
  }
}
