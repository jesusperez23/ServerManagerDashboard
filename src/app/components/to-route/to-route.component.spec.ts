import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToRouteComponent } from './to-route.component';

describe('ToRouteComponent', () => {
  let component: ToRouteComponent;
  let fixture: ComponentFixture<ToRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToRouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
