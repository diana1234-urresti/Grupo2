import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDepartamentoComponent } from './editar-departamento.component';

describe('EditarDepartamentoComponent', () => {
  let component: EditarDepartamentoComponent;
  let fixture: ComponentFixture<EditarDepartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarDepartamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
