import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Ventasconfiguraciones, VentasconfiguracionesRelations, Parque} from '../models';
import {ParqueRepository} from './parque.repository';

export class VentasconfiguracionesRepository extends DefaultCrudRepository<
  Ventasconfiguraciones,
  typeof Ventasconfiguraciones.prototype.id,
  VentasconfiguracionesRelations
> {

  public readonly parque: BelongsToAccessor<Parque, typeof Ventasconfiguraciones.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('ParqueRepository') protected parqueRepositoryGetter: Getter<ParqueRepository>,
  ) {
    super(Ventasconfiguraciones, dataSource);
    this.parque = this.createBelongsToAccessorFor('parque', parqueRepositoryGetter,);
    this.registerInclusionResolver('parque', this.parque.inclusionResolver);
  }
}
