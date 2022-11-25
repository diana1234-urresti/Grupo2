import { TestBed } from '@angular/core/testing';

import { AtraccionService } from './atraccion.service';

describe('AtraccionService', () => {
  let service: AtraccionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtraccionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
