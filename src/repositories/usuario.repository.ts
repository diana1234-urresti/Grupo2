import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory, BelongsToAccessor} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Usuario, UsuarioRelations, Compras, Parque} from '../models';
import {ComprasRepository} from './compras.repository';
import {ParqueRepository} from './parque.repository';

export class UsuarioRepository extends DefaultCrudRepository<
  Usuario,
  typeof Usuario.prototype.id,
  UsuarioRelations
> {

  public readonly compras: HasOneRepositoryFactory<Compras, typeof Usuario.prototype.id>;

  public readonly parque: BelongsToAccessor<Parque, typeof Usuario.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('ComprasRepository') protected comprasRepositoryGetter: Getter<ComprasRepository>, @repository.getter('ParqueRepository') protected parqueRepositoryGetter: Getter<ParqueRepository>,
  ) {
    super(Usuario, dataSource);
    this.parque = this.createBelongsToAccessorFor('parque', parqueRepositoryGetter,);
    this.registerInclusionResolver('parque', this.parque.inclusionResolver);
    this.compras = this.createHasOneRepositoryFactoryFor('compras', comprasRepositoryGetter);
    this.registerInclusionResolver('compras', this.compras.inclusionResolver);
  }
}
