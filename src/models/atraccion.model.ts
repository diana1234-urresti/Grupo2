import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Zonas} from './zonas.model';
import {Plan} from './plan.model';

@model()
export class Atraccion extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  imagen: string;

  @property({
    type: 'number',
    required: true,
  })
  min_estatura: number;

  @property({
    type: 'string',
    required: true,
  })
  enlace_youtube: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @belongsTo(() => Zonas)
  zonasId: string;

  @belongsTo(() => Plan)
  planId: string;

  constructor(data?: Partial<Atraccion>) {
    super(data);
  }
}

export interface AtraccionRelations {
  // describe navigational properties here
}

export type AtraccionWithRelations = Atraccion & AtraccionRelations;
