import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Usuario,
  Parque,
} from '../models';
import {UsuarioRepository} from '../repositories';

export class UsuarioParqueController {
  constructor(
    @repository(UsuarioRepository)
    public usuarioRepository: UsuarioRepository,
  ) { }

  @get('/usuarios/{id}/parque', {
    responses: {
      '200': {
        description: 'Parque belonging to Usuario',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Parque)},
          },
        },
      },
    },
  })
  async getParque(
    @param.path.string('id') id: typeof Usuario.prototype.id,
  ): Promise<Parque> {
    return this.usuarioRepository.parque(id);
  }
}
