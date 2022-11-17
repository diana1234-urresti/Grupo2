import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Comidas, ComidasRelations, Zonas} from '../models';
import {ZonasRepository} from './zonas.repository';

export class ComidasRepository extends DefaultCrudRepository<
  Comidas,
  typeof Comidas.prototype.id,
  ComidasRelations
> {

  public readonly zonas: BelongsToAccessor<Zonas, typeof Comidas.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('ZonasRepository') protected zonasRepositoryGetter: Getter<ZonasRepository>,
  ) {
    super(Comidas, dataSource);
    this.zonas = this.createBelongsToAccessorFor('zonas', zonasRepositoryGetter,);
    this.registerInclusionResolver('zonas', this.zonas.inclusionResolver);
  }
}
