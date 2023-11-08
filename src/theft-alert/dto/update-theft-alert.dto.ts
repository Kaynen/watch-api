import { PartialType } from '@nestjs/mapped-types';
import { CreateTheftAlertDto } from './create-theft-alert.dto';

export class UpdateTheftAlertDto extends PartialType(CreateTheftAlertDto) {}
