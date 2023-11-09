import {
  Pagination,
  PaginationOptionsInterface
} from 'src/core/PaginationHelper'

import { Injectable } from '@nestjs/common'
import { UsersService } from 'src/user/user.service'
import { ResponseUserDto } from 'src/user/dto/response-user.dto'

@Injectable()
export class GetAllUserUseCase {
  constructor(private readonly userService: UsersService) {}

  async execute(
    pagination: PaginationOptionsInterface
  ): Promise<Pagination<ResponseUserDto>> {
    return await this.userService.findAll(pagination)
  }
}
