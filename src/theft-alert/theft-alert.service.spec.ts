import { Test, TestingModule } from '@nestjs/testing';
import { TheftAlertService } from './theft-alert.service';

describe('TheftAlertService', () => {
  let service: TheftAlertService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TheftAlertService],
    }).compile();

    service = module.get<TheftAlertService>(TheftAlertService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
