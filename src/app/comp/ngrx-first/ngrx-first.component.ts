import {
  Component,
  OnInit
} from '@angular/core';
import {
  Store
} from '@ngrx/store'
import {
  Observable
} from 'rxjs'
import * as testResucer from '../../store/reducers'
@Component({
  selector: 'app-ngrx-first',
  templateUrl: './ngrx-first.component.html',
  styleUrls: ['./ngrx-first.component.sass']
})
export class NgrxFirstComponent implements OnInit {

  constructor(private store: Store < testResucer.ProductTest > ) {}

  ngOnInit() {
    //console.log(this.store)
    this.store.select < any > ('data').subscribe(suc => console.log(suc), err => console.log(err))
  }
  add(name) {
    this.store.dispatch({
      type: 'TESTADD',
      payloads: name
    })

  }

}
