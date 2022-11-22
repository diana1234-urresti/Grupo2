import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarPlanComponent } from './buscar-plan.component';

describe('BuscarPlanComponent', () => {
  let component: BuscarPlanComponent;
  let fixture: ComponentFixture<BuscarPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
