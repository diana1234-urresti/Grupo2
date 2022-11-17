import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Ventasconfiguraciones,
  Parque,
} from '../models';
import {VentasconfiguracionesRepository} from '../repositories';

export class VentasconfiguracionesParqueController {
  constructor(
    @repository(VentasconfiguracionesRepository)
    public ventasconfiguracionesRepository: VentasconfiguracionesRepository,
  ) { }

  @get('/ventasconfiguraciones/{id}/parque', {
    responses: {
      '200': {
        description: 'Parque belonging to Ventasconfiguraciones',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Parque)},
          },
        },
      },
    },
  })
  async getParque(
    @param.path.string('id') id: typeof Ventasconfiguraciones.prototype.id,
  ): Promise<Parque> {
    return this.ventasconfiguracionesRepository.parque(id);
  }
}
