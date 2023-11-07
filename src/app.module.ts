import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { UsersModule } from './users/users.module'
import { BranchModule } from './branch/branch.module'
import { PrismaModule } from 'src/prisma/prisma.module'
import { VehicleModule } from './vehicle/vehicle.module'
import { TrackingModule } from './tracking/tracking.module'
import { TheftAlertModule } from './theft-alert/theft-alert.module'
import { VehicleTypeModule } from './vehicle-type/vehicle-type.module'
import { VehicleImageModule } from './vehicle-image/vehicle-image.module'
import { CollaborativeReportModule } from './collaborative-report/collaborative-report.module'

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
    PrismaModule
  ],
  controllers: []
})
export class AppModule {}
