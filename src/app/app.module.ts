import {
  BrowserModule
} from '@angular/platform-browser';
import {
  NgModule
} from '@angular/core';
import {
  StoreModule
} from '@ngrx/store'
import {
  AppComponent
} from './app.component';
import {
  reducers
} from './store/reducers/index';
import { NgrxFirstComponent } from './comp/ngrx-first/ngrx-first.component'
import { reducer } from './store/reducers/test.reducer';
@NgModule({
  declarations: [
    AppComponent,
    NgrxFirstComponent
  ],
  imports: [
    BrowserModule,
    //StoreModule.forFeature('tests', reducers)
    StoreModule.forRoot(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
