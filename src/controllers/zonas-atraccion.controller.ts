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
  Zonas,
  Atraccion,
} from '../models';
import {ZonasRepository} from '../repositories';

export class ZonasAtraccionController {
  constructor(
    @repository(ZonasRepository) protected zonasRepository: ZonasRepository,
  ) { }

  @get('/zonas/{id}/atraccions', {
    responses: {
      '200': {
        description: 'Array of Zonas has many Atraccion',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Atraccion)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Atraccion>,
  ): Promise<Atraccion[]> {
    return this.zonasRepository.atraccions(id).find(filter);
  }

  @post('/zonas/{id}/atraccions', {
    responses: {
      '200': {
        description: 'Zonas model instance',
        content: {'application/json': {schema: getModelSchemaRef(Atraccion)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Zonas.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Atraccion, {
            title: 'NewAtraccionInZonas',
            exclude: ['id'],
            optional: ['zonasId']
          }),
        },
      },
    }) atraccion: Omit<Atraccion, 'id'>,
  ): Promise<Atraccion> {
    return this.zonasRepository.atraccions(id).create(atraccion);
  }

  @patch('/zonas/{id}/atraccions', {
    responses: {
      '200': {
        description: 'Zonas.Atraccion PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Atraccion, {partial: true}),
        },
      },
    })
    atraccion: Partial<Atraccion>,
    @param.query.object('where', getWhereSchemaFor(Atraccion)) where?: Where<Atraccion>,
  ): Promise<Count> {
    return this.zonasRepository.atraccions(id).patch(atraccion, where);
  }

  @del('/zonas/{id}/atraccions', {
    responses: {
      '200': {
        description: 'Zonas.Atraccion DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Atraccion)) where?: Where<Atraccion>,
  ): Promise<Count> {
    return this.zonasRepository.atraccions(id).delete(where);
  }
}
