import { Controller, Get } from '@nestjs/common';
import { PrioridadService } from './prioridad.service';

@Controller('prioridad')
export class PrioridadController {
    constructor(private readonly appService: PrioridadService) {}

    @Get('hello')
    getHello(): string {
      return this.appService.getHello();
    }
  }

