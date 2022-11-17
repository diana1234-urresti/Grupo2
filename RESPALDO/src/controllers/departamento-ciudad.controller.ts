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
  Departamento,
  Ciudad,
} from '../models';
import {DepartamentoRepository} from '../repositories';

export class DepartamentoCiudadController {
  constructor(
    @repository(DepartamentoRepository) protected departamentoRepository: DepartamentoRepository,
  ) { }

  @get('/departamentos/{id}/ciudads', {
    responses: {
      '200': {
        description: 'Array of Departamento has many Ciudad',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Ciudad)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Ciudad>,
  ): Promise<Ciudad[]> {
    return this.departamentoRepository.ciudads(id).find(filter);
  }

  @post('/departamentos/{id}/ciudads', {
    responses: {
      '200': {
        description: 'Departamento model instance',
        content: {'application/json': {schema: getModelSchemaRef(Ciudad)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Departamento.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ciudad, {
            title: 'NewCiudadInDepartamento',
            exclude: ['id'],
            optional: ['departamentoId']
          }),
        },
      },
    }) ciudad: Omit<Ciudad, 'id'>,
  ): Promise<Ciudad> {
    return this.departamentoRepository.ciudads(id).create(ciudad);
  }

  @patch('/departamentos/{id}/ciudads', {
    responses: {
      '200': {
        description: 'Departamento.Ciudad PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ciudad, {partial: true}),
        },
      },
    })
    ciudad: Partial<Ciudad>,
    @param.query.object('where', getWhereSchemaFor(Ciudad)) where?: Where<Ciudad>,
  ): Promise<Count> {
    return this.departamentoRepository.ciudads(id).patch(ciudad, where);
  }

  @del('/departamentos/{id}/ciudads', {
    responses: {
      '200': {
        description: 'Departamento.Ciudad DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Ciudad)) where?: Where<Ciudad>,
  ): Promise<Count> {
    return this.departamentoRepository.ciudads(id).delete(where);
  }
}
