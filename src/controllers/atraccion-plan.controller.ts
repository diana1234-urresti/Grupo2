import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Atraccion,
  Plan,
} from '../models';
import {AtraccionRepository} from '../repositories';

export class AtraccionPlanController {
  constructor(
    @repository(AtraccionRepository)
    public atraccionRepository: AtraccionRepository,
  ) { }

  @get('/atraccions/{id}/plan', {
    responses: {
      '200': {
        description: 'Plan belonging to Atraccion',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Plan)},
          },
        },
      },
    },
  })
  async getPlan(
    @param.path.string('id') id: typeof Atraccion.prototype.id,
  ): Promise<Plan> {
    return this.atraccionRepository.plan(id);
  }
}
