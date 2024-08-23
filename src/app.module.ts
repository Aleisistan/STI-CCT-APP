import { Module } from '@nestjs/common';
import { PrioridadModule } from './prioridad/prioridad.module';

@Module({
  imports: [PrioridadModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
