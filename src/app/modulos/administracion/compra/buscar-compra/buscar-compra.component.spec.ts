import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarCompraComponent } from './buscar-compra.component';

describe('BuscarCompraComponent', () => {
  let component: BuscarCompraComponent;
  let fixture: ComponentFixture<BuscarCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarCompraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
