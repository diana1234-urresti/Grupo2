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
import {Ventasconfiguraciones} from '../models';
import {VentasconfiguracionesRepository} from '../repositories';

export class VentasconfiguracionesController {
  constructor(
    @repository(VentasconfiguracionesRepository)
    public ventasconfiguracionesRepository : VentasconfiguracionesRepository,
  ) {}

  @post('/ventasconfiguraciones')
  @response(200, {
    description: 'Ventasconfiguraciones model instance',
    content: {'application/json': {schema: getModelSchemaRef(Ventasconfiguraciones)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ventasconfiguraciones, {
            title: 'NewVentasconfiguraciones',
            exclude: ['id'],
          }),
        },
      },
    })
    ventasconfiguraciones: Omit<Ventasconfiguraciones, 'id'>,
  ): Promise<Ventasconfiguraciones> {
    return this.ventasconfiguracionesRepository.create(ventasconfiguraciones);
  }

  @get('/ventasconfiguraciones/count')
  @response(200, {
    description: 'Ventasconfiguraciones model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Ventasconfiguraciones) where?: Where<Ventasconfiguraciones>,
  ): Promise<Count> {
    return this.ventasconfiguracionesRepository.count(where);
  }

  @get('/ventasconfiguraciones')
  @response(200, {
    description: 'Array of Ventasconfiguraciones model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Ventasconfiguraciones, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Ventasconfiguraciones) filter?: Filter<Ventasconfiguraciones>,
  ): Promise<Ventasconfiguraciones[]> {
    return this.ventasconfiguracionesRepository.find(filter);
  }

  @patch('/ventasconfiguraciones')
  @response(200, {
    description: 'Ventasconfiguraciones PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ventasconfiguraciones, {partial: true}),
        },
      },
    })
    ventasconfiguraciones: Ventasconfiguraciones,
    @param.where(Ventasconfiguraciones) where?: Where<Ventasconfiguraciones>,
  ): Promise<Count> {
    return this.ventasconfiguracionesRepository.updateAll(ventasconfiguraciones, where);
  }

  @get('/ventasconfiguraciones/{id}')
  @response(200, {
    description: 'Ventasconfiguraciones model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Ventasconfiguraciones, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Ventasconfiguraciones, {exclude: 'where'}) filter?: FilterExcludingWhere<Ventasconfiguraciones>
  ): Promise<Ventasconfiguraciones> {
    return this.ventasconfiguracionesRepository.findById(id, filter);
  }

  @patch('/ventasconfiguraciones/{id}')
  @response(204, {
    description: 'Ventasconfiguraciones PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ventasconfiguraciones, {partial: true}),
        },
      },
    })
    ventasconfiguraciones: Ventasconfiguraciones,
  ): Promise<void> {
    await this.ventasconfiguracionesRepository.updateById(id, ventasconfiguraciones);
  }

  @put('/ventasconfiguraciones/{id}')
  @response(204, {
    description: 'Ventasconfiguraciones PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() ventasconfiguraciones: Ventasconfiguraciones,
  ): Promise<void> {
    await this.ventasconfiguracionesRepository.replaceById(id, ventasconfiguraciones);
  }

  @del('/ventasconfiguraciones/{id}')
  @response(204, {
    description: 'Ventasconfiguraciones DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.ventasconfiguracionesRepository.deleteById(id);
  }
}
