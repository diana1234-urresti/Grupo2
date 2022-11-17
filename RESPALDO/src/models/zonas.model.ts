import {Entity, model, property, hasMany, belongsTo} from '@loopback/repository';
import {Comidas} from './comidas.model';
import {Atraccion} from './atraccion.model';
import {Parque} from './parque.model';

@model()
export class Zonas extends Entity {
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
  descripcion: string;

  @hasMany(() => Comidas)
  comidas: Comidas[];

  @hasMany(() => Atraccion)
  atraccions: Atraccion[];

  @belongsTo(() => Parque)
  parqueId: string;

  constructor(data?: Partial<Zonas>) {
    super(data);
  }
}

export interface ZonasRelations {
  // describe navigational properties here
}

export type ZonasWithRelations = Zonas & ZonasRelations;
