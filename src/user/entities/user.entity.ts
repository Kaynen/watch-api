import { Prisma } from '@prisma/client'
import { CreateUserDto } from 'src/user/dto/create-user.dto'
import { UpdateUserDto } from 'src/user/dto/update-user.dto'
import { ResponseUserDto } from 'src/user/dto/response-user.dto'

export class User {
  constructor(data: Prisma.userCreateInput) {
    this.id = data.id
    this.name = data.name
    this.email = data.email
    this.phone = data.phone
    this.password = data.password
    this.document_number = data.document_number
  }

  static createFromDto(dto: CreateUserDto): User {
    return new User({
      name: dto.name,
      email: dto.email,
      phone: dto.phone,
      password: dto.password,
      document_number: dto.document_number
    })
  }

  static updateFromDto(
    branch: ResponseUserDto,
    dto: UpdateUserDto
  ): ResponseUserDto {
    branch.name = dto.name || branch.name
    return branch
  }

  toDto(): ResponseUserDto {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      phone: this.phone,
      document_number: this.document_number
    }
  }

  id: number | bigint
  name: string
  email: string
  phone: string
  password: string
  document_number: string
}
