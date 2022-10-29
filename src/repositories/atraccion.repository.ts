import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Atraccion, AtraccionRelations, Zonas, Plan} from '../models';
import {ZonasRepository} from './zonas.repository';
import {PlanRepository} from './plan.repository';

export class AtraccionRepository extends DefaultCrudRepository<
  Atraccion,
  typeof Atraccion.prototype.id,
  AtraccionRelations
> {

  public readonly zonas: BelongsToAccessor<Zonas, typeof Atraccion.prototype.id>;

  public readonly plan: BelongsToAccessor<Plan, typeof Atraccion.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('ZonasRepository') protected zonasRepositoryGetter: Getter<ZonasRepository>, @repository.getter('PlanRepository') protected planRepositoryGetter: Getter<PlanRepository>,
  ) {
    super(Atraccion, dataSource);
    this.plan = this.createBelongsToAccessorFor('plan', planRepositoryGetter,);
    this.registerInclusionResolver('plan', this.plan.inclusionResolver);
    this.zonas = this.createBelongsToAccessorFor('zonas', zonasRepositoryGetter,);
    this.registerInclusionResolver('zonas', this.zonas.inclusionResolver);
  }
}
