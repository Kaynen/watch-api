import { OriginService } from 'src/origin/origin.service'
import { Origin } from 'src/origin/entities/origin.entity'
import { Injectable, NotFoundException } from '@nestjs/common'
import { ResponseOriginDto } from 'src/origin/dto/response-origin.dto'

@Injectable()
export class GetOriginUseCase {
  constructor(private readonly originService: OriginService) {}

  async execute(id: number | bigint): Promise<ResponseOriginDto> {
    const dataOrigin = await this.originService.findOne(id)
    if (!dataOrigin) {
      throw new NotFoundException('Origin type not found')
    }
    const response = new Origin(dataOrigin)
    return response.toDto()
  }
}
