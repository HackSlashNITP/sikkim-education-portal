import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdetailComponent } from './tdetail.component';

describe('TdetailComponent', () => {
  let component: TdetailComponent;
  let fixture: ComponentFixture<TdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
