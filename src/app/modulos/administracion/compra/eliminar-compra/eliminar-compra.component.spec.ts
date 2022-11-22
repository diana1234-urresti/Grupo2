import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarCompraComponent } from './eliminar-compra.component';

describe('EliminarCompraComponent', () => {
  let component: EliminarCompraComponent;
  let fixture: ComponentFixture<EliminarCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarCompraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
