import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarZonaComponent } from './buscar-zona.component';

describe('BuscarZonaComponent', () => {
  let component: BuscarZonaComponent;
  let fixture: ComponentFixture<BuscarZonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarZonaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarZonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
