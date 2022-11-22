import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearConfiguracionComponent } from './crear-configuracion.component';

describe('CrearConfiguracionComponent', () => {
  let component: CrearConfiguracionComponent;
  let fixture: ComponentFixture<CrearConfiguracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearConfiguracionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearConfiguracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
