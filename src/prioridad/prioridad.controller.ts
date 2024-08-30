import { Body, Controller, Get, Param, Post, Render } from '@nestjs/common';
import { CreateRequerimientosDto } from './dto/create-requerimientos.dto/create-requerimientos.dto';
import { PrioridadService } from './prioridad.service';


@Controller('prioridad') //ataja los pedidos y deriva desde /prioridad
export class PrioridadController {
    constructor(private readonly PrioridadService: PrioridadService) {}

    //@Get('hello')
    //getHello(): string {
    //return this.PrioridadService.getHello();
    //}
    @Get()
    @Render('prioridades')
    findAll() {
      return {prioridades: this.PrioridadService.findAll()};
    }
    @Get(':id')
    findOne(@Param() params) {
    return this.PrioridadService.findOne(params.id);
  }

  @Post()
  create(@Body() createRequerimientosDto: CreateRequerimientosDto) {
  return this.PrioridadService;
  
  }
  
  }

