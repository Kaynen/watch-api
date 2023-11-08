import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TheftAlertService } from './theft-alert.service';
import { CreateTheftAlertDto } from './dto/create-theft-alert.dto';
import { UpdateTheftAlertDto } from './dto/update-theft-alert.dto';

@Controller('theft-alert')
export class TheftAlertController {
  constructor(private readonly theftAlertService: TheftAlertService) {}

  @Post()
  create(@Body() createTheftAlertDto: CreateTheftAlertDto) {
    return this.theftAlertService.create(createTheftAlertDto);
  }

  @Get()
  findAll() {
    return this.theftAlertService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.theftAlertService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTheftAlertDto: UpdateTheftAlertDto) {
    return this.theftAlertService.update(+id, updateTheftAlertDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.theftAlertService.remove(+id);
  }
}
