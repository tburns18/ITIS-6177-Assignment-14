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
} from '@loopback/rest';
import {Itis6177} from '../models';
import {Itis6177Repository} from '../repositories';

export class Itis6177Controller {
  constructor(
    @repository(Itis6177Repository)
    public itis6177Repository : Itis6177Repository,
  ) {}

  @post('/itis6177s', {
    responses: {
      '200': {
        description: 'Itis6177 model instance',
        content: {'application/json': {schema: getModelSchemaRef(Itis6177)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Itis6177, {
            title: 'NewItis6177',
            exclude: ['id'],
          }),
        },
      },
    })
    itis6177: Omit<Itis6177, 'id'>,
  ): Promise<Itis6177> {
    return this.itis6177Repository.create(itis6177);
  }

  @get('/itis6177s/count', {
    responses: {
      '200': {
        description: 'Itis6177 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Itis6177) where?: Where<Itis6177>,
  ): Promise<Count> {
    return this.itis6177Repository.count(where);
  }

  @get('/itis6177s', {
    responses: {
      '200': {
        description: 'Array of Itis6177 model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Itis6177, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Itis6177) filter?: Filter<Itis6177>,
  ): Promise<Itis6177[]> {
    return this.itis6177Repository.find(filter);
  }

  @patch('/itis6177s', {
    responses: {
      '200': {
        description: 'Itis6177 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Itis6177, {partial: true}),
        },
      },
    })
    itis6177: Itis6177,
    @param.where(Itis6177) where?: Where<Itis6177>,
  ): Promise<Count> {
    return this.itis6177Repository.updateAll(itis6177, where);
  }

  @get('/itis6177s/{id}', {
    responses: {
      '200': {
        description: 'Itis6177 model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Itis6177, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Itis6177, {exclude: 'where'}) filter?: FilterExcludingWhere<Itis6177>
  ): Promise<Itis6177> {
    return this.itis6177Repository.findById(id, filter);
  }

  @patch('/itis6177s/{id}', {
    responses: {
      '204': {
        description: 'Itis6177 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Itis6177, {partial: true}),
        },
      },
    })
    itis6177: Itis6177,
  ): Promise<void> {
    await this.itis6177Repository.updateById(id, itis6177);
  }

  @put('/itis6177s/{id}', {
    responses: {
      '204': {
        description: 'Itis6177 PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() itis6177: Itis6177,
  ): Promise<void> {
    await this.itis6177Repository.replaceById(id, itis6177);
  }

  @del('/itis6177s/{id}', {
    responses: {
      '204': {
        description: 'Itis6177 DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.itis6177Repository.deleteById(id);
  }
}
