import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasOneRepositoryFactory, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Compras, ComprasRelations, Parque, Usuario, Plan} from '../models';
import {ParqueRepository} from './parque.repository';
import {UsuarioRepository} from './usuario.repository';
import {PlanRepository} from './plan.repository';

export class ComprasRepository extends DefaultCrudRepository<
  Compras,
  typeof Compras.prototype.id,
  ComprasRelations
> {

  public readonly parque: BelongsToAccessor<Parque, typeof Compras.prototype.id>;

  public readonly usuario: HasOneRepositoryFactory<Usuario, typeof Compras.prototype.id>;

  public readonly plans: HasManyThroughRepositoryFactory<Plan, typeof Plan.prototype.id,
          Parque,
          typeof Compras.prototype.id
        >;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('ParqueRepository') protected parqueRepositoryGetter: Getter<ParqueRepository>, @repository.getter('UsuarioRepository') protected usuarioRepositoryGetter: Getter<UsuarioRepository>, @repository.getter('PlanRepository') protected planRepositoryGetter: Getter<PlanRepository>,
  ) {
    super(Compras, dataSource);
    this.plans = this.createHasManyThroughRepositoryFactoryFor('plans', planRepositoryGetter, parqueRepositoryGetter,);
    this.registerInclusionResolver('plans', this.plans.inclusionResolver);
    this.usuario = this.createHasOneRepositoryFactoryFor('usuario', usuarioRepositoryGetter);
    this.registerInclusionResolver('usuario', this.usuario.inclusionResolver);
    this.parque = this.createBelongsToAccessorFor('parque', parqueRepositoryGetter,);
    this.registerInclusionResolver('parque', this.parque.inclusionResolver);
  }
}
