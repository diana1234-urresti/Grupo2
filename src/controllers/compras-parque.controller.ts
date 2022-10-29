import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Compras,
  Parque,
} from '../models';
import {ComprasRepository} from '../repositories';

export class ComprasParqueController {
  constructor(
    @repository(ComprasRepository)
    public comprasRepository: ComprasRepository,
  ) { }

  @get('/compras/{id}/parque', {
    responses: {
      '200': {
        description: 'Parque belonging to Compras',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Parque)},
          },
        },
      },
    },
  })
  async getParque(
    @param.path.string('id') id: typeof Compras.prototype.id,
  ): Promise<Parque> {
    return this.comprasRepository.parque(id);
  }
}
