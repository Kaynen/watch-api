import { Module } from '@nestjs/common';
import { VehicleImageService } from './vehicle-image.service';
import { VehicleImageController } from './vehicle-image.controller';

@Module({
  controllers: [VehicleImageController],
  providers: [VehicleImageService],
})
export class VehicleImageModule {}
