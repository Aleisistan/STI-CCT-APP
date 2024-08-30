import { Module } from '@nestjs/common';
import { PrioridadController } from './prioridad.controller';
import { PrioridadService } from './prioridad.service';

@Module({
  controllers: [PrioridadController],
  providers: [PrioridadService],
})
export class PrioridadModule {}
