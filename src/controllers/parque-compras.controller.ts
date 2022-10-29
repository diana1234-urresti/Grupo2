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
  Compras,
} from '../models';
import {ParqueRepository} from '../repositories';

export class ParqueComprasController {
  constructor(
    @repository(ParqueRepository) protected parqueRepository: ParqueRepository,
  ) { }

  @get('/parques/{id}/compras', {
    responses: {
      '200': {
        description: 'Array of Parque has many Compras',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Compras)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Compras>,
  ): Promise<Compras[]> {
    return this.parqueRepository.compras(id).find(filter);
  }

  @post('/parques/{id}/compras', {
    responses: {
      '200': {
        description: 'Parque model instance',
        content: {'application/json': {schema: getModelSchemaRef(Compras)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Parque.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Compras, {
            title: 'NewComprasInParque',
            exclude: ['id'],
            optional: ['parqueId']
          }),
        },
      },
    }) compras: Omit<Compras, 'id'>,
  ): Promise<Compras> {
    return this.parqueRepository.compras(id).create(compras);
  }

  @patch('/parques/{id}/compras', {
    responses: {
      '200': {
        description: 'Parque.Compras PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Compras, {partial: true}),
        },
      },
    })
    compras: Partial<Compras>,
    @param.query.object('where', getWhereSchemaFor(Compras)) where?: Where<Compras>,
  ): Promise<Count> {
    return this.parqueRepository.compras(id).patch(compras, where);
  }

  @del('/parques/{id}/compras', {
    responses: {
      '200': {
        description: 'Parque.Compras DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Compras)) where?: Where<Compras>,
  ): Promise<Count> {
    return this.parqueRepository.compras(id).delete(where);
  }
}
