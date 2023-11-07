import { PaginationOptionsInterface } from './PaginationOptionsInterface'

export interface PaginationResultInterface<PaginationEntity> {
  results: PaginationEntity[]
  total: number
  options: PaginationOptionsInterface
}
