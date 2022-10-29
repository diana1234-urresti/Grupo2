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
import {Parque} from '../models';
import {ParqueRepository} from '../repositories';

export class ParqueController {
  constructor(
    @repository(ParqueRepository)
    public parqueRepository : ParqueRepository,
  ) {}

  @post('/parques')
  @response(200, {
    description: 'Parque model instance',
    content: {'application/json': {schema: getModelSchemaRef(Parque)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Parque, {
            title: 'NewParque',
            exclude: ['id'],
          }),
        },
      },
    })
    parque: Omit<Parque, 'id'>,
  ): Promise<Parque> {
    return this.parqueRepository.create(parque);
  }

  @get('/parques/count')
  @response(200, {
    description: 'Parque model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Parque) where?: Where<Parque>,
  ): Promise<Count> {
    return this.parqueRepository.count(where);
  }

  @get('/parques')
  @response(200, {
    description: 'Array of Parque model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Parque, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Parque) filter?: Filter<Parque>,
  ): Promise<Parque[]> {
    return this.parqueRepository.find(filter);
  }

  @patch('/parques')
  @response(200, {
    description: 'Parque PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Parque, {partial: true}),
        },
      },
    })
    parque: Parque,
    @param.where(Parque) where?: Where<Parque>,
  ): Promise<Count> {
    return this.parqueRepository.updateAll(parque, where);
  }

  @get('/parques/{id}')
  @response(200, {
    description: 'Parque model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Parque, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Parque, {exclude: 'where'}) filter?: FilterExcludingWhere<Parque>
  ): Promise<Parque> {
    return this.parqueRepository.findById(id, filter);
  }

  @patch('/parques/{id}')
  @response(204, {
    description: 'Parque PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Parque, {partial: true}),
        },
      },
    })
    parque: Parque,
  ): Promise<void> {
    await this.parqueRepository.updateById(id, parque);
  }

  @put('/parques/{id}')
  @response(204, {
    description: 'Parque PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() parque: Parque,
  ): Promise<void> {
    await this.parqueRepository.replaceById(id, parque);
  }

  @del('/parques/{id}')
  @response(204, {
    description: 'Parque DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.parqueRepository.deleteById(id);
  }
}
