import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory, BelongsToAccessor} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Zonas, ZonasRelations, Comidas, Atraccion, Parque} from '../models';
import {ComidasRepository} from './comidas.repository';
import {AtraccionRepository} from './atraccion.repository';
import {ParqueRepository} from './parque.repository';

export class ZonasRepository extends DefaultCrudRepository<
  Zonas,
  typeof Zonas.prototype.id,
  ZonasRelations
> {

  public readonly comidas: HasManyRepositoryFactory<Comidas, typeof Zonas.prototype.id>;

  public readonly atraccions: HasManyRepositoryFactory<Atraccion, typeof Zonas.prototype.id>;

  public readonly parque: BelongsToAccessor<Parque, typeof Zonas.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('ComidasRepository') protected comidasRepositoryGetter: Getter<ComidasRepository>, @repository.getter('AtraccionRepository') protected atraccionRepositoryGetter: Getter<AtraccionRepository>, @repository.getter('ParqueRepository') protected parqueRepositoryGetter: Getter<ParqueRepository>,
  ) {
    super(Zonas, dataSource);
    this.parque = this.createBelongsToAccessorFor('parque', parqueRepositoryGetter,);
    this.registerInclusionResolver('parque', this.parque.inclusionResolver);
    this.atraccions = this.createHasManyRepositoryFactoryFor('atraccions', atraccionRepositoryGetter,);
    this.registerInclusionResolver('atraccions', this.atraccions.inclusionResolver);
    this.comidas = this.createHasManyRepositoryFactoryFor('comidas', comidasRepositoryGetter,);
    this.registerInclusionResolver('comidas', this.comidas.inclusionResolver);
  }
}
