import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearZonaComponent } from './crear-zona.component';

describe('CrearZonaComponent', () => {
  let component: CrearZonaComponent;
  let fixture: ComponentFixture<CrearZonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearZonaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearZonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
