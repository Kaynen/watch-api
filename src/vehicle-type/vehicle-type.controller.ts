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
import { VehicleTypeService } from './vehicle-type.service'
import { CreateVehicleTypeDto } from './dto/create-vehicle-type.dto'
import { UpdateVehicleTypeDto } from './dto/update-vehicle-type.dto'
import { CreateVehicleTypeUseCase } from 'src/vehicle-type/use-cases/create.vehicle.type.usecase'
import { GetVehicleTypeUseCase } from 'src/vehicle-type/use-cases/get-vehicle.type.usecase'
import { GetAllVehicleTypeUseCase } from 'src/vehicle-type/use-cases/get-all-vehicle.type.usecase'
import { UpdateVehicleTypeUseCase } from 'src/vehicle-type/use-cases/update.vehicle.type.usecase'
import { DeleteVehicleTypeUseCase } from 'src/vehicle-type/use-cases/delete.vehicle.type.usecase'
import { PaginationOptionsInterface } from 'src/core/PaginationHelper'
import { PaginationInterceptor } from 'src/core/PaginationHelper/PaginationInterceptor'

@Controller('vehicle-type')
export class VehicleTypeController {
  constructor(
    private readonly createVehicleTypeUseCase: CreateVehicleTypeUseCase,
    private readonly getVehicleTypeUseCase: GetVehicleTypeUseCase,
    private readonly getAllVehicleTypeUseCase: GetAllVehicleTypeUseCase,
    private readonly updateVehicleTypeUseCase: UpdateVehicleTypeUseCase,
    private readonly deleteVehicleTypeUseCase: DeleteVehicleTypeUseCase
  ) {}

  @Post()
  create(@Body() createVehicleTypeDto: CreateVehicleTypeDto) {
    return this.createVehicleTypeUseCase.execute(createVehicleTypeDto)
  }

  @Get()
  @UseInterceptors(PaginationInterceptor)
  findAll(@Query('pagination') pagination: PaginationOptionsInterface) {
    return this.getAllVehicleTypeUseCase.execute(pagination)
  }

  @Get(':id')
  findOne(@Param('id') id: number | bigint) {
    return this.getVehicleTypeUseCase.execute(id)
  }

  @Patch(':id')
  update(
    @Param('id') id: number | bigint,
    @Body() updateVehicleTypeDto: UpdateVehicleTypeDto
  ) {
    return this.updateVehicleTypeUseCase.execute(id, updateVehicleTypeDto)
  }

  @Delete(':id')
  remove(@Param('id') id: number | bigint) {
    return this.deleteVehicleTypeUseCase.execute(id)
  }
}
