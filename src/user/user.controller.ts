import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  Query
} from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { GetUserUseCase } from 'src/user/use-cases/get-user.usecase'
import { CreateUserUseCase } from 'src/user/use-cases/create.user.usecase'
import { GetAllUserUseCase } from 'src/user/use-cases/get-all-user.usecase'
import { UpdateUserUseCase } from 'src/user/use-cases/update.user.usecase'
import { DeleteUserUseCase } from 'src/user/use-cases/delete.user.usecase'
import { PaginationInterceptor } from 'src/core/PaginationHelper/PaginationInterceptor'
import { PaginationOptionsInterface } from 'src/core/PaginationHelper'

@Controller('user')
export class UsersController {
  constructor(
    private readonly getUserUseCase: GetUserUseCase,
    private readonly createUserUsecase: CreateUserUseCase,
    private readonly getAllUserUseCase: GetAllUserUseCase,
    private readonly updateUserUseCase: UpdateUserUseCase,
    private readonly deleteUserUseCase: DeleteUserUseCase
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.createUserUsecase.execute(createUserDto)
  }

  @Get()
  @UseInterceptors(PaginationInterceptor)
  findAll(@Query('pagination') pagination: PaginationOptionsInterface) {
    return this.getAllUserUseCase.execute(pagination)
  }

  @Get(':id')
  findOne(@Param('id') id: number | bigint) {
    return this.getUserUseCase.execute(id)
  }

  @Patch(':id')
  update(
    @Param('id') id: number | bigint,
    @Body() updateUserDto: UpdateUserDto
  ) {
    return this.updateUserUseCase.execute(id, updateUserDto)
  }

  @Delete(':id')
  remove(@Param('id') id: number | bigint) {
    return this.deleteUserUseCase.execute(id)
  }
}
