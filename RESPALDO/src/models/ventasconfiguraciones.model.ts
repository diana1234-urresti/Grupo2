import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Parque} from './parque.model';

@model()
export class Ventasconfiguraciones extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'date',
    required: true,
  })
  fecha: string;

  @property({
    type: 'number',
    required: true,
  })
  cantidad_entradas_max: number;

  @property({
    type: 'number',
    required: true,
  })
  porcentaje: number;

  @belongsTo(() => Parque)
  parqueId: string;

  constructor(data?: Partial<Ventasconfiguraciones>) {
    super(data);
  }
}

export interface VentasconfiguracionesRelations {
  // describe navigational properties here
}

export type VentasconfiguracionesWithRelations = Ventasconfiguraciones & VentasconfiguracionesRelations;
