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
Compras,
Parque,
Plan,
} from '../models';
import {ComprasRepository} from '../repositories';

export class ComprasPlanController {
  constructor(
    @repository(ComprasRepository) protected comprasRepository: ComprasRepository,
  ) { }

  @get('/compras/{id}/plans', {
    responses: {
      '200': {
        description: 'Array of Compras has many Plan through Parque',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Plan)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Plan>,
  ): Promise<Plan[]> {
    return this.comprasRepository.plans(id).find(filter);
  }

  @post('/compras/{id}/plans', {
    responses: {
      '200': {
        description: 'create a Plan model instance',
        content: {'application/json': {schema: getModelSchemaRef(Plan)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Compras.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Plan, {
            title: 'NewPlanInCompras',
            exclude: ['id'],
          }),
        },
      },
    }) plan: Omit<Plan, 'id'>,
  ): Promise<Plan> {
    return this.comprasRepository.plans(id).create(plan);
  }

  @patch('/compras/{id}/plans', {
    responses: {
      '200': {
        description: 'Compras.Plan PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Plan, {partial: true}),
        },
      },
    })
    plan: Partial<Plan>,
    @param.query.object('where', getWhereSchemaFor(Plan)) where?: Where<Plan>,
  ): Promise<Count> {
    return this.comprasRepository.plans(id).patch(plan, where);
  }

  @del('/compras/{id}/plans', {
    responses: {
      '200': {
        description: 'Compras.Plan DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Plan)) where?: Where<Plan>,
  ): Promise<Count> {
    return this.comprasRepository.plans(id).delete(where);
  }
}
