import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarParqueComponent } from './editar-parque.component';

describe('EditarParqueComponent', () => {
  let component: EditarParqueComponent;
  let fixture: ComponentFixture<EditarParqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarParqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarParqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
