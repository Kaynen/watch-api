import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { VehicleModule } from './vehicle/vehicle.module';
import { BranchModule } from './branch/branch.module';
import { VehicleImageModule } from './vehicle-image/vehicle-image.module';
import { TheftAlertModule } from './theft-alert/theft-alert.module';
import { TrackingModule } from './tracking/tracking.module';
import { CollaborativeReportModule } from './collaborative-report/collaborative-report.module';
import { VehicleTypeModule } from './vehicle-type/vehicle-type.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [
    UsersModule,
    VehicleModule,
    BranchModule,
    VehicleImageModule,
    TheftAlertModule,
    TrackingModule,
    CollaborativeReportModule,
    VehicleTypeModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
