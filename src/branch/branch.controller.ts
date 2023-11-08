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
import { CreateBranchDto } from './dto/create-branch.dto'
import { UpdateBranchDto } from './dto/update-branch.dto'
import { GetBranchUseCase } from './use-cases/get-branch.usecase'
import { PaginationOptionsInterface } from 'src/core/PaginationHelper'
import { GetAllBranchUseCase } from './use-cases/get-all-branch.usecase'
import { CreateBranchUseCase } from 'src/branch/use-cases/create.branch.usecase'
import { UpdateBranchUseCase } from 'src/branch/use-cases/update.branch.usecase'
import { PaginationInterceptor } from 'src/core/PaginationHelper/PaginationInterceptor'
import { DeleteBranchUseCase } from 'src/branch/use-cases/delete.branch.usecase'

@Controller('branch')
export class BranchController {
  constructor(
    private readonly getBranchUseCase: GetBranchUseCase,
    private readonly createBranchUsecase: CreateBranchUseCase,
    private readonly getAllBranchUseCase: GetAllBranchUseCase,
    private readonly updateBranchUseCase: UpdateBranchUseCase,
    private readonly deleteBranchUseCase: DeleteBranchUseCase
  ) {}

  @Post()
  create(@Body() createBranchDto: CreateBranchDto) {
    return this.createBranchUsecase.execute(createBranchDto)
  }

  @Get()
  @UseInterceptors(PaginationInterceptor)
  findAll(@Query('pagination') pagination: PaginationOptionsInterface) {
    return this.getAllBranchUseCase.execute(pagination)
  }

  @Get(':id')
  findOne(@Param('id') id: number | bigint) {
    return this.getBranchUseCase.execute(id)
  }

  @Patch(':id')
  update(
    @Param('id') id: number | bigint,
    @Body() updateBranchDto: UpdateBranchDto
  ) {
    return this.updateBranchUseCase.execute(id, updateBranchDto)
  }

  @Delete(':id')
  remove(@Param('id') id: number | bigint) {
    return this.deleteBranchUseCase.execute(id)
  }
}
