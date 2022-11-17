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
  Compras,
  Usuario,
} from '../models';
import {ComprasRepository} from '../repositories';

export class ComprasUsuarioController {
  constructor(
    @repository(ComprasRepository) protected comprasRepository: ComprasRepository,
  ) { }

  @get('/compras/{id}/usuario', {
    responses: {
      '200': {
        description: 'Compras has one Usuario',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Usuario),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Usuario>,
  ): Promise<Usuario> {
    return this.comprasRepository.usuario(id).get(filter);
  }

  @post('/compras/{id}/usuario', {
    responses: {
      '200': {
        description: 'Compras model instance',
        content: {'application/json': {schema: getModelSchemaRef(Usuario)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Compras.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usuario, {
            title: 'NewUsuarioInCompras',
            exclude: ['id'],
            optional: ['comprasId']
          }),
        },
      },
    }) usuario: Omit<Usuario, 'id'>,
  ): Promise<Usuario> {
    return this.comprasRepository.usuario(id).create(usuario);
  }

  @patch('/compras/{id}/usuario', {
    responses: {
      '200': {
        description: 'Compras.Usuario PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usuario, {partial: true}),
        },
      },
    })
    usuario: Partial<Usuario>,
    @param.query.object('where', getWhereSchemaFor(Usuario)) where?: Where<Usuario>,
  ): Promise<Count> {
    return this.comprasRepository.usuario(id).patch(usuario, where);
  }

  @del('/compras/{id}/usuario', {
    responses: {
      '200': {
        description: 'Compras.Usuario DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Usuario)) where?: Where<Usuario>,
  ): Promise<Count> {
    return this.comprasRepository.usuario(id).delete(where);
  }
}
