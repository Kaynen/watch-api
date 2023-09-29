import { PartialType } from '@nestjs/mapped-types';
import { CreateVehicleImageDto } from './create-vehicle-image.dto';

export class UpdateVehicleImageDto extends PartialType(CreateVehicleImageDto) {}
