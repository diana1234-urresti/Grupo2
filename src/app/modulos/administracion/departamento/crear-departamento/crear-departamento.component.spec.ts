import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearDepartamentoComponent } from './crear-departamento.component';

describe('CrearDepartamentoComponent', () => {
  let component: CrearDepartamentoComponent;
  let fixture: ComponentFixture<CrearDepartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearDepartamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
