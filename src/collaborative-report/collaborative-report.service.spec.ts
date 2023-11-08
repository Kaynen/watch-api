import { Test, TestingModule } from '@nestjs/testing';
import { CollaborativeReportService } from './collaborative-report.service';

describe('CollaborativeReportService', () => {
  let service: CollaborativeReportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CollaborativeReportService],
    }).compile();

    service = module.get<CollaborativeReportService>(CollaborativeReportService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
