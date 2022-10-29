import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Zonas,
  Parque,
} from '../models';
import {ZonasRepository} from '../repositories';

export class ZonasParqueController {
  constructor(
    @repository(ZonasRepository)
    public zonasRepository: ZonasRepository,
  ) { }

  @get('/zonas/{id}/parque', {
    responses: {
      '200': {
        description: 'Parque belonging to Zonas',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Parque)},
          },
        },
      },
    },
  })
  async getParque(
    @param.path.string('id') id: typeof Zonas.prototype.id,
  ): Promise<Parque> {
    return this.zonasRepository.parque(id);
  }
}
