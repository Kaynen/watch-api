import { Observable } from 'rxjs'
import { Request } from 'express'
import {
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Injectable
} from '@nestjs/common'
import { PaginationOptionsInterface } from './PaginationOptionsInterface'

@Injectable()
export class PaginationInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req: Request = context.switchToHttp().getRequest()

    const pagination = this.paginationOptions(req)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    req.query.pagination = pagination

    return next.handle()
  }

  private paginationOptions(req: Request): PaginationOptionsInterface {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    let page: number =
      req.query && req.query.page && parseInt(req.query.page as string)
        ? Number(req.query.page)
        : 1
    page = page < 1 ? 1 : page

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    let limit: number =
      req.query && req.query.limit && parseInt(req.query.limit as string)
        ? Number(req.query.limit)
        : 15
    limit = limit < 1 ? 15 : limit

    const offset = page * limit - limit

    return { page, limit, offset }
  }
}
