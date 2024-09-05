import { Body, Controller, Get, Param, Post, Query, Render } from '@nestjs/common';
import { CreateRequerimientosDto } from './dto/create-requerimientos.dto';
import { QueryPrioridadDto } from './dto/Query-Prioridad.dto';
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
    findAll(@Query() query : QueryPrioridadDto)  {
      let nombre = query.nombre;
      let sortBy = query.sortBy;
      let orderBy = query.orderBy
      return {prioridades: this.PrioridadService.findAll({ name: nombre, sortBy, orderBy })};
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

