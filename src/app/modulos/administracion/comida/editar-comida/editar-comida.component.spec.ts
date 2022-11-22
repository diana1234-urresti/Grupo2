import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarComidaComponent } from './editar-comida.component';

describe('EditarComidaComponent', () => {
  let component: EditarComidaComponent;
  let fixture: ComponentFixture<EditarComidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarComidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarComidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
