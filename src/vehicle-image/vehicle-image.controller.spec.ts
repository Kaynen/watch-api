import { Test, TestingModule } from '@nestjs/testing';
import { VehicleImageController } from './vehicle-image.controller';
import { VehicleImageService } from './vehicle-image.service';

describe('VehicleImageController', () => {
  let controller: VehicleImageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VehicleImageController],
      providers: [VehicleImageService],
    }).compile();

    controller = module.get<VehicleImageController>(VehicleImageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
