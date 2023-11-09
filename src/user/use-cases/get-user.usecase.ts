import { User } from 'src/user/entities/user.entity'
import { UsersService } from 'src/user/user.service'
import { Injectable, NotFoundException } from '@nestjs/common'
import { ResponseUserDto } from 'src/user/dto/response-user.dto'

@Injectable()
export class GetUserUseCase {
  constructor(private readonly originService: UsersService) {}

  async execute(id: number | bigint): Promise<ResponseUserDto> {
    const dataUser = await this.originService.findOne(id)
    if (!dataUser) {
      throw new NotFoundException('User type not found')
    }
    const response = new User(dataUser)
    return response.toDto()
  }
}
