import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearComidaComponent } from './crear-comida.component';

describe('CrearComidaComponent', () => {
  let component: CrearComidaComponent;
  let fixture: ComponentFixture<CrearComidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearComidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearComidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
