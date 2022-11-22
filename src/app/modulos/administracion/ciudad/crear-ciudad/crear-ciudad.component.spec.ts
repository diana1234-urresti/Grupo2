import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCiudadComponent } from './crear-ciudad.component';

describe('CrearCiudadComponent', () => {
  let component: CrearCiudadComponent;
  let fixture: ComponentFixture<CrearCiudadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearCiudadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearCiudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
