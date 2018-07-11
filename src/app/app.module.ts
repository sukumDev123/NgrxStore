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
import {
  NgrxFirstComponent
} from './comp/ngrx-first/ngrx-first.component'
import {
  reducer
} from './store/reducers/test.reducer';
import {
  EffectsModule
} from '../../node_modules/@ngrx/effects';
import {
  effects
} from './store/effects';
import {
  HttpClientModule
} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    NgrxFirstComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    //StoreModule.forFeature('tests', reducers)
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
