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
  Usuario,
  Compras,
} from '../models';
import {UsuarioRepository} from '../repositories';

export class UsuarioComprasController {
  constructor(
    @repository(UsuarioRepository) protected usuarioRepository: UsuarioRepository,
  ) { }

  @get('/usuarios/{id}/compras', {
    responses: {
      '200': {
        description: 'Usuario has one Compras',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Compras),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Compras>,
  ): Promise<Compras> {
    return this.usuarioRepository.compras(id).get(filter);
  }

  @post('/usuarios/{id}/compras', {
    responses: {
      '200': {
        description: 'Usuario model instance',
        content: {'application/json': {schema: getModelSchemaRef(Compras)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Usuario.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Compras, {
            title: 'NewComprasInUsuario',
            exclude: ['id'],
            optional: ['usuarioId']
          }),
        },
      },
    }) compras: Omit<Compras, 'id'>,
  ): Promise<Compras> {
    return this.usuarioRepository.compras(id).create(compras);
  }

  @patch('/usuarios/{id}/compras', {
    responses: {
      '200': {
        description: 'Usuario.Compras PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Compras, {partial: true}),
        },
      },
    })
    compras: Partial<Compras>,
    @param.query.object('where', getWhereSchemaFor(Compras)) where?: Where<Compras>,
  ): Promise<Count> {
    return this.usuarioRepository.compras(id).patch(compras, where);
  }

  @del('/usuarios/{id}/compras', {
    responses: {
      '200': {
        description: 'Usuario.Compras DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Compras)) where?: Where<Compras>,
  ): Promise<Count> {
    return this.usuarioRepository.compras(id).delete(where);
  }
}
