import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarDepartamentoComponent } from './buscar-departamento.component';

describe('BuscarDepartamentoComponent', () => {
  let component: BuscarDepartamentoComponent;
  let fixture: ComponentFixture<BuscarDepartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarDepartamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
