import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CollaborativeReportService } from './collaborative-report.service';
import { CreateCollaborativeReportDto } from './dto/create-collaborative-report.dto';
import { UpdateCollaborativeReportDto } from './dto/update-collaborative-report.dto';

@Controller('collaborative-report')
export class CollaborativeReportController {
  constructor(private readonly collaborativeReportService: CollaborativeReportService) {}

  @Post()
  create(@Body() createCollaborativeReportDto: CreateCollaborativeReportDto) {
    return this.collaborativeReportService.create(createCollaborativeReportDto);
  }

  @Get()
  findAll() {
    return this.collaborativeReportService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.collaborativeReportService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCollaborativeReportDto: UpdateCollaborativeReportDto) {
    return this.collaborativeReportService.update(+id, updateCollaborativeReportDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.collaborativeReportService.remove(+id);
  }
}
