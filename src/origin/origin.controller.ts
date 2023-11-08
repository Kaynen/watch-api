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
import { CreateOriginDto } from './dto/create-origin.dto'
import { UpdateOriginDto } from './dto/update-origin.dto'
import { PaginationOptionsInterface } from 'src/core/PaginationHelper'
import { GetOriginUseCase } from 'src/origin/use-cases/get-origin.usecase'
import { CreateOriginUseCase } from 'src/origin/use-cases/create.origin.usecase'
import { GetAllOriginUseCase } from 'src/origin/use-cases/get-all-origin.usecase'
import { UpdateOriginUseCase } from 'src/origin/use-cases/update.origin.usecase'
import { DeleteOriginUseCase } from 'src/origin/use-cases/delete.origin.usecase'
import { PaginationInterceptor } from 'src/core/PaginationHelper/PaginationInterceptor'

@Controller('origin')
export class OriginController {
  constructor(
    private readonly getOriginUseCase: GetOriginUseCase,
    private readonly createOriginUsecase: CreateOriginUseCase,
    private readonly getAllOriginUseCase: GetAllOriginUseCase,
    private readonly updateOriginUseCase: UpdateOriginUseCase,
    private readonly deleteOriginUseCase: DeleteOriginUseCase
  ) {}

  @Post()
  create(@Body() createOriginDto: CreateOriginDto) {
    return this.createOriginUsecase.execute(createOriginDto)
  }

  @Get()
  @UseInterceptors(PaginationInterceptor)
  findAll(@Query('pagination') pagination: PaginationOptionsInterface) {
    return this.getAllOriginUseCase.execute(pagination)
  }

  @Get(':id')
  findOne(@Param('id') id: number | bigint) {
    return this.getOriginUseCase.execute(id)
  }

  @Patch(':id')
  update(
    @Param('id') id: number | bigint,
    @Body() updateOriginDto: UpdateOriginDto
  ) {
    return this.updateOriginUseCase.execute(id, updateOriginDto)
  }

  @Delete(':id')
  remove(@Param('id') id: number | bigint) {
    return this.deleteOriginUseCase.execute(id)
  }
}
