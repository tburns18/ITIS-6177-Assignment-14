import {DefaultCrudRepository} from '@loopback/repository';
import {Itis6177, Itis6177Relations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class Itis6177Repository extends DefaultCrudRepository<
  Itis6177,
  typeof Itis6177.prototype.id,
  Itis6177Relations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Itis6177, dataSource);
  }
}
