import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeleteRoleComponent } from './add-delete-role.component';

describe('AddDeleteRoleComponent', () => {
  let component: AddDeleteRoleComponent;
  let fixture: ComponentFixture<AddDeleteRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDeleteRoleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddDeleteRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
