import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarAtraccionComponent } from './eliminar-atraccion.component';

describe('EliminarAtraccionComponent', () => {
  let component: EliminarAtraccionComponent;
  let fixture: ComponentFixture<EliminarAtraccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarAtraccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarAtraccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
