import { Module } from '@nestjs/common'
import { VehicleTypeService } from './vehicle-type.service'
import { VehicleTypeController } from './vehicle-type.controller'
import { CreateVehicleTypeUseCase } from 'src/vehicle-type/use-cases/create.vehicle.type.usecase'
import { UpdateVehicleTypeUseCase } from 'src/vehicle-type/use-cases/update.vehicle.type.usecase'
import { GetAllVehicleTypeUseCase } from 'src/vehicle-type/use-cases/get-all-vehicle.type.usecase'
import { GetVehicleTypeUseCase } from 'src/vehicle-type/use-cases/get-vehicle.type.usecase'
import { DeleteVehicleTypeUseCase } from 'src/vehicle-type/use-cases/delete.vehicle.type.usecase'

@Module({
  controllers: [VehicleTypeController],
  providers: [
    VehicleTypeService,
    CreateVehicleTypeUseCase,
    UpdateVehicleTypeUseCase,
    GetAllVehicleTypeUseCase,
    GetVehicleTypeUseCase,
    DeleteVehicleTypeUseCase
  ]
})
export class VehicleTypeModule {}
