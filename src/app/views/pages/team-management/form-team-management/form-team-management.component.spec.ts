import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTeamManagementComponent } from './form-team-management.component';

describe('FormTeamManagementComponent', () => {
  let component: FormTeamManagementComponent;
  let fixture: ComponentFixture<FormTeamManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTeamManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTeamManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
