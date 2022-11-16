import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtakuComponent } from './otaku.component';

describe('OtakuComponent', () => {
  let component: OtakuComponent;
  let fixture: ComponentFixture<OtakuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtakuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtakuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
