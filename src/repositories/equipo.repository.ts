import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AlacanchaDataSource} from '../datasources';
import {Equipo, EquipoRelations} from '../models';

export class EquipoRepository extends DefaultCrudRepository<
  Equipo,
  typeof Equipo.prototype.id,
  EquipoRelations
> {
  constructor(
    @inject('datasources.alacancha') dataSource: AlacanchaDataSource,
  ) {
    super(Equipo, dataSource);
  }
}
