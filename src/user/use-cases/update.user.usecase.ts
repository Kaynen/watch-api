import { Injectable } from '@nestjs/common'
import { User } from 'src/user/entities/user.entity'
import { UsersService } from 'src/user/user.service'
import { UpdateUserDto } from 'src/user/dto/update-user.dto'
import { ResponseUserDto } from 'src/user/dto/response-user.dto'
import { GetUserUseCase } from 'src/user/use-cases/get-user.usecase'

@Injectable()
export class UpdateUserUseCase {
  constructor(
    private readonly userService: UsersService,
    private readonly getUserUseCase: GetUserUseCase
  ) {}

  async execute(
    id: number | bigint,
    input: UpdateUserDto
  ): Promise<ResponseUserDto | null> {
    const user = await this.getUserUseCase.execute(id)
    const updateUser = User.updateFromDto(user, input)
    return await this.userService.update(id, updateUser)
  }
}
