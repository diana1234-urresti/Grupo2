import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Comidas,
  Zonas,
} from '../models';
import {ComidasRepository} from '../repositories';

export class ComidasZonasController {
  constructor(
    @repository(ComidasRepository)
    public comidasRepository: ComidasRepository,
  ) { }

  @get('/comidas/{id}/zonas', {
    responses: {
      '200': {
        description: 'Zonas belonging to Comidas',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Zonas)},
          },
        },
      },
    },
  })
  async getZonas(
    @param.path.string('id') id: typeof Comidas.prototype.id,
  ): Promise<Zonas> {
    return this.comidasRepository.zonas(id);
  }
}
