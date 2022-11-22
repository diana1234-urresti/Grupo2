import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarComidaComponent } from './eliminar-comida.component';

describe('EliminarComidaComponent', () => {
  let component: EliminarComidaComponent;
  let fixture: ComponentFixture<EliminarComidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarComidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarComidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
