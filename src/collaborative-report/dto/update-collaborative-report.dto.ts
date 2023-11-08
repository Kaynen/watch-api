import { PartialType } from '@nestjs/mapped-types';
import { CreateCollaborativeReportDto } from './create-collaborative-report.dto';

export class UpdateCollaborativeReportDto extends PartialType(CreateCollaborativeReportDto) {}
