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
  Zonas,
} from '../models';
import {ParqueRepository} from '../repositories';

export class ParqueZonasController {
  constructor(
    @repository(ParqueRepository) protected parqueRepository: ParqueRepository,
  ) { }

  @get('/parques/{id}/zonas', {
    responses: {
      '200': {
        description: 'Array of Parque has many Zonas',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Zonas)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Zonas>,
  ): Promise<Zonas[]> {
    return this.parqueRepository.zonas(id).find(filter);
  }

  @post('/parques/{id}/zonas', {
    responses: {
      '200': {
        description: 'Parque model instance',
        content: {'application/json': {schema: getModelSchemaRef(Zonas)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Parque.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Zonas, {
            title: 'NewZonasInParque',
            exclude: ['id'],
            optional: ['parqueId']
          }),
        },
      },
    }) zonas: Omit<Zonas, 'id'>,
  ): Promise<Zonas> {
    return this.parqueRepository.zonas(id).create(zonas);
  }

  @patch('/parques/{id}/zonas', {
    responses: {
      '200': {
        description: 'Parque.Zonas PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Zonas, {partial: true}),
        },
      },
    })
    zonas: Partial<Zonas>,
    @param.query.object('where', getWhereSchemaFor(Zonas)) where?: Where<Zonas>,
  ): Promise<Count> {
    return this.parqueRepository.zonas(id).patch(zonas, where);
  }

  @del('/parques/{id}/zonas', {
    responses: {
      '200': {
        description: 'Parque.Zonas DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Zonas)) where?: Where<Zonas>,
  ): Promise<Count> {
    return this.parqueRepository.zonas(id).delete(where);
  }
}
