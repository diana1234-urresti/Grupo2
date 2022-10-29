import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Parque, ParqueRelations, Ciudad, Zonas, Plan, Compras, Ventasconfiguraciones, Usuario} from '../models';
import {CiudadRepository} from './ciudad.repository';
import {ZonasRepository} from './zonas.repository';
import {PlanRepository} from './plan.repository';
import {ComprasRepository} from './compras.repository';
import {VentasconfiguracionesRepository} from './ventasconfiguraciones.repository';
import {UsuarioRepository} from './usuario.repository';

export class ParqueRepository extends DefaultCrudRepository<
  Parque,
  typeof Parque.prototype.id,
  ParqueRelations
> {

  public readonly ciudad: BelongsToAccessor<Ciudad, typeof Parque.prototype.id>;

  public readonly zonas: HasManyRepositoryFactory<Zonas, typeof Parque.prototype.id>;

  public readonly plans: HasManyRepositoryFactory<Plan, typeof Parque.prototype.id>;

  public readonly compras: HasManyRepositoryFactory<Compras, typeof Parque.prototype.id>;

  public readonly ventasconfiguraciones: HasManyRepositoryFactory<Ventasconfiguraciones, typeof Parque.prototype.id>;

  public readonly usuarios: HasManyRepositoryFactory<Usuario, typeof Parque.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('CiudadRepository') protected ciudadRepositoryGetter: Getter<CiudadRepository>, @repository.getter('ZonasRepository') protected zonasRepositoryGetter: Getter<ZonasRepository>, @repository.getter('PlanRepository') protected planRepositoryGetter: Getter<PlanRepository>, @repository.getter('ComprasRepository') protected comprasRepositoryGetter: Getter<ComprasRepository>, @repository.getter('VentasconfiguracionesRepository') protected ventasconfiguracionesRepositoryGetter: Getter<VentasconfiguracionesRepository>, @repository.getter('UsuarioRepository') protected usuarioRepositoryGetter: Getter<UsuarioRepository>,
  ) {
    super(Parque, dataSource);
    this.usuarios = this.createHasManyRepositoryFactoryFor('usuarios', usuarioRepositoryGetter,);
    this.registerInclusionResolver('usuarios', this.usuarios.inclusionResolver);
    this.ventasconfiguraciones = this.createHasManyRepositoryFactoryFor('ventasconfiguraciones', ventasconfiguracionesRepositoryGetter,);
    this.registerInclusionResolver('ventasconfiguraciones', this.ventasconfiguraciones.inclusionResolver);
    this.compras = this.createHasManyRepositoryFactoryFor('compras', comprasRepositoryGetter,);
    this.registerInclusionResolver('compras', this.compras.inclusionResolver);
    this.plans = this.createHasManyRepositoryFactoryFor('plans', planRepositoryGetter,);
    this.registerInclusionResolver('plans', this.plans.inclusionResolver);
    this.zonas = this.createHasManyRepositoryFactoryFor('zonas', zonasRepositoryGetter,);
    this.registerInclusionResolver('zonas', this.zonas.inclusionResolver);
    this.ciudad = this.createBelongsToAccessorFor('ciudad', ciudadRepositoryGetter,);
    this.registerInclusionResolver('ciudad', this.ciudad.inclusionResolver);
  }
}
