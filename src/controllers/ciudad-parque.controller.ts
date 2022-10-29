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
  Ciudad,
  Parque,
} from '../models';
import {CiudadRepository} from '../repositories';

export class CiudadParqueController {
  constructor(
    @repository(CiudadRepository) protected ciudadRepository: CiudadRepository,
  ) { }

  @get('/ciudads/{id}/parques', {
    responses: {
      '200': {
        description: 'Array of Ciudad has many Parque',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Parque)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Parque>,
  ): Promise<Parque[]> {
    return this.ciudadRepository.parques(id).find(filter);
  }

  @post('/ciudads/{id}/parques', {
    responses: {
      '200': {
        description: 'Ciudad model instance',
        content: {'application/json': {schema: getModelSchemaRef(Parque)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Ciudad.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Parque, {
            title: 'NewParqueInCiudad',
            exclude: ['id'],
            optional: ['ciudadId']
          }),
        },
      },
    }) parque: Omit<Parque, 'id'>,
  ): Promise<Parque> {
    return this.ciudadRepository.parques(id).create(parque);
  }

  @patch('/ciudads/{id}/parques', {
    responses: {
      '200': {
        description: 'Ciudad.Parque PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Parque, {partial: true}),
        },
      },
    })
    parque: Partial<Parque>,
    @param.query.object('where', getWhereSchemaFor(Parque)) where?: Where<Parque>,
  ): Promise<Count> {
    return this.ciudadRepository.parques(id).patch(parque, where);
  }

  @del('/ciudads/{id}/parques', {
    responses: {
      '200': {
        description: 'Ciudad.Parque DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Parque)) where?: Where<Parque>,
  ): Promise<Count> {
    return this.ciudadRepository.parques(id).delete(where);
  }
}
