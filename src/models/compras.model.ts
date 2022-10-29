import {Entity, model, property, belongsTo, hasOne, hasMany} from '@loopback/repository';
import {Parque} from './parque.model';
import {Usuario} from './usuario.model';
import {Plan} from './plan.model';

@model()
export class Compras extends Entity {
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
    type: 'array',
    itemType: 'number',
    required: true,
  })
  cantidades: number[];

  @property({
    type: 'string',
    required: true,
  })
  estado: string;

  @property({
    type: 'string',
    required: true,
  })
  tarjeta_credito: string;

  @property({
    type: 'number',
    required: true,
  })
  total: number;

  @belongsTo(() => Parque)
  parqueId: string;

  @hasOne(() => Usuario)
  usuario: Usuario;

  @property({
    type: 'string',
  })
  usuarioId?: string;

  @hasMany(() => Plan, {through: {model: () => Parque}})
  plans: Plan[];

  constructor(data?: Partial<Compras>) {
    super(data);
  }
}

export interface ComprasRelations {
  // describe navigational properties here
}

export type ComprasWithRelations = Compras & ComprasRelations;
