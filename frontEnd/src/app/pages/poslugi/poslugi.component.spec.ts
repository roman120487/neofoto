import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoslugiComponent } from './poslugi.component';

describe('PoslugiComponent', () => {
  let component: PoslugiComponent;
  let fixture: ComponentFixture<PoslugiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoslugiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoslugiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
