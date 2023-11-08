import { Module } from '@nestjs/common';
import { TheftAlertService } from './theft-alert.service';
import { TheftAlertController } from './theft-alert.controller';

@Module({
  controllers: [TheftAlertController],
  providers: [TheftAlertService],
})
export class TheftAlertModule {}
