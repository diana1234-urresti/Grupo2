import { authenticate } from '@loopback/authentication';
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
import {Departamento} from '../models';
import {DepartamentoRepository} from '../repositories';
//If I wish that all method are protected, I should put authenticate here.
export class DepartamentoController {
  constructor(
    @repository(DepartamentoRepository)
    public departamentoRepository : DepartamentoRepository,
  ) {}

  @authenticate("Administrador")
  @post('/departamentos')
  @response(200, {
    description: 'Departamento model instance',
    content: {'application/json': {schema: getModelSchemaRef(Departamento)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Departamento, {
            title: 'NewDepartamento',
            exclude: ['id'],
          }),
        },
      },
    })
    departamento: Omit<Departamento, 'id'>,
  ): Promise<Departamento> {
    return this.departamentoRepository.create(departamento);
  }

  @get('/departamentos/count')
  @response(200, {
    description: 'Departamento model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Departamento) where?: Where<Departamento>,
  ): Promise<Count> {
    return this.departamentoRepository.count(where);
  }

  @get('/departamentos')
  @response(200, {
    description: 'Array of Departamento model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Departamento, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Departamento) filter?: Filter<Departamento>,
  ): Promise<Departamento[]> {
    return this.departamentoRepository.find(filter);
  }

  @patch('/departamentos')
  @response(200, {
    description: 'Departamento PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Departamento, {partial: true}),
        },
      },
    })
    departamento: Departamento,
    @param.where(Departamento) where?: Where<Departamento>,
  ): Promise<Count> {
    return this.departamentoRepository.updateAll(departamento, where);
  }

  @get('/departamentos/{id}')
  @response(200, {
    description: 'Departamento model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Departamento, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Departamento, {exclude: 'where'}) filter?: FilterExcludingWhere<Departamento>
  ): Promise<Departamento> {
    return this.departamentoRepository.findById(id, filter);
  }

  @patch('/departamentos/{id}')
  @response(204, {
    description: 'Departamento PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Departamento, {partial: true}),
        },
      },
    })
    departamento: Departamento,
  ): Promise<void> {
    await this.departamentoRepository.updateById(id, departamento);
  }

  @put('/departamentos/{id}')
  @response(204, {
    description: 'Departamento PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() departamento: Departamento,
  ): Promise<void> {
    await this.departamentoRepository.replaceById(id, departamento);
  }

  @del('/departamentos/{id}')
  @response(204, {
    description: 'Departamento DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.departamentoRepository.deleteById(id);
  }
}
