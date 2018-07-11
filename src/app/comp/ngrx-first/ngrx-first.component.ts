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
import * as action from '../../store/actions/test.action'
import { NameInter, GetNameService } from '../../services/get-name.service';
@Component({
  selector: 'app-ngrx-first',
  templateUrl: './ngrx-first.component.html',
  styleUrls: ['./ngrx-first.component.sass']
})
export class NgrxFirstComponent implements OnInit {
  test$: Observable<NameInter[]>
  constructor(private store: Store < testResucer.ProductTest > , private test : GetNameService ) {}

  ngOnInit() {
    this.test$  = this.store.select(action.TESTADD)
    
    this.store.dispatch({ type : 'TESTADD' })

    //console.log(this.store)
    //this.store.select < any > ('data').subscribe(suc => console.log(suc), err => console.log(err))
    //this.test.get_name().subscribe(suc => console.log(suc) , err => console.log(err))
  }
  add(name) {
    // this.store.dispatch({
    //   type: 'TESTADD',
    //   payloads: name
    // })

  }

}
