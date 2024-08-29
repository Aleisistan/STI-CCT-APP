import { Controller, Get, Render } from '@nestjs/common';
//import { CreateRequerimientoDto } from './dto/CreateRequerimiento.dto';
import { PrioridadService } from './prioridad.service';

@Controller('prioridad')
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
    //@Get(':id')
  //findOne(@Param() params) {
    //return this.prioridadService.findOne(params.id);
  //}

  //@Post()
  //create(@Body() createRequerimientoDto: CreateRequerimientoDto) {
    //return this.prioridadService.create(createRequerimientoDto);
  //}
  
  }

