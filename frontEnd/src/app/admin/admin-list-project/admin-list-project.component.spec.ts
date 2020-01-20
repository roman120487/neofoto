import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListProjectComponent } from './admin-list-project.component';

describe('AdminListProjectComponent', () => {
  let component: AdminListProjectComponent;
  let fixture: ComponentFixture<AdminListProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminListProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
