import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCiudadComponent } from './editar-ciudad.component';

describe('EditarCiudadComponent', () => {
  let component: EditarCiudadComponent;
  let fixture: ComponentFixture<EditarCiudadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarCiudadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarCiudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
