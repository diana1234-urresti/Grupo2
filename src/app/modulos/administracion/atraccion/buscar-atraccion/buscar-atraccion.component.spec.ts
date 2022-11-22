import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarAtraccionComponent } from './buscar-atraccion.component';

describe('BuscarAtraccionComponent', () => {
  let component: BuscarAtraccionComponent;
  let fixture: ComponentFixture<BuscarAtraccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarAtraccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarAtraccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
