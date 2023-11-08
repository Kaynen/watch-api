import { Injectable } from '@nestjs/common'
import { OriginService } from 'src/origin/origin.service'
import { ResponseOriginDto } from 'src/origin/dto/response-origin.dto'
import { GetOriginUseCase } from 'src/origin/use-cases/get-origin.usecase'

@Injectable()
export class DeleteOriginUseCase {
  constructor(
    private readonly originService: OriginService,
    private readonly getOriginUseCase: GetOriginUseCase
  ) {}

  async execute(id: number | bigint): Promise<ResponseOriginDto | null> {
    await this.getOriginUseCase.execute(id)
    return await this.originService.softDelete(id)
  }
}
