import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarZonaComponent } from './editar-zona.component';

describe('EditarZonaComponent', () => {
  let component: EditarZonaComponent;
  let fixture: ComponentFixture<EditarZonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarZonaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarZonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
