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
  Zonas,
} from '../models';
import {AtraccionRepository} from '../repositories';

export class AtraccionZonasController {
  constructor(
    @repository(AtraccionRepository)
    public atraccionRepository: AtraccionRepository,
  ) { }

  @get('/atraccions/{id}/zonas', {
    responses: {
      '200': {
        description: 'Zonas belonging to Atraccion',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Zonas)},
          },
        },
      },
    },
  })
  async getZonas(
    @param.path.string('id') id: typeof Atraccion.prototype.id,
  ): Promise<Zonas> {
    return this.atraccionRepository.zonas(id);
  }
}
