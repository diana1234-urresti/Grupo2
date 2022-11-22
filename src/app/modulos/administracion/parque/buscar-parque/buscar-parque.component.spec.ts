import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarParqueComponent } from './buscar-parque.component';

describe('BuscarParqueComponent', () => {
  let component: BuscarParqueComponent;
  let fixture: ComponentFixture<BuscarParqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarParqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarParqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
