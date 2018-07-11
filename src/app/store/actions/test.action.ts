import {
  Action
} from '@ngrx/store';

export const TESTADD = 'TESTADD';
export const GET = 'GET';

export class GetTest implements Action {
  readonly type = GET
  constructor() {}
}
export class Testfunction implements Action {
  readonly type = TESTADD
  constructor(public payloads: any) {}
}

export type ActionTestFirst = GetTest | Testfunction
