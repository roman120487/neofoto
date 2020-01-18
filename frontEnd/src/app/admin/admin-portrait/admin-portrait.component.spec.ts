import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPortraitComponent } from './admin-portrait.component';

describe('AdminPortraitComponent', () => {
  let component: AdminPortraitComponent;
  let fixture: ComponentFixture<AdminPortraitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPortraitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPortraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
