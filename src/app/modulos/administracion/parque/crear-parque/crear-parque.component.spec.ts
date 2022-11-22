import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearParqueComponent } from './crear-parque.component';

describe('CrearParqueComponent', () => {
  let component: CrearParqueComponent;
  let fixture: ComponentFixture<CrearParqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearParqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearParqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
