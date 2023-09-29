import { Test, TestingModule } from '@nestjs/testing';
import { TheftAlertController } from './theft-alert.controller';
import { TheftAlertService } from './theft-alert.service';

describe('TheftAlertController', () => {
  let controller: TheftAlertController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TheftAlertController],
      providers: [TheftAlertService],
    }).compile();

    controller = module.get<TheftAlertController>(TheftAlertController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
