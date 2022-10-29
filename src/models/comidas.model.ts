import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Zonas} from './zonas.model';

@model()
export class Comidas extends Entity {
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
  imagen: string;

  @property({
    type: 'string',
    required: true,
  })
  menu: string;

  @belongsTo(() => Zonas)
  zonasId: string;

  constructor(data?: Partial<Comidas>) {
    super(data);
  }
}

export interface ComidasRelations {
  // describe navigational properties here
}

export type ComidasWithRelations = Comidas & ComidasRelations;
