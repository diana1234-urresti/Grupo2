import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarConfiguracionComponent } from './eliminar-configuracion.component';

describe('EliminarConfiguracionComponent', () => {
  let component: EliminarConfiguracionComponent;
  let fixture: ComponentFixture<EliminarConfiguracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarConfiguracionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarConfiguracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
