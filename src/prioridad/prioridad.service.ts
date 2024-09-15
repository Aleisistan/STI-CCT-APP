import { Injectable } from '@nestjs/common';


  @Injectable()//en el uso de clases
  export class PrioridadService {
  
    //getHello(): string {
      //return 'Hola Toloza!';
      
    private prioridades = [
      {
        "id": 1,
        "name": "Silvia",
        "priority": "high",
        "descripción": "no enciende equipo, caídas de sistemas y redes"
      },
      {
        "id": 5,
        "name": "Marcos",
        "priority": "medium",
        "descripción": "no enciende equipo, caídas de sistemas y redes"
      },
      {
        "id": 2,
        "name": "Ines",
        "priority": "low",
        "descripción": "Virus/Malwares, Desconexión intermitente de la red"
      },
      {
        "id": 3,
        "name": "Pablo",
        "priority": "planned",
        "descripción": "Armado de redes, Instalación soft específicos"
      },
      {
        "id": 4,
        "name": "Nacho",
        "priority": "Service",
        "descripción": "Optimizacón de hardware y software, Limpieza física"
      }
    ];
    findAll({ name, sortBy, orderBy }: { name: string; sortBy: string; orderBy: number; })   {
      let queryPrioridades = [];
      if(!name){
        queryPrioridades = this.prioridades;
      }
      else {
        queryPrioridades = this.prioridades.filter(function(prioridad){
            return prioridad.name.toLocaleLowerCase() == name.toLocaleLowerCase();
        });
      }
      if (!sortBy){
        return queryPrioridades;
      }
      let prioridadesOrdenadas = queryPrioridades.sort(function(a, b){
        let campoAOrdenarA = a[sortBy];
        let campoAOrdenarB = b[sortBy];
        if (campoAOrdenarA < campoAOrdenarB){
            return -1;
        }
        if (campoAOrdenarA == campoAOrdenarB){
          return 0;
        }
        return 1;
      })
      return prioridadesOrdenadas;
    } 
    findOne(id: any) {
      return this.prioridades.find(function(prioridad){
        return prioridad.id == id;
      })
    }
  }

