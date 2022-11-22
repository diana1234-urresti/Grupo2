import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPlanComponent } from './editar-plan.component';

describe('EditarPlanComponent', () => {
  let component: EditarPlanComponent;
  let fixture: ComponentFixture<EditarPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
