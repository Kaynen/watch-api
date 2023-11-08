import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VehicleImageService } from './vehicle-image.service';
import { CreateVehicleImageDto } from './dto/create-vehicle-image.dto';
import { UpdateVehicleImageDto } from './dto/update-vehicle-image.dto';

@Controller('vehicle-image')
export class VehicleImageController {
  constructor(private readonly vehicleImageService: VehicleImageService) {}

  @Post()
  create(@Body() createVehicleImageDto: CreateVehicleImageDto) {
    return this.vehicleImageService.create(createVehicleImageDto);
  }

  @Get()
  findAll() {
    return this.vehicleImageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vehicleImageService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVehicleImageDto: UpdateVehicleImageDto) {
    return this.vehicleImageService.update(+id, updateVehicleImageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vehicleImageService.remove(+id);
  }
}
