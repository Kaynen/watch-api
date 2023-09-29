import { Injectable } from '@nestjs/common';
import { CreateTheftAlertDto } from './dto/create-theft-alert.dto';
import { UpdateTheftAlertDto } from './dto/update-theft-alert.dto';

@Injectable()
export class TheftAlertService {
  create(createTheftAlertDto: CreateTheftAlertDto) {
    return 'This action adds a new theftAlert';
  }

  findAll() {
    return `This action returns all theftAlert`;
  }

  findOne(id: number) {
    return `This action returns a #${id} theftAlert`;
  }

  update(id: number, updateTheftAlertDto: UpdateTheftAlertDto) {
    return `This action updates a #${id} theftAlert`;
  }

  remove(id: number) {
    return `This action removes a #${id} theftAlert`;
  }
}
