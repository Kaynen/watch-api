import { Injectable } from '@nestjs/common'
import { OriginService } from 'src/origin/origin.service'
import { Origin } from 'src/origin/entities/origin.entity'
import { UpdateOriginDto } from 'src/origin/dto/update-origin.dto'
import { ResponseOriginDto } from 'src/origin/dto/response-origin.dto'
import { GetOriginUseCase } from 'src/origin/use-cases/get-origin.usecase'

@Injectable()
export class UpdateOriginUseCase {
  constructor(
    private readonly originService: OriginService,
    private readonly getOriginUseCase: GetOriginUseCase
  ) {}

  async execute(
    id: number | bigint,
    input: UpdateOriginDto
  ): Promise<ResponseOriginDto | null> {
    const origin = await this.getOriginUseCase.execute(id)
    const updateOrigin = Origin.updateFromDto(origin, input)
    return await this.originService.update(id, updateOrigin)
  }
}
