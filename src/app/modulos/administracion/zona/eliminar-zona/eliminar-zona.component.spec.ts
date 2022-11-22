import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarZonaComponent } from './eliminar-zona.component';

describe('EliminarZonaComponent', () => {
  let component: EliminarZonaComponent;
  let fixture: ComponentFixture<EliminarZonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarZonaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarZonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
