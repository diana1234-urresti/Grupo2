import {Entity, model, property, hasMany, belongsTo} from '@loopback/repository';
import {Atraccion} from './atraccion.model';
import {Parque} from './parque.model';

@model()
export class Plan extends Entity {
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
  codigo: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  color: string;

  @property({
    type: 'number',
    required: true,
  })
  precio: number;

  @hasMany(() => Atraccion)
  atraccions: Atraccion[];

  @belongsTo(() => Parque)
  parqueId: string;

  constructor(data?: Partial<Plan>) {
    super(data);
  }
}

export interface PlanRelations {
  // describe navigational properties here
}

export type PlanWithRelations = Plan & PlanRelations;
