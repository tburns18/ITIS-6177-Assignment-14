import {Entity, model, property} from '@loopback/repository';

@model()
export class Itis6177 extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  title: string;


  constructor(data?: Partial<Itis6177>) {
    super(data);
  }
}

export interface Itis6177Relations {
  // describe navigational properties here
}

export type Itis6177WithRelations = Itis6177 & Itis6177Relations;
