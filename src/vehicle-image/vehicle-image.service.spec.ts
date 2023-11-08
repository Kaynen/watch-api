import { Test, TestingModule } from '@nestjs/testing';
import { VehicleImageService } from './vehicle-image.service';

describe('VehicleImageService', () => {
  let service: VehicleImageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VehicleImageService],
    }).compile();

    service = module.get<VehicleImageService>(VehicleImageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
