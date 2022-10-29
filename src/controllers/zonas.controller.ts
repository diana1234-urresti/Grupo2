import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Zonas} from '../models';
import {ZonasRepository} from '../repositories';

export class ZonasController {
  constructor(
    @repository(ZonasRepository)
    public zonasRepository : ZonasRepository,
  ) {}

  @post('/zonas')
  @response(200, {
    description: 'Zonas model instance',
    content: {'application/json': {schema: getModelSchemaRef(Zonas)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Zonas, {
            title: 'NewZonas',
            exclude: ['id'],
          }),
        },
      },
    })
    zonas: Omit<Zonas, 'id'>,
  ): Promise<Zonas> {
    return this.zonasRepository.create(zonas);
  }

  @get('/zonas/count')
  @response(200, {
    description: 'Zonas model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Zonas) where?: Where<Zonas>,
  ): Promise<Count> {
    return this.zonasRepository.count(where);
  }

  @get('/zonas')
  @response(200, {
    description: 'Array of Zonas model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Zonas, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Zonas) filter?: Filter<Zonas>,
  ): Promise<Zonas[]> {
    return this.zonasRepository.find(filter);
  }

  @patch('/zonas')
  @response(200, {
    description: 'Zonas PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Zonas, {partial: true}),
        },
      },
    })
    zonas: Zonas,
    @param.where(Zonas) where?: Where<Zonas>,
  ): Promise<Count> {
    return this.zonasRepository.updateAll(zonas, where);
  }

  @get('/zonas/{id}')
  @response(200, {
    description: 'Zonas model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Zonas, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Zonas, {exclude: 'where'}) filter?: FilterExcludingWhere<Zonas>
  ): Promise<Zonas> {
    return this.zonasRepository.findById(id, filter);
  }

  @patch('/zonas/{id}')
  @response(204, {
    description: 'Zonas PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Zonas, {partial: true}),
        },
      },
    })
    zonas: Zonas,
  ): Promise<void> {
    await this.zonasRepository.updateById(id, zonas);
  }

  @put('/zonas/{id}')
  @response(204, {
    description: 'Zonas PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() zonas: Zonas,
  ): Promise<void> {
    await this.zonasRepository.replaceById(id, zonas);
  }

  @del('/zonas/{id}')
  @response(204, {
    description: 'Zonas DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.zonasRepository.deleteById(id);
  }
}
