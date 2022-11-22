import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarDepartamentoComponent } from './eliminar-departamento.component';

describe('EliminarDepartamentoComponent', () => {
  let component: EliminarDepartamentoComponent;
  let fixture: ComponentFixture<EliminarDepartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarDepartamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
