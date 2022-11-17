import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Parque,
  Ciudad,
} from '../models';
import {ParqueRepository} from '../repositories';

export class ParqueCiudadController {
  constructor(
    @repository(ParqueRepository)
    public parqueRepository: ParqueRepository,
  ) { }

  @get('/parques/{id}/ciudad', {
    responses: {
      '200': {
        description: 'Ciudad belonging to Parque',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Ciudad)},
          },
        },
      },
    },
  })
  async getCiudad(
    @param.path.string('id') id: typeof Parque.prototype.id,
  ): Promise<Ciudad> {
    return this.parqueRepository.ciudad(id);
  }
}
