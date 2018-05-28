import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLoanRouteComponent } from './home-loan-route.component';

describe('HomeLoanRouteComponent', () => {
  let component: HomeLoanRouteComponent;
  let fixture: ComponentFixture<HomeLoanRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLoanRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLoanRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
