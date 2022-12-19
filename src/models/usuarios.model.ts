import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Usuarios extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    //required: true,
  })
  nombres: string;

  @property({
    type: 'string',
    //required: true,
  })
  apellidos: string;

  @property({
    type: 'string',
    //required: true,
  })
  correo: string;

  @property({
    type: 'string',
    //required: true,
  })
  celular: string;

  @property({
    type: 'string',
    //required: true,
  })
  contrasenia: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Usuarios>) {
    super(data);
  }
}

export interface UsuariosRelations {
  // describe navigational properties here
}

export type UsuariosWithRelations = Usuarios & UsuariosRelations;