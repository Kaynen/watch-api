import { Module } from '@nestjs/common';
import { CollaborativeReportService } from './collaborative-report.service';
import { CollaborativeReportController } from './collaborative-report.controller';

@Module({
  controllers: [CollaborativeReportController],
  providers: [CollaborativeReportService],
})
export class CollaborativeReportModule {}
