import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarPlanComponent } from './eliminar-plan.component';

describe('EliminarPlanComponent', () => {
  let component: EliminarPlanComponent;
  let fixture: ComponentFixture<EliminarPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
