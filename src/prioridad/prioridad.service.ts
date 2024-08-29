import { Injectable } from '@nestjs/common';


  @Injectable()
  export class PrioridadService {
    getHello(): string {
      return 'Hola Toloza!';
    }
    private readonly prioridades = [
      {
        "id": 1,
        "name": "Urgente",
        "descripción": "no enciende equipo, caídas de sistemas y redes"
      },
      {
        "id": 2,
        "name": "Intermedia",
        "descripción": "Virus/Malwares, Desconexión intermitente de la red"
      },
      {
        "id": 3,
        "name": "Planificada",
        "descripción": "Armado de redes, Instalación soft específicos"
      },
      {
        "id": 4,
        "name": "Mantenimiento",
        "descripción": "Optimizacón de hardware y software, Limpieza física"
      }
    ];
    findAll()  {
      return this.prioridades;
    }
  };
