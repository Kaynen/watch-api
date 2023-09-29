import { Injectable } from '@nestjs/common';
import { CreateVehicleImageDto } from './dto/create-vehicle-image.dto';
import { UpdateVehicleImageDto } from './dto/update-vehicle-image.dto';

@Injectable()
export class VehicleImageService {
  create(createVehicleImageDto: CreateVehicleImageDto) {
    return 'This action adds a new vehicleImage';
  }

  findAll() {
    return `This action returns all vehicleImage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vehicleImage`;
  }

  update(id: number, updateVehicleImageDto: UpdateVehicleImageDto) {
    return `This action updates a #${id} vehicleImage`;
  }

  remove(id: number) {
    return `This action removes a #${id} vehicleImage`;
  }
}
