import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Equipo} from '../models';
import {EquipoRepository} from '../repositories';

export class EquipoController {
  constructor(
    @repository(EquipoRepository)
    public equipoRepository : EquipoRepository,
  ) {}

  @post('/equipo')
  @response(200, {
    description: 'Equipo model instance',
    content: {'application/json': {schema: getModelSchemaRef(Equipo)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Equipo, {
            title: 'NewEquipo',
            exclude: ['id'],
          }),
        },
      },
    })
    equipo: Omit<Equipo, 'id'>,
  ): Promise<Equipo> {
    return this.equipoRepository.create(equipo);
  }

  @get('/equipo/count')
  @response(200, {
    description: 'Equipo model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Equipo) where?: Where<Equipo>,
  ): Promise<Count> {
    return this.equipoRepository.count(where);
  }

  @get('/equipo')
  @response(200, {
    description: 'Array of Equipo model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Equipo, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Equipo) filter?: Filter<Equipo>,
  ): Promise<Equipo[]> {
    return this.equipoRepository.find(filter);
  }

  @patch('/equipo')
  @response(200, {
    description: 'Equipo PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Equipo, {partial: true}),
        },
      },
    })
    equipo: Equipo,
    @param.where(Equipo) where?: Where<Equipo>,
  ): Promise<Count> {
    return this.equipoRepository.updateAll(equipo, where);
  }

  @get('/equipo/{id}')
  @response(200, {
    description: 'Equipo model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Equipo, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Equipo, {exclude: 'where'}) filter?: FilterExcludingWhere<Equipo>
  ): Promise<Equipo> {
    return this.equipoRepository.findById(id, filter);
  }

  @patch('/equipo/{id}')
  @response(204, {
    description: 'Equipo PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Equipo, {partial: true}),
        },
      },
    })
    equipo: Equipo,
  ): Promise<void> {
    await this.equipoRepository.updateById(id, equipo);
  }

  @put('/equipo/{id}')
  @response(204, {
    description: 'Equipo PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() equipo: Equipo,
  ): Promise<void> {
    await this.equipoRepository.replaceById(id, equipo);
  }

  @del('/equipo/{id}')
  @response(204, {
    description: 'Equipo DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.equipoRepository.deleteById(id);
  }
}
