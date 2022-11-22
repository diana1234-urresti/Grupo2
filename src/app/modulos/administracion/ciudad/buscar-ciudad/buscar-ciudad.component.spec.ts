import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarCiudadComponent } from './buscar-ciudad.component';

describe('BuscarCiudadComponent', () => {
  let component: BuscarCiudadComponent;
  let fixture: ComponentFixture<BuscarCiudadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarCiudadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarCiudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
