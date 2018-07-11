import {
  Injectable
} from '@angular/core'
import {
  Effect,
  Actions
} from '@ngrx/effects'
import * as action from '../actions/test.action';
import {
  switchMap,
  map,
  catchError
} from "rxjs/operators";
import {
  GetNameService
} from '../../services/get-name.service';
import { of } from '../../../../node_modules/rxjs';
@Injectable()
export class TestEffects {
  constructor(private action$: Actions, private _server: GetNameService) {}

  @Effect()
  getData$ = this.action$.ofType(action.TESTADD)
    .pipe(
      switchMap(() => {
        return this._server.get_name().pipe(
          map((data) => {
              //console.log(data)
              return new action.Testfunction(data)
          }),
          catchError((err) => {
            console.log(err)
            return of(err)
          }  )
        )
      })
    )
}
