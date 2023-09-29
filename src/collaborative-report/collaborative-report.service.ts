import { Injectable } from '@nestjs/common';
import { CreateCollaborativeReportDto } from './dto/create-collaborative-report.dto';
import { UpdateCollaborativeReportDto } from './dto/update-collaborative-report.dto';

@Injectable()
export class CollaborativeReportService {
  create(createCollaborativeReportDto: CreateCollaborativeReportDto) {
    return 'This action adds a new collaborativeReport';
  }

  findAll() {
    return `This action returns all collaborativeReport`;
  }

  findOne(id: number) {
    return `This action returns a #${id} collaborativeReport`;
  }

  update(id: number, updateCollaborativeReportDto: UpdateCollaborativeReportDto) {
    return `This action updates a #${id} collaborativeReport`;
  }

  remove(id: number) {
    return `This action removes a #${id} collaborativeReport`;
  }
}
