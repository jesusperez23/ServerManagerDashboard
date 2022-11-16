import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerciosbebeterciosComponent } from './perciosbebetercios.component';

describe('PerciosbebeterciosComponent', () => {
  let component: PerciosbebeterciosComponent;
  let fixture: ComponentFixture<PerciosbebeterciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerciosbebeterciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerciosbebeterciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
