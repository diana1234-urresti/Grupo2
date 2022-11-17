import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory, BelongsToAccessor} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Plan, PlanRelations, Atraccion, Parque} from '../models';
import {AtraccionRepository} from './atraccion.repository';
import {ParqueRepository} from './parque.repository';

export class PlanRepository extends DefaultCrudRepository<
  Plan,
  typeof Plan.prototype.id,
  PlanRelations
> {

  public readonly atraccions: HasManyRepositoryFactory<Atraccion, typeof Plan.prototype.id>;

  public readonly parque: BelongsToAccessor<Parque, typeof Plan.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('AtraccionRepository') protected atraccionRepositoryGetter: Getter<AtraccionRepository>, @repository.getter('ParqueRepository') protected parqueRepositoryGetter: Getter<ParqueRepository>,
  ) {
    super(Plan, dataSource);
    this.parque = this.createBelongsToAccessorFor('parque', parqueRepositoryGetter,);
    this.registerInclusionResolver('parque', this.parque.inclusionResolver);
    this.atraccions = this.createHasManyRepositoryFactoryFor('atraccions', atraccionRepositoryGetter,);
    this.registerInclusionResolver('atraccions', this.atraccions.inclusionResolver);
  }
}
