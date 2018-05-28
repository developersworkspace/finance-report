import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalsRouteComponent } from './totals-route.component';

describe('TotalsRouteComponent', () => {
  let component: TotalsRouteComponent;
  let fixture: ComponentFixture<TotalsRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalsRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalsRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
