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
import {Comidas} from '../models';
import {ComidasRepository} from '../repositories';

export class ComidasController {
  constructor(
    @repository(ComidasRepository)
    public comidasRepository : ComidasRepository,
  ) {}

  @post('/comidas')
  @response(200, {
    description: 'Comidas model instance',
    content: {'application/json': {schema: getModelSchemaRef(Comidas)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Comidas, {
            title: 'NewComidas',
            exclude: ['id'],
          }),
        },
      },
    })
    comidas: Omit<Comidas, 'id'>,
  ): Promise<Comidas> {
    return this.comidasRepository.create(comidas);
  }

  @get('/comidas/count')
  @response(200, {
    description: 'Comidas model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Comidas) where?: Where<Comidas>,
  ): Promise<Count> {
    return this.comidasRepository.count(where);
  }

  @get('/comidas')
  @response(200, {
    description: 'Array of Comidas model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Comidas, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Comidas) filter?: Filter<Comidas>,
  ): Promise<Comidas[]> {
    return this.comidasRepository.find(filter);
  }

  @patch('/comidas')
  @response(200, {
    description: 'Comidas PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Comidas, {partial: true}),
        },
      },
    })
    comidas: Comidas,
    @param.where(Comidas) where?: Where<Comidas>,
  ): Promise<Count> {
    return this.comidasRepository.updateAll(comidas, where);
  }

  @get('/comidas/{id}')
  @response(200, {
    description: 'Comidas model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Comidas, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Comidas, {exclude: 'where'}) filter?: FilterExcludingWhere<Comidas>
  ): Promise<Comidas> {
    return this.comidasRepository.findById(id, filter);
  }

  @patch('/comidas/{id}')
  @response(204, {
    description: 'Comidas PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Comidas, {partial: true}),
        },
      },
    })
    comidas: Comidas,
  ): Promise<void> {
    await this.comidasRepository.updateById(id, comidas);
  }

  @put('/comidas/{id}')
  @response(204, {
    description: 'Comidas PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() comidas: Comidas,
  ): Promise<void> {
    await this.comidasRepository.replaceById(id, comidas);
  }

  @del('/comidas/{id}')
  @response(204, {
    description: 'Comidas DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.comidasRepository.deleteById(id);
  }
}
