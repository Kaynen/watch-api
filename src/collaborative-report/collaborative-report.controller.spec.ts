import { Test, TestingModule } from '@nestjs/testing';
import { CollaborativeReportController } from './collaborative-report.controller';
import { CollaborativeReportService } from './collaborative-report.service';

describe('CollaborativeReportController', () => {
  let controller: CollaborativeReportController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CollaborativeReportController],
      providers: [CollaborativeReportService],
    }).compile();

    controller = module.get<CollaborativeReportController>(CollaborativeReportController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
