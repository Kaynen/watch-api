import { PaginationResultInterface } from './PaginationResultInterface'

export interface PaginationInterface {
  currentPage: number
  totalPages: number
  totalItems: number
}
export class Pagination<PaginationEntity> {
  public results: PaginationEntity[]
  public pagination: PaginationInterface

  constructor(paginationResults: PaginationResultInterface<PaginationEntity>) {
    const currentPage = Number(paginationResults.options.page)
    const perPage = paginationResults.options.limit
    const totalItems = paginationResults.total
    const totalPages = Pagination.pageCount(totalItems, perPage)

    this.results = paginationResults.results
    this.pagination = { totalPages, currentPage, totalItems }
  }

  private static pageCount(totalItems: number, perPage: number): number {
    return Math.ceil(totalItems / perPage)
  }
}
