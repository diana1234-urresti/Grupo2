import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarComidaComponent } from './buscar-comida.component';

describe('BuscarComidaComponent', () => {
  let component: BuscarComidaComponent;
  let fixture: ComponentFixture<BuscarComidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarComidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarComidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
