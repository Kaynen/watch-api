import { Module } from '@nestjs/common'
import { OriginService } from './origin.service'
import { OriginController } from './origin.controller'
import { CreateOriginUseCase } from 'src/origin/use-cases/create.origin.usecase'
import { UpdateOriginUseCase } from 'src/origin/use-cases/update.origin.usecase'
import { GetAllOriginUseCase } from 'src/origin/use-cases/get-all-origin.usecase'
import { GetOriginUseCase } from 'src/origin/use-cases/get-origin.usecase'
import { DeleteOriginUseCase } from 'src/origin/use-cases/delete.origin.usecase'

@Module({
  controllers: [OriginController],
  providers: [
    OriginService,
    CreateOriginUseCase,
    UpdateOriginUseCase,
    GetAllOriginUseCase,
    GetOriginUseCase,
    DeleteOriginUseCase
  ]
})
export class OriginModule {}
