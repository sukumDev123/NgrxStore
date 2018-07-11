import {
  Injectable
} from '@angular/core';
import {
  HttpClient
} from  '@angular/common/http';
import {
  Observable
} from '../../../node_modules/rxjs';
export interface NameInter {
  name: string
}
@Injectable({
  providedIn: 'root'
})
export class GetNameService {
  host = 'http://localhost:3000'
  constructor(private _http: HttpClient) {}

  get_name(): Observable < NameInter[] > {
    
    return this._http.get<any>(`${this.host}/test/android`);
  }

}
