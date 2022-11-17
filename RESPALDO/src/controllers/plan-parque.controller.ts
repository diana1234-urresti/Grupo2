import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Plan,
  Parque,
} from '../models';
import {PlanRepository} from '../repositories';

export class PlanParqueController {
  constructor(
    @repository(PlanRepository)
    public planRepository: PlanRepository,
  ) { }

  @get('/plans/{id}/parque', {
    responses: {
      '200': {
        description: 'Parque belonging to Plan',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Parque)},
          },
        },
      },
    },
  })
  async getParque(
    @param.path.string('id') id: typeof Plan.prototype.id,
  ): Promise<Parque> {
    return this.planRepository.parque(id);
  }
}
