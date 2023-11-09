import { Injectable } from '@nestjs/common'
import { User } from 'src/user/entities/user.entity'
import { UsersService } from 'src/user/user.service'
import { CreateUserDto } from 'src/user/dto/create-user.dto'
import { ResponseUserDto } from 'src/user/dto/response-user.dto'

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly userService: UsersService) {}

  async execute(input: CreateUserDto): Promise<ResponseUserDto | null> {
    const user = User.createFromDto(input)
    console.log(user)
    return await this.userService.create(user)
  }
}
