import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarParqueComponent } from './eliminar-parque.component';

describe('EliminarParqueComponent', () => {
  let component: EliminarParqueComponent;
  let fixture: ComponentFixture<EliminarParqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarParqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarParqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
