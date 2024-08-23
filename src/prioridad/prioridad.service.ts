import { Injectable } from '@nestjs/common';

@Injectable()
export class PrioridadService {
    getHello(): string {
        return 'Hola Toloza!';
      }
    }