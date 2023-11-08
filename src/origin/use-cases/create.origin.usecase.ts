import { Injectable } from '@nestjs/common'
import { OriginService } from 'src/origin/origin.service'
import { Origin } from 'src/origin/entities/origin.entity'
import { CreateOriginDto } from 'src/origin/dto/create-origin.dto'
import { ResponseOriginDto } from 'src/origin/dto/response-origin.dto'

@Injectable()
export class CreateOriginUseCase {
  constructor(private readonly originService: OriginService) {}

  async execute(input: CreateOriginDto): Promise<ResponseOriginDto | null> {
    const origin = Origin.createFromDto(input)
    return await this.originService.create(origin)
  }
}
