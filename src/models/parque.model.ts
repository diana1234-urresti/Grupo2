import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Ciudad} from './ciudad.model';
import {Zonas} from './zonas.model';
import {Plan} from './plan.model';
import {Compras} from './compras.model';
import {Ventasconfiguraciones} from './ventasconfiguraciones.model';
import {Usuario} from './usuario.model';

@model()
export class Parque extends Entity {
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
  direccion: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  color: string;

  @property({
    type: 'number',
    required: true,
  })
  max_visitantes_dia: number;

  @property({
    type: 'string',
    required: true,
  })
  logo: string;

  @property({
    type: 'string',
    required: true,
  })
  mapa: string;

  @property({
    type: 'string',
    required: false,
  })
  eslogan: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @belongsTo(() => Ciudad)
  ciudadId: string;

  @hasMany(() => Zonas)
  zonas: Zonas[];

  @hasMany(() => Plan)
  plans: Plan[];

  @hasMany(() => Compras)
  compras: Compras[];

  @property({
    type: 'string',
  })
  comprasId?: string;

  @property({
    type: 'string',
  })
  planId?: string;

  @hasMany(() => Ventasconfiguraciones)
  ventasconfiguraciones: Ventasconfiguraciones[];

  @hasMany(() => Usuario)
  usuarios: Usuario[];

  constructor(data?: Partial<Parque>) {
    super(data);
  }
}

export interface ParqueRelations {
  // describe navigational properties here
}

export type ParqueWithRelations = Parque & ParqueRelations;
