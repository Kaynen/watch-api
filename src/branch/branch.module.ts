import { Module } from '@nestjs/common'
import { BranchService } from './branch.service'
import { BranchController } from './branch.controller'
import { GetBranchUseCase } from 'src/branch/use-cases/get-branch.usecase'
import { CreateBranchUseCase } from 'src/branch/use-cases/create.branch.usecase'
import { GetAllBranchUseCase } from 'src/branch/use-cases/get-all-branch.usecase'
import { UpdateBranchUseCase } from 'src/branch/use-cases/update.branch.usecase'
import { DeleteBranchUseCase } from 'src/branch/use-cases/delete.branch.usecase'

@Module({
  controllers: [BranchController],
  providers: [
    BranchService,
    CreateBranchUseCase,
    GetBranchUseCase,
    GetAllBranchUseCase,
    UpdateBranchUseCase,
    DeleteBranchUseCase
  ]
})
export class BranchModule {}
