import {Entity, model, property, hasOne, belongsTo} from '@loopback/repository';
import {Compras} from './compras.model';
import {Parque} from './parque.model';

@model()
export class Usuario extends Entity {
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
  dni: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  apellido: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  cargo: string;

  @property({
    type: 'string',
    required: false,
  })
  telefono_fijo?: string;

  @property({
    type: 'string',
    required: true,
  })
  celular: string;

  @property({
    type: 'date',
    required: false,
  })
  nacimiento: string;

  @property({
    type: 'string',
    required: false,
  })
  clave: string;

  @property({
    type: 'string',
  })
  comprasId?: string;

  @hasOne(() => Compras)
  compras: Compras;

  @belongsTo(() => Parque)
  parqueId: string;

  constructor(data?: Partial<Usuario>) {
    super(data);
  }
}

export interface UsuarioRelations {
  // describe navigational properties here
}

export type UsuarioWithRelations = Usuario & UsuarioRelations;
