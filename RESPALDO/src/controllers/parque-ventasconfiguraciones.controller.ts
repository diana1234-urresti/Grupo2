import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Parque,
  Ventasconfiguraciones,
} from '../models';
import {ParqueRepository} from '../repositories';

export class ParqueVentasconfiguracionesController {
  constructor(
    @repository(ParqueRepository) protected parqueRepository: ParqueRepository,
  ) { }

  @get('/parques/{id}/ventasconfiguraciones', {
    responses: {
      '200': {
        description: 'Array of Parque has many Ventasconfiguraciones',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Ventasconfiguraciones)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Ventasconfiguraciones>,
  ): Promise<Ventasconfiguraciones[]> {
    return this.parqueRepository.ventasconfiguraciones(id).find(filter);
  }

  @post('/parques/{id}/ventasconfiguraciones', {
    responses: {
      '200': {
        description: 'Parque model instance',
        content: {'application/json': {schema: getModelSchemaRef(Ventasconfiguraciones)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Parque.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ventasconfiguraciones, {
            title: 'NewVentasconfiguracionesInParque',
            exclude: ['id'],
            optional: ['parqueId']
          }),
        },
      },
    }) ventasconfiguraciones: Omit<Ventasconfiguraciones, 'id'>,
  ): Promise<Ventasconfiguraciones> {
    return this.parqueRepository.ventasconfiguraciones(id).create(ventasconfiguraciones);
  }

  @patch('/parques/{id}/ventasconfiguraciones', {
    responses: {
      '200': {
        description: 'Parque.Ventasconfiguraciones PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ventasconfiguraciones, {partial: true}),
        },
      },
    })
    ventasconfiguraciones: Partial<Ventasconfiguraciones>,
    @param.query.object('where', getWhereSchemaFor(Ventasconfiguraciones)) where?: Where<Ventasconfiguraciones>,
  ): Promise<Count> {
    return this.parqueRepository.ventasconfiguraciones(id).patch(ventasconfiguraciones, where);
  }

  @del('/parques/{id}/ventasconfiguraciones', {
    responses: {
      '200': {
        description: 'Parque.Ventasconfiguraciones DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Ventasconfiguraciones)) where?: Where<Ventasconfiguraciones>,
  ): Promise<Count> {
    return this.parqueRepository.ventasconfiguraciones(id).delete(where);
  }
}
