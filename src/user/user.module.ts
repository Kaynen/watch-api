import { Module } from '@nestjs/common'
import { UsersService } from './user.service'
import { UsersController } from './user.controller'
import { CreateUserUseCase } from 'src/user/use-cases/create.user.usecase'
import { UpdateUserUseCase } from 'src/user/use-cases/update.user.usecase'
import { GetAllUserUseCase } from 'src/user/use-cases/get-all-user.usecase'
import { GetUserUseCase } from 'src/user/use-cases/get-user.usecase'
import { DeleteUserUseCase } from 'src/user/use-cases/delete.user.usecase'

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    CreateUserUseCase,
    UpdateUserUseCase,
    GetAllUserUseCase,
    GetUserUseCase,
    DeleteUserUseCase
  ]
})
export class UsersModule {}
