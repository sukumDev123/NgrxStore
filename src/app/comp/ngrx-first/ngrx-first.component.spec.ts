import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxFirstComponent } from './ngrx-first.component';

describe('NgrxFirstComponent', () => {
  let component: NgrxFirstComponent;
  let fixture: ComponentFixture<NgrxFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgrxFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
