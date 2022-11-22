import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarConfiguracionComponent } from './buscar-configuracion.component';

describe('BuscarConfiguracionComponent', () => {
  let component: BuscarConfiguracionComponent;
  let fixture: ComponentFixture<BuscarConfiguracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarConfiguracionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarConfiguracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
