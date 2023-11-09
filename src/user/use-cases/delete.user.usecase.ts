import { Injectable } from '@nestjs/common'
import { UsersService } from 'src/user/user.service'
import { ResponseUserDto } from 'src/user/dto/response-user.dto'
import { GetUserUseCase } from 'src/user/use-cases/get-user.usecase'

@Injectable()
export class DeleteUserUseCase {
  constructor(
    private readonly userService: UsersService,
    private readonly getUserUseCase: GetUserUseCase
  ) {}

  async execute(id: number | bigint): Promise<ResponseUserDto | null> {
    await this.getUserUseCase.execute(id)
    return await this.userService.softDelete(id)
  }
}
