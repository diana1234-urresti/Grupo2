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
  Zonas,
  Comidas,
} from '../models';
import {ZonasRepository} from '../repositories';

export class ZonasComidasController {
  constructor(
    @repository(ZonasRepository) protected zonasRepository: ZonasRepository,
  ) { }

  @get('/zonas/{id}/comidas', {
    responses: {
      '200': {
        description: 'Array of Zonas has many Comidas',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Comidas)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Comidas>,
  ): Promise<Comidas[]> {
    return this.zonasRepository.comidas(id).find(filter);
  }

  @post('/zonas/{id}/comidas', {
    responses: {
      '200': {
        description: 'Zonas model instance',
        content: {'application/json': {schema: getModelSchemaRef(Comidas)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Zonas.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Comidas, {
            title: 'NewComidasInZonas',
            exclude: ['id'],
            optional: ['zonasId']
          }),
        },
      },
    }) comidas: Omit<Comidas, 'id'>,
  ): Promise<Comidas> {
    return this.zonasRepository.comidas(id).create(comidas);
  }

  @patch('/zonas/{id}/comidas', {
    responses: {
      '200': {
        description: 'Zonas.Comidas PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Comidas, {partial: true}),
        },
      },
    })
    comidas: Partial<Comidas>,
    @param.query.object('where', getWhereSchemaFor(Comidas)) where?: Where<Comidas>,
  ): Promise<Count> {
    return this.zonasRepository.comidas(id).patch(comidas, where);
  }

  @del('/zonas/{id}/comidas', {
    responses: {
      '200': {
        description: 'Zonas.Comidas DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Comidas)) where?: Where<Comidas>,
  ): Promise<Count> {
    return this.zonasRepository.comidas(id).delete(where);
  }
}
